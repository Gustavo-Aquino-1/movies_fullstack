const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 7111;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
