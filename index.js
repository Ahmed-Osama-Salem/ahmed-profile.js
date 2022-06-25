//variable's
let profileRgb = document.getElementById("ahmed-profile");
let imgHeadRgb = document.getElementById("profile-img");
let headerText = document.getElementById("header-text");
let aboutScroll = document.getElementById("translate-con");
let contentAbout = document.getElementById("show-scroll");
let topNavbar = document.getElementById("menu");
let firstText = document.getElementById("head-text");
let skillText = document.getElementById("skill-txt");
let sectionOne = document.getElementById("sec1");
let skillsScroll = document.getElementById("translate-con2");
let skillsBar1 = document.getElementById("bar-1");
let skillsBar2 = document.getElementById("bar-2");
let skillsBar3 = document.getElementById("bar-3");
let skillsBar4 = document.getElementById("bar-4");
let skillsBar5 = document.getElementById("bar-5");
let skillsBar6 = document.getElementById("bar-6");
let skillPro1 = document.getElementById("pro-1");
let skillPro2 = document.getElementById("pro-2");
let skillPro3 = document.getElementById("pro-3");
let skillPro4 = document.getElementById("pro-4");
let skillPro5 = document.getElementById("pro-5");
let skillPro6 = document.getElementById("pro-6");
let frontEndText = document.getElementById("front-end-text");
let projectScrollContent = document.getElementById("pro-1-content");
let projectScrollImage = document.getElementById("lap-pro");
let slidesFitScroll = document.getElementById("scroll-fit-slides");
let todoContentScroll = document.getElementById("pro-2-content");
let todoImageScroll = document.getElementById("todo-list-img");
let leftServiceScroll = document.getElementById("service-one");
let midServiceScroll = document.getElementById("service-two");
let rightServiceScroll = document.getElementById("service-three");
let btnSrcProjectFit = document.getElementById("btn-src");
let btnWebProjectFit = document.getElementById("btn-web");
let faceLink = document.getElementById("face-link");
let gitLink = document.getElementById("git-link");
let whatsLink = document.getElementById("whats-link");
let linksScroll = document.getElementById("all-links");

