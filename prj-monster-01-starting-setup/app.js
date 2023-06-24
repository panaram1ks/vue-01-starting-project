function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(12, 8);
      this.playerHealth -= attackValue;
    },
    //   computed: {
    //     monsterBarStyles() {
    //       return { width: this.monsterHealth + "%" };
    //     },
    //     playerBarStyles() {
    //       return { width: this.playerHealth + "%" };
    //     },
    //   },
  },
});

app.mount("#game");
