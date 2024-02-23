const datas = [
    {
        id: 1,
        nama: 'ayam bakar sambal limo',
        harga: 23000,
        kategory: 'makanan'
    },
    {
        id: 2,
        nama: 'ayam goreng sambal mata',
        harga: 21000,
        kategory: 'makanan'
    },
    {
        id: 3,
        nama: 'mie ayam pangsit',
        harga: 20000,
        kategory: 'makanan'
    },
    {
        id: 4,
        nama: 'nasi goreng biasa',
        harga: 10000,
        kategory: 'makanan'
    },
    {
        id: 5,
        nama: 'nasi goreng spesial',
        harga: 30000,
        kategory: 'makanan'
    },
    {
        id: 6,
        nama: 'kue kukus',
        harga: 8000,
        kategory: 'makanan'
    },
    {
        id: 7,
        nama: 'es teh',
        harga: 4000,
        kategory: 'minuman'
    },
    {
        id: 8,
        nama: 'jus buah segar',
        harga: 15000,
        kategory: 'minuman'
    },
    {
        id: 9,
        nama: 'es jeruk',
        harga: 5000,
        kategory: 'minuman'
    },
    {
        id: 10,
        nama: 'aneka seafood porsi biasa',
        harga: 25000,
        kategory: 'makanan'
    },
    {
        id: 11,
        nama: 'aneka seafood porsi spesial',
        harga: 80000,
        kategory: 'makanan'
    },
    {
        id: 12,
        nama: 'es josua',
        harga: 10000,
        kategory: 'minuman'
    },
    {
        id: 13,
        nama: 'es kelapa muda',
        harga: 7000,
        kategory: 'minuman'
    },
    {
        id: 14,
        nama: 'pudding buah spesial',
        harga: 15000,
        kategory: 'makanan'
    },
    {
        id: 15,
        nama: 'aneka kopi',
        harga: 8000,
        kategory: 'minuman'
    },

];


function displayMenu(datas) {
    let dataMenu = document.querySelector('.data-menu');

    datas.forEach((data) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '16rem';

        card.innerHTML = `  <img src="ayam-panggang.jpg" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${data.nama}</h5>
                                <p class="card-text">Rp.${data.harga}</p>
                                <a href="#" class="btn btn-primary pesan" onclick='transaction()'>Pesan</a>
                            </div>`;

        dataMenu.appendChild(card);
    });
}

displayMenu(datas);


function category() {
    let makanan = document.querySelector('.makanan');
    let minuman = document.querySelector('.minuman');
    let dataMenu = document.querySelector('.data-menu');
    let menu = document.querySelector('.menu');

    makanan.addEventListener('click', function() {
        let newDatas = datas.filter(data => data.kategory === 'makanan' );

        dataMenu.innerHTML = '';
        displayMenu(newDatas);
        menu.innerHTML = 'Daftar Makanan';

        minuman.style.backgroundColor = 'white';
        minuman.style.color = 'black';
        
        this.style.backgroundColor = 'orange';
        this.style.color = 'white';
    })

    minuman.addEventListener('click', function() {
        let newDatas = datas.filter(data => data.kategory === 'minuman' );

        dataMenu.innerHTML = '';
        displayMenu(newDatas);
        menu.innerHTML = 'Daftar Minuman';

        makanan.style.backgroundColor = 'white';
        makanan.style.color = 'black';

        this.style.backgroundColor = 'orange';
        this.style.color = 'white';
    })

}

category();

function transaction(datas) {

    let dataTransactions = [];

    let pesan = document.querySelectorAll('.pesan');

    // pesan.forEach(p => {
    //     p.addEventListener('click', function(e) {
    //         e.preventDefault();
    
    //         let pesanText = p.previousSibling.previousSibling.previousSibling.previousSibling;

    //         datas.forEach(data => {
    //             if(data.nama === pesanText.textContent) {
    //                 dataTransactions.push(data);

    //                 console.log(dataTransactions);
    //             }
    //         });

    //         dataTransactions.forEach(trans => {
                
    //             if(!trans.id) {
    //                 let list = document.createElement('li');
    //                 list.classList.add('list-group-item');
    //                 list.classList.add('d-flex');
    //                 list.classList.add('justify-content-between');
    //                 list.classList.add('align-items-start');
    
    //                 list.innerHTML = `<div class="ms-2 me-auto">
    //                                         <div class="fw-bold">${trans.nama}</div>
    //                                         Rp. ${trans.harga}
    //                                         </div>
    //                                         <div class="d-flex gap-2 align-items-center bg-secondary text-light border py-2 px-2">
    //                                             <button class="btn btn-sm btn-warning">+</button>
    //                                             <h5>0</h5>
    //                                             <button class="btn btn-sm btn-warning">-</button>
    //                                         </div>`;
    //                 let listTransaction = document.querySelector('.list-transaction');
    //                 listTransaction.appendChild(list);
    //             }
    //         });
    //     });
    // });

}

transaction(datas);