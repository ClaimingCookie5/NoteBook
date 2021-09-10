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
      document.getElementById("hide_full_note_box").setAttribute('id', 'full_note_area')
      document.getElementById("input_area").setAttribute('id', 'hide_input_area')
      toggleButtonDisplay('close-note','block');
    }
  })


  
  // closes the open note
  document.getElementById('close-note').addEventListener('click', () => {
    document.getElementById("display-full-note").innerText = "";
    document.getElementById("full_note_area").setAttribute('id', 'hide_full_note_box')
    document.getElementById("hide_input_area").setAttribute('id', 'input_area')
    toggleButtonDisplay('close-note', 'none');
  })

});
