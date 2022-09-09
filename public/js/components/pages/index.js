export default {
    name: 'IndexPage',
    mounted() {
        console.log(this.$store.getters.authUser);
    },
    template: `
<div>
    <h1>Index</h1>
</div>
`
}

