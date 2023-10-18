const App = {
  data() {
    return {
      counter: 50,
      title: 'Counter',
    };
  }
};

Vue.createApp(App).mount('#root');
