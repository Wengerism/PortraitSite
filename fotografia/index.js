

// YOUTUBE ACCORDION

// Create a click event for each accoridon that we have
// As we don't know how many accordions we have, we need to loop through
var accordions = 
document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    var content = this.nextElementSibling;
// check the vaue of the max-height, as this indicates if it's open or closed - if max-height is set to 0 we know it's closed, if set to something more than 0 we know it's open
// if maxHeight is set to 0 it will return null or falsey
    if (content.style.maxHeight) {
// acccordion is open, we need to close it
      content.style.maxHeight = null;
    } else {
      // accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
    }

  }
}

// CONTACT to Formspree.io - shouldn't need this now as formspree has addressed problem re routing to formspree page (i.e. can prevent routing to formspree page via html page)

// var message = "";

// $("#sendMessage").on("click", function() {
//     message = $("#contactform").serialize();
//     $.ajax({
//         url: "//formspree.io/dynamicrealities@gmail.com", 
//         method: "POST",
//         data: {message: message},
//         dataType: "json"
//     });
//     alert('Thanks for the email, we\'ll be in touch promptly.');
//     return false;
// });


// SMOOTH SCROLL

// $(document).ready(function(){
//   $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();

//       var target = this.hash;
//       var $target = $(target);
      // Scroll but don't show hash in browser
//       $('html, body').animate({
//           'scrollTop': $target.offset().top
//       }, 2300, 'swing');
//   });
// });

// -----------------

$(document).ready(function(){
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      // Scroll but don't show hash in browser
      $('html, body').animate({
          'scrollTop': $target.offset().top
      }, 2300, 'swing');

      
  });
});


// GALLERY MODAL
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
// var captionText = document.getElementById("caption"); only need this if wanting to dsiplay a caption from the alt tag
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    // captionText.innerHTML = this.alt;   (only need this is wanting to dsiplay a caption from the alt tag)
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// NAVBAR ON SCROLL with transition

// $(window).on("scroll", function() {
//   if($(window).scrollTop()) {
//       $('nav').addClass('black');
//   }
//   else {
//       $('nav').removeClass('black');
//   }
// });

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
      $('nav').addClass('black');
  }
  else {
      $('nav').removeClass('black');
  }

  setTimeout(function() {
    $('nav').removeClass('black');
    }, 2000);

});


//  FAQ ACCORDION 

$('.toggle').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } 
  else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});