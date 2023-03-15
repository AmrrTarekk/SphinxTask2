// ---------------------------------------START--------------------------------------//
// Handling the proportional design here preloading animation //
const container = document.getElementById('container');
const wrapper = document.getElementById('wrap');
const loader = document.getElementById('loader');
const card = document.getElementById('card');


function showData(){
  setTimeout(showContent, 500);
}

function showContent() {
  loader.style.display = "none";
  card.style.display = "block";
}

showData();
// -----------------------------------------------------------------------------//

const contentWidth  = container.clientWidth;
const contentHeight = container.clientHeight;

window.addEventListener("resize", resize);

function resize(){   
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let max = windowWidth >= contentWidth && windowHeight >= contentHeight;

    let scale = Math.min(
        windowWidth / contentWidth, 
        windowHeight / contentHeight 
    );

    setTimeout( () => {
      wrapper.style.transform = max ? "" :  "scale(" + scale + ")";
    }, 300)
}

resize();
// -----------------------------------------------------------------------------//

// DOM manpulation goes here //

// Global Variables //

const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const pageNumber = document.getElementById('pageNumber');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const backBtn = document.getElementById('button5');
const nextBtn = document.getElementById('button6');

const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');

const right1 = document.getElementById('right1');
const right2 = document.getElementById('right2');

const wrong1 = document.getElementById('wrong1');
const wrong2 = document.getElementById('wrong2');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

const tickAudio = document.getElementById('tickAudio');
const aud1 = document.getElementById('aud1')
const aud2 = document.getElementById('aud2')


// Handling the intro sound at the top // 
button1.addEventListener('click', playIntro );

function playIntro() {
  tickAudio.play()
}

// -----------------------------------------------------------------------------//

// Handling the right answer by clicking the right Image //
img1.addEventListener('click', rightAns1);
img2.addEventListener('click', wrongAns1);
img3.addEventListener('click', wrongAns2);
img4.addEventListener('click', rightAns2);

function rightAns1() {
  right1.style.visibility = "visible";
  img2.style.opacity = "0.5";
  audio1.play();
  img2.removeEventListener('click', wrongAns2)
  img1.style.cursor = "default"
  img2.style.cursor = "default"
  button4.style.opacity = "0.5"
  button4.style.cursor = "default"
}

function wrongAns1 () {
  wrong1.style.visibility = "visible";
  audio2.play();
  setTimeout(() => {
    wrong1.style.visibility = "hidden"
  }, 1000)
}

function rightAns2 () {
  right2.style.visibility = "visible";
  img3.style.opacity = "0.5";
  audio1.play();
  img3.removeEventListener('click', wrongAns2)
  img3.style.cursor = "default"
  img4.style.cursor = "default"
  button4.style.opacity = "0.5"
  button4.style.cursor = "default"
}

function wrongAns2 () {
  wrong2.style.visibility = "visible";
  audio2.play();
  setTimeout(() => {
    wrong2.style.visibility = "hidden"
  }, 1000)
}

//------------------------------------------------------------------------------//

// Refresh buttons and Show Answer button //
button3.addEventListener('click', refreshAll);
button2.addEventListener('click', refresh12);
button4.addEventListener('click', showAns)

function refreshAll() {
  right1.style.visibility = "hidden";
  right2.style.visibility = "hidden";

  img1.style.cursor = "pointer"
  img2.style.cursor = "pointer";
  img3.style.cursor = "pointer";
  img4.style.cursor = "pointer";

  img2.style.opacity = "1";
  img3.style.opacity = "1";

  img1.addEventListener('click',rightAns1);
  img2.addEventListener('click', wrongAns2);
  img3.addEventListener('click', wrongAns2);
  img4.addEventListener('click', rightAns2);
  button4.style.opacity = "1"
  button4.style.cursor = "pointer"
  aud2.pause();
  aud2.currentTime = 0;

  aud1.pause();
  aud1.currentTime = 0;

}


