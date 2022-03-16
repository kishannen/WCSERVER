const app = Vue.createApp({
  // Create functions, data
  //template: "<h2> This is my template...</h2>"

  data(){
    return {
      title: 'The Song',
      author: 'Kisses Shannen Reyes',
      age: 20
    }
  }
});

app.mount('#app')