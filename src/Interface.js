document.addEventListener('DOMContentLoaded', () => {
  const noteBook = new NoteBook();
  noteBook.saveNote('test1');
  noteBook.saveNote('test2');
  noteBook.saveNote('test3');
  // one route that connects the textarea and passes it as argument of save note

  document.querySelector('#submit').addEventListener('click', () => {
    noteBook.saveNote('test4');
  });

  // returns all elements abbreviated - should be linked to href
  document.querySelector('#display-note-list').innerText =
    noteBook.abbreviatedText();

  // parameter should be linked  to empty href of #display-note-list
  // document.querySelector('#display-note-list').addEventListener('click', () => {
  //   document.querySelector('#display-full-note').innerText =
  //     noteBook.fullText();
  // });




  // const abbrList = document.querySelectorAll('#abbreviated-list');
  
  //   abbrList.forEach(function(abbrList){
  //     abbrList.addEventListener('click', checkIndex);
  //   })

  //   function checkIndex(event){
  //   console.log( Array.from(abbrList).indexOf(event.target) );
  //   }
  // };
});