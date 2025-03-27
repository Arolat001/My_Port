document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });
  
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
      });
  });
  
  // Header Scroll Effect
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavLink() {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          const sectionId = section.getAttribute('id');
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
          } else {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
          }
      });
  }
  
  window.addEventListener('scroll', highlightNavLink);
  
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  
  function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
  }
  
  dots.forEach(dot => {
      dot.addEventListener('click', () => {
          const index = parseInt(dot.dataset.index);
          showTestimonial(index);
      });
  });
  
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
      showTestimonial(currentIndex);
  });
  
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
  });
  
  // Auto slide testimonials
  setInterval(() => {
      currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
  }, 5000);
  
  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopBtn.classList.add('active');
      } else {
          backToTopBtn.classList.remove('active');
      }
  });
  
  backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          if (this.getAttribute('href') !== '#') {
              const target = document.querySelector(this.getAttribute('href'));
              
              if (target) {
                  window.scrollTo({
                      top: target.offsetTop - 80,
                      behavior: 'smooth'
                  });
              }
          }
      });
  });
  
  // Form Submission
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Simulate form submission
          const formData = new FormData(contactForm);
          const formValues = Object.fromEntries(formData.entries());
          
          // You would normally send this data to a server
          console.log('Contact Form Submitted:', formValues);
          
          // Show success message (in a real app)
          alert('Thank you for your message! We will get back to you soon.');
          
          // Reset form
          contactForm.reset();
      });
  }
  
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Simulate form submission
          const email = newsletterForm.querySelector('input[type="email"]').value;
          
          // You would normally send this data to a server
          console.log('Newsletter Subscription:', email);
          
          // Show success message (in a real app)
          alert('Thank you for subscribing to our newsletter!');
          
          // Reset form
          newsletterForm.reset();
      });
  }
  
  // Animation on Scroll (simple implementation)
  function animateOnScroll() {
      const elements = document.querySelectorAll('.feature-box, .program-card, .trainer-card, .pricing-card');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  }
  
  // Set initial state for animation
  document.querySelectorAll('.feature-box, .program-card, .trainer-card, .pricing-card').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  
  // Call once on load
  animateOnScroll();
});