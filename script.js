"use strict";

let portfolioContainer = $(".projects");

const projectSTORE = [
  {
    "img" : "img/quiz-app.jpg",
    "title" : "DnD Inspired Quiz App",
    "info" : "This app uses JavaScript and jQuery to load questions dynamically, provide feedback, and calculate results. Animations were done using GSAP.",
    "tech" : ["fa-html5", "fa-css3-alt", "fa-js-square"],
    "links" : ["https://noirviper.github.io/quiz-app/", "https://github.com/noirviper/quiz-app"]

  },
  { 
    "img" : "img/drawing-app.jpg",
    "title" : "HTML Canvas Drawing App",
    "info" : "This app uses the HTML Canvas element, JavaScript and jQuery to allow the user to draw. The user can also add colors, erase, or clear the canvas to start over.",
    "tech" : ["fa-html5", "fa-css3-alt", "fa-js-square"],
    "links" : ["https://noirviper.github.io/Drawing-App/", "https://github.com/noirviper/Drawing-App"]

  }
]



function displayProjects(obj) {
  Object.keys(obj).forEach(function(item){
    portfolioContainer.append(`<div class="project">
            <img src="${obj[item]["img"]}" alt="${obj[item]["title"]}">
            <div class="project-info">
            <h3>${obj[item]["title"]}</h3>
            <p>${obj[item]["info"]}</p>
            <h4>Tech Used</h4>
            <div class="tech">
            ${obj[item]["tech"].map((i) =>
            `<i class="fab ${i}"></i>`
            ).join('')}
            </div>
            <h4>Links</h4>
            <div class="links">
            ${obj[item]["links"].length > 1 ? `<a href="${obj[item]["links"][0]}" target="_blank">
              <div class="tooltip"><i class="fab fa-chrome"></i>
              <span class="tooltiptext">Live Link</span>
              </div>
              </a>
              <a href="${obj[item]["links"][1]}" target="_blank">
              <div class="tooltip"><i class="fab fa-github-square"></i>
              <span class="tooltiptext">Code Link</span>
              </div>
              </a>`: `<a href="${obj[item]["links"][0]}" target="_blank">
              <div class="tooltip"><i class="fab fa-chrome"></i>
              <span class="tooltiptext">Live Link</span>
              </div>
              </a>`}
              
          </div>
        </div>
    </div>`
);

  });
  
}

displayProjects(projectSTORE);