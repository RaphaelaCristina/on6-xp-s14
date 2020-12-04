const app = require('./src/app');
const PORT = 55;

app.listen(PORT, () => {
    console.log(`Servidorzinho rodando na http://localhost:${PORT}`)
});
