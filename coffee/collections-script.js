const openBlackCoffeBox = document.querySelector('.black-coffe-title i')
const openInstantCoffeBox = document.querySelector('.instant-coffe-title i')
const blackCoffeList = document.querySelector('.black-coffe-list ul')
const instantCoffeList = document.querySelector('.instant-coffe-list ul')
const openCategories = document.querySelectorAll('.category-title i')

const categoryRightArrows = document.querySelectorAll('.right-arrow img')
const categoryLeftArrows = document.querySelectorAll('.left-arrow img')
const allSlides = document.querySelectorAll('.bestseller-content-item')
const slideContainer = document.querySelector('.bestseller-content')
let indexCurrentSlide = 0;
const viewModes = document.querySelectorAll('.viewmode span')
const productContainer = document.querySelector('.product-item')
const priceList = document.querySelector('.show-quantity select')
const featuredList = document.querySelector('.show-featured select')

const overlay = document.querySelector('.overlay');
const barMenu = document.querySelector('.navbar-mobile-menu i')
const sideBar = document.querySelector('.sidebar')
const cartIconMobile = document.querySelector('.navbar-mobile-cart i')
const cartIcon = document.querySelector('.navbar-cart');
const cardBox = document.querySelector('.heading-cart');
const times = document.querySelector('.times');
const timesIcon = document.querySelector('.sidebar-times')






