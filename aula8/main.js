const button = document.querySelectorAll("button");

button.forEach(element => {
    
    element.addEventListener("click", function(e){

        //remove todas as classes
        button.forEach(el => {
          el.classList.remove('active');  
        });

        const color = e.target.getAttribute("data-color");

        e.target.classList.add('active');

        const image = document.querySelector(".car_image");

        image.setAttribute("src", `img/car-${color}.jpg`);

    })
});

