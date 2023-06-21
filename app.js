Vue.createApp({
    data() {
      return {
        goals: [],
        enteredValue: ''
      };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
      }
    }
  }).mount('#app');

/* const buttonEl = document.querySelector('button')
const inputEl =  document.querySelector('input')
const ulEl =  document.querySelector('ul')

function addGoal(){
    const enteredValue = inputEl.value
    const itemEl = document.createElement('li')
    itemEl.textContent = enteredValue
    ulEl.appendChild(itemEl)
    inputEl.value = ''
}

buttonEl.addEventListener('click', addGoal) */