import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJlMQv7Nz1jlPEPTA0Lv1-beekeJQVgXo",
  authDomain: "khariansportsfest-fde2f.firebaseapp.com",
  databaseURL:
    "https://khariansportsfest-fde2f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "khariansportsfest-fde2f",
  storageBucket: "khariansportsfest-fde2f.appspot.com",
  messagingSenderId: "563033377764",
  appId: "1:563033377764:web:fbd732594d4786ebc0d5f1",
  measurementId: "G-WND8F3DVS6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

$(function () {
  $(".toggle").on("click", function () {
    if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
      $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
    } else {
      $(".menu").addClass("active");
      $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
    }
  });
});
