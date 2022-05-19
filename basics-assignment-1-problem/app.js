Vue.createApp({
  data() {
    return {
      name: "myName",
      age: 30,
      randomNum: this.randomNumber(),
      imgsrc: "https://www.w3schools.com/images/lamp.jpg",
    };
  },
  methods: {
    randomNumber() {
      return Math.round(Math.random());
    },
  },
}).mount("#assignment");
