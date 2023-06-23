Vue.createApp({
    data() {
        return {
            tasks: [],
            taskItem: '',
            isShowList: true,
            
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskItem)
        },
        showHideList() {
            this.isShowList = !this.isShowList
        }
    },
    computed: {
        caption() {
           return this.isShowList ? 'Hide' : 'Show List'
        }
    }

}).mount('#assignment')