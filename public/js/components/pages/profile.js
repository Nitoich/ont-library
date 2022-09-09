export default {
    name: 'Profile',
    data() {
        return {
            user: this.$store.getters.authUser
        }
    },
    mounted() {

    },
    template: `
    <div v-if="this.$store.getters.authUser">
      <p>{{ this.$store.getters.authUser.last_name }}</p>
      <p>{{ this.$store.getters.authUser.first_name }}</p>
      <p>{{ this.$store.getters.authUser.login }}</p>
    </div>
    `
}
