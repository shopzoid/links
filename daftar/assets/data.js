// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyA6in5d89RIbzA0DzHvjxREC4fBPh_8Ngw",
  authDomain: "shopzoid-id.firebaseapp.com",
  databaseURL: "https://shopzoid-id-default-rtdb.firebaseio.com",
  projectId: "shopzoid-id",
  storageBucket: "shopzoid-id.appspot.com",
  messagingSenderId: "839294207212",
  appId: "1:839294207212:web:d59868050d01bc8e6791c9",
  measurementId: "G-M8FEBWLE57"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Daftar-ShopZoid');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
    setTimeout(function(){window.location.href = "terkirim.html" ;}, 3000);
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var instagram = getInputVal('instagram');
  
    // Save message
    saveMessage(name, email, phone, instagram);
  
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
  function saveMessage(name, email, phone, instagram) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      instagram: instagram,
    });
  }