function refresh12() {
  if ( pageNumber.innerHTML === "1 of 2" ){
    img2.style.opacity = "1";
    right1.style.visibility = "hidden";
    img1.style.cursor = "pointer";
    img2.style.cursor = "pointer";
    img1.addEventListener('click', rightAns1);
    img2.addEventListener('click', wrongAns1);
    button4.style.opacity = "1"
    button4.style.cursor = "pointer"
    aud1.pause();
    aud1.currentTime = 0;  
  } else if ( pageNumber.innerHTML === "2 of 2" ) {
    img3.style.opacity = "1";
    right2.style.visibility = "hidden";
    img3.style.cursor = "pointer";
    img4.style.cursor = "pointer"
    img3.addEventListener('click', wrongAns2);
    img4.addEventListener('click', rightAns2);
    button4.style.opacity = "1"
    button4.style.cursor = "pointer"
    aud2.pause();
    aud2.currentTime = 0;  
  }
}


function showAns() {
  if ( pageNumber.innerHTML === "1 of 2" ){
    img2.style.opacity = "0.5";
    right1.style.visibility = "visible";
    img1.style.cursor = "default";
    img2.style.cursor = "default";
    img1.removeEventListener('click', rightAns1);
    img2.removeEventListener('click', wrongAns1);
    button4.style.opacity = "0.5"
    button4.style.cursor = "default"
    aud1.pause();
    // aud2.currentTime = 0;
  } else if ( pageNumber.innerHTML === "2 of 2" ){
    img3.style.opacity = "0.5";
    right2.style.visibility = "visible";
    img3.style.cursor = "default";
    img4.style.cursor = "default"
    img3.removeEventListener('click', wrongAns2);
    img4.removeEventListener('click', rightAns2);
    button4.style.opacity = "0.5"
    button4.style.cursor = "default"
    aud2.pause();
    // aud2.currentTime = 0;

  }
}

//------------------------------------------------------------------------------//

// Next and Previous buttons //
backBtn.addEventListener('click', prevSlide )
nextBtn.addEventListener('click', nextSlide )

function nextSlide() {
  pageNumber.innerHTML = "2 of 2";

  backBtn.style.opacity = "1";
  nextBtn.style.opacity = "0.5";

  nextBtn.style.cursor = "default";
  backBtn.style.cursor = "pointer";

  aud1.style.display = "none";
  aud2.style.display = "block";
  aud1.pause();
  aud1.currentTime = 0;


  if(img3.style.opacity === "0.5"){
    button4.style.opacity = "0.5"
  } else {
    button4.style.opacity = "1"
  }

  slide1.classList.add('animate-left1')
  slide2.classList.add('animate-right1')
  setTimeout( () => {
    slide1.style.display = "none";
  } , 1000 )

  setTimeout( () => {
    slide2.style.display = "block";
  }  , 200 )

  setTimeout( () => {
    slide1.classList.remove('animate-left1');
    slide2.classList.remove('animate-right1');
  } , 1000)
}

function prevSlide() {
  pageNumber.innerHTML = "1 of 2";

  slide1.style.display = "block";
  slide2.style.display = "none";

  backBtn.style.opacity = "0.5";
  nextBtn.style.opacity = "1";

  backBtn.style.cursor = "default";
  nextBtn.style.cursor = "pointer";

  aud1.style.display = "block"
  aud2.style.display = "none"
  aud2.pause();
  aud2.currentTime = 0;

  if(img2.style.opacity === "0.5"){
    button4.style.opacity = "0.5"
  } else {
    button4.style.opacity = "1"
  }

  slide1.classList.add('animate-left2')
  slide2.classList.add('animate-right2')

  setTimeout( () => {
    slide1.style.display = "block";
  } , 100 )

  setTimeout( () => {
    slide2.style.display = "none";
  }  , 500 )

  setTimeout( () => {
    slide1.classList.remove('animate-left2');
    slide2.classList.remove('animate-right2');
  } , 1800 )
}