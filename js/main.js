
// =================================
// 3-D ENGINEERS
// MAIN JAVASCRIPT
// =================================

// Update footer year automatically

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
