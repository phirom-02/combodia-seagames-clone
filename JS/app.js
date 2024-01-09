// =============================== toggle nav ===============================
// selector
const navMenu = document.querySelector('.mb--nav-menu');
const openMenu = document.querySelector('.burger');
const closeMenu = document.querySelector('.close');

// This will reveal the navigation menu when the openMenu is clicked
// as it remove the hidden class and add the hidden class to the hamburger button.
openMenu.addEventListener('click', () => {
        navMenu.classList.remove('hidden--nav-menu');
        closeMenu.classList.remove('nav--btn-hidden');
        openMenu.classList.add('nav--btn-hidden');
});

// This will hide the navigation menu when the closeMenu is clicked
// as it add the hidden class and remove the hidden class from the hamburger button.
closeMenu.addEventListener('click', () => {
    navMenu.classList.add('hidden--nav-menu')
    closeMenu.classList.add('nav--btn-hidden');
    openMenu.classList.remove('nav--btn-hidden')
});

// =============================== click button to reveal more small article card ===============================
// selector
const revealBtn = document.getElementById('show-more');
const smallCards = document.querySelectorAll('.small--article-card');

let revealStatus = 0;

// Create a new anchor element
let anchor= document.createElement('a');
// Set the href attribute of the anchor element
anchor.href = "news.html";
// Append the button element as a child of the anchor element
anchor.appendChild(revealBtn.cloneNode(true));


revealBtn.addEventListener('click', revealCard);

function revealCard(e) {
    if(revealStatus === 0) {
        smallCards.forEach(card => {
            if(card.classList.contains('hidden_card'))
                card.classList.remove('hidden_card');
        });
        revealStatus += 1;
    }
        
    if(revealStatus === 1) {
        // Replace the button element with the anchor element
        revealBtn.parentNode.replaceChild(anchor, revealBtn)
    }
}

// =============================== Infinite carousel switch ===============================
const wrapper = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".carousel-img").offsetWidth;
const arrowBtns = document.querySelectorAll(".carousel-container i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML); // get the whole html tag and its content
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    // if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 3000 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

