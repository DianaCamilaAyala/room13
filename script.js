function searchStories() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const categories = document.querySelectorAll('.category');

    let found = false;

    categories.forEach(category => {
        const stories = category.querySelectorAll('ul li a');
        stories.forEach(story => {
            if (story.textContent.toLowerCase().includes(searchTerm)) {
                found = true;
                alert(`Encontrado: ${story.textContent}`);
            }
        });
    });

    if (!found) {
        alert('No se encontraron coincidencias.');
    }
}