//scroll function
window.onscroll = function() {
  if (scrollY >= 133) {
    aboutScroll.classList.remove("hide");
    aboutScroll.classList.add("scroll-animat");
  } else {
    aboutScroll.classList.remove("scroll-animat");
    aboutScroll.classList.add("hide");
  }

  if (scrollY >= 470) {
    contentAbout.classList.add("scroll-animat2");
  } else {
    contentAbout.classList.remove("scroll-animat2");
  }

  if (scrollY >= 750) {
    skillsScroll.classList.remove("hide");
    skillsScroll.classList.add("scroll-animat");
  } else {
    skillsScroll.classList.add("hide");
    skillsScroll.classList.remove("scroll-animat");
  }
  // html-bar-scroll
  if (scrollY >= 832) {
    skillsBar1.classList.remove("hide-box");
    skillsBar1.classList.add("show-box");
    skillPro1.classList.add("show-animation-bars");
  } else {
    skillsBar1.classList.add("hide-box");
    skillsBar1.classList.remove("show-box");
    skillPro1.classList.remove("show-animation-bars");
  }
  // css-bar-scroll
  if (scrollY >= 926) {
    skillsBar2.classList.remove("hide-box");
    skillsBar2.classList.add("show-box");
    skillPro2.classList.add("show-animation-bars");
  } else {
    skillsBar2.classList.add("hide-box");
    skillsBar2.classList.remove("show-box");
    skillPro2.classList.remove("show-animation-bars");
  }
  // js-bar-scroll
  if (scrollY >= 1026) {
    skillsBar3.classList.remove("hide-box");
    skillsBar3.classList.add("show-box");
    skillPro3.classList.add("show-animation-bars");
  } else {
    skillsBar3.classList.add("hide-box");
    skillsBar3.classList.remove("show-box");
    skillPro3.classList.remove("show-animation-bars");
  }
  // bootstrap-bar-scroll
  if (scrollY >= 1122) {
    skillsBar4.classList.remove("hide-box");
    skillsBar4.classList.add("show-box");
    skillPro4.classList.add("show-animation-bars");
  } else {
    skillsBar4.classList.add("hide-box");
    skillsBar4.classList.remove("show-box");
    skillPro4.classList.remove("show-animation-bars");
  }
  // jquery-bar-scroll
  if (scrollY >= 1218) {
    skillsBar5.classList.remove("hide-box");
    skillsBar5.classList.add("show-box");
    skillPro5.classList.add("show-animation-bars");
  } else {
    skillsBar5.classList.add("hide-box");
    skillsBar5.classList.remove("show-box");
    skillPro5.classList.remove("show-animation-bars");
  }
  // vue.js-bar-scroll
  if (scrollY >= 1332) {
    skillsBar6.classList.remove("hide-box");
    skillsBar6.classList.add("show-box");
    skillPro6.classList.add("show-animation-bars");
  } else {
    skillsBar6.classList.add("hide-box");
    skillsBar6.classList.remove("show-box");
    skillPro6.classList.remove("show-animation-bars");
  }
  //parallax-text-scroll
  if (scrollY >= 1650) {
    frontEndText.classList.add("show-front");
    frontEndText.classList.remove("hide-front");
  } else {
    frontEndText.classList.add("hide-front");
    frontEndText.classList.remove("show-front");
  }
  //project-section-scroll
  if (scrollY >= 2500) {
    projectScrollContent.classList.add("show-projects");
    projectScrollContent.classList.remove("hide-projects");
    projectScrollImage.classList.add("show-projects");
    projectScrollImage.classList.remove("hide-projects");
  } else {
    projectScrollContent.classList.add("hide-projects");
    projectScrollContent.classList.remove("show-projects");
    projectScrollImage.classList.remove("show-projects");
    projectScrollImage.classList.add("hide-projects");
  }
  //fit-slides-scroll
  if (scrollY >= 3000) {
    slidesFitScroll.classList.add("show-slides");
    slidesFitScroll.classList.remove("hide-slides");
  } else {
    slidesFitScroll.classList.remove("show-slides");
    slidesFitScroll.classList.add("hide-slides");
  }
  //todo-list-scroll
  if (scrollY >= 3600) {
    todoContentScroll.classList.add("show-todo-con");
    todoContentScroll.classList.remove("hide-todo-con");
    todoImageScroll.classList.add("show-todo-con");
    todoImageScroll.classList.remove("hide-todo-img");
  } else {
    todoContentScroll.classList.remove("show-todo-con");
    todoContentScroll.classList.add("hide-todo-con");
    todoImageScroll.classList.remove("show-todo-con");
    todoImageScroll.classList.add("hide-todo-img");
  }
  //services-scroll
  if (scrollY >= 4333) {
    leftServiceScroll.classList.add("show-service");
    leftServiceScroll.classList.remove("hide-service");
    rightServiceScroll.classList.add("show-service");
    rightServiceScroll.classList.remove("hide-service3");
    midServiceScroll.classList.add("show-service2");
    midServiceScroll.classList.remove("hide-service2");
  } else {
    leftServiceScroll.classList.remove("show-service");
    leftServiceScroll.classList.add("hide-service");
    rightServiceScroll.classList.remove("show-service");
    rightServiceScroll.classList.add("hide-service3");
    midServiceScroll.classList.remove("show-service2");
    midServiceScroll.classList.add("hide-service2");
  }
  //links-scroll
  if (scrollY >= 5050) {
    linksScroll.classList.add("show-links");
    linksScroll.classList.remove("hide-links");
  } else {
    linksScroll.classList.add("hide-links");
    linksScroll.classList.remove("show-links");
  }

};

