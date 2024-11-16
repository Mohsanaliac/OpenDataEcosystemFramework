<script>
// Function to toggle the visibility of the sections
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
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>