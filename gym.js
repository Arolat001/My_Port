document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenuClose = document.getElementById("mobile-menu-close")
    const mobileMenu = document.getElementById("mobile-menu")
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link")
  
    function openMobileMenu() {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  
    function closeMobileMenu() {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", openMobileMenu)
    }
  
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu)
    }
  
    // Close mobile menu when clicking outside
    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) {
        closeMobileMenu()
      }
    })
  
    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu)
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href") !== "#") {
          e.preventDefault()
  
          const targetId = this.getAttribute("href")
          const targetElement = document.querySelector(targetId)
  
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for header
              behavior: "smooth",
            })
          }
        }
      })
    })
  
    // Form submission
    const contactForm = document.querySelector(".contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const firstName = document.getElementById("first-name").value
        const lastName = document.getElementById("last-name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const message = document.getElementById("message").value
  
        // Simple validation
        if (!firstName || !lastName || !email || !message) {
          alert("Please fill out all required fields.")
          return
        }
  
        // Here you would typically send the form data to a server
        console.log("Form submitted:", { firstName, lastName, email, phone, message })
  
        // Reset form
        contactForm.reset()
  
        // Show success message
        alert("Thank you for your message! We will get back to you soon.")
      })
    }
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenuClose = document.getElementById("mobile-menu-close")
    const mobileMenu = document.getElementById("mobile-menu")
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link")
  
    function openMobileMenu() {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  
    function closeMobileMenu() {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", openMobileMenu)
    }
  
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu)
    }
  
    // Close mobile menu when clicking outside
    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) {
        closeMobileMenu()
      }
    })
  
    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu)
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href") !== "#") {
          e.preventDefault()
  
          const targetId = this.getAttribute("href")
          const targetElement = document.querySelector(targetId)
  
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for header
              behavior: "smooth",
            })
          }
        }
      })
    })
  
    // Form submission
    const contactForm = document.querySelector(".contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const firstName = document.getElementById("first-name").value
        const lastName = document.getElementById("last-name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const message = document.getElementById("message").value
  
        // Simple validation
        if (!firstName || !lastName || !email || !message) {
          alert("Please fill out all required fields.")
          return
        }
  
        // Here you would typically send the form data to a server
        console.log("Form submitted:", { firstName, lastName, email, phone, message })
  
        // Reset form
        contactForm.reset()
  
        // Show success message
        alert("Thank you for your message! We will get back to you soon.")
      })
    }
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenuClose = document.getElementById("mobile-menu-close")
    const mobileMenu = document.getElementById("mobile-menu")
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link")
  
    function openMobileMenu() {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  
    function closeMobileMenu() {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", openMobileMenu)
    }
  
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu)
    }
  
    // Close mobile menu when clicking outside
    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) {
        closeMobileMenu()
      }
    })
  
    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu)
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href") !== "#") {
          e.preventDefault()
  
          const targetId = this.getAttribute("href")
          const targetElement = document.querySelector(targetId)
  
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for header
              behavior: "smooth",
            })
          }
        }
      })
    })
  
    // Form submission
    const contactForm = document.querySelector(".contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const firstName = document.getElementById("first-name").value
        const lastName = document.getElementById("last-name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const message = document.getElementById("message").value
  
        // Simple validation
        if (!firstName || !lastName || !email || !message) {
          alert("Please fill out all required fields.")
          return
        }
  
        // Here you would typically send the form data to a server
        console.log("Form submitted:", { firstName, lastName, email, phone, message })
  
        // Reset form
        contactForm.reset()
  
        // Show success message
        alert("Thank you for your message! We will get back to you soon.")
      })
    }
  })

  
  
        // Theme function


        const toggle = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
    
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
            toggle.checked = true;
        }
    
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });