document.addEventListener('DOMContentLoaded', () => {

  updateList = () => {
    noteBook.abbreviatedText();
  }
  const noteBook = new NoteBook();
  let idSelect = 0;

  addListTag = () => {
    let list = document.querySelector('#list-container');
    let li = document.createElement('li');
    //let link = document.createElement('a');
    let noteList = noteBook.abbreviatedText();
    noteList.forEach(note => {
      for (let i = 0; i <= noteList.length; i++) {
        let link = document.createElement('a');
        link.href = `#${note}`;
        link.setAttribute('id', `${i}`) //i starts at 1. NOT 0
        link.innerText = note;
        li.appendChild(link);
        list.appendChild(li);
        link.addEventListener('click', () => {
          idSelect = i
          console.log(idSelect);
        });
      }
    });
  }


  // const result = document.createElement('h1')
  // document.querySelector('body').appendChild(result)

  // addListTag = () => {
  //   let noteList = noteBook.abbreviatedText();

  //   for (let i = 0; i <= noteBook.noteList.length; i++) {
  //     let link = document.createElement('a');
  //     link.href = noteBook.abbreviatedText[i]
  //     link.setAttribute('id', `${i}`)
  //     link.addEventListener('click', () => {
  //       idSelect = i
  //       console.log(idSelect);
  //       });
  //     result.appendChild(link)
  //   }
  // }
  




  updateList();
  // one route that connects the textarea and passes it as argument of save note
  document.querySelector('#submit').addEventListener('click', () => {
    let note = document.querySelector('#create-note').value;
    noteBook.saveNote(note)
    addListTag()
    document.querySelector('#create-note').value = "";
  });

  // returns all elements abbreviated - should be linked to href
  // document.querySelector('#display-note-list').innerText =
  //   noteBook.abbreviatedText();

  // parameter should be linked  to empty href of #display-note-list
  // document.querySelector('#display-note-list').addEventListener('click', () => {
  //   document.querySelector('#display-full-note').innerText =
  //     noteBook.fullText(0);
  // });
});
