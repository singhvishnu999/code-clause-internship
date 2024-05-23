document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const gallery = document.getElementById("image-gallery");

    const images = [
        { src: "media/img1.jpg", category: "nature" },
        { src: "media/img2.jpg", category: "nature" },
        { src: "media/img3.jpg", category: "nature" },
        { src: "media/img6.jpg", category: "architecture" },
        { src: "media/img7.jpg", category: "architecture" },
        { src: "media/img9.jpg", category: "architecture" },
        { src: "media/img4.jpg", category: "nature" },
        { src: "media/img5.jpg", category: "nature" },
        { src: "media/sports1.jpg", category: "sport" },
        { src: "media/sports2.webp", category: "sport" },
        { src: "media/sports3.avif", category: "sport" },
        { src: "media/sports4.avif", category: "sport" },
        { src: "media/sports5.avif", category: "sport" },
        { src: "media/sports6.webp", category: "sport" },
        { src: "media/sports7.webp", category: "sport" },
        { src: "media/sports8.webp", category: "sport" },
        { src: "media/sports9.webp", category: "sport" },
        { src: "media/img4.jpg", category: "nature" },
        { src: "media/img5.jpg", category: "nature" },
        { src: "media/img6.jpg", category: "nature" },
        { src: "media/img7.jpg", category: "nature" },
        { src: "media/img8.jpg", category: "nature" },
        { src: "media/archi4.avif", category: "architecture" },
        { src: "media/animal1.avif", category: "animals" },
        { src: "media/animal3.avif", category: "animals" },
        { src: "media/animal4.webp", category: "animals" },
        { src: "media/animal5.jpeg", category: "animals" },
        { src: "media/animal2.jpg", category: "animals" },
        { src: "media/archi1.jpg", category: "architecture" },
        { src: "media/archi2.jpeg", category: "architecture" },
        { src: "media/archi3.jpg", category: "architecture" },
        { src: "media/archi4.avif", category: "architecture" },
        { src: "media/images.jpeg", category: "animals" },
        { src: "media/animal6.jpeg", category: "animals" },

    ];
    function displayImages(category) {
        gallery.innerHTML = "";
        if (category === "all") {
            images.forEach(image => createImage(image.src));
        } else {
            const filteredImages = images.filter(image => image.category === category);
            filteredImages.forEach(image => createImage(image.src));
        }
    }
    
    function createImage(src, caption) {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");
    
        const img = document.createElement("img");
        img.src = src;
    
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImage.src = this.src;
            captionText.innerHTML = caption;
        });
    
        imageItem.appendChild(img);
        gallery.appendChild(imageItem);
    }


    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            displayImages(category);
        });
    });
    displayImages("all");
});
