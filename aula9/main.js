const submission = document.querySelector("form");

submission.addEventListener("submit", function(e) {


    e.preventDefault();

    const ano = document.querySelector("#year");

    const videoId = "GB_S2qFh5lU";

    const wrapper = document.querySelector(".video");



    if ((2020 - ano.value) >= 18) {
        document.querySelector(".video").style.backgroundBlendMode = "multiply";
        wrapper.innerHTML = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    }


});