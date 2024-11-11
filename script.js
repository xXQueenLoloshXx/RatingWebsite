'use strict';


const card = document.querySelector("[data-card]");
const submitBtn = document.querySelector("[data-submit-btn]");
const ratingBtns = document.querySelectorAll("[data-rating-btn]");
const ratedValue = document.querySelector("[data-rated-value]");

let LastRatedValue = NaN;

for (let i = 0, len= ratingBtns.length; i < len; i++) {
    ratingBtns[i].addEventListener("click",function() {
        if(LastRatedValue) ratingBtns[LastRatedValue -1].classList.remove("selected");

        LastRatedValue= Number(this.textContent);
        this.classList.add("selected");
    });
}

submitBtn.addEventListener("click", function() {
    if (LastRatedValue) card.classList.add("rated");
    ratedValue.textContent = LastRatedValue;
});