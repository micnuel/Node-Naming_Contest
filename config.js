 const env = process.env;
 export default {
   mongodbUri: 'mongodb://localhost:27017/test',
   port: env.PORT || 8080,
   host: env.HOST || '0.0.0.0',
   get serverUrl(){
     return `http://${this.host}:${this.port}`;
   }
 };


// import http from 'http';
//
// const server = http.createServer((req,res) =>{
//   res.write('HTTP response \n');
//   setTimeout(() =>{
//     res.write('I can still stream strings \n');
//   }, 3000
// );
// });
// server.listen(8080);



// https.get('https://www.lynda.com', res=>{
//   console.log('The status code is:', res.statusCode);
//   res.on('data', chunk=>{
//     console.log(chunk.toString());
//   });
// });



// const env = process.env;
// export default {
//   port: env.PORT || 8080
// }
//
// export const nodeEnv =
//   env.NODE_ENV ||'development'
//
// export const logStars = function(message){
//   console.log('*********');
//   console.log(message);
//   console.log('**********');
// }
