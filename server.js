import config from'./config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

server.set('view engine', 'ejs');


server.use(sassMiddleware({
  src: path.join(__dirname,  'sass'),
  dest: path.join(__dirname,  'public')

}));
import serverRender from './serverRender';

server.get(['/', '/contest/:contestId'],(req,res)=>{

  serverRender(req.params.contestId )
  .then(({intialMarkup,intialData}) =>{
    res.render('index', {
      intialMarkup,intialData
    });
  })
  .catch(error =>{
    console.error(error);
    res.status(404).send('Bad request of contest');
  });

});

server.use('/api', apiRouter);// guesss this exposes the api
                              // for the ServerRender function

// server.get('/about.html',(req,res)=>{
//   res.send('Hello, About!!');
// });

// Very important line that serves everything on the public folder
server.use(express.static('public'));
server.listen(config.port, ()=>{
console.info('Server is running on:', config.port);
});
