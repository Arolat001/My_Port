// DOM Elements
const themeToggle = document.querySelector(".theme-toggle")
const body = document.body
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
const scrollTop = document.querySelector(".scroll-top")
const filterBtns = document.querySelectorAll(".filter-btn")
const projectItems = document.querySelectorAll(".project-item")
const contactForm = document.getElementById("contactForm")
const newsletterForm = document.getElementById("newsletterForm")

// Theme Toggle
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  body.classList.add("dark")
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark")
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }
})

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  nav.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    nav.classList.remove("active")
  })
})

// Scroll to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTop.classList.add("active")
  } else {
    scrollTop.classList.remove("active")
  }
})

scrollTop.addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Project Filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    projectItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  })
})(
  // Initialize EmailJS
  () => {
    // Replace "your_public_key" with your actual EmailJS public key
    emailjs.init("your_public_key")
  },
)()

// Contact form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  const originalBtnText = submitBtn.textContent
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  // Prepare template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  }

  // Send email using EmailJS
  // Replace 'your_service_id' and 'your_template_id' with your actual EmailJS credentials
  emailjs
    .send("your_service_id", "your_template_id", templateParams)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text)
        alert("Thank you! Your message has been sent.")
        contactForm.reset()
      },
      (error) => {
        console.log("FAILED...", error)
        alert("Oops! Something went wrong, we couldn't send your message.")
      },
    )
    .finally(() => {
      // Reset button state
      submitBtn.textContent = originalBtnText
      submitBtn.disabled = false
    })
})

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault()
  // Get email
  const email = newsletterForm.querySelector("input").value

  // Here you would typically send the email to a server
  console.log("Newsletter Subscription:", email)

  // Show success message
  alert("Thank you for subscribing to my newsletter!")

  // Reset form
  newsletterForm.reset()
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector("header").offsetHeight
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".skill-item, .project-item, .about-image, .about-text")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
window.addEventListener("load", () => {
  // Set initial opacity and transform for animated elements
  document.querySelectorAll(".skill-item, .project-item, .about-image, .about-text").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger animation on load
  animateOnScroll()
})

// Trigger animation on scroll
window.addEventListener("scroll", animateOnScroll)

