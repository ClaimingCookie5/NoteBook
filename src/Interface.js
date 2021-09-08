document.addEventListener('DOMContentLoaded', () => {

  updateList = () => {
    noteBook.abbreviatedText();
  }
  const noteBook = new NoteBook();

  console.log(noteBook);
  
  updateList();
  // one route that connects the textarea and passes it as argument of save note

  document.querySelector('#submit').addEventListener('click', () => {
    let note = document.querySelector('#create-note').value;
    
    noteBook.saveNote(note)
    console.log(noteBook)
    noteBook.abbreviatedText();
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
