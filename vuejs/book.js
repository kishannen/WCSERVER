const books = Vue.createApp({
  data(){
    return{
      showBooks: true,
      btitle: 'The Song',
      bauthor: 'Kisses Shannen Reyes',
      year: 2022,
    }
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
});

books.mount('#books')