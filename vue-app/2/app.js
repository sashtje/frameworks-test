const App = {
  data: () => ({
    myHtml: '<h1>Vue 3 App</h1>',
    title: 'Title',
    user: {
      firstName: 'Vasya',
      lastName: 'Ivanov',
      age: 20,
    },
    items: [1, 2, 3, 4, 5]
  }),
  methods: {
    stopPropagation(event) {
      event.stopPropagation();
    },
    addItem(event) {
      this.items.unshift(this.$refs.noteInput.value);
      this.$refs.noteInput.value = '';
    },
    log(item) {
      console.log(item);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(item => item % 2 === 0);
    }
  }
};

Vue.createApp(App).mount('#root');
