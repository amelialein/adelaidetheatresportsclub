let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}




// Load Fixture Page
const loadFixture = () => {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.stats').style.display = 'none';
  document.querySelector('.interviews').style.display = 'none';
  document.querySelector('.join').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.fixture').style.display = 'flex';
  };

document.querySelector('.navButtonFix').onclick = loadFixture;

// Load Stats Page
const loadStats = () => {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.fixture').style.display = 'none';
  document.querySelector('.interviews').style.display = 'none';
  document.querySelector('.join').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.stats').style.display = 'flex';
  };

document.querySelector('.navButtonStats').onclick = loadStats;


// Load Interviews Page
const loadInterviews = () => {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.fixture').style.display = 'none';
  document.querySelector('.stats').style.display = 'none';
  document.querySelector('.join').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.interviews').style.display = 'flex';
  };

document.querySelector('.navButtonInt').onclick = loadInterviews;

// Load Join Page
const loadJoin = () => {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.fixture').style.display = 'none';
  document.querySelector('.stats').style.display = 'none';
  document.querySelector('.interviews').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.join').style.display = 'flex';
  };

document.querySelector('.navButtonJoin').onclick = loadJoin;

// Load Contact Page
const loadContact = () => {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.fixture').style.display = 'none';
  document.querySelector('.stats').style.display = 'none';
  document.querySelector('.join').style.display = 'none';
  document.querySelector('.interviews').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
  };

document.querySelector('.navButtonContact').onclick = loadContact;

// Load Home Page
const loadHome = () => {
  document.querySelector('.interviews').style.display = 'none';
  document.querySelector('.fixture').style.display = 'none';
  document.querySelector('.stats').style.display = 'none';
  document.querySelector('.join').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.home').style.display = 'grid';
  };

document.querySelector('#logo').onclick = loadHome;

