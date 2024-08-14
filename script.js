document.addEventListener('DOMContentLoaded', function () {
    getData();

});

// JSON Data
const data = {
    "header": {
        "logoURL": "logo/Logo.png",
        "nav": [
            {
                "title": "Shop",
                "link": "#"
            },
            {
                "title": "Brands",
                "link": "#"
            },
            {
                "title": "Contact Us",
                "link": "#"
            }
        ],
        "showSignUpButton": true
    },
    "main_section": [
        {
            "product_list": [
                {
                    "title": "Exquisite Watches",
                    "desc": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
                    "tag1": "Gold Luxury, ",
                    "tag2": "Choose Us",
                    "price": "$499.00",
                    "imageURL": "img/watch1.png",
                    "background": "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"
                },
                {
                    "title": "Dainty Timepieces",
                    "desc": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
                    "tag1": "Silver Luxury, ",
                    "tag2": "Choose Us",
                    "price": "$469.00",
                    "imageURL": "img/watch2.png",
                    "background": "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"
                },
                {
                    "title": "Elegant Timepieces",
                    "desc": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
                    "tag1": "Choose Luxury, ",
                    "tag2": "Choose Us",
                    "price": "$529.00",
                    "imageURL": "img/watch3.png",
                    "background": "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"
                },
                {
                    "title": "Refined Timepieces",
                    "desc": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
                    "tag1": "Choose Luxury, ",
                    "tag2": "Choose Us",
                    "price": "$599.00",
                    "imageURL": "img/watch4.png",
                    "background": " linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"
                }
            ]
        }
    ]
};

// Fetch data (simulated with JSON data directly here)
const getData = async () => {
    console.log(data);

    createHeaderSection(data);
    createMainSection(data);
};

// Function to create header section
function createHeaderSection(data) {
    const headerData = data.header;
    const headerTag = document.querySelector('header');

    console.log(headerData);

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = headerData.logoURL;
    headerTag.appendChild(logo);

    // Create navigation links
    const nav = document.createElement('nav');
    headerData.nav.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.title;
        nav.appendChild(link);
    });
    headerTag.appendChild(nav);

    // Create sign-up button if showSignUpButton is true
    if (headerData.showSignUpButton) {
        const signUpButton = document.createElement('button');
        signUpButton.classList.add('btn');
        signUpButton.textContent = 'Sign up';
        nav.appendChild(signUpButton);
    }
}

// Function to create main section
function createMainSection(data) {
    const mainSectionData = data.main_section[0];
    // Create product list
    const productList = mainSectionData.product_list;
    console.log(productList);

    const splideSlideImg = document.querySelectorAll('.splide__slide img');
    productList.forEach((product, index) => {
        splideSlideImg[index].src = product.imageURL;
    });

    createElementsForDetails(productList);
}

function createElementsForDetails(details) {
    splide = new Splide('.splide', {
        type: 'loop', // Enable loop here
        perPage: 1,
        perMove: 1,
        autoplay: false,
        interval: 5000,
        pauseOnHover: true,
        easing: 'linear',
        arrows: true,
        pagination: false,
    }).mount();

    // Update product details initially
    updateProductDetails(details);

    // Listen for slide change event
    splide.on('moved', () => updateProductDetails(details));
}

function updateProductDetails(details) {
    console.log(details);
    let title = document.querySelector(".title");
    let tag1 = document.querySelector(".tag1");
    let tag2 = document.querySelector(".tag2");
    let desc = document.querySelector(".desc");
    let price = document.querySelector(".price");

    const visibleSlideIndex = splide.index;
    console.log(details[visibleSlideIndex].tag2);

    title.innerHTML = details[visibleSlideIndex].title;
    tag1.innerHTML = details[visibleSlideIndex].tag1;
    tag2.innerHTML = details[visibleSlideIndex].tag2;
    desc.innerHTML = details[visibleSlideIndex].desc;
    price.innerHTML = details[visibleSlideIndex].price;
    document.body.style.background = details[visibleSlideIndex].background;
}
