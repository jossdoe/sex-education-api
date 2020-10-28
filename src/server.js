require('dotenv').config();
const createServer = require('./createServer');

const PORT = process.env.PORT || 5000;
const app = createServer();

app.listen(PORT, () => console.log(`👩‍🏫 Started server on port ${PORT} 👨‍🏫`));
