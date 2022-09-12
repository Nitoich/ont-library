import Notice from "../../lib/Notice.js";

export default {
    state: {
        lectures: []
    },
    getters: {
        lectures(state) {
            return state.lectures;
        }
    },
    actions: {
        getLectures(context) {
            fetch('/api/lecture', {
                credentials: 'include'
            })
                .then(res => res.json())
                .then(res => {
                    context.state.lectures = res;
                    console.log(context.state.lectures)
                })
        },
        addLecture(context, title) {
            fetch('/api/lecture', {
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    _token: window.csrftoken
                })
            })
                .then(res => {
                    if(res.status == 201) {
                        Notice.createNotice({
                            title: 'Успех!',
                            body: 'Новая лекция создана!'
                        })
                        context.dispatch('getLectures');
                        return res.json();
                    } else {
                        console.error(res)
                    }
                })
                .then(res => {
                    console.log(res)
                })
        }
    }
}
