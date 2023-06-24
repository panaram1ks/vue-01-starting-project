function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      if (this.playerHealth < 0) {
        // Player lost
      }
    },
    attackPlayer() {
      const attackValue = getRandomValue(12, 8);
      this.playerHealth -= attackValue;
    },
    spetialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
  computed: {
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackMonster();
    },
  },
  watch: {
    playerHealt(oldValue){
      if (oldValue <= 0 && this.monsterHealth <= 0){
        // A draw
        this.winner = 'draw'
      } else if (value <= 0) {
        // Player lost
        this.winner = 'monster'
      } else {
        // Player won
      }
    },
    monsterHealth(oldValue){
      if(oldValue <= 0 && this.playerHealt <= 0){
        // A draw
        this.winner = 'draw'
      } else if (oldValue <= 0) {
        // Monster lost
        this.winner = 'player'
      }
    }
  }
});

app.mount("#game");
