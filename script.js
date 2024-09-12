let products = [
  {
    name: "Spotify",
    price: 54990,
    desc: "Spotify adalah layanan musik digital yang memberi Anda akses ke jutaan lagu.",
  },
  {
    name: "Netflix",
    price: 54000,
    desc: "Tonton film & acara TV Netflix secara online atau streaming langsung ke smart TV, konsol game, PC, Mac, ponsel, tablet, dan lainnya.",
  },
];
let productsList = document.getElementById("listProduct");
products.forEach((product, productIndex) => {
  let makeDiv = document.createElement("div");
  makeDiv.className = "product";
  makeDiv.innerHTML = `
        <div class = imgHeader>
          <img src = "img/a-simple-cloud-logo-or-icon-design-vector-removebg-preview (1).png"/>
        </div>
        <div class = "productHeader">
            <label id ="product-name-${productIndex}" for = "proImg">${
    product.name
  }</label>
  
        </div>
        <div class = "harga">
            <p> <span id ="product-price-${productIndex}">${new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
    }
  ).format(product.price)} </span> /bulan</p>
        </div>
  
        <div class = "desc">
            <p id ="product-description-${productIndex}">${product.desc}</p>
        </div>
  
        <div class = "buttonDiList">
            <button class="button-82-pushable" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                    Pesan
                </span>
            </button>
            <button class="button-update-product button-82-pushable" id="button-update-product-${productIndex}" onclick="handleOpenModalUpdateProduct(
    ${productIndex}
  )">
            <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                    Update
                </span>
            </button>
        </div>
        
        `;
  listProduct.appendChild(makeDiv);
});
function updateProductDetails(index, updatedData) {
  // Mengganti data produk yang ada dengan data baru
  products[index] = {
    ...products[index],
    ...updatedData,
  };

  // Menghapus list produk yang lama dari DOM
  productsList.innerHTML = "";

  // Menampilkan produk yang sudah diperbarui
  products.forEach((product) => {
    let makeDiv = document.createElement("div");
    makeDiv.className = "product";
    makeDiv.innerHTML =
      // bagian html nya

      productsList.appendChild(makeDiv);
  });
}
// Tambah dari Alfin

// updateProductDetails(0, {
//   price: 50000, // Harga baru
//   desc: "Spotify Premium sekarang dengan harga lebih murah!", // Deskripsi baru
// });

let modal = document.getElementById("modal-update-product");
let activeProductIndex = -1;
function handleCloseModalUpdateProduct() {
  modal.style.display = "none";

  activeProductIndex = -1;
}

function handleOpenModalUpdateProduct(productIndex) {
  modal.style.display = "block";
  activeProductIndex = productIndex;

  let product = products.find((product, index) => index === productIndex);
  let inputName = document.getElementById("name");
  inputName.value = product.name;

  let inputPrice = document.getElementById("price");
  inputPrice.value = product.price;

  let inputDescription = document.getElementById("description");
  inputDescription.value = product.desc;
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document
  .getElementById("form-update-product")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let inputName = document.getElementById("name");
    let inputPrice = document.getElementById("price");
    let inputDescription = document.getElementById("description");
    let productName = document.getElementById(
      `product-name-${activeProductIndex}`
    );
    let productPrice = document.getElementById(
      `product-price-${activeProductIndex}`
    );
    let productDescription = document.getElementById(
      `product-desc-${activeProductIndex}`
    );

    productName.innerHTML = inputName.value;
    productPrice.innerHTML = inputPrice.value;
    productDescription.innerHTML = inputDescription.value;

    handleCloseModalUpdateProduct();
  });

//Tambah dari Alfin
