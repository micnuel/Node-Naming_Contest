import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//import axios from 'axios';  Because of passed data

// Using axios library to make ajax request
//axios.get('/api/contests')___Calling frompassed intialData
//.then(resp =>{

  ReactDOM.render(
    <App intialData = {window.intialData}/>,
    document.getElementById('root')
  );



  //this.setState({

    //the response (resp)

    //function returns the data as 'data'
//  app_contests:resp.data.sent_contests
  //});

//})
//.catch(console.error);
