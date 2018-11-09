function generateGuess() {
    return Math.round(Math.random() *10)
}
const timeValue =20
const app = new Vue({

    el: "#app",
    data: {
      timer: 20,
      computerGuess: generateGuess (),
      guessing: 0,
      errors: [ ],
      showModal: true,
      failure: false,
      success: false,
    },
    methods: {
        enter: function () {
            if(Number(this.guessing) === this.computerGuess) {
                alert('Booom!!You are right')                
            }else{
                this.errors.push(true)
                //limits the number of errors to 3
                if(this.errors.length >=3) {
                alert('You failed brew')
                //mmake sure page reloads by its self
                //reset error
                this.errors =[]    
                //reset timer
                this.timer = 20
                //reset guess
                this.computerGuess =generateGuess ()
                }                
            }           
        }
    }
  })

  function countDown() {
      app.timer--
      if(app.timer == 0){
          app.showModal =true
          app.failure = true
          app.success =false
          app.timer =timeValue
          app.customMessage =      

      }
  }

  setInterval(countDown, 1000)