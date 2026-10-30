
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

fetch("http://localhost:5678/api/categories")
    .then(function (response) {
        return response.json();
    })
    .then(function (categories) {
        const categoriesContainer = document.querySelector(".categories");

        const allButton = document.createElement("button");
        allButton.textContent = "Tous";
        allButton.classList.add("filter-button", "active");

        categoriesContainer.appendChild(allButton);

        categories.forEach(function (category) {
            const button = document.createElement("button");

            button.textContent = category.name;
            button.classList.add("filter-button");

            categoriesContainer.appendChild(button);
        });
    });
