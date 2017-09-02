// vue instance
var one = new Vue({
  el: '#app-one',
  data: {
    title: 'Vue App One'
  },
  methods: {

  },
  computed: {
    greet: function () {
      return 'Hello from app one';
    }
  }
});

var two = new Vue({
  el: '#app-two',
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeTitle: function () {
      one.title === 'Vue App One' ? one.title = 'Vue App New' : one.title = 'Vue App One';
    }
  },
  computed: {
    greet: function () {
      return 'Hello from app two';
    }
  }
});
