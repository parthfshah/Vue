const app = Vue.createApp({
  data() {
    return {
      firstName: "Sam",
      email: "sam@sam.com",
      phone: "999 - 000 - 1122",
      gender: "male",
      img: "https://randomuser.me/api/portraits/men/38.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      console.log(results);
      this.firstName = results[0].name.first;
      this.email = results[0].email;
      this.phone = results[0].phone;
      this.img = results[0].picture.large;
      this.gender = results[0].gender;
    },
  },
});

app.mount("#app");
