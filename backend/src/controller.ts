import { createDatabase, closeDatabase } from "./database";
import { Product, Basic } from "./types/index";

export function dbQuery(type:number, ProductID:number, Product_name:string, image:string, Price:number):void
{
    // for post request
    if(type == 1)
    {
        const connection = createDatabase();
        connection.connect((err:Error) => {
            if(!err){
                console.log('Database connection Successfully !!!');
            }
            else{
                console.log(err);
            }
        });
        console.log(ProductID, '...............................');
        var sql = "INSERT INTO `Products`(`ProductID`,`Product_name`,`image`,`Price`) VALUES ('" + ProductID + "','" + Product_name + "','" + image + "','" + Price + "')";
        connection.query(sql, () => {
        console.log('Data Inserted Successfully!!!!!!');
      });
      closeDatabase(connection);
    }
    // for put request
    else if(type == 2)
    {
        const connection = createDatabase();
        connection.connect((err:Error) => {
            if(!err){
                console.log('Database connection Successfully !!!');
            }
            else{
                console.log(err);
            }
        });
        const sql = `UPDATE Products SET Product_name = '${Product_name}' WHERE ProductID = ${ProductID};`;
        connection.query(sql, () => {
        console.log('Record Update Successfully!!!');
      });
      closeDatabase(connection);
    }
    // for delete request
    else if(type == 3)
    {
        const connection = createDatabase();
        connection.connect((err:Error) => {
            if(!err){
                console.log('Database connection Successfully !!!');
            }
            else{
                console.log(err);
            }
        });
        const sql = `DELETE FROM Products WHERE ProductId = ${ProductID};`;
        connection.query(sql, () => {
      });
      closeDatabase(connection);
    }
}

export function solve(fn:Function):void
{
    const connection = createDatabase();
    connection.connect((err:string) => {
        if(!err){
            console.log('Database connection Successfully !!!');
        }
        else{
            console.log(err);
        }
    });
    const sql = `select * from Products`;
    connection.query(sql, (err:string, result:Product) => {
        // console.log(result[0]);
        fn(result);
    });
    closeDatabase(connection);
}