// Initialize Firebase
$(function () {

		  
    var config = {
        apiKey: "AIzaSyBanG2gcAOS-HCwB-WRvfVb7O0Ep5vgiwg",
        authDomain: "contact-form-portfoilio.firebaseapp.com",
        databaseURL: "https://contact-form-portfoilio.firebaseio.com",
        projectId: "contact-form-portfoilio",
        storageBucket: "contact-form-portfoilio.appspot.com",
        messagingSenderId: "450720183164"
    };
    firebase.initializeApp(config);
    $('.js-form').on('submit', e => {
        e.preventDefault(); // no reload
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        console.log(email, name, message);
        firebase.auth().signInAnonymously()
        .then(user => {
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            console.log(uid)

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
            
                firebase.database().ref('users/' + uid).set({
                  username: name,
                  email: email,
                  message: message,
                  timestamp: today
                });
            alert("Thank you for your message! I will get back to you A.S.A.P.")  
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
        
    });
  });