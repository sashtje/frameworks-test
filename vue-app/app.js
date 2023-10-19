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
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  }
};

Vue.createApp(App).mount('#root');
