Vue.component('greeting', {
  template: '<p>Hey there, I am a {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'Mario'
    }
  }
});

var one = new Vue({
  el: '#app-one',
  data: {

  },
  methods: {

  },
  computed: {

  }
});

var two = new Vue({
  el: '#app-two',
  data: {

  },
  methods: {

  },
  computed: {

  }
});
