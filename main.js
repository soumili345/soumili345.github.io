const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "headshot.jpg") {
    myImage.setAttribute("src", "king-julian.jpg");
  } else {
    myImage.setAttribute("src", "headshot.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my website, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to my website, ${storedName}`;
}

