class NoteBook {
  constructor() {
    this.noteList = [];
  }

  // saveNote will take an argument which will pass it to the new Note class
  saveNote(description) {
    if (description.length === 0) {
      throw new Error('Please enter text to complete action');
    } else {
      this.noteList.push(new Note(description));
    }
  }

  fullText(index) {
    return this.noteList[index].description;
  }

  abbreviatedText() {
    return this.noteList.map((note) => `${note.description.substring(0, 20)}...`);
  }
}
