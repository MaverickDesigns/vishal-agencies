import "./style.css";

document.querySelector("#app").innerHTML = `
<body class="m-0 font-sans bg-white">
  <div class="navbar flex justify-between items-center bg-white text-white p-4">
    <div class="logo font-bold text-xl">Logo</div>
    <ul class="nav-links flex gap-8 list-none">
      <li><a href="#" class="text-indigo-700 text-base font-medium">Home</a></li>
      <li><a href="#" class="text-indigo-700 text-base font-medium">About</a></li>
      <li><a href="#" class="text-indigo-700 text-base font-medium">Services</a></li>
      <li><a href="#" class="text-indigo-700 text-base font-medium">Contact</a></li>
    </ul>
  </div>

  <!-- Carousel Wrapper -->
  <div class="relative overflow-hidden h-full flex-1">
    <div id="carousel" class="flex transition-transform duration-500 ease-in-out w-full h-full">
      <!-- Slide 1 -->
      <div class="min-w-full h-[80vh] bg-indigo-500 flex items-center px-20">
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
      <div class="min-w-full h-[80vh] bg-indigo-500 flex items-center">
        <div class="flex-1 text-white z-10 px-20">
          <h2 class="text-5xl font-bold mb-4">Wide Product Range</h2>
          <p class="text-lg max-w-md mb-6">From everyday medicines to specialized care, find everything at one place.</p>
          <button class="bg-white text-indigo-500 font-bold py-2 px-4 rounded-md">Explore Products</button>
        </div>
         <div class="flex-1 relative hidden md:block h-full">
          <div class="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,20%_0%)] bg-indigo-900 flex flex-col items-center justify-center h-full w-[60rem]">
            <img src="/src/javascript.svg" class="w-96 h-96 pl-20" alt="slide image">
          </div>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="min-w-full h-[80vh] bg-indigo-500 flex items-center">
        <div class="flex-1 text-white px-20">
          <h2 class="text-5xl font-bold mb-4">Fast Delivery</h2>
          <p class="text-lg max-w-md mb-6">Reliable and fast doorstep delivery of your health essentials.</p>
          <button class="bg-white text-indigo-500 font-bold py-2 px-4 rounded-md">Get Started</button>
        </div>
        <div class="flex-1 relative hidden md:block h-full">
          <div class="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,20%_0%)] bg-indigo-900 flex flex-col items-center justify-center h-full w-[60rem]">
            <img src="/src/javascript.svg" class="w-96 h-96 pl-20" alt="slide image">
          </div>
        </div>
      </div>
    </div>

    <!-- Arrows -->
    <button class="arrow left absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-3xl">&#8592;</button>
    <button class="arrow right absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-3xl">&#8594;</button>
  </div>
</body>
`;

let currentSlide = 0;
const carousel = document.getElementById("carousel");
const totalSlides = carousel.children.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector(".arrow.right").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

document.querySelector(".arrow.left").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

updateCarousel(); // Initial position
