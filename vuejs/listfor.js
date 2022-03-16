const ListRendering = {
  data() {
    return {
      todos:[
        { text: 'Fix Bed' },
        { text: 'Hygiene' },
        { text: 'Study' },
        { text: 'Stream' },
        { text: 'Sleep' }
     ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')