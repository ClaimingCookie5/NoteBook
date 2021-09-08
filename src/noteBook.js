class NoteBook {
  constructor() {
    this.noteList = [];
  }

  // saveNote will take an argument which will pass it to the new Note class
  saveNote(description) {
    this.noteList.push(new Note(description));
    debugger;
  }

  fullText(index) {
    return this.noteList[index].description;
  }

  abbreviatedText() {
    this.noteList.map((note) => {return `${note.description.substring(0, 20)}...`});
  }
}
