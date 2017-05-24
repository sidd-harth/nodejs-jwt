var nJwt = require('njwt');
var secureRandom = require('secure-random');
var base64 = require('base-64');
var utf8 = require('utf8');


//var signingKey = secureRandom(256, {type: 'Buffer'}); //highly random byte array of 256 bytes
var signingKey = 'password123'; // for testing purpose

var claims = {
  iss: "http://rs.com/",  
  sub: "users/uuid",    
}

var jwt = nJwt.create(claims,signingKey);
console.log("jwt is ",jwt);

var obj = JSON.parse(JSON.stringify(jwt));

/* //header//
var header = obj.header;
//console.log("header is ",header);

var headerStringify = JSON.stringify(header);
var bytes = utf8.encode(headerStringify);
var encoded = base64.encode(bytes);
console.log("encoded header is ",encoded);

//body
var body = obj.body;
//console.log("body is ",body);

var bodyStringify = JSON.stringify(body);
var bytes = utf8.encode(bodyStringify);
var encoded2 = base64.encode(bytes);
console.log("encoded body is ",encoded2); */

//sign
/* var s = encoded+"."+encoded2;
console.log("asdasddddddddddddddddddddddddd  ",s);


var signature = hashAlgHs256(s, 'sign');
console.log(signature);
 */




//var sign = obj.sigingkey;
//console.log("body is ",body);

//var bodyStringify = JSON.stringify(body);
//var bytes = utf8.encode(sign);
//var encoded = base64.encode(bytes);
//console.log("encoded sign is ",encoded);




//compact
var token = jwt.compact();
console.log("token is ",token);

var base64SigningKey = signingKey.toString('base64'); //Buffer needs to be converted to a string so that it can be persisted in a database
console.log("base64SigningKey is ",base64SigningKey);


//verification
var signingKey2='asd';
nJwt.verify(token,signingKey2,function(err,verifiedJwt){
  if(err){
    console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrr ',err); // Token has expired, has been tampered with, etc 
  }else{
    console.log("sol ",verifiedJwt); // Will contain the header and body 
  }
});