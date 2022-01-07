function jsFunction(value)
{
    alert(value);
}


const {createDatabase, closeDatabase} = require('../../database');
const connection = createDatabase();
var sql = 'select * from Products';
connection.connect((err) => {
  if(!err){
      console.log('Database connection Successfully !!!');
  }
  else{
      console.log(err);
  }
});
connection.query(sql, (err, result) => {
  console.log(result[0]);
});




function compare( a, b ) {
    if ( a.Price < b.Price ){
      return -1;
    }
    if (a.Price > b.Price){
      return 1;
    }
    return 0;
} 

function solve(data)
{   
    data.sort( compare );
    console.log(data);
}

function compare( a, b ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }


var objs = [ 
    { id: 3, last_nom: 'Jamf'     },
    { id: 1,    last_nom: 'Bodine'   },
    { id: 2, last_nom: 'Prentice' }
];

objs.sort( compare );
// console.log(objs);

// module.exports = dataReturn;