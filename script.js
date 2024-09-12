let products = [
    { name: 'Spotify', price: 54990, desc: 'Spotify adalah layanan musik digital yang memberi Anda akses ke jutaan lagu.' },
    { name: 'Netflix', price: 54000, desc: 'Tonton film & acara TV Netflix secara online atau streaming langsung ke smart TV, konsol game, PC, Mac, ponsel, tablet, dan lainnya.' },
  ]
  function renderProducts() {
    let productsList = document.getElementById("listProduct");

    // gua tambahin di sini
    productsList.innerHTML = ''; 

    products.forEach((product, index) => {
        let makeDiv = document.createElement('div');
        makeDiv.className = 'product';
        makeDiv.innerHTML = `
            <div class="imgHeader">
                <img src="img/a-simple-cloud-logo-or-icon-design-vector-removebg-preview (1).png" alt="${product.name}"/>
            </div>
            <div class="productHeader">
                <label for="proImg">${product.name}</label>
            </div>
            <div class="harga">
                <p>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)} /bulan</p>
            </div>
            <div class="desc">
                <p>${product.desc}</p>
            </div>
            <div class="buttonDiList">
                <button class="button-82-pushable" role="button" onclick="deleteItem(${index})">
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                        Delete
                    </span>
                </button>
            </div>
        `;
        productsList.appendChild(makeDiv);
    });
}

function deleteItem(index) {
    
   
        products.splice(index, 1); 
        renderProducts(); 
    
}


renderProducts();
 