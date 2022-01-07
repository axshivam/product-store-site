import { Router, Response, Request } from 'express';
import { request } from 'http';
import { solve, dbQuery } from '../controller';
import {Product} from "../types/index";
const usersRouter = Router();

usersRouter.get('/', (request:Request, response:Response):any => {
  solve(function (data:Product){
    return response.render('index', {data: data});
  });
});

usersRouter.get('/product', (request:Request, response:Response) => {
  solve(function (data:Product){
    return response.render('products', {data: data});
  });
});

usersRouter.get('/product-details', (request:Request, response:Response) => {
  solve(function (data:Product){
    return response.render('product-details', {data: data});
  });
});

usersRouter.get('/admin', (request:Request, response:Response) => {
  response.render('admin');
});

usersRouter.post('/', (request:Request, response:Response) => {
  if(request.method == 'POST'){
      var post  = request.body;
      var ProductID:number = post.ProductID;
      var Product_name:string = post.Product_name;
      var Price:number = post.Price;
      if (!request.files) // status code 400 if no photos is uploaded;
          return response.status(400).send('No files were uploaded.');
      const file:any = request.files.image;
      const image: string = file.name;
      console.log(image);

      if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
          file.mv('src/public/Images/'+image, (err:Error) => {
              if(err){
                  return response.status(500).send(err);
                  console.log('Error');
              }
              else{
                  dbQuery(1, ProductID, Product_name, image, Price);
                  console.log('Data Inserted Successfully !!!!');
              }
          });
      }
      else{
          response.send('Invalid file format');
      }   
  }
  solve(function(data:Product){
      response.render('products', {data : data});
  });
});

usersRouter.put('/admin/:id/:name', (request:Request,response:Response) => {
  const id:number = parseInt(request.params.id);
  const name:string = request.params.name;
  dbQuery(2,id,name,'anything',34);
  response.send({type: 'Update'});
});

usersRouter.delete('/admin/:id', (request:Request,response:Response) => {
  const id:number = parseInt(request.params.id);
  console.log(typeof(id));
  dbQuery(3,id, 'any', 'any', 2);
  response.send({type: 'DELETE'});
});

usersRouter.get('/shivam', (request:Request, response:Response) => {
  solve(function (data:Product){
    return response.send(data);
  });
});




// router.get('/shivam', (request,response) => {
//   fun.solve(function(data){
//       console.log(data[0]);
//       response.send(data);
//    });
// });

export default usersRouter;