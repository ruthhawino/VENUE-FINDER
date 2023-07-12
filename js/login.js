// $("#signin").click(function () {
    
//     let email = $("input#email").val();
//     let errorLabel = $("input#errorMessage").val();
//     let errorLabel1 = $("input#errorMessage1").val();
//     let password = $("input#password").val();


   
//   });

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
//   function onChange() {
//       const password = document.querySelector('input[name=psw]');      
//       const confirm = document.querySelector('input[name=psw-repeat]');
//       if (confirm.value === password.value) {
//         confirm.setCustomValidity('');
//       } else {
//         confirm.setCustomValidity('Passwords do not match');
//       }
//     }
$(document).ready(function(){

  

    $("#hide").click(function(){
      $("#show").slideToggle()
    })
})