document.addEventListener('DOMContentLoaded', () => {
  const noteBook = new NoteBook();
  noteBook.saveNote();

  // one route that connects the textarea and passes it as argument of save note

  document.querySelector('#submit').addEventListener('click', () => {
    noteBook.saveNote();
  });

  // returns all elements abbreviated - should be linked to href
  document.querySelector('#display-note-list').innerText =
    noteBook.abbreviatedText();

  // parameter should be linked  to empty href of #display-note-list
  document.querySelector('#display-note-list').addEventListener('click', () => {
    document.querySelector('#display-full-note').innerText =
      noteBook.fullText(0);
  });
});
