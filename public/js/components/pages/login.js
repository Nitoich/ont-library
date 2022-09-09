export default {
    name: 'Login Page',
    data() {
        return {
            sendData: {
                login: '',
                password: '',
                _token: window.csrftoken
            }
        }
    },
    methods: {
        login() {
            fetch('/login', {
                method: 'post',
                body: JSON.stringify(this.sendData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.status == 200) {
                    this.$store.dispatch('UserAuthorize');
                    this.$router.push('/');
                } else {
                    console.log(res)
                }
            })
        }
    },
    template: `
        <div>
          <input type="text" v-model="this.sendData.login" placeholder="login">
          <input type="password" v-model="this.sendData.password" placeholder="password">
          <button @click="this.login">Login</button>
        </div>
    `
}
