// Initialize Firebase

$(function () {
    var config = {
      apiKey: "AIzaSyCz2d-MrDktVr2H31KZ5BQl0P6A0nEeNd8",
      authDomain: "contact-form-portfolio-236c6.firebaseapp.com",
      databaseURL: "https://contact-form-portfolio-236c6.firebaseio.com",
      projectId: "contact-form-portfolio-236c6",
      storageBucket: "contact-form-portfolio-236c6.appspot.com",
      messagingSenderId: "820248568788"
    };
    firebase.initializeApp(config);
    $("#submit").on('click', function(e){
      console.log(e)
      console.log('fired')
        setTimeout(() => {
          
     
        e.preventDefault(); // no reload
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        firebase.auth().signInAnonymously()
        .then(user => {
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;


            // create todays date ----
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!

            var yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd;
            } 
            if(mm<10){
                mm='0'+mm;
            } 
            var today = dd+'/'+mm+'/'+yyyy;
            // -------------------------
            
                firebase.database().ref('messages/' + uid).set({
                  username: name,
                  email: email,
                  message: message,
                  timestamp: today
                });
      
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');

        })
        .catch(function(error) {
              // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
              // ...
        });
      }, 500);
    });

});
