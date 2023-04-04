const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test-image.jpg") {
    myImage.setAttribute("src", "images/test-image-2.jpg");
  } else {
    myImage.setAttribute("src", "images/test-image.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

document.querySelector("button").addEventListener("click", function () {
    alert("Cheers!");
  });
  
  /test/

  myButton.onclick = () => {
    const myHeading = document.querySelector("h1");
    if myHeading === document.queryselector("h1") {
      myHeading.textContent("Cheers!")
    }
    else {
      myHeading.textContent("h1")
    }
  }
