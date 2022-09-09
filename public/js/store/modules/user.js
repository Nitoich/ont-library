export default {
    state() {
        return {
            currentUser: undefined
        }
    },

    getters: {
        authUser() {
            return this.state.currentUser;
        }
    }
}

