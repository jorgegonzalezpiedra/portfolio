const aboutMeDescripctions = [
"Hey there! I'm Jorge, <span style='color:#ff2288; font-weight:bold; font-style: italic'>a developer</span> if you want to know me a little better, you just have to <span style='color:#387ef0; font-weight:bold'>click here</span>!",
"My career so far has been focused on <span style='color:#ff2288; font-weight:bold'>bakcend development</span> with <span style='color:#387ef0;'>Java, Spring and SQL</span> mainly",
"I have also worked in a <span style='color:#ff2288; font-weight:bold'>frontend developments</span> using <span style='color:#387ef0;'>HTML, CSS, JavaScript and JQuery</span>",
"And yes, as a developer I can also fix your printer. But im not only a <span style='font-style:italic'>techie</span>...",
"When I'm not coding, you'll likely find me on the court <span style='font-style:italic'>shooting hoops</span>, a basketball fan here! 🏀",
"<span style='color:#ff2288; font-weight:bold;'>Learning</span> is my secret weapon. New languages, hot tech trends? Bring it on, I'm ready!",
"So...If you have reached this point and you are up for a coding challenge or a hoop game <span style='color:#387ef0; font-weight:bold'>Let's connect!</span>",
"You have my <span style='color:#ff2288; font-weight:bold;'>info</span> in the <span style='font-style:italic'>contact section</span> below</br></br> See ya! 👋"]
let aboutMeCounter = 0;

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
$heroMainBubble.innerHTML = aboutMeDescripctions[aboutMeCounter];

const $heroSectionAbouticons = document.getElementById("hero-section-abouticons");
const $heroAbouticonsContainer1 = document.getElementById("hero-abouticons-container-1");
const $heroAbouticonsContainer2 = document.getElementById("hero-abouticons-container-2");

const $heroSectionExperience = document.getElementById("hero-section-experience");
const $heroExperienceContainer1 = document.getElementById("hero-experience-container-1");
const $heroExperienceContainer2 = document.getElementById("hero-experience-container-2");

const $heroSectionCerts = document.getElementById("hero-section-certs");
const $heroCertsContainer1 = document.getElementById("hero-certs-container-1");
const $heroCertsContainer2 = document.getElementById("hero-certs-container-2");

$heroSectionSkills.addEventListener("mouseover", hoverSkills);
$heroSectionSkills.addEventListener("mouseout", hoverSkills);

$heroSectionMain.addEventListener("mouseover", hoverMain);
$heroSectionMain.addEventListener("mouseout", hoverMain);
$heroMainAvatarContainer.addEventListener("mouseover", hoverAvatar);
$heroMainAvatarContainer.addEventListener("mouseout", hoverAvatar);
$heroMainAvatarContainer.addEventListener("click", clickAvatar);

$heroSectionAbouticons.addEventListener("mouseover", hoverAboutIcons);
$heroSectionAbouticons.addEventListener("mouseout", hoverAboutIcons);

$heroSectionExperience.addEventListener("mouseover", hoverExperience);
$heroSectionExperience.addEventListener("mouseout", hoverExperience);

$heroSectionCerts.addEventListener("mouseover", hoverCerts);
$heroSectionCerts.addEventListener("mouseout", hoverCerts);


$(document).ready(function(){
  $('.hero-certs-carousel-container').slick({
  });
});

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
  aboutMeCounter = aboutMeCounter + 1;
  if(aboutMeCounter >= aboutMeDescripctions.length){
    aboutMeCounter = 0;
  }
  $heroMainBubble.innerHTML = aboutMeDescripctions[aboutMeCounter];
}

function hoverAboutIcons() {
  toogleDisplay($heroAbouticonsContainer1);
  toogleDisplay($heroAbouticonsContainer2);
}

function hoverExperience(){
  toogleDisplay($heroExperienceContainer1);
  toogleDisplay($heroExperienceContainer2);
}

function hoverCerts(){
  
  toogleDisplay($heroCertsContainer1);

  if($heroCertsContainer2.classList.contains('hero-certs-container-2')){
    $heroCertsContainer2.classList.add('height-0');
    $heroCertsContainer2.classList.remove('hero-certs-container-2');
    $heroCertsContainer2.classList.remove('dp-flex');
  }else if($heroCertsContainer2.classList.contains('height-0')){
    $heroCertsContainer2.classList.remove('height-0');
    $heroCertsContainer2.classList.add('hero-certs-container-2');
    $heroCertsContainer2.classList.add('dp-flex');
  }
  $('.hero-certs-carousel-container').slick('setPosition');   
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