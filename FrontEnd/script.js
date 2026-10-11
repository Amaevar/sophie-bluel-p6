
fetch("http://localhost:5678/api/works")
    .then(function (response) {
        return response.json();
    })
    .then(function (works) {
        const gallery = document.querySelector(".gallery");

        works.forEach(function (work) {
            const figure = document.createElement("figure");

            const image = document.createElement("img");
            image.src = work.imageUrl;
            image.alt = work.title;

            const caption = document.createElement("figcaption");
            caption.textContent = work.title;

            figure.appendChild(image);
            figure.appendChild(caption);

            gallery.appendChild(figure);
        });
    });