const data = [
    {
        name: 'Decaffeinated Coffe',
        description: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullam..',
        price: 238,
        img: './image/banner11.jpg',
        imgWishlist: './image/banner12.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Roasted Coffe',
        description: 'Tem tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullam...',
        price: 278,
        img: './image/banner21.jpg',
        imgWishlist: './image/banner17.jpg'
    },
    {
        name: 'Gold Filter Coffe<',
        description: 'Leaf tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 278,
        img: './image/banner16.jpg',
        imgWishlist: './image/banner17.jpg'
    },
    {
        name: 'Xtra Roasted Coffe',
        description: 'Drink tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 298,
        img: './image/banner17.jpg',
        imgWishlist: './image/banner19.jpg'
    },
    {
        name: 'Roasted Coffe',
        description: 'Tem tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 278,
        img: './image/banner21.jpg',
        imgWishlist: './image/banner17.jpg'
    },
    {
        name: 'Rich Aroma Coffe',
        description: 'Tem tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 278,
        img: './image/banner18.jpg',
        imgWishlist: './image/banner19.jpg'
    },
    {
        name: 'Special Strong Coffe',
        description: 'Stro tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor',
        price: 268,
        img: './image/banner12.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
    {
        name: 'Dried Pure Instant Coffe',
        description: 'Gani tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ulla...',
        price: 248,
        img: './image/banner9.jpg',
        imgWishlist: './image/banner10.jpg'
    },
]
var productQuantity = 8;

featuredList.onchange = e => {
    productContainer.innerHTML = '';
    switch (e.target.value) {
        case 'price-low-high':
            data.sort((a,b) => a.price > b.price ? 1 : -1)
            break;
        case 'price-high-low':
            data.sort((a,b) => a.price < b.price ? 1 : -1)
            break;
        case 'name-a-z':
            data.sort((a,b) => a.name > b.name ? 1 : -1)
            break;
        case 'name-z-a':
            data.sort((a,b) => a.name < b.name ? 1 : -1)
            break;
    }
    renderProduct(productQuantity)
}



barMenu.onclick = e => {
    sideBar.classList.add('active')
    overlay.classList.add('active')
}
timesIcon.onclick = e => {
    sideBar.classList.remove('active')
    overlay.classList.remove('active')
}
cartIcon.onclick = e => {
    cardBox.classList.add('active')
    overlay.classList.add('active')
}
cartIconMobile.onclick = e => {
    cardBox.classList.add('active')
    overlay.classList.add('active')
}
times.onclick = e => {
    cardBox.classList.remove('active')
    overlay.classList.remove('active')
}
overlay.onclick = e => {
    if (sideBar.classList.contains('active') ) {
        sideBar.classList.remove('active')
    } else if (cardBox.classList.contains('active')) {
        cardBox.classList.remove('active')
    }
    overlay.classList.remove('active')
}



priceList.onchange = e => {
    productQuantity = parseInt(e.target.value);
    productContainer.innerHTML = '';
    renderProduct(productQuantity)
}


const renderProduct = productQuantity => {
    for (let i = 0; i < productQuantity ; i++){
        var product = document.createElement('div')
        product.classList.add('product')
        product.innerHTML = `
        <div class="product-image">
        <img src="${data[i].img}" alt="">
        <div class="wishlist">
            <div class="image-wishlist">
                <img src="${data[i].imgWishlist}" alt="">
            </div>
            <a href="#" class="option">Select options</a>
            <div class="wishlist-tool">
                <div class="heart">
                    <a href="#"><i class="fas fa-heart"></i></a>
                </div>
                <div class="quickview">
                    <a href="#"><i class="fas fa-eye"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="product-content">
        <span class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </span>
        <h6>${data[i].name}</h6>
        <p>${data[i].description}</p>
        <p id="price">RS. ${data[i].price}.00</p>
    </div>
        `
    productContainer.appendChild(product)
    }
}

openBlackCoffeBox.onclick = e => {
    blackCoffeList.classList.toggle('active')
    openBlackCoffeBox.classList.toggle('active')
}
openInstantCoffeBox.onclick = e => {
    instantCoffeList.classList.toggle('active')
    openInstantCoffeBox.classList.toggle('active')
}

openCategories.forEach(openCategory => {
    openCategory.onclick = e => {
        openCategory.classList.toggle('active')
        openCategory.parentElement.parentElement.querySelector('.list').classList.toggle('active')
        console.log(e.target)
    }
})

const next = e => {
    indexCurrentSlide = (indexCurrentSlide + 1) % allSlides.length
    slideContainer.style.transform = `translateX(${-indexCurrentSlide * 280}px)`
}
const prev = e => {
    indexCurrentSlide = (indexCurrentSlide - 1 + allSlides.length) % allSlides.length
    slideContainer.style.transform = `translateX(${-indexCurrentSlide * 280}px)`
}

categoryRightArrows.forEach(arrow => arrow.onclick = next)
categoryLeftArrows.forEach(arrow => arrow.onclick = prev)


viewModes.forEach(mode => {
    mode.onclick = e => {
        document.querySelector('.viewmode span.active').classList.remove('active')
        mode.classList.add('active')
        switch (e.target.dataset.mode){
            case '1':
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-4-items')){
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-5-items')) {
                    productContainer.classList.remove('product-5-items')
                }
                productContainer.classList.add('product-2-items')
                break;
            case '2':
                if (productContainer.classList.contains('product-2-items')){
                    productContainer.classList.remove('product-2-items')
                }
                if (productContainer.classList.contains('product-4-items')){
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-5-items')) {
                    productContainer.classList.remove('product-5-items')
                }
                productContainer.classList.add('product-3-items')
                break;
            case '3':
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-5-items')){
                    productContainer.classList.remove('product-5-items')
                }
                if (productContainer.classList.contains('product-2-items')) {
                    productContainer.classList.remove('product-2-items')
                }
                productContainer.classList.add('product-4-items')
                break;
            case '4':
                if (productContainer.classList.contains('product-4-items')){
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-2-items')) {
                    productContainer.classList.remove('product-2-items')
                }
                productContainer.classList.add('product-5-items')
                break;
            default:
                if (productContainer.classList.contains('product-2-items')){
                    productContainer.classList.remove('product-2-items')
                }
                if (productContainer.classList.contains('product-3-items')){
                    productContainer.classList.remove('product-3-items')
                }
                if (productContainer.classList.contains('product-4-items')) {
                    productContainer.classList.remove('product-4-items')
                }
                if (productContainer.classList.contains('product-5-items')) {
                    productContainer.classList.remove('product-5-items')
                }
                break;
        }
    }
})