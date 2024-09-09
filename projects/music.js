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
        var arrowDropdownId = arrow.parentNode.nextElementSibling.id;
        if (arrowDropdownId !== dropdownId && arrow.classList.contains('rotate')) {
            arrow.classList.remove('rotate');
        }
    });

    // Toggle the clicked dropdown
    var currentDropdown = document.getElementById(dropdownId);
    currentDropdown.classList.toggle('show');

    // Rotate the corresponding arrow
    var currentArrow = document.getElementById(toggleId).querySelector('.dropdown-arrow');
    currentArrow.classList.toggle('rotate');
}

// Event listeners for the dropdown toggles
document.getElementById('stream-toggle').addEventListener('click', function() {
    toggleDropdown('stream-dropdown', 'stream-toggle');
});

document.getElementById('buy-toggle').addEventListener('click', function() {
    toggleDropdown('buy-dropdown', 'buy-toggle');
});