//navbar functions
function closeMenu() {
  topNavbar.style.top = "-100vh";
  sectionOne.classList.remove("bl");
  topNavbar.classList.add("bl");
}

function openMenu() {
  topNavbar.style.top = "0";
  sectionOne.classList.add("bl");
  topNavbar.classList.remove("bl");
}

//images functions

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

//text functions

var typed5 = new Typed('.sp-1', {
  strings: ['Iam <i>Ahmed osama salem</i> ', 'Junior <strong>Front-End Developer</strong>'],
  typeSpeed: 50,
  backSpeed: 50,
  cursorChar: '_',
  shuffle: true,
  smartBackspace: false,
  loop: true
});


var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//googleMaps-APis
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
      const myPosition = [latitude, longitude];
      const map = L.map('map').setView(myPosition, 14);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker(myPosition).addTo(map)
        .bindPopup(L.popup({
          className: "popup-style",
          maxWidth: 700,
          autoClose: false,
        }))
        .openPopup().setPopupContent(`<p class="popTxt">hello,you are here</p>`);
    },
    function() {
      alert("could not find your position");
    }
  );

//buttons-locations-functions
btnSrcProjectFit.addEventListener("click", btnSrcClick);

function btnSrcClick() {
  parent.open('https://github.com/Ahmed-Osama-Salem/el-fit-group');
};

btnWebProjectFit.addEventListener("click", btnWebClick);

function btnWebClick() {
  parent.open('https://ahmed-osama-salem.github.io/el-fit-group/');
};

//todo-buttons
let todoGitBtn = document.getElementById("git-todo");
todoGitBtn.addEventListener("click", todoGitClick);

function todoGitClick() {
  parent.open('https://github.com/Ahmed-Osama-Salem/todo-list');
};



//contactlinks-functions
faceLink.addEventListener("click", faceClick);

function faceClick() {
  parent.open('https://www.facebook.com/Ahmedosama66/');
  faceLink.style.color = "red";
};

gitLink.addEventListener("click", gitClick);

function gitClick() {
  parent.open('https://github.com/Ahmed-Osama-Salem');
  gitLink.style.color = "red";
};

whatsLink.addEventListener("click", whatsClick);

function whatsClick() {
  parent.open('https://api.whatsapp.com/message/6AMIAUAIQUZ3B1?autoload=1&app_absent=0');
  whatsLink.style.color = "red";
};

//form-functions
let myForm = document.getElementById("form-option");
let myFirstName = document.getElementById("form-firstname");
let myLastName = document.getElementById("form-lastname");
let myNumber = document.getElementById("form-number");
let myEmail = document.getElementById("form-email");
let myMessage = document.getElementById("form-message");

myForm.addEventListener("submit", submitter);

function submitter(e) {
  e.preventDefault();
  let errorMessage = '';
  if (myFirstName.value.length < 5) {
    errorMessage += `firstname should be 5 characters `;
  }
  if (myLastName.value.length < 5) {
    errorMessage += `lastname should be 5 characters `;
  }
  if (myEmail.value.length < 5) {
    errorMessage += `email should be 5 characters`;
  }

  if (errorMessage) {
    const div = document.createElement("div");
    div.innerHTML = errorMessage;
    div.style.color = "red";
    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    myForm.append(div);
    setTimeout(function() {
      div.remove();
    }, 4000);
  } else {
    const inputData = {
      firstName: myFirstName.value,
      lastName: myLastName.value,
      email: myEmail.value,
      number: myNumber.value,
      message: myMessage.value
    };
    console.log(inputData);
    alert("message is sent");
    myForm.reset();
  }
};



//dark & light-mode toggler
let modeBtn = document.getElementById("modes-btn");
modeBtn.addEventListener("click", changeMode);

function changeMode() {

};


  AOS.init();





//onTouchMove-mobileScreen-scrollY
/*document.body.ontouchstart = function(e){
console.log(e);

};*/
