// vue instance
new Vue({
  el: '#app',
  data: {
    name: 'Brandon',
    age: 29,
    job: 'Front End Web Developer',
    website: 'http://www.brandnpatterson.com',
    websiteTag: '<a href="http://www.brandnpatterson.com">My Portfolio</a>',
    x: 0,
    y: 0
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
    }
  }
});
