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
                </div>
            `;

            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});
