function showSignUp() {
  // Hide login form
  var loginElements = document.getElementById("loginElements");
  loginElements.setAttribute('style', 'display:none');

  // Display signup form
  var signupElements = document.getElementById("signupElements");
  signupElements.setAttribute('style', '');

  // Change login tab inactive
  var loginTab = document.getElementById("loginTab");
  loginTab.setAttribute('class','inactive underlineHover');

  // Change sign up tab active
  var signUpTab = document.getElementById("signUpTab");
  signUpTab.setAttribute('class','active');

  //Remove forgot password footer
  var formFooter = document.getElementById("formFooter");
  formFooter.setAttribute('style', 'display:none');
}

function showSignIn() {
    // Hide signup form
    var signupElements = document.getElementById("signupElements");
    signupElements.setAttribute('style', 'display:none');
  
    // Display login form
    var loginElements = document.getElementById("loginElements");
    loginElements.setAttribute('style', '');

    // Change signup tab tab inactive
    var signUpTab= document.getElementById("signUpTab");
    signUpTab.setAttribute('class','inactive underlineHover');
  
    var loginTab= document.getElementById("loginTab");
    loginTab.setAttribute('class','active');

    //Display forgot password footer
    var formFooter = document.getElementById("formFooter");
    formFooter.setAttribute('style', '');
}

//Add visibility option
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#password1');
const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#password2');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});

togglePassword1.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});

togglePassword2.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});
