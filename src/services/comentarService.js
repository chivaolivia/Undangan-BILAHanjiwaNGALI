import {data} from "../assets/data/data.js?v=4";

export const comentarService = {
    getComentar: async function () {
        try {
            const response = await fetch(data.api);
            return await response.json();
        } catch (error) {
            return {error: error && error.message};
        }
    },

    addComentar: async function ({id, name, status, message, date, color}) {
        const comentar = { id, name, status, message, date, color };
        try {
            await fetch(data.api, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comentar),
            });
            return { status: 200 };
        } catch (error) {
            console.error('Post error:', error);
            return {error: error.message};
        }
    },

    addReply: async function (comentarId, reply) {
        try {
            await fetch(`${data.api}?action=addReply&id=${comentarId}`, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reply),
            });
            return { status: 200 };
        } catch (error) {
            console.error('Reply error:', error);
            return {error: error.message};
        }
    },
};
