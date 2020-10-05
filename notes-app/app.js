const chalk = require("chalk");
const { describe, argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

const command = process.argv[2];
console.log(command);

//1) adding the add command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note-title",
      demandOption: true, //this means, this is a required property
      type: "string",
    },
    body: {
      describe: "Body paragraph",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //right here we are using es6 function
    notes.addingNotes(argv.title, argv.body);
  },
});

// 2) adding the remove command
yargs.command({
  command: "remove",
  describe: "Removing the note",
  builder: {
    title: {
      describe: "Note-title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //right here we are using es6 function
    notes.removingNote(argv.title);
  },
});

//3) list command
yargs.command({
  command: "List",
  describe: "List the notes",
  handler() {
    //right here we are using es6 function
    notes.listingNote();
  },
});

//4) read command
yargs.command({
  command: "read",
  describe: "read the notes",
  builder: {
    title: {
      describe: "Read note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //right here we are using es6 function
    notes.readingNote(argv.title);
  },
});
yargs.parse(); //this goes to all of the configuration detials provided and parse them all.
