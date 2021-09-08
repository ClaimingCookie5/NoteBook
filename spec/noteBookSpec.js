let notebook = new NoteBook();
let message1 = "If you're visiting this page, you're likely here because you're searching for a random sentence.";
description = (description) => {
  console.log(description);
};

wipeClean = () => {
  notebook.noteList = [];
};

console.log("-------------------")
description('new')
console.log("-------------------")

console.log("********************")

description('It is expected to be an array');
expect(notebook.noteList).toBeInstanceOf(Array);

console.log("********************")

description("New instance of NoteBooke has empty array")
expect(notebook.noteList[0]).toEqual(undefined);

console.log("********************")

console.log("-------------------")
description('saveNote')
console.log("-------------------")

description('It is expected to save notes to the noteList array');
notebook.saveNote(message1);
expect(notebook.fullText(0)).toContain(
  "If you're visiting this page, you're likely here because you're searching for a random sentence."
);
wipeClean();
console.log("********************")

console.log("-------------------")
description('fullText')
console.log("-------------------")

description('It is expected to display the full note');
notebook.saveNote(message1);
expect(notebook.fullText(0)).toEqual(
  "If you're visiting this page, you're likely here because you're searching for a random sentence."
);
wipeClean();

console.log("********************")

console.log("-------------------")
description('abbreviatedText')
console.log("-------------------")

description('It is expected display the abbreviated note');
notebook.saveNote(message1);
expect(notebook.abbreviatedText()).toContain("If you're visiting t...");
wipeClean();
