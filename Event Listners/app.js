const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    remove() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("submitted");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});
app.mount("#events");
