var app =new Vue({
    el:'#app',
    data:{
        username:'',
        password:'',
        usernameError: false,
        passwordError: false,
        usernameErrorMessage:[]
    },
    methods: {
        enter: function() {
        //check if passowrd is longer than 6 digits.
        this.usernameError =false
        this.passwordError =false
        this.usernameErrorMessage =[]        

        if(this.password.length < 6){ 
            this.passwordError =true
            
        }
        
        if(this.username.length <3) {
            this.usernameError = true
            this.usernameErrorMessage.push ({msg: 'Username is too short' ,date: Date.now()})
            //alert('You have entered less than 3 characters for username');
        }
        if(!this.username.includes('0')) {
            this.usernameError = true
            this.usernameErrorMessage.push ({msg:'Username must be a vilid email address',date: Date.now()})
        }
    }
    }

})
