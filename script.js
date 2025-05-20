//product
async function fetchProducts() {
    const res = await fetch('https://fashion-store-frontend-jx4s.onrender.com/api/products');
    const products = await res.json();
  
    const container = document.getElementById('product-list');
    container.innerHTML = '';
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <a href="product-details.html">
        <img src="${product.image}" alt="${product.name}"/>
        </a>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${product.price}đ</strong>
      `;
      container.appendChild(card);
    });
  }
  
    fetchProducts();

    //slider
    async function fetchSliders() {
      const res = await fetch('https://fashion-store-frontend-jx4s.onrender.com/api/sliders');
      const sliders = await res.json();
    
      const sliderContainer = document.querySelector('.slides'); // slides là div chứa các slide
      sliderContainer.innerHTML = '';
    
      sliders.forEach(slider => {
        const slider_card = document.createElement('div');
        slider_card.className = 'slide';
        slider_card.innerHTML = `
          <img src="${slider.image}" alt="Slide">
        `;
        sliderContainer.appendChild(slider_card);
      });


      // slide show
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentSlide = 0;


  function updateSlidePosition() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  }, 5000);
    }
  fetchSliders();
  
//danh mục sản phẩm 
async function fetchCategories() {
  const res = await fetch('https://fashion-store-frontend-jx4s.onrender.com/api/categories');
  const categories = await res.json();

  const container = document.getElementById('category-list');

  categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-item';
    card.innerHTML = `
     <a href="product-details.html">  
      <div class="image-wrapper">
      <img src="${category.thumbnail || 'default-image.jpg'}" alt="${category.name}" />
      <div class="overlay-text">${category.name}</div>
    </div>
    `;
    container.appendChild(card);
  });
}
fetchCategories();