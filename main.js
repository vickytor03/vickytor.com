// NAV HAMBURGER MENU
function toggleMenu() {
    console.log ('works')
    var dropdownMenu = document.querySelector('.dropdownMenu');
    dropdownMenu.classList.toggle('active');
    console.log ('again')
}


// ARTIFEX VIDEO PLAYER!!!

function changeVideo(videoSource) {
    const videoPlayer = document.getElementById('artifexVideoPlayer');
    const videoSelectImages = document.querySelectorAll('.artifexVideoSelect img');

    // Reset borders for all images
    videoSelectImages.forEach(img => {
        img.style.border = 'none';
    });

    // Set border for the selected image
    for (let i = 0; i < videoSelectImages.length; i++) {
        if (videoSelectImages[i].getAttribute('onclick').includes(videoSource)) {
            videoSelectImages[i].style.border = '5px solid white';
            break;
        }
    }

    // Change video source and play
    videoPlayer.src = videoSource;
    videoPlayer.load();
    videoPlayer.play();
}

// Set border for the first image by default when the page loads
window.onload = function () {
    const firstVideo = document.querySelector('.artifexVideoSelect img');
    firstVideo.style.border = '5px solid white';
};


// loading screen
window.addEventListener('load', function() {
    // Hide the loader with a fade-out effect
    var loader = document.getElementById('loader');
    loader.style.opacity = '0'; // Start the fade-out
    setTimeout(function() {
      loader.style.display = 'none'; // Hide the loader after the fade-out
    }, 500); // Adjust this duration to match the transition duration
  
    // Show the content after the page is fully loaded
    var content = document.getElementById('content');
    content.style.display = 'block';
  });