var app = new Vue ({
    el:'#app',
    data: {
        number: 0,
        guess:0
        
    },
    methods: {
        compareNumber: function() {
            alert('the number is :'+ this.$data.number +' '+ 'the guess is:' + this.guess)
        }
    }

})

app.guess = Math.round(Math.random() * 10)

console.log(app.guess)

