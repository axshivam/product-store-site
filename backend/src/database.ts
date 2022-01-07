import mysql from 'mysql';


export function createDatabase():any
{
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Riddhi@123',
        database : 'test'
    });
    return connection;
}

export function closeDatabase(connection:any)
{
    connection.end(() => {
        console.log('Database Connection ended');
    });
}