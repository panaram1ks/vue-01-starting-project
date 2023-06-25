const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "98765 5678 991",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

// Create component
app.component("friend-content", {
  template: `
    <li :key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
        </li> 
    `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount("#app");
