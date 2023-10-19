const App = {
  data() {
    return {
      title: 'Notes list',
      placeholderString: 'Enter note title',
      inputValue: '',
      notes: [],
    };
  },
  methods: {
    addNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
  computed: {
    doubleCount() {
      return this.notes.length * 2;
    }
  },
  watch: {

  },
};

Vue.createApp(App).mount('#root');
