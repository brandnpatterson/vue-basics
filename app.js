// vue instance
new Vue({
  el: '#app',
  data: {
    name: 'Brandon',
    age: 29,
    job: 'Front End Web Developer',
    website: 'http://www.brandnpatterson.com',
    websiteTag: '<a href="http://www.brandnpatterson.com">My Portfolio</a>'
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name + '!';
    }
  }
});
