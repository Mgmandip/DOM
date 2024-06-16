// Function to add a new book to the list
function addBook() {
    let bookName = prompt("Add new book Title:");

    if (bookName) {
        let listItem = document.createElement('li');
        listItem.textContent = bookName;
        listItem.addEventListener('click', toggleFavorite); // Add event listener for favorite toggle
        document.getElementById('book-list').appendChild(listItem);
    } else {
        alert('Please enter the book Title');
    }
}

// Function to search for books and highlight matching ones
function searchBook() {
    clearSearchHighlights();

    let searchTerm = document.getElementById('search-bar').value.trim().toLowerCase();
    let bookListItems = document.getElementById('book-list').getElementsByTagName('li');

    for (let i = 0; i < bookListItems.length; i++) {
        let itemText = bookListItems[i].textContent.toLowerCase();
        
        if (itemText.includes(searchTerm)) {
            bookListItems[i].style.backgroundColor = 'silver';
        }
    }
}

// Function to remove the last book from the list
function removeBook() {
    let bookList = document.getElementById('book-list');
    let lastBook = bookList.lastElementChild;

    if (lastBook) {
        let confirmRemoval = confirm("Are you sure you want to remove the last book?");
        if (confirmRemoval) {
            bookList.removeChild(lastBook);
        }
    } else {
        alert("No more books to remove.");
    }
}

// Function to toggle the 'favorite' class on an li element
function toggleFavorite(event) {
    event.target.classList.toggle('favorite');
}

// Function to clear search highlights
function clearSearchHighlights() {
    let bookListItems = document.getElementById('book-list').getElementsByTagName('li');

    for (let i = 0; i < bookListItems.length; i++) {
        bookListItems[i].style.backgroundColor = '';
    }
}

// Event listeners for toggle favorite and clear search on li elements

function toggleFavorite(event) {
    event.target.classList.toggle('favorite');
}

document.querySelectorAll('#book-list li').forEach(item => {
    item.addEventListener('click', toggleFavorite);
});




/* ----------------------------  Nav ----------------------  */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});