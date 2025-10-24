// -------------------------------
// Actor Search Feature
// -------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.btn-sm');
    const searchInput = document.querySelector('#search');

    if (searchBtn && searchInput) {
        // Trigger search on button click
        searchBtn.addEventListener('click', () => {
            const actor = searchInput.value.trim();
            if (actor !== "") {
                // Open Google search for the actor
                const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(actor)}+actor`;
                window.open(googleSearchUrl, '_blank');

                // Clear the input and refocus
                searchInput.value = "";
                searchInput.focus();
            } else {
                alert("Please enter an actor's name!");
            }
        });

        // Trigger search when pressing Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
});
