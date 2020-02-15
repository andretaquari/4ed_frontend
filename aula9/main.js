const submission = document.querySelector("form");

submission.addEventListener("submit", function(e){


    e.preventDefault();

    const ano = document.querySelector("#year");

    const videoId = "GB_S2qFh5lU";
    
    const wrapper = document.querySelector(".video");

   

    if ( (2020 - ano.value) >= 18 ) {
        wrapper.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        document.querySelector(".popup").style.display = "none";
    } 


});

