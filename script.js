function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.querySelectorAll('section');
    
    // Hide all sections first
    sections.forEach(function(sec) {
        sec.style.display = 'none';
    });

    // Show the clicked section
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"

// Function to open a specific pop-up modal
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
    }
}

// Function to close a specific pop-up modal
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
}

// Close the modal if the user clicks outside the content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.popup-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
