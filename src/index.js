import "./style.css";
import "./home/style.css";
import "./register/style.css";
import "./contact/style.css";

import "./resources/logo.webp";

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
