function searchStories() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const categories = document.querySelectorAll('.category');

    let found = false;

    categories.forEach(category => {
        const stories = category.querySelectorAll('ul li a');
        stories.forEach(story => {
            if (story.innerText.toLowerCase().includes(searchTerm)) {
                window.location.href = story.href; // Redirige a la historia encontrada
                found = true;
            }
        });
    });

    if (!found) {
        alert("No se encontraron resultados para: " + searchTerm);
    }
}
