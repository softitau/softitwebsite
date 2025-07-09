// SoftIT Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Change hamburger icon to X when menu is open
      const icon = this.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileMenuToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 70; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Basic validation
      if (!name || !email || !message) {
        showNotification("Please fill in all fields.", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
      }

      // Simulate form submission (replace with actual form submission logic)
      const submitButton = this.querySelector(".submit-button");
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Simulate API call
      setTimeout(() => {
        showNotification(
          "Thank you for your message! We'll get back to you soon.",
          "success"
        );
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // Add fade-in animation to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".service-card, .about-text, .contact-form, .contact-info"
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add/remove shadow based on scroll position
    if (scrollTop > 10) {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow =
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    }

    lastScrollTop = scrollTop;
  });

  // Add active class to current navigation item based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});

// Utility functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#48bb78"
            : type === "error"
            ? "#f56565"
            : "#4299e1"
        };
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  notification.querySelector(".notification-content").style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    `;

  notification.querySelector(".notification-close").style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 10);

  // Add close functionality
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => notification.remove(), 300);
    });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Loading animation for when page loads
window.addEventListener("load", function () {
  const loader = document.querySelector(".page-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }
});

// Add scroll-to-top functionality
function addScrollToTop() {
  const scrollButton = document.createElement("button");
  scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollButton.className = "scroll-to-top";
  scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transition: all 0.3s ease;
    `;

  document.body.appendChild(scrollButton);

  // Show/hide scroll button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });

  // Scroll to top when clicked
  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Initialize scroll to top button
document.addEventListener("DOMContentLoaded", addScrollToTop);
