// Load YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.getElementsByTagName('head')[0].appendChild(tag);

var player;

// Function is called when YouTube API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function is called when the player is ready
function onPlayerReady(event) {
    // Set the playback quality to HD1080 or your preferred quality
    event.target.setPlaybackQuality('hd1080'); // You can use 'hd720', 'highres', etc.
    // Add an event listener for the sound toggle button
    document.getElementById('sound-toggle').addEventListener('click', function() {
        if (player.isMuted()) {
            player.unMute();  // Enable sound
            this.innerText = 'Mute';
        } else {
            player.mute();  // Disable sound
            this.innerText = 'Unmute';
        }
    });
}

$(document).ready(function() {
    // When you click on the "burger", switch class "nav-active" on the header and "burger-active" on the burger menu
    $(".burger").click(function(event) {
        $("header").toggleClass("nav-active");
        $(".container-menu").toggleClass("container-menu-active");
        $(this).toggleClass("burger-active");
        event.stopPropagation(); // Stop propagation when you click in the body
    });   
    

    // when you click anywhere inside the page (except inside the menu), we close the menu and reset burger shape
    $(document).click(function(event) {
        if (!$(event.target).closest(".burger").length) {
            $("header").removeClass("nav-active");
            $(".burger").removeClass("burger-active");
            $(".container-menu").removeClass("container-menu-active");
        }
    });

    $('.carousel').carousel();
});


//Responsive Caurosel Images: when in mobile they change

// Function to change image sources based on screen width (for this to work the mobile image needs to be named the same as the desktop image with '-mobile' added before the file extension)
function checkScreenWidth() {
    // Array of image IDs to handle
    const imageIds = ['responsiveImage02', 'responsiveImage03']; //add more images if needed

    // Loop through each image ID
    imageIds.forEach(id => {
        const image = document.getElementById(id);

        // Check if we've already stored the original desktop src
        if (!image.originalSrc) {
            image.originalSrc = image.src; // Store the original desktop image src
        }

        // Media query to check if screen width is 792px or less
        if (window.matchMedia("(max-width: 792px)").matches) {
            // Replace '.jpg' with '-mobile.jpg' for mobile image source
            image.src = image.originalSrc.replace('.jpg', '-mobile.jpg');
        } else {
            image.src = image.originalSrc; // Use the stored desktop image
        }
    });
}

// Run the function on page load and when window is resized
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;
