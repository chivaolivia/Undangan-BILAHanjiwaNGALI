import {data} from "../assets/data/data.js";

export const story = () => {
    const storyTimeline = document.querySelector('.story_timeline');

    if (!storyTimeline) return;

    data.story.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'story_item';
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-duration', '800');
        div.setAttribute('data-aos-delay', `${index * 100}`);
        div.innerHTML = `
            <div class="story_content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>`;
        storyTimeline.appendChild(div);
    });
};
