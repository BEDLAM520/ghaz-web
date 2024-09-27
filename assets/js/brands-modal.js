document.querySelectorAll('.brandsDiv').forEach(brandDiv => {
    brandDiv.addEventListener('click', function() {
        const brandName = this.getAttribute('data-brand-name');
        const brandExcerpt = this.getAttribute('data-brand-excerpt');
        const brandImageSrc = this.querySelector('img').src;
        const brandLink = this.getAttribute('data-brand-link'); 

        document.getElementById('brandModalLabel').innerText = brandName;
        document.getElementById('brandModalExcerpt').innerText = brandExcerpt;
        document.getElementById('brandModalImage').src = brandImageSrc;

        document.getElementById('brandModalLink').href = brandLink;

        const modal = new bootstrap.Modal(document.getElementById('brandModal'));
        modal.show();
    });
});
