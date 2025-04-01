let loader = document.querySelector('.loader')

window.addEventListener('load', function customLoader (event) {
    loader.className += ' hidden'  
})


document.addEventListener('DOMContentLoaded', function(){
    const password = document.getElementById('inputPass')
    const eye = document.getElementById('eye')
    eye.addEventListener('click', function(){
        if (password.type == 'password') {
            password.type = 'text'
            eye.classList.remove("bi-eye-fill");
            eye.classList.add("bi-eye-slash-fill");
        } else {
            password.type = 'password'
            eye.classList.remove("bi-eye-slash-fill");
            eye.classList.add("bi-eye-fill");
        }
    })
})

$('.pagination-inner a').on('click', function() {
    $(this).siblings().removeClass('pagination-active');
    $(this).addClass('pagination-active');
})



document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    let blogDiv = document.getElementById("blogDiv");
    let navbarCollapse = document.getElementById("navbarSupportedContent");

    navbarToggler.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            blogDiv.classList.remove("d-none");
        } else {
            blogDiv.classList.add("d-none");
        }
    });

    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        blogDiv.classList.remove("d-none");
    });
});





function showImage(src) {
    document.getElementById('mainImage').src = src;
}






$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        rtl:true,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });   
});






var rangeOne = document.querySelector('input[name="rangeOne"]'),
    rangeTwo = document.querySelector('input[name="rangeTwo"]'),
    outputOne = document.querySelector('.outputOne'),
    outputTwo = document.querySelector('.outputTwo'),
    inclRange = document.querySelector('.incl-range'),
    updateView = function () {
      if (this.getAttribute('name') === 'rangeOne') {
        outputOne.innerHTML = this.value;
        outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
      } else {
        outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
        outputTwo.innerHTML = this.value
      }
      if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
        inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
      } else {
        inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
      }
    };
  document.addEventListener('DOMContentLoaded', function () {
    updateView.call(rangeOne);
    updateView.call(rangeTwo);
    $('input[type="range"]').on('mouseup', function() {
      this.blur();
    }).on('mousedown input', function () {
      updateView.call(this);
    });
  });






addToCartButton = document.querySelectorAll(".add-to-cart-button");
document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        addToCartButton.classList.add('added');
        setTimeout(function(){
            addToCartButton.classList.remove('added');
        }, 2000);
    });
});






let stepperInput = {
    el:document.querySelector(".stepper-input input"),
    plusBtn:document.querySelector(".stepper-input .input .plus-btn"),
    minusBtn:document.querySelector(".stepper-input .input .minus-btn"),
    list:document.querySelector(".stepper-input .input .list")
  };
  
  stepperInput.min = parseInt(stepperInput.el.getAttribute("min"));
  stepperInput.max = parseInt(stepperInput.el.getAttribute("max"));
  stepperInput.value = parseInt(stepperInput.el.getAttribute("value"));
  
  for(let i=stepperInput.min;i<=stepperInput.max;i++){
    stepperInput.list.innerHTML += `<span>${i}</span>`;
  }
  
  stepperInput.list.style.marginTop = `-${stepperInput.value*35}px`;
  stepperInput.list.style.transition = `all 300ms ease-in-out`;
  
  stepperInput.minusBtn.addEventListener("click",function(){
    let value = parseInt(stepperInput.el.getAttribute("value"));
    if(value != stepperInput.min){
      value--;
      stepperInput.el.setAttribute("value",value);
      stepperInput.list.style.marginTop = `-${value*35}px`;
    }
  });
  
  stepperInput.plusBtn.addEventListener("click",function(){
    let value = parseInt(stepperInput.el.getAttribute("value"));
    if(value != stepperInput.max){
      value++;
      stepperInput.el.setAttribute("value",value);
      stepperInput.list.style.marginTop = `-${value*35}px`;
    }
  });







