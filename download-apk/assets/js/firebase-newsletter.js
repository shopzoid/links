// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDTBMoiWOrQnU8PImOAbtVSR8FcF8ChpfI",
  authDomain: "shopzoid-daftar.firebaseapp.com",
  databaseURL: "https://shopzoid-daftar-default-rtdb.firebaseio.com",
  projectId: "shopzoid-daftar",
  storageBucket: "shopzoid-daftar.appspot.com",
  messagingSenderId: "881147393125",
  appId: "1:881147393125:web:5e03ec46dd578c8a00c28c",
  measurementId: "G-H19Q4CSSGL"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('NewsLetter');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  // Save message
  saveMessage(email);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email,) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
  });
}