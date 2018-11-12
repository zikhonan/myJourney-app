var app =new Vue({
    el:'#app',
    data:{
        username:'',
        password:'',
        usernameError: false,
        passwordError: false,
        usernameErrorMessage:''
    },
    methods: {
        enter: function() {
        //check if passowrd is longer than 6 digits.
        this.usernameError =false
        this.passwordError =false
        this.usernameErrorMessage =''
        this.passwordErrorMessage =''

        if(this.password.length < 6){ 
            this.passwordError =true
            this.passwordErrorMessage ='password is too short'
            
        }
        
        if(this.username.length <3) {
            this.usernameError = true
            this.usernameErrorMessage = 'Username is too short'
            //alert('You have entered less than 3 characters for username');
        }
        if(!this.username.includes('0')) {
            this.usernameError = true
            this.usernameErrorMessage ='Username must be a vilid email address'
        }
    }
    }

})
