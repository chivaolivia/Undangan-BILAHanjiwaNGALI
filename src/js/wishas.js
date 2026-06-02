import {
    formattedDate,
    formattedName,
    generateRandomColor,
    generateRandomId,
    getCurrentDateTime,
    renderElement
} from "../utils/helper.js";
import {data} from "../assets/data/data.js?v=4";
import {comentarService} from "../services/comentarService.js";

export const wishas = () => {
    const wishasContainer = document.querySelector('.wishas');
    const [_, form] = wishasContainer.children[2].children;
    const [peopleComentar, ___, containerComentar] = wishasContainer.children[3].children;
    const buttonForm = form.children[6];
    const pageNumber = wishasContainer.querySelector('.page-number');
    const [prevButton, nextButton] = wishasContainer.querySelectorAll('.button-grup button');

    const listItemBank = (data) => (
        `  <figure data-aos="zoom-in" data-aos-duration="1000">
                <img src=${data.icon} alt="bank icon animation">
                <figcaption>No. Rekening ${data.rekening.slice(0, 4)}xxxx <br>A.n ${data.name}</figcaption>
                <button data-rekening=${data.rekening} aria-label="copy rekening">Salin No. Rekening</button>
           </figure>`
    );

    const initialBank = () => {
        const wishasBank = wishasContainer.children[1];
        const [_, __, containerBank] = wishasBank.children;

        renderElement(data.bank, containerBank, listItemBank);

        containerBank.innerHTML += `
        <figure data-aos="zoom-in" data-aos-duration="1000" style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
            <i class='bx bxs-map-alt' style="font-size:2.5rem; color:#c4394a;"></i>
            <figcaption style="text-align:center;">
                <strong>${data.address.name}</strong><br>
                ${data.address.detail}
            </figcaption>
            <a href="${data.address.map}" target="_blank" style="
                border: 1px solid #333;
                padding: 0.4rem 1rem;
                border-radius: 20px;
                font-size: 0.85rem;
                color: #333;
                margin-top: 0.5rem;
            ">
                <i class='bx bxs-map-alt'></i> Lihat Maps
            </a>
        </figure>`;

        containerBank.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', async (e) => {
                const rekening = e.target.dataset.rekening;
                try {
                    await navigator.clipboard.writeText(rekening);
                    button.textContent = 'Berhasil menyalin';
                } catch (error) {
                    console.log(`Error : ${error.message}`);
                } finally {
                    setTimeout(() => {
                        button.textContent = 'Salin No. Rekening';
                    }, 2000);
                }
            });
        });
    };

    const listItemComentar = (data) => {
        const name = formattedName(data.name);
        const newDate = formattedDate(data.date);
        let date = "";

        if (newDate.days < 1) {
            if (newDate.hours < 1) {
                date = `${newDate.minutes} menit yang lalu`;
            } else {
                date = `${newDate.hours} jam, ${newDate.minutes} menit yang lalu`;
            }
        } else {
            date = `${newDate.days} hari, ${newDate.hours} jam yang lalu`;
        }

        const replies = data.replies || [];
        const repliesHTML = replies.map(reply => `
    <article class="reply-item">
        <span class="reply-avatar" style="background-color:${reply.color}">${reply.name.charAt(0).toUpperCase()}</span>
        <span class="reply-content">
            <strong class="reply-name">${formattedName(reply.name)}</strong>
            <span class="reply-message">${reply.message}</span>
        </span>
    </article>
`).join('');

        return `<li data-id="${data.id}" data-aos="zoom-in" data-aos-duration="1000">
            <div class="comentar-avatar" style="background-color: ${data.color}">${data.name.charAt(0).toUpperCase()}</div>
            <div class="comentar-body">
                <h4>${name}</h4>
                <p>${date} <br>${data.status}</p>
                <p>${data.message}</p>
                <div class="comment-actions">
                    <button class="like-btn" data-id="${data.id}" data-likes="${data.likes || 0}">
                        <i class='bx bx-heart'></i><span>${data.likes || 0}</span>
                    </button>
                    <button class="reply-toggle-btn" data-id="${data.id}">
                        <i class='bx bx-reply'></i> Balas
                    </button>
                </div>
                <div class="reply-form" id="reply-form-${data.id}">
                    <input type="text" class="reply-name-input" placeholder="Nama kamu"/>
                    <textarea class="reply-msg-input" placeholder="Tulis balasan..." rows="2"></textarea>
                    <button class="reply-submit-btn" data-id="${data.id}">Kirim</button>
                </div>
                <div class="replies-list">${repliesHTML}</div>
            </div>
        </li>`;
    };

    const bindCommentActions = () => {
        // Like
        containerComentar.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                let likes = parseInt(btn.dataset.likes) + 1;
                btn.dataset.likes = likes;
                btn.querySelector('span').textContent = likes;
                btn.querySelector('i').className = 'bx bxs-heart';
                btn.style.color = '#e74c3c';
                btn.disabled = true;
                try {
                    await fetch(`${data.api}?action=like&id=${id}&likes=${likes}`);
                } catch(e) {}
            });
        });

        // Toggle reply form
        containerComentar.querySelectorAll('.reply-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const replyForm = document.getElementById(`reply-form-${btn.dataset.id}`);
                replyForm.classList.toggle('active');
            });
        });

        // Submit reply
        containerComentar.querySelectorAll('.reply-submit-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                const replyForm = document.getElementById(`reply-form-${id}`);
                const nameVal = replyForm.querySelector('.reply-name-input').value.trim();
                const msgVal = replyForm.querySelector('.reply-msg-input').value.trim();
                if (!nameVal || !msgVal) return;

                btn.textContent = '...';
                btn.disabled = true;

                const reply = {
                    name: nameVal,
                    message: msgVal,
                    date: getCurrentDateTime(),
                    color: generateRandomColor()
                };

                try {
                    await comentarService.addReply(id, reply);
                    const repliesList = replyForm.nextElementSibling;
repliesList.innerHTML += `
    <article class="reply-item">
        <span class="reply-avatar" style="background-color:${reply.color}">${reply.name.charAt(0).toUpperCase()}</span>
        <span class="reply-content">
            <strong class="reply-name">${formattedName(reply.name)}</strong>
            <span class="reply-message">${reply.message}</span>
        </span>
    </article>`;
                    replyForm.querySelector('.reply-name-input').value = '';
                    replyForm.querySelector('.reply-msg-input').value = '';
                    replyForm.classList.remove('active');
                } catch(e) {
                    console.log(e);
                } finally {
                    btn.textContent = 'Kirim';
                    btn.disabled = false;
                }
            });
        });
    };

    let lengthComentar;

    const initialComentar = async () => {
        containerComentar.innerHTML = `<h1 style="font-size: 1rem; margin: auto">Loading...</h1>`;
        peopleComentar.textContent = '...';
        pageNumber.textContent = '..';

        try {
            const response = await comentarService.getComentar();
            const {comentar} = response;
            lengthComentar = comentar.length;
            comentar.reverse();

            peopleComentar.textContent = comentar.length > 0
                ? `${comentar.length} Orang telah mengucapkan`
                : `Belum ada yang mengucapkan`;

            pageNumber.textContent = '1';
            renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
            bindCommentActions();
        } catch (error) {
            return `Error : ${error.message}`;
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        buttonForm.textContent = 'Loading...';
        const comentar = {
            id: generateRandomId(),
            name: e.target.name.value,
            status: e.target.status.value === 'y' ? 'Hadir' : 'Tidak Hadir',
            message: e.target.message.value,
            date: getCurrentDateTime(),
            color: generateRandomColor(),
        };
        try {
            const response = await comentarService.getComentar();
            await comentarService.addComentar(comentar);
            lengthComentar = response.comentar.length;
            peopleComentar.textContent = `${++response.comentar.length} Orang telah mengucapkan`;
            containerComentar.insertAdjacentHTML('afterbegin', listItemComentar(comentar));
            bindCommentActions();
        } catch (error) {
            return `Error : ${error.message}`;
        } finally {
            buttonForm.textContent = 'Kirim';
            form.reset();
        }
    });

    let currentPage = 1;
    let itemsPerPage = 4;
    let startIndex = 0;
    let endIndex = itemsPerPage;

    const updatePageContent = async () => {
        containerComentar.innerHTML = '<h1 style="font-size: 1rem; margin: auto">Loading...</h1>';
        pageNumber.textContent = '..';
        prevButton.disabled = true;
        nextButton.disabled = true;
        try {
            const response = await comentarService.getComentar();
            const {comentar} = response;
            comentar.reverse();
            renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
            bindCommentActions();
            pageNumber.textContent = currentPage.toString();
        } catch (error) {
            console.log(error);
        } finally {
            prevButton.disabled = false;
            nextButton.disabled = false;
        }
    };

    nextButton.addEventListener('click', async () => {
        if (endIndex <= lengthComentar) {
            currentPage++;
            startIndex = (currentPage - 1) * itemsPerPage;
            endIndex = startIndex + itemsPerPage;
            await updatePageContent();
        }
    });

    prevButton.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage--;
            startIndex = (currentPage - 1) * itemsPerPage;
            endIndex = startIndex + itemsPerPage;
            await updatePageContent();
        }
    });

    initialComentar().then();
    initialBank();
};
