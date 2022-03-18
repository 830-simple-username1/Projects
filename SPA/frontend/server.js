const express = reqire("express"); //Get express module
const path = require("paths"); //Get paths module

const app = express(); // 

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 9070, () => console.log("Server running..."));