#! /usr/bin/env node
// points to node

const API_KEY = "keyi4jNBaiTlEWg1r";

const { program } = require("commander");

const Airtable = require("airtable");
const base = new Airtable({ apiKey: API_KEY}).base("apprm0iskoy0ajIbk");

base ("Students' homework").create(
    [
        {
            fields: {
                Name: ["recqASIZ325ctWlQb"],
                Homework: ["recRjsvKdXqFYEhws"],
                Sandbox: "https:",
                "github repo":
                    "https:",
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
    /* const name = "";
    const sandboxUrl = "";
    const githubUrl = ""; */
    console.log(`Submitted! ${name}, ${sUrl}, ${gUrl}`);
}
// imitation of adding your name
const getAllStudents = () => {
    base("Students' homework").find("recFi4I1lrbdPUoqE", function (err, record) {
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