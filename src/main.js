import './style.css';

document.querySelector('#app').innerHTML = `
<body class="m-0 font-sans bg-white">
  <div class="navbar flex justify-between items-center bg-[#004aad] text-white p-4">
    <div class="logo font-bold text-xl">Logo</div>
    <ul class="nav-links flex gap-8 list-none">
      <li><a href="#" class="text-white text-base font-medium">Home</a></li>
      <li><a href="#" class="text-white text-base font-medium">About</a></li>
      <li><a href="#" class="text-white text-base font-medium">Services</a></li>
      <li><a href="#" class="text-white text-base font-medium">Contact</a></li>
    </ul>
  </div>

  <!-- SLIDES CONTAINER -->
  <div class="relative overflow-hidden">
    <!-- Slide 1 -->
    <div class="slide transition-all duration-500 ease-in-out h-screen bg-indigo-500 flex items-center px-8">
      <div class="flex-1 text-white">
        <h2 class="text-5xl font-bold mb-4">Your Health, Our Priority</h2>
        <p class="text-lg max-w-md mb-6">Browse our wide selection of pharmaceutical products and health essentials delivered to your doorstep.</p>
        <button class="bg-white text-indigo-500 font-bold py-2 px-4 rounded-md">View Details</button>
      </div>
      <div class="flex-1 hidden md:block">
        <img src="path-to-image.jpg" class="rounded-lg w-full h-auto max-w-[500px] mx-auto" alt="slide image">
      </div>
    </div>

    <!-- Slide 2 -->
    <div class="slide transition-all duration-500 ease-in-out h-screen bg-indigo-500 flex items-center px-8">
      <div class="flex-1 text-white z-10">
        <h2 class="text-5xl font-bold mb-4">Wide Product Range</h2>
        <p class="text-lg max-w-md mb-6">From everyday medicines to specialized care, find everything at one place.</p>
        <button class="bg-white text-indigo-500 font-bold py-2 px-4 rounded-md">Explore Products</button>
      </div>
      <div class="flex-1 relative hidden md:block h-full z-0">
        <div class="absolute top-0 right-0 bottom-0 left-0 transform skew-x-[-20deg] origin-left bg-indigo-800 rounded-lg overflow-hidden flex items-center justify-center">
          <img src="path-to-image.jpg" class="transform skew-x-[20deg] max-w-[400px] h-auto rounded-lg" alt="slide image">
        </div>
      </div>
    </div>

    <!-- Slide 3 -->
    <div class="slide transition-all duration-500 ease-in-out h-screen bg-indigo-500 flex items-center px-8">
      <div class="flex-1 text-white z-10">
        <h2 class="text-5xl font-bold mb-4">Fast Delivery</h2>
        <p class="text-lg max-w-md mb-6">Reliable and fast doorstep delivery of your health essentials.</p>
        <button class="bg-white text-indigo-500 font-bold py-2 px-4 rounded-md">Get Started</button>
      </div>
      <div class="flex-1 relative hidden md:block h-full z-0">
        <div class="absolute top-0 right-0 bottom-0 left-0 transform skew-x-[-20deg] origin-left bg-indigo-800 rounded-lg overflow-hidden flex items-center justify-center">
          <img src="path-to-image.jpg" class="transform skew-x-[20deg] max-w-[400px] h-auto rounded-lg" alt="slide image">
        </div>
      </div>
    </div>
  </div>
</body>
`;


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

document.querySelector('.arrow.right').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.querySelector('.arrow.left').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
