function menuBar() {
    var container = document.getElementById('navigation');
    var blur = document.getElementById('blur');
    if (container.style.display == 'none') {
        container.style.display = 'flex';
        blur.style.display = 'block';
    } else {
        container.style.display = 'none';
        blur.style.display = 'none';
    }
    
}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('navigation');
    var blur = document.getElementById('blur');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
        blur.style.display = 'none';
    }
});



function toggleSearchBar() {
    var header = document.getElementById("mobile_header");
    var searchbar = document.getElementById("searchbar");
    if (searchbar.style.display === "none") {
        header.style.filter = "blur(5px)";
        searchbar.style.display = "flex";
    } else {
        header.style.filter = "blur(0px)";
        searchbar.style.display = "none";
    }
}

document.addEventListener('mouseup', function(e) {
    var header = document.getElementById("mobile_header");
    var searchbar = document.getElementById("searchbar");
    if (!searchbar.contains(e.target)) {
        header.style.filter = "blur(0px)";
        searchbar.style.display = "none";
    }
});











var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}

var prevButton = document.querySelector("#prevbtn");
prevButton.addEventListener("click", function() {
  showSlides(slideIndex -= 1);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(function() {showSlides(slideIndex += 1)}, 3000);
});

var nextButton = document.querySelector("#nextbtn");
nextButton.addEventListener("click", function() {
  showSlides(slideIndex += 1);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(function() {showSlides(slideIndex += 1)}, 3000);
});

var slideTimer = setTimeout(function() {showSlides(slideIndex += 1)}, 3000);















function profileEnable() {
document.querySelectorAll('input[disabled]').forEach(input => input.removeAttribute('disabled'));
document.querySelector("textarea[name='address']").disabled = false;
document.getElementById("profilesave").style.display = "block";
document.getElementById("profilecancel").style.display = "block";
document.getElementById("profileedit").style.display = "none";
document.getElementById("resetpassword").style.display = "none";
}



