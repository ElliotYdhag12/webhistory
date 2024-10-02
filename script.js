const sliderImages = [
    {
        imgSrc: "https://picsum.photos/800/400?1",
        imgAlt: "Sample Image 1",
        pTxt: "This is a sample description text for the image 1.",
        btnSrc: "#",
        btnTxt: "Click Me"
    },
    {
        imgSrc: "https://picsum.photos/800/400?9",
        imgAlt: "SIMONBIMONPARONPUNG",
        pTxt: "Simon bimon är en neger",
        btnSrc: "#",
        btnTxt: "Neger"
    },
    {
        imgSrc: "https://picsum.photos/800/400?2",
        imgAlt: "Sample Image 2",
        pTxt: "This is a sample description text for the image 2.",
        btnSrc: "#",
        btnTxt: "Click Madajdajdlkajdlajdlkj"
    },
    {
        imgSrc: "https://picsum.photos/800/400?3",
        imgAlt: "Sample Image 3",
        pTxt: "This is a sample description text for the image 3.",
        btnSrc: "#",
        btnTxt: "Click Me"
    },
    {
        imgSrc: "https://picsum.photos/800/400?4",
        imgAlt: "Sample Image 4",
        pTxt: "This is a sample description text for the image 4.",
        btnSrc: "#",
        btnTxt: "Click Me"
    }
];

let currentIndex = 0; // Track the current index
let isSidebar = false;

const AddSliderImages = (sliderImages) => {
    const slider = document.getElementById("slider");
    slider.innerHTML = ''; // Clear existing content

    sliderImages.forEach(image => {
        const sliderContent = document.createElement("div");
        sliderContent.classList.add('slider-content');

        const sliderImg = document.createElement("img");
        sliderImg.src = image.imgSrc;
        sliderImg.alt = image.imgAlt;
        sliderImg.classList.add('slider-img');

        const sliderP = document.createElement("p");
        sliderP.textContent = image.pTxt;
        sliderP.classList.add('slider-p');

        const sliderButton = document.createElement("button");
        sliderButton.onclick = () => {
            alert("Button Clicked!");
        };
        sliderButton.textContent = image.btnTxt;
        sliderButton.classList.add('slider-btn');

        sliderContent.appendChild(sliderImg);
        sliderContent.appendChild(sliderP);
        sliderContent.appendChild(sliderButton);
        
        slider.appendChild(sliderContent);
    });
};

// Function to scroll the slider
const scrollSlider = (direction) => {
    const sliderContentElements = document.querySelectorAll(".slider-content");
    const totalSlides = sliderContentElements.length;

    // Update currentIndex based on direction
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides; // Loop back to start
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to end
    }
    const offset = -currentIndex * 100;

    const slider = document.getElementById("slider");
    slider.style.transform = `translateX(${offset}%)`;
};

// Automatically slide every 3 seconds
setInterval(() => {
    scrollSlider('next');
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
    AddSliderImages(sliderImages);

    // Add event listeners to buttons
    document.querySelector('.slider-container-left-btn').onclick = () => scrollSlider('prev');
    document.querySelector('.slider-container-right-btn').onclick = () => scrollSlider('next');
});

const hamBtn = document.getElementById("hamBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

hamBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar-activated');
    overlay.style.display = "block";
    document.body.style.overflowY = 'hidden';
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-activated');
    overlay.style.display = "none";
    document.body.style.overflowY = 'auto';
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-activated');
    overlay.style.display = "none";
    document.body.style.overflowY = 'auto';
});
