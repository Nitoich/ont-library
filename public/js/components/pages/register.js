export default {
    name: 'Login Page',
    data() {
        return {
            sendData: {
                login: '',
                password: '',
                first_name: '',
                last_name: '',
                _token: window.csrftoken
            }
        }
    },
    methods: {
        register() {
            fetch('/register', {
                method: 'post',
                body: JSON.stringify(this.sendData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.status == 201) {
                    this.$router.push('/login');
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
          <input type="text" v-model="this.sendData.first_name" placeholder="first_name">
          <input type="text" v-model="this.sendData.last_name" placeholder="last_name">
          <button @click="this.register">Register</button>
        </div>
    `
}

