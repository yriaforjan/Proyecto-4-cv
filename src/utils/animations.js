
export const initGlobalAnimations = () => {
  initFadeDownAnimations();
};

export const initFadeDownAnimations = () => {
  const elements = document.querySelectorAll(".fade-down");

  elements.forEach((el, index) => {
    // Asegurar que el elemento esté oculto inicialmente
    if (!el.classList.contains("active")) {
      el.style.opacity = "0";
      el.style.transform = "translateY(-30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    }

    setTimeout(() => {
      el.classList.add("active");
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 500);
  });
};

export const setupProjectParallax = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });
};

export const resetFadeDownAnimations = () => {
  const elements = document.querySelectorAll(".fade-down");
  elements.forEach((el) => {
    el.classList.remove("active");
    el.style.opacity = "0";
    el.style.transform = "translateY(-30px)";
  });
};
