const $heroSkillsContainer1 = document.getElementById(
  "hero-skills-container-1"
);

const $heroSkillsContainer2 = document.getElementById(
  "hero-skills-container-2"
);

const $heroSectionSkills = document.getElementById(
    "hero-section-skills"
  );

$heroSectionSkills.addEventListener("mouseover", mouseOverSkills);
$heroSectionSkills.addEventListener("mouseout", mouseOverSkills);

function mouseOverSkills() {
    toogleDisplay($heroSkillsContainer1)
    toogleDisplay($heroSkillsContainer2)
}

function toogleDisplay(component) {

  if(component.style.display == 'none'){
    component.style.display = 'flex'
  }else{
    component.style.display = 'none'
  }
}
