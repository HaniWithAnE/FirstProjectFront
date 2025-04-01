document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btnFilter");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
          console.log("kfoejfioejf")
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});