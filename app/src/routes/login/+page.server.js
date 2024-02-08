import conn from '$db/connector.js';

export async function load({ params }) {
    try {
        await conn.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // Return the page data
    return {}
}