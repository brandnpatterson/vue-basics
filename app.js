// vue instance
new Vue({
  el: '#app',
  data: {
    name: 'Brandon',
    age: 29,
    job: 'Front End Web Developer',
    website: 'http://www.brandnpatterson.com',
    websiteTag: '<a href="http://www.brandnpatterson.com">My Portfolio</a>',
    a: 0,
    b: 0,
    x: 0,
    y: 0,
    available: false,
    nearby: false,
    error: false,
    success: false
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name + '!';
    },
    add: function (inc) {
      return this.age += inc;
    },
    subtract: function (dec) {
     return this.age -= dec;
    },
    updateXY: function (e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    altLink: function () {
      alert('You clicked me!');
    },
    log: function (event, element) {
      console.log(event)
      element = event.target.value;
    }
  },
  computed: {
    addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
