const fs = require("fs");
//1) for adding data
const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function (note) {
    return note.title == title;
  });
  console.log(
    "this is the duplicate note " +
      duplicateNote +
      " with length: " +
      duplicateNote.length
  );
  if (duplicateNote.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveData(notes);
  } else {
    console.log("Note already taken!");
  }
};
//2) for loading Notes
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jsonDATA = dataBuffer.toString();
    return JSON.parse(jsonDATA);
  } catch (e) {
    return [];
  }
};
//3) saving the data
const saveData = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
//4) removing the note
const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  console.log(notesToKeep.length +" and its object is "+notesToKeep);
  saveData(notesToKeep);

  // if (duplicateNote.length == 0) {
  //   console.log("Note with title: " + title + " cannot be found");
  // } else {
  //   notes.pop({
  //     title: title,
  //   });
  //   console.log(title + " removed");
  // }
};
module.exports = {
  addingNotes: addNotes,
  removingNote: removeNote,
};
