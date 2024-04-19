const aboutMeDescripctions = ["Hello I'm Jorge, I'm a developer with a few years of experience in my back (more than 6). Click to know more"
, "Im a basketball player, and a sports enthusiastic",
"I love programming, and make new things. I like to describe myself as a curious, competent, resolutive person"]
let aboutMeCounter = 1;

const $heroSectionSkills = document.getElementById("hero-section-skills");
const $heroSkillsContainer1 = document.getElementById("hero-skills-container-1");
const $heroSkillsContainer2 = document.getElementById("hero-skills-container-2");

const $heroSectionMain = document.getElementById("hero-section-main");
const $heroMainContainer1 = document.getElementById("hero-main-container-1");
const $heroMainContainer2 = document.getElementById("hero-main-container-2");

const $heroMainAvatarNormal = document.getElementById("hero-main-avatar-normal");
const $heroMainAvatarTalking = document.getElementById("hero-main-avatar-talking");
const $heroMainBubble = document.getElementById("hero-main-bubble");
const $heroMainAvatarContainer = document.getElementById("hero-main-avatar-container");
$heroMainBubble.innerHTML = aboutMeDescripctions[0];

$heroSectionSkills.addEventListener("mouseover", hoverSkills);
$heroSectionSkills.addEventListener("mouseout", hoverSkills);

// $heroSectionMain.addEventListener("mouseover", hoverMain);
// $heroSectionMain.addEventListener("mouseout", hoverMain);

$heroMainAvatarContainer.addEventListener("mouseover", hoverAvatar);
$heroMainAvatarContainer.addEventListener("mouseout", hoverAvatar);
$heroMainAvatarContainer.addEventListener("click", clickAvatar);


function hoverSkills() {
    toogleDisplay($heroSkillsContainer1);
    toogleDisplay($heroSkillsContainer2);
}

function hoverMain() {
  toogleDisplay($heroMainContainer1);
  toogleDisplay($heroMainContainer2);
}

function hoverAvatar() {
  toogleDisplay($heroMainAvatarNormal);
  toogleDisplay($heroMainAvatarTalking);
}

function clickAvatar() {
  $heroMainBubble.innerHTML = aboutMeDescripctions[aboutMeCounter];
  aboutMeCounter = aboutMeCounter + 1;
  if(aboutMeCounter == aboutMeDescripctions.length){
    aboutMeCounter = 0;
  }
  
}

function toogleDisplay(component) {
  if (component.classList.contains('dp-none')) {
    component.classList.remove('dp-none')
    component.classList.add('dp-flex')
  } else {
    component.classList.remove('dp-flex')
    component.classList.add('dp-none')
  }
}
