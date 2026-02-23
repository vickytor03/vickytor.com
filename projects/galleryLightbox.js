document.addEventListener('DOMContentLoaded', function () {
  const galleryPics = document.querySelectorAll('.gallery-pic');

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // On mobile: replace src with high-res, disable lightbox
    galleryPics.forEach((img) => {
      const highres = img.dataset.highres;
      if (highres) {
        img.src = highres;
      }
    });

    // Optionally hide lightbox HTML completely
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.remove(); // Clean removal
    }

    return; // Don't set up lightbox interaction
  }

  // DESKTOP: normal lightbox behavior
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxDownload = document.getElementById('lightbox-download');
  const lightboxDownloadOriginal = document.getElementById('lightbox-download-original');

  let currentIndex = 0;

  const updateLightbox = (index) => {
    const img = galleryPics[index];
    const highres = img.dataset.highres || img.src;
    const original = img.dataset.originalSize;

    lightboxImg.src = highres;
    lightboxDownload.href = highres;

    if (original) {
      lightboxDownloadOriginal.href = original;
      lightboxDownloadOriginal.classList.remove('hidden');
    } else {
      lightboxDownloadOriginal.removeAttribute('href');
      lightboxDownloadOriginal.classList.add('hidden');
    }

    currentIndex = index;
  };

  galleryPics.forEach((img, index) => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      lightbox.classList.remove('hidden');
      updateLightbox(index);
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryPics.length) % galleryPics.length;
    updateLightbox(currentIndex);
  });

  lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryPics.length;
    updateLightbox(currentIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
    if (e.key === 'Escape') lightboxClose.click();
  });
});
