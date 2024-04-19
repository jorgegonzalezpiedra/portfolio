const $heroSectionSkills = document.getElementById("hero-section-skills");
const $heroSkillsContainer1 = document.getElementById("hero-skills-container-1");
const $heroSkillsContainer2 = document.getElementById("hero-skills-container-2");

const $heroSectionMain = document.getElementById("hero-section-main");
const $heroMainContainer1 = document.getElementById("hero-main-container-1");
const $heroMainContainer2 = document.getElementById("hero-main-container-2");

const $heroMainAvatarNormal = document.getElementById("hero-main-avatar-normal");
const $heroMainAvatarTalking = document.getElementById("hero-main-avatar-talking");

$heroSectionSkills.addEventListener("mouseover", hoverSkills);
$heroSectionSkills.addEventListener("mouseout", hoverSkills);

$heroSectionMain.addEventListener("mouseover", hoverMain);
$heroSectionMain.addEventListener("mouseout", hoverMain);

$heroMainAvatarNormal.addEventListener("mouseover", hoverAvatar);
$heroMainAvatarTalking.addEventListener("mouseout", hoverAvatar);


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

function toogleDisplay(component) {
  if (component.classList.contains('dp-none')) {
    component.classList.remove('dp-none')
    component.classList.add('dp-flex')
  } else {
    component.classList.remove('dp-flex')
    component.classList.add('dp-none')
  }
}
