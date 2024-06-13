// import db from './config/Database';
// import { Sequelize } from 'sequelize';


// Module
import Fauna from './modules/FaunaModul.js';
import Flora from './modules/FloraModul.js';
import KeajaibanDunia from './modules/KeajaibanDuniaModule.js';

// Router
import FaunaRouter from './routers/FaunaRouters.js';
import FloraRouter from './routers/FloraRouters.js';
import KeajaibanDuniaRouter from './routers/KeajaibanDuniaRouters.js';

// App -- !!
import express from 'express';
const app = express();

// Cors == !!
import cors from 'cors';
app.use(
    cors({
        credentials: true,
        origin: "*",
    })
);

// -----------------------------
// Membuat table
try {
    Flora.sync();
    Fauna.sync();
    KeajaibanDunia.sync();
} catch (error) {
    console.error(error);
}

// Memakai Router
app.use(FaunaRouter, FloraRouter, KeajaibanDuniaRouter);
app.listen(5000, () => {
    console.log('\nSERVER BERJALAN...\nport: 5000\n');
});