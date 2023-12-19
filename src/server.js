const app = require("./app");
const { connectDatabase } = require("./database/db");


connectDatabase();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at ${process.env.PORT}`);
})