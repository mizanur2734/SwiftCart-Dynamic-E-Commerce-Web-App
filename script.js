
// 1️ Load Categories (Buttons)
const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(data => displayCategoryButtons(data));
};

const displayCategoryButtons = (categories) => {
  const levelContainer = document.getElementById("level-container");
  if (!levelContainer) return; 
  levelContainer.innerHTML = "";

  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline rounded-full";
    btn.innerText = category;

    // On click → filter products
    btn.onclick = () => filterProducts(category);

    levelContainer.append(btn);
  });
};

// 2 Display Products (Reusable)
const displayProducts = (products) => {
  const container = document.getElementById("product-container");
  if (!container) return; // safety check
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col">
        <img src="${product.image}" class="h-44 object-contain mx-auto mb-4" />

        <div class="flex justify-between items-center mb-2">
          <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
            ${product.category}
          </span>
          <span class="text-sm text-gray-500">
            ⭐ ${product.rating.rate} (${product.rating.count})
          </span>
        </div>

        <h3 class="font-semibold mb-2">
          ${product.title.substring(0, 20)}${product.title.length > 17 ? "..." : ""}
        </h3>

        <p class="font-bold mb-4">$${product.price}</p>

        <div class="flex gap-3 mt-auto">
          <button class="flex-1 border rounded-md py-2 hover:bg-gray-100">
            <i class="fa-solid fa-eye"></i> Details
          </button>

          <button class="flex-1 bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700">
            <i class="fa-solid fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
};


// 3️ Load Home Page Products (first 3)
const loadHomeProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data.slice(0, 3))); // show first 3
};


// 4️ Filter Products by Category
const filterProducts = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => displayProducts(data));
};

// 5️ Load All Products (for Product page)
const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data));
};


// 6️ Start App
window.addEventListener("DOMContentLoaded", () => {
  loadCategories();    // category buttons
  loadHomeProducts();  // home page → first 3 products
});
