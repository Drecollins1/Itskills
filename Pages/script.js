function togglePage(isOnline) {
    document.getElementById("offlinePage").style.display = isOnline
      ? "none"
      : "block";
    document.getElementById("onlinePage").style.display = isOnline
      ? "block"
      : "none";

    document.getElementById("onlineButton").classList.toggle("bg-white", !isOnline);
    document.getElementById("onlineButton").classList.toggle("bg-blue-50", isOnline);
    document.getElementById("onlineButton").classList.toggle("inactive", !isOnline);
    
    document.getElementById("offlineButton").classList.toggle("bg-white", isOnline);
    document.getElementById("offlineButton").classList.toggle("bg-blue-50", !isOnline);
    document.getElementById("offlineButton").classList.toggle("inactive", isOnline);}
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
  