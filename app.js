const register = ()=>{
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log('promesa devuelta ', user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });

}