(function () {
    "use strict()";

    const catContainer = document.getElementById("cat-container");
    const dogContainer = document.getElementById("dog-container");
    const cowContainer = document.getElementById("cow-container");
    
    const catShow = document.getElementById("cat-reveal");
    const dogShow = document.getElementById("dog-reveal");
    const cowShow = document.getElementById("cow-reveal");

    const catHide = document.getElementById("cat-hide");
    const dogHide = document.getElementById("dog-hide");
    const cowHide = document.getElementById("cow-hide");

    // Show button event handlers
    catShow.addEventListener("click", () => {
        catContainer.classList.remove("hidden");
    });

    dogShow.addEventListener("click", () => {
        dogContainer.classList.remove("hidden");
    });

    cowShow.addEventListener("click", () => {
        cowContainer.classList.remove("hidden");
    });

    // Hide button event handlers
    catHide.addEventListener("click", () => {
        catContainer.classList.add("hidden");
    });

    dogHide.addEventListener("click", () => {
        dogContainer.classList.add("hidden");
    });

    cowHide.addEventListener("click", () => {
        cowContainer.classList.add("hidden");
    });
})();