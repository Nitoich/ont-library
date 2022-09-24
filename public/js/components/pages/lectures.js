import SmartTable from "../SmartTable.js";

export default {
    name: 'Lecture Page',
    data() {
        return {
            nameNewLecture: '',
            headers: {
                id: 'ИД',
                title: 'Название'
            },
            selectedLectures: [],
            actionsPanel: [
                {
                    title: 'Удалить',
                    cb: (row) => {
                        this.selectedLectures.forEach((lecture, index) => {
                            if(lecture.id == row.id) {
                                this.selectedLectures.splice(index, 1);
                            }
                        })
                        this.$store.dispatch('deleteLecture', row);
                    }
                },
                {
                    title: 'Удалить все выбранные',
                    cb: () => {
                        this.selectedLectures.forEach(lecture => {
                            this.$store.dispatch('deleteLecture', lecture)
                        })
                        this.selectedLectures = [];
                    }
                }
            ]
        }
    },
    created() {
        this.$store.dispatch('getLectures');
    },
    components: {
        SmartTable
    },
    template: `
<div>
    <div class="add_new_lecture">
        <input type="text" v-model="this.nameNewLecture">
        <button @click="this.$store.dispatch('addLecture', this.nameNewLecture)">Create</button>
    </div>
    <div class="lecture__list">
        <smart-table
          :columns="this.headers"
          :rows="this.$store.getters.lectures"
          :action-panel-row="this.actionsPanel"
          v-model="this.selectedLectures"
        />
    </div>
</div>
    `
}
