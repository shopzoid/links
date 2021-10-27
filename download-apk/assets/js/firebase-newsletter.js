// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAsGWZNuUvCZTzb6UwTRb7BfT3sbrJuTQg",
  authDomain: "mexa-aplikasi.firebaseapp.com",
  databaseURL: "https://mexa-aplikasi-default-rtdb.firebaseio.com",
  projectId: "mexa-aplikasi",
  storageBucket: "mexa-aplikasi.appspot.com",
  messagingSenderId: "337510082503",
  appId: "1:337510082503:web:79436729e844f9d6a75be2",
  measurementId: "G-ZRH82E69VR"
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