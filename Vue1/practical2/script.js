function generateGuess(){
  return Math.round(Math.random()*10)
}
const timerValue = 20
const app = new Vue({
    el: "#app",
    data: {
      computerGuess:generateGuess(),
      timer:timerValue,
      guess:0,
      errors: [],
      showModal:false,
      failure:true,
      success:false,
      customMessage:true
    },
    methods:{
      enter: function(){
        if(Number(this.$data.guess) === this.computerGuess){
         this.success
          this.computerGuess = generateGuess()
          this.timerValue
        }
        else{
          this.errors.push(true)
         if(this.errors.length >= 3){
           this.failure
           this.errors =[]
           this.timerValue
          this.computerGuess = generateGuess()
   
         }
        }

      }
    }
  })
  function countDown(){
    app.timer--
    if(app.timer === 0){
      app.showModal = true
      app.customMessage = 'The correct value was'+this.computerGuess
      alert('Time Up! You failed')
      app.timer = timerValue
    }
   
  }
  setInterval(countDown,1000)