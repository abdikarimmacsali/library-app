// Get the modal
var modal = document.getElementById("addBookModal");

// Get the button that opens the modal
var btn = document.querySelector(".add-book-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the form
var form = document.getElementById("addBookForm");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
form.onsubmit = function(event) {
  event.preventDefault();

  // Get form values
  var bookTitle = document.getElementById("bookTitle").value;
  var bookAuthor = document.getElementById("bookAuthor").value;
  var bookPages = document.getElementById("bookPages").value;
  var bookRead = document.getElementById("bookRead").checked;

  // Create new book card
  var bookContainer = document.querySelector(".book-container");
  var newCard = document.createElement("div");
  newCard.classList.add("card");

  var newBookName = document.createElement("p");
  newBookName.classList.add("book-name");
  newBookName.textContent = bookTitle;

  var newBookAuthor = document.createElement("p");
  newBookAuthor.classList.add("book-author");
  newBookAuthor.textContent = bookAuthor;

  var newBookPages = document.createElement("p");
  newBookPages.classList.add("book-pages");
  newBookPages.textContent = `Pages: ${bookPages}`;

  var newBookRead = document.createElement("p");
  newBookRead.classList.add("book-read");
  newBookRead.textContent = bookRead ? "Read: Yes" : "Read: No";

  newCard.appendChild(newBookName);
  newCard.appendChild(newBookAuthor);
  newCard.appendChild(newBookPages);
  newCard.appendChild(newBookRead);

  bookContainer.insertBefore(newCard, bookContainer.querySelector(".add-book-btn"));

  // Close modal
  modal.style.display = "none";

  // Clear form
  form.reset();
}
