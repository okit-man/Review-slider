import people from  "./data.js"

const container = document.querySelector(".slider-container");
const prvBtn = document.querySelector(".prv-btn");
const nextBtn = document.querySelector(".next-btn");


container.innerHTML = people.map((data, slideIndex) => {
    // destructuring our data
    const { name, profession, text, img } = data;
    
    // slider
    let position = "next"
    if (slideIndex === 0) {
        position = 'active'
    }
    if (slideIndex === people.length - 1) {
        position = 'last'
    }
    return ` <article class="slide ${position}" >
    <img src="${img}" class="img" alt="${name}">
                <h3>${name}</h3>
                <p class="title">${profession}</p>
                <p class="text">${text}</p>
                <div class="quote-icon">
                    <i class="fa-sharp fa-solid fa-quote-right"></i>
                    </div>
            </article>`;
}).join('');


const startSlider = (type) => {
    // get all classes
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");
    // moving in the direction of the right
    let next = active.nextElementSibling;
    // if we're at the last slide, go back to the first
    if (!next) {
        next = container.firstElementChild
    };
    
    // remove all classes
    active.classList.remove(["active"]);
    last.classList.remove(["last"]);
    next.classList.remove(["next"]);

    if (type === 'prev') {
        active.classList.add("next");
        last.classList.add("active")
        
        next = last.previousElementSibling
        // if we're at the first slide, go to the last 
        if (!next) {
            next = container.lastElementChild
        }
        next.classList.remove(["next"])
        next.classList.add("last")
        return
    };

    // add all new classes to each array
    active.classList.add("last");
    last.classList.add("next");
    next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSlider();
  
});

prvBtn.addEventListener("click", () => {
  startSlider('prev');
  
});