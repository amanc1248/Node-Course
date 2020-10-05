const fs = require("fs");
const chalk = require("chalk");
//1) for adding data
const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title == title);

  //here we are trying to debug  our node application and inorder to see the debugged thing, 
  //we need to run node by adding inspect
  debugger

  console.log(duplicateNote);
  //add value to the json file when there is nothing inside the duplicateNote
  if (!duplicateNote) {
    //this is to add the title and the body into the json file
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
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jsonDATA = dataBuffer.toString();
    return JSON.parse(jsonDATA);
  } catch (e) {
    return [];
  }
};
//3) saving the data
const saveData = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
//4) removing the note
const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < loadNotes().length) {
    console.log(chalk.green("Note removed"));
    saveData(notesToKeep);
  } else {
    console.log(chalk.red("Note not removed"));
  }
  console.log(notesToKeep.length + " and its object is " + notesToKeep);
};
//5) for listing notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your notes"));
  notes.forEach((element) => console.log(element.title));
};
//6 for reading notes
const readNotes = (title) => {
  const notes = loadNotes();
  const searchedNote = notes.find((note) => note.title === title);
  if (searchedNote) {
  console.log(chalk.yellow.inverse(searchedNote.title) +" "+ searchedNote.body);
    
  } else {
    console.log(
      chalk.red.inverse("Could not find the list")
    );
  }
};
module.exports = {
  addingNotes: addNotes,
  removingNote: removeNote,
  listingNote: listNotes,
  readingNote:readNotes
};
