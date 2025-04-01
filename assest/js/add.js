document.querySelectorAll(".addToFav").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("click")
        let icon = this.querySelector(".heart");
        if (icon.style.color == 'white') {
            icon.style.color = 'red';
        }
        else {
            icon.style.color = 'white'
        }
    });
});

document.querySelectorAll(".shoppingCart").forEach(cartIcon => {
    cartIcon.parentElement.parentElement.addEventListener("click", function (event) {
        event.preventDefault();
        let icon = this.querySelector(".shoppingCart");
        let originalHTML = icon.outerHTML;
        icon.outerHTML = '<i class="fas fa-circle-check shoppingCart"></i>';
        setTimeout(() => {
            this.querySelector(".shoppingCart").outerHTML = originalHTML;
        }, 3000);
    });
});



