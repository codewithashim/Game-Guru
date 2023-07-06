const track = document.querySelector(".allslide");
const slides = Array.from(track.children);
const nextbutton = document.querySelector(".next");
const prevbutton = document.querySelector(".previous");
const dashnav = document.querySelector(".navigation-box");
const dash = Array.from(dashnav.children);

var s = document.getElementsByClassName("step2");
s.disabled = true;

nextbutton.addEventListener("click", (e) => {
  const currentslide = track.querySelector(".current-slide");
  const nextslide = currentslide.nextElementSibling;
  const amounttomove = nextslide.slide.left;
  track.style.transform = "translateX(-" + amounttomove + ")";
});

// This section is for the slider section

var indexValue = 0;
showSlide(indexValue);
function side_slide(e) {
  showSlide((indexValue += e));
}
function showSlide(e) {
  var i;
  const slide = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".navigation");
  if (e > slide.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    dots[i].classList.remove("current-slide");
  }
  slide[indexValue - 1].style.display = "block";
  dots[indexValue].classList.add("current-slide");
}

var colors = [
  "1abc9c",
  "2c3e50",
  "2980b9",
  "7f8c8d",
  "f1c40f",
  "d35400",
  "27ae60",
];

colors.each(function (color) {
  $$(".color-picker")[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
  );
});

$$(".color-picker")[0].on("click", ".square", function (event, square) {
  background = square.getStyle("background");
  $$(".custom-dropdown select").each(function (dropdown) {
    dropdown.setStyle({ background: background });
  });
});

// this section for the drop down

var mList;
var opt;

function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  s2.innerHTML = "";

  if (s1.value == "FORTNITE") {
    var optionArray = [
      "SKILLS ASSESSMENT|SKILLS ASSESSMENT",
      "ONE-ON-ONE TRAINING|ONE-ON-ONE TRAINING",
      "TEAM SESSION|TEAM SESSION",
    ];

    mList = optionArray;
  } else if (s1.value == "LEAGUE OF LEGENDS") {
    var optionArray = [
      "SKILLS ASSESSMENT|SKILLS ASSESSMENT",
      "ONE-ON-ONE TRAINING|ONE-ON-ONE TRAINING",
      "TEAM SESSION|TEAM SESSION",
    ];

    mList = optionArray;
  } else if (s1.value == "DOTA 2") {
    var optionArray = [
      "SKILLS ASSESSMENT|SKILLS ASSESSMENT",
      "ONE-ON-ONE TRAINING|ONE-ON-ONE TRAINING",
      "TEAM SESSION|TEAM SESSION",
    ];

    mList = optionArray;
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    // s2.value = pair
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}

function populate2(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  s2.innerHTML = "";

  if (s1.value == "TEAM SESSION") {
    var optionArray = [
      "LEGENDARY|LEGENDARY",
      "EXPERT|EXPERT",
      "ADVANCED|ADVANCED",
      "STANDARD|STANDARD",
    ];
  } else if (s1.value == "SKILLS ASSESSMENT") {
    var optionArray = ["SKILLS ASSESSOR|SKILLS ASSESSOR"];
  } else if (s1.value == "ONE-ON-ONE TRAINING") {
    var optionArray = [
      "LEGENDARY|LEGENDARY",
      "EXPERT|EXPERT",
      "ADVANCED|ADVANCED",
      "STANDARD|STANDARD",
    ];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");

    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}

function SelectRedirect() {
  // ON selection of section this function will work
  //alert( document.getElementById('s1').value);

  switch (document.getElementById("slct3").value) {
    case "LEGENDARY":
      window.location = "/step3";
      break;

    case "EXPERT":
      window.location = "/step3";
      break;

    case "ADVANCED":
      window.location = "/step3";
      break;
    case "STANDARD":
      window.location = "/step3";
      break;

    /// Can be extended to other different selections of SubCategory //////
    default:
      window.location = "/"; // if no selection matches then redirected to home page
      break;
  } // end of switch
}
