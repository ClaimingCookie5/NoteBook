document.addEventListener('DOMContentLoaded', () => {

  updateList = () => {
    noteBook.abbreviatedText();
  }
  const noteBook = new NoteBook();

  console.log(noteBook);

  addListTag = () => {
    let list = document.querySelector('#list-container');
    let li = document.createElement('li');
    let link = document.createElement('a');
    let noteList = noteBook.abbreviatedText();
    noteList.forEach(note => {
      for (let i = 0; i <= noteList.length; i++) {
        link.href = note;
        link.innerText = note;
        li.appendChild(link);
        list.appendChild(li);
      }
    });
  }
  
  updateList();
  // one route that connects the textarea and passes it as argument of save note
  document.querySelector('#submit').addEventListener('click', () => {
    let note = document.querySelector('#create-note').value;
    noteBook.saveNote(note)
    addListTag()
  });

  // returns all elements abbreviated - should be linked to href
  // document.querySelector('#display-note-list').innerText =
  //   noteBook.abbreviatedText();

  // parameter should be linked  to empty href of #display-note-list
  document.querySelector('#display-note-list').addEventListener('click', () => {
    document.querySelector('#display-full-note').innerText =
      noteBook.fullText(0);
  });
});
