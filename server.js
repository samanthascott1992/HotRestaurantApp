const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});


// Displays a single character, or returns false
// app.get("tables", function (req, res) {
//     var chosen = req.params.table;

//     console.log(chosen);


//     for (var i = 0; i < tables.length; i++) {
//         if (chosen === tables[i].routeName) {
//             return res.json(tables[i]);
//         }
//     }

//     return res.json(false);
// });

// Create New tables - takes in JSON input
app.post("/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;


    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    characters.push(newTable);

    res.json(newTable);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
