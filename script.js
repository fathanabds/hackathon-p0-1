let products = [
  { name: 'Spotify', price: 55000, desc: 'Spotify adalah layanan musik digital yang memberi Anda akses ke jutaan lagu.' },
  { name: 'Netflix', price: 60000, desc: 'Tonton film & acara TV Netflix secara online atau streaming langsung ke smart TV, konsol game, PC, Mac, ponsel, tablet, dan lainnya.' },
];

const namaProduct = document.getElementById('namaProduct');
const hargaProduct = document.getElementById('hargaProduct');
const descProduct = document.getElementById('descProduct');
const addProductBtn = document.getElementById('addProductBtn');
// tulis script js sesuai dengan fitur masing-masing di bawah ini
let productsList = document.getElementById('listProduct');
products.forEach((product) => {
  let makeDiv = document.createElement('div');
  makeDiv.className = 'product';
  makeDiv.innerHTML = `
      <div class = imgHeader>
        <img src = "img/a-simple-cloud-logo-or-icon-design-vector-removebg-preview (1).png"/>
      </div>
      <div class = "productHeader">
          <label for = "proImg">${product.name}</label>

      </div>
      <div class = "harga">
          <p>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)} /bulan</p>
      </div>

      <div class = "desc">
          <p>${product.desc}</p>
      </div>

      <div class = "buttonDiList">
          <button class="button-82-pushable" role="button">
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text">
                  Pesan
              </span>
          </button>
      </div>
      
      `;
  listProduct.appendChild(makeDiv);
});



