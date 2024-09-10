let products = [
  { name: 'Spotify', price: 54990, desc: 'Spotify adalah layanan musik digital yang memberi Anda akses ke jutaan lagu.' },
  { name: 'Netflix', price: 54000, desc: 'Tonton film & acara TV Netflix secara online atau streaming langsung ke smart TV, konsol game, PC, Mac, ponsel, tablet, dan lainnya.' },
]
let productsList = document.getElementById("listProduct")
products.forEach(product =>{
  let makeDiv = document.createElement('div')
  makeDiv.className = 'product'
  makeDiv.innerHTML =`
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
      
      `
  listProduct.appendChild(makeDiv)
})

//WITH IMAGE
// let products = [
//   { name: 'Spotify', price: 54990, image: 'img/Spotify_Primary_Logo_RGB_Green.png' },
//   { name: 'Netflix', price: 54000, image: 'img/netflix-transparent-netflix-free-free-png.webp' },
//   { name: 'Netflix', price: 54000, image: 'img/netflix-transparent-netflix-free-free-png.webp' },
//   { name: 'Netflix', price: 54000, image: 'img/netflix-transparent-netflix-free-free-png.webp' },
//   { name: 'Netflix', price: 54000, image: 'img/netflix-transparent-netflix-free-free-png.webp' },
//   { name: 'Netflix', price: 54000, image: 'img/netflix-transparent-netflix-free-free-png.webp' },
// ]
// let productsList = document.getElementById("listProduct")
// products.forEach(product =>{
//   let makeDiv = document.createElement('div')
//   makeDiv.className = 'product'
//   makeDiv.innerHTML =`
//       <div class = "productHeader">
//           <img src = "${product.image}" id = "proImg" alt = "${product.name}"/>
//           <label for = "proImg">${product.name}</label>
//       </div>
//       <div class = "harga">
//           <p>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)} /bulan</p>
//       </div>
//       <div class = "buttonDiList">
//           <button class="button-82-pushable" role="button">
//               <span class="button-82-shadow"></span>
//               <span class="button-82-edge"></span>
//               <span class="button-82-front text">
//                   Pesan
//               </span>
//           </button>
//       </div>
      
//       `
//   listProduct.appendChild(makeDiv)
// })