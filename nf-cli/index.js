#! /usr/bin/env node
// points to node

const API_KEY = null;

const { program } = require("commander");

const Airtable = require("airtable");
const base = new Airtable({ apiKey: API_KEY}).base("apprm0iskoy0ajIbk");

base ("Students' homework").create(
    [
        {
            fields: {
                Name: [""],
                Homework: [""],
                Sandbox: "link",
                "github repo":
                    "link",
            },
        },
    ],
    function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function(record) {
            console.log(record.getId());
        });
    }
);

base('Students\' homework')._findRecordById()
const submit = (name, sUrl, gUrl) => {
    console.log(`Submitted! ${name}, ${sUrl}, ${gUrl}`);
}
// imitation of adding your name
const getAllStudents = () => {
    base("Students' homework").find("tofind", function (err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Retrieved", record.id);
    });
};

program
    .command("submit")
    .argument("<string>", "name")
    .argument("<string>", "sUrl")
    .argument("<string>", "gUrl")
    .description("submit nf hw")
    .action(submit);

program
    .command("getAllStudents")
    .description("")
    .action(getAllStudents);

program.parse();