
const myBtn = document.getElementById("myBtn");
const interestList = document.getElementById("interest");

const navbar = `
  <nav>
    <ul class="nav-links">
      <li><a href="#inter">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
`;

// myBtn.addEventListener("click", function () {
//   interestList.innerHTML = "<li>AI</li><li>Cyber Security</li>";
// });
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});



document.getElementById("navbar").innerHTML = navbar;
