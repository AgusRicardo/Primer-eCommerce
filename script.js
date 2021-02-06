let pageLoading = document.getElementById('page-loading')
let pageIndex = document.getElementById('page-index')
let pageRopaMasculina = document.getElementById('page-ropa-masculina')
let pageRopaFemenina = document.getElementById('page-ropa-femenina')
let pageElectronica = document.getElementById('page-electronica')
let pageJoyas = document.getElementById('page-joyas')



// Cards Ropa masculina
let btnRopaMasculina = document.getElementById('btn-ropa-masculina').addEventListener('click', function () {
    pageLoading.style.display = 'flex'
    pageIndex.style.display = 'none'
    setTimeout(function (){
        fetch('https://fakestoreapi.com/products/category/men clothing')
        .then(res=>res.json())
        .then(res=>{
        pageRopaMasculina.style.display = 'flex'
        pageLoading.style.display = 'none'
        let aux = ``
        let cardsRopaMasculina = document.getElementById('cards-ropa-masculina')
        for (ropaM of res) {
            aux += `
            <div class="card-group">
            <div class="card col-3">
                <img src=${ropaM.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${ropaM.title}</h5>
                    <p class="card-text">${ropaM.description}</p>
                    <p class="card-text">$${ropaM.price}</p>
                    <button type="button" class="btn btn-primary btn-ropa-masculina" data-toggle="modal" >Ver</button>
                    <button type="button" class="btn btn-primary btn-ropa-masculina" data-toggle="modal" >Agregar al carrito</button>
                </div>
            </div>
            `
        } 
        cardsRopaMasculina.innerHTML = aux
        })
    }, 1000)
})

// Cards Ropa femenina
let btnRopaFemenina = document.getElementById('btn-ropa-femenina').addEventListener('click', function () {
    pageLoading.style.display = 'flex'
    pageIndex.style.display = 'none'
    setTimeout(function (){
        fetch('https://fakestoreapi.com/products/category/women clothing')
        .then(res=>res.json())
        .then(res=>{
        pageRopaFemenina.style.display = 'flex'
        pageLoading.style.display = 'none'
        let aux = ``
        let cardsRopaFemenina = document.getElementById('cards-ropa-femenina')
        for (ropaF of res) {
            aux += `
            <div class="card-group">
            <div class="card">
                <img src=${ropaF.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${ropaF.title}</h5>
                    <p class="card-text">${ropaF.description}</p>
                    <p class="card-text">$${ropaF.price}</p>
                    <button type="button" class="btn btn-primary btn-ropa-femenina" data-toggle="modal" >Ver</button>
                    <button type="button" class="btn btn-primary btn-ropa-femenina" data-toggle="modal" >Agregar al carrito</button>
                </div>
            </div>
            `
        } 
        cardsRopaFemenina.innerHTML = aux
        })
    }, 1000)
})

// Card Electronica
let btnElectronica = document.getElementById('btn-electronica').addEventListener('click', function () {
    pageLoading.style.display = 'flex'
    pageIndex.style.display = 'none'
    setTimeout(function (){
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(res=>{
        pageElectronica.style.display = 'flex'
        pageLoading.style.display = 'none'
        let aux = ``
        let cardsElectronica = document.getElementById('cards-electronica')
        for (elect of res) {
            aux += `
            <div class="card-group">
            <div class="card col-2">
                <img src=${elect.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${elect.title}</h5>
                    <p class="card-text">${elect.description}</p>
                    <p class="card-text">$${elect.price}</p>
                    <button type="button" class="btn btn-primary btn-electronica" data-toggle="modal" >Ver</button>
                    <button type="button" class="btn btn-primary btn-electronica" data-toggle="modal" >Agregar al carrito</button>
                </div>
            </div>
            `
        } 
        cardsElectronica.innerHTML = aux
        })
    }, 1000)
})

// Card Joyas
let btnJoyas = document.getElementById('btn-joyeria').addEventListener('click', function () {
    pageLoading.style.display = 'flex'
    pageIndex.style.display = 'none'
    setTimeout(function (){
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(res=>{
        pageJoyas.style.display = 'flex'
        pageLoading.style.display = 'none'
        let aux = ``
        let cardsJoyas = document.getElementById('cards-joyas')
        for (joyas of res) {
            aux += `
            <div class="card-group">
            <div class="card col-3">
                <img src=${joyas.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${joyas.title}</h5>
                    <p class="card-text">${joyas.description}</p>
                    <p class="card-text">$${joyas.price}</p>
                    <button type="button" class="btn btn-primary btn-joyas" data-toggle="modal" >Ver</button>
                    <button type="button" class="btn btn-primary btn-joyas" data-toggle="modal" >Agregar al carrito</button>
                </div>
            </div>
            `
        } 
        cardsJoyas.innerHTML = aux
        })
    }, 1000)
})




















