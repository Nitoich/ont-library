export default {
    name: 'Lecture Page',
    data() {
        return {
            nameNewLecture: ''
        }
    },
    created() {
        this.$store.dispatch('getLectures');
    },
    template: `
<div>
    <div class="add_new_lecture">
        <input type="text" v-model="this.nameNewLecture">
        <button @click="this.$store.dispatch('addLecture', this.nameNewLecture)">Create</button>
    </div>
    <div class="lecture__list">
        <div class="lecture__item" v-for="lecture in this.$store.getters.lectures">
            <p>{{ lecture.title }}</p>
        </div>
    </div>
</div>
    `
}
