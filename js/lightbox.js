// lightbox.js
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');

    images.forEach(function (image) {
        image.addEventListener('click', function (e) {
            e.preventDefault();

            const imageUrl = this.getAttribute('src');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${imageUrl}" alt="Lightbox Image">
                    <a class="close-button" href="#">Close</a>
                </div>
            `;

            document.body.appendChild(lightbox);

            lightbox.querySelector('.close-button').addEventListener('click', function (e) {
                e.preventDefault();
                document.body.removeChild(lightbox);
            });
        });
    });
});
