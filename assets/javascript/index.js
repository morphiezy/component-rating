const buttonRating = document.querySelectorAll("button[data-rating]");
const submitBtn = document.getElementById("submit");
let rating = null;


const updateButtonRating = (addListener = true) => {

    buttonRating.forEach((button) => {
        
        const rate = button.dataset.rating;

        if (rating === rate) button.classList.add("btn-rating-selected");
        else button.classList.remove("btn-rating-selected");
        
        if(addListener) {

            submitBtn.disabled = true

            button.addEventListener("click", () => {
                if (rating === rate) {
                    button.classList.remove("btn-rating-selected");
                    rating = null;
                    return submitBtn.disabled = true;
                } 
                else {
                    rating = rate;
                    submitBtn.disabled = false
                    return updateButtonRating(false);
                }
            });

        }

    });

};


const renderScreen = (targetScreen, animation) => {

    const screens = document.querySelectorAll('[data-screen]');
    
    screens.forEach(view => {
        const type = view.dataset.screen;

        if(type === targetScreen) {
            view.classList.add(animation);
            view.classList.remove('hidden');
        }
        else {
            view.classList.add('hidden');
            view.classList.value = view.classList.value.replace(/animate(-[\w]+)+/,"").trim();
        }
    })

}

const onSubmit = () => {
    
    const userRating = document.getElementById('user-rating');
    userRating.innerText = rating;
    renderScreen('thank-you', 'animate-slide-z');

    setTimeout(()=> {
        renderScreen('rating', 'animate-slide-y');
    },5000)

    rating = null;
    return updateButtonRating(false)
}




document.addEventListener("DOMContentLoaded",updateButtonRating);
submitBtn.addEventListener('click',onSubmit)