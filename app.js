new Vue({
  el: '#app',
  data: {
    output: ''
  },
  methods: {
    readRefs: function () {

      this.output = this.$refs.one.value;

      this.$refs.one.value = '';
      this.$refs.two.value = '';

      console.log(this.$refs.test.innerText);
    }
  }
});
