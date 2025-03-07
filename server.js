const app = require("./src/app");
const dotenv = require("./src/config/dotenv");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
