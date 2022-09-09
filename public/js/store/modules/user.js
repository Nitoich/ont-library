export default {
    state: {
        currentUser: undefined
    },
    getters: {
        authUser(state) {
            return state.currentUser;
        }
    },
    actions: {
        UserAuthorize(context) {
            fetch('/api/me', {
                method: 'get',
                credentials: 'include'
            })
                .then(res => {
                    if(res.status == 200) {
                        return res.json();
                    } else {
                        console.log(res)
                    }
                })
                .then(res => {
                    context.state.currentUser = res;
                })
        },
        logout(context) {
            fetch('/logout', {
                credentials: "include"
            })
                .then(res => {
                    console.log(res)
                    context.state.currentUser = undefined;
                })
        }
    }
}

