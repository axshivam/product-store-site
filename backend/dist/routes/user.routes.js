"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', (request, response) => {
    (0, controller_1.solve)(function (data) {
        return response.render('index', { data: data });
    });
});
usersRouter.get('/product', (request, response) => {
    (0, controller_1.solve)(function (data) {
        return response.render('products', { data: data });
    });
});
usersRouter.get('/product-details', (request, response) => {
    (0, controller_1.solve)(function (data) {
        return response.render('product-details', { data: data });
    });
});
usersRouter.get('/admin', (request, response) => {
    response.render('admin');
});
usersRouter.post('/', (request, response) => {
    if (request.method == 'POST') {
        var post = request.body;
        var ProductID = post.ProductID;
        var Product_name = post.Product_name;
        var Price = post.Price;
        if (!request.files) // status code 400 if no photos is uploaded;
            return response.status(400).send('No files were uploaded.');
        const file = request.files.image;
        const image = file.name;
        console.log(image);
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
            // console.log(file.mimetype);
            file.mv('public/Images/' + image, (err) => {
                if (err) {
                    return response.status(500).send(err);
                    console.log('Error');
                }
                else {
                    (0, controller_1.dbQuery)(1, ProductID, Product_name, image, Price);
                    console.log('Data Inserted Successfully !!!!');
                }
            });
        }
        else {
            response.send('Invalid file format');
        }
    }
    (0, controller_1.solve)(function (data) {
        response.render('products', { data: data });
    });
});
usersRouter.put('/admin/:id/:name', (request, response) => {
    const id = parseInt(request.params.id);
    const name = request.params.name;
    (0, controller_1.dbQuery)(2, id, name, 'anything', 34);
    response.send({ type: 'Update' });
});
usersRouter.delete('/admin/:id', (request, response) => {
    const id = parseInt(request.params.id);
    console.log(typeof (id));
    (0, controller_1.dbQuery)(3, id, 'any', 'any', 2);
    response.send({ type: 'DELETE' });
});
exports.default = usersRouter;
