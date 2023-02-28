import { initializeApp } from "firebase/app";
import { getDatabase, database } from "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCe1WkG0ztL_vk2iWDfxmX3lBHSmV6XcOY",
	authDomain: "contactform-703af.firebaseapp.com",
	databaseURL: "https://contactform-703af-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "contactform-703af",
	storageBucket: "contactform-703af.appspot.com",
	messagingSenderId: "200053524883",
	appId: "1:200053524883:web:6e4812bb0f8e872e6ec066"};

  firebase.initializeApp(config);
  
  // Reference messages collection
  var app = initializeApp(firebaseConfig);
  var db = getDatabase(app);
  var messagesRef = firebase.database()('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
	
	e.preventDefault();
  
	//Get value
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');
  
	// Save message
	saveMessage(name, company, email, phone, message);
  
	// Show alert
	document.querySelector('.alert').style.display = 'block';
  
	// Hide alert after 3 seconds
	setTimeout(function(){
	  document.querySelector('.alert').style.display = 'none';
	},3000);
  
	// Clear form
	document.getElementById('contactForm').reset();
	
  }
  
  // Function to get form value
  function getInputVal(id){
	return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
	  name: name,
	  company: company,
	  email: email,
	  phone: phone,
	  message: message
	});
  }
  