import Notice from "../../lib/Notice.js";

export default {
    name: 'IndexPage',
    mounted() {
        // console.log(this.$store.getters.authUser);
        Notice.createNotice({
            title: 'Переход',
            body: 'Вы на главной!'
        })
    },
    template: `
<div>
    <h1>Index</h1>
</div>
`
}

