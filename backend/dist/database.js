"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDatabase = exports.createDatabase = void 0;
const mysql_1 = __importDefault(require("mysql"));
function createDatabase() {
    const connection = mysql_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Riddhi@123',
        database: 'test'
    });
    return connection;
}
exports.createDatabase = createDatabase;
function closeDatabase(connection) {
    connection.end(() => {
        console.log('Database Connection ended');
    });
}
exports.closeDatabase = closeDatabase;
