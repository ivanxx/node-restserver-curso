// =================================
// Puerto
// =================================

process.env.PORT = process.env.PORT || 3000;


// =================================
// Entorno
// =================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =================================
// Vencimiento del token
// =================================
process.env.CADUCIDAD_TOKEN = 1000 * 60 * 60 * 24 * 30;

// =================================
// SEED de autenticación
// =================================
process.env.SEED = process.env.SEED || 'bestkeptsecret';

// =================================
// Base de datos
// =================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =================================
// Google Client ID
// =================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '623058193244-7qgm767v631fe48e7q1hmihrj8stb4jg.apps.googleusercontent.com'