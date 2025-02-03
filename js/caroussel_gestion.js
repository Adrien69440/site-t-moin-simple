const data = [
    { id: 1, url: 'https://picsum.photos/800/400?random=1', alt: 'Image 1' },
    { id: 2, url: 'https://picsum.photos/800/400?random=2', alt: 'Image 2' },
    { id: 3, url: 'https://picsum.photos/800/400?random=3', alt: 'Image 3' },
    { id: 4, url: 'https://picsum.photos/800/400?random=4', alt: 'Image 4' },
    { id: 5, url: 'https://picsum.photos/800/400?random=5', alt: 'Image 5' },
    { id: 6, url: 'https://picsum.photos/800/400?random=6', alt: 'Image 6' },
    { id: 7, url: 'https://picsum.photos/800/400?random=7', alt: 'Image 7' },
    { id: 8, url: 'https://picsum.photos/800/400?random=8', alt: 'Image 8' },
    { id: 9, url: 'https://picsum.photos/800/400?random=9', alt: 'Image 9' },
    { id: 10, url: 'https://picsum.photos/800/400?random=10', alt: 'Image 10' }
  ];
  
  const carousel = document.querySelector(".carousel");
  
  function createCarouselCards() {
    data.forEach((item, i) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundImage = `url(${item.url})`;
      card.setAttribute("onclick", `openLightbox('${item.url}')`);
  
      const content = document.createElement("div");
      content.classList.add("content");
      card.appendChild(content);
  
      carousel.appendChild(card);
    });
  }
  
  createCarouselCards();
  
  let index = 0;
  const totalCards = data.length;
  const angleIncrement = 360 / totalCards;
  const distance = 350;
  
  document.querySelectorAll(".card").forEach((card, i) => {
    card.style.transform = `rotateY(${i * angleIncrement}deg) translateZ(${distance}px)`;
  });
  
  function moveCarousel(direction) {
    index += direction;
  
    if (index < 0) index = totalCards - 1;
    if (index >= totalCards) index = 0;
  
    updateCarousel();
  }
  
  function updateCarousel() {
    const angle = -index * angleIncrement;
    carousel.style.transform = `rotateY(${angle}deg)`;
  }
  
  function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-img");
  
    lightboxImage.src = imageSrc;
    lightbox.style.display = "flex";
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  
  // Function to toggle the menu on mobile devices

  // Toggle menu for small screens
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  