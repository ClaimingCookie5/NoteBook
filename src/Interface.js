document.addEventListener('DOMContentLoaded', () => {

  const noteBook = new NoteBook();

  console.log(noteBook.noteList)

  toggleButtonDisplay = (cssStyle) => {
    document.getElementById('close-note').style.display = cssStyle;
  }

  addListItem = (note) => {
    note = document.querySelector('#create-note').value;
    let list = document.querySelector('#list-container');
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.href = '#';
    link.setAttribute('id', `${noteBook.noteList.length}`);
    link.innerText = note.substring(0, 20);
    li.appendChild(link);
    list.appendChild(li);
  }

  // one route that connects the textarea and passes it as argument of save note
  document.querySelector('#submit').addEventListener('click', (note) => {
    note = document.querySelector('#create-note').value;
    addListItem();
    noteBook.saveNote(note);
    document.querySelector('#create-note').value = "";
  });

  // gets full note from link
  document.getElementById('list-container').addEventListener('click', (element) => {
    if (element.target && element.target.nodeName =='A') {
      document.getElementById("display-full-note").innerText = noteBook.fullText(element.target.id);
      document.getElementById("dont-display-area").setAttribute('id', 'display-area')
      toggleButtonDisplay('block');
    }
  })


  
  // closes the open note
  document.getElementById('close-note').addEventListener('click', () => {
    document.getElementById("display-full-note").innerText = "";
    document.getElementById("display-area").setAttribute('id', 'dont-display-area')
    toggleButtonDisplay('none');
  })

});
