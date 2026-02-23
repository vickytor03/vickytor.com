function toggleDropdown(dropdownId, toggleId) {
    // Get all dropdowns and arrows
    var dropdowns = document.querySelectorAll('.dropdown-content');
    var arrows = document.querySelectorAll('.dropdown-arrow');

    // Loop through each dropdown and close if it's not the one being toggled
    dropdowns.forEach(function(dropdown) {
        if (dropdown.id !== dropdownId && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });

    // Loop through each arrow and reset rotation if it's not the one being toggled
    arrows.forEach(function(arrow) {
        var nextElem = arrow.parentNode.nextElementSibling;
        if (!nextElem) return; // Skip if there's no next sibling

        var arrowDropdownId = nextElem.id;
        if (arrowDropdownId !== dropdownId && arrow.classList.contains('rotate')) {
            arrow.classList.remove('rotate');
        }
    });

    // Toggle the clicked dropdown
    var currentDropdown = document.getElementById(dropdownId);
    if (currentDropdown) {
        currentDropdown.classList.toggle('show');
    }

    // Rotate the corresponding arrow
    var toggleElement = document.getElementById(toggleId);
    if (toggleElement) {
        var currentArrow = toggleElement.querySelector('.dropdown-arrow');
        if (currentArrow) {
            currentArrow.classList.toggle('rotate');
        }
    }
}

// Add event listener for stream-toggle if it exists
var streamToggle = document.getElementById('stream-toggle');
if (streamToggle) {
    streamToggle.addEventListener('click', function () {
        toggleDropdown('stream-dropdown', 'stream-toggle');
    });
}

// Add event listener for buy-toggle if it exists
var buyToggle = document.getElementById('buy-toggle');
if (buyToggle) {
    buyToggle.addEventListener('click', function () {
        toggleDropdown('buy-dropdown', 'buy-toggle');
    });
}