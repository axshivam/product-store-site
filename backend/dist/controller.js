"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = exports.dbQuery = void 0;
const database_1 = require("./database");
function dbQuery(type, ProductID, Product_name, image, Price) {
    // for post request
    if (type == 1) {
        const connection = (0, database_1.createDatabase)();
        connection.connect((err) => {
            if (!err) {
                console.log('Database connection Successfully !!!');
            }
            else {
                console.log(err);
            }
        });
        console.log(ProductID, '...............................');
        var sql = "INSERT INTO `Products`(`ProductID`,`Product_name`,`image`,`Price`) VALUES ('" + ProductID + "','" + Product_name + "','" + image + "','" + Price + "')";
        connection.query(sql, () => {
            console.log('Data Inserted Successfully!!!!!!');
        });
        (0, database_1.closeDatabase)(connection);
    }
    // for put request
    else if (type == 2) {
        const connection = (0, database_1.createDatabase)();
        connection.connect((err) => {
            if (!err) {
                console.log('Database connection Successfully !!!');
            }
            else {
                console.log(err);
            }
        });
        const sql = `UPDATE Products SET Product_name = '${Product_name}' WHERE ProductID = ${ProductID};`;
        connection.query(sql, () => {
            console.log('Record Update Successfully!!!');
        });
        (0, database_1.closeDatabase)(connection);
    }
    // for delete request
    else if (type == 3) {
        const connection = (0, database_1.createDatabase)();
        connection.connect((err) => {
            if (!err) {
                console.log('Database connection Successfully !!!');
            }
            else {
                console.log(err);
            }
        });
        const sql = `DELETE FROM Products WHERE ProductId = ${ProductID};`;
        connection.query(sql, () => {
        });
        (0, database_1.closeDatabase)(connection);
    }
}
exports.dbQuery = dbQuery;
function solve(fn) {
    const connection = (0, database_1.createDatabase)();
    connection.connect((err) => {
        if (!err) {
            console.log('Database connection Successfully !!!');
        }
        else {
            console.log(err);
        }
    });
    const sql = `select * from Products`;
    connection.query(sql, (err, result) => {
        // console.log(result[0]);
        fn(result);
    });
    (0, database_1.closeDatabase)(connection);
}
exports.solve = solve;
