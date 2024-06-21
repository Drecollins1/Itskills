
// 

document.addEventListener("DOMContentLoaded", () => toggleAccordion(1));

function toggleAccordion(id) {
  const answers = document.querySelectorAll('[id^="answer"]');
  answers.forEach((answer) => {
    if (answer.id === `answer${id}`) {
      answer.classList.toggle("hidden");
    } else {
      answer.classList.add("hidden");
    }
  });

  // 

  const icons = document.querySelectorAll('[id^="icon"]');
  icons.forEach((icon) => {
    if (icon.id === `icon${id}`) {
      icon.classList.toggle("rotate-180");
    } else {
      icon.classList.remove("rotate-180");
    }
  });
}


// 
const menuOpenIcon = document.getElementById("menuOpen");
const menuCloseIcon = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
  menuOpenIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
  if (mobileMenu.style.right === "0px") {
    mobileMenu.style.right = "-100%";
  } else {
    mobileMenu.style.right = "0px";
  }
}
// 



document.addEventListener("DOMContentLoaded", function() {
  // Initially show the content of the first FAQ
  const firstFaqContent = document.querySelector("#faq1 p");
  firstFaqContent.style.display = "block";
  
  const faqs = document.querySelectorAll("[id^='faq']");
  faqs.forEach(faq => {
    const button = faq.querySelector("button");
    const content = faq.querySelector("p");
    
    button.addEventListener("click", () => {
      // Hide all FAQ contents
      faqs.forEach(f => f.querySelector("p").style.display = "none");
      
      // Toggle the visibility of the clicked FAQ content
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});

// 
document.addEventListener("DOMContentLoaded", () => {
  let currentPage = 1;

  const togglePage = (pageNumber) => {
    if (currentPage !== pageNumber) {
      currentPage = pageNumber;
      updateContent();
    }
  };

  const updateContent = () => {
    for (let i = 1; i <= 2; i++) {
      document.getElementById(`page-${i}`).classList.remove("active");
      document.getElementById(`page-${i}`).classList.add("inactive");
      document.getElementById(`rect-${i}`).classList.remove("rectangle-blue");
      document.getElementById(`rect-${i}`).classList.add("rectangle-grey");
      document.getElementById(`content-${i}`).classList.remove("show");
      document.getElementById(`content-${i}`).classList.add("hidden");
    }

    document.getElementById(`page-${currentPage}`).classList.remove("inactive");
    document.getElementById(`page-${currentPage}`).classList.add("active");
    document.getElementById(`rect-${currentPage}`).classList.remove("rectangle-grey");
    document.getElementById(`rect-${currentPage}`).classList.add("rectangle-blue");
    document.getElementById(`content-${currentPage}`).classList.remove("hidden");

    setTimeout(() => {
      document.getElementById(`content-${currentPage}`).classList.add("show");
    }, 10);
  };

  window.togglePage = togglePage;
  updateContent();
});
