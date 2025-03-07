const config = require('../config.json'); // Adjust path if needed
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

const db = {};

async function initialize() {
    const { host, port, user, password, database } = config.database;

    try {
        // Create a MySQL connection
        const connection = await mysql.createConnection({ host, port, user, password });

        // Ensure the database exists
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

        // Create Sequelize instance
        const sequelize = new Sequelize(database, user, password, {
            host, 
            dialect: 'mysql',
            logging: false // Disable logging to keep console clean
        });

        // Initialize models
        db.User = require('../users/user.model')(sequelize);

        // Sync models with database
        await sequelize.sync({ alter: true });

        // Attach Sequelize instance to db object
        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

// Call initialize() only if the module is imported
initialize();

module.exports = db;
