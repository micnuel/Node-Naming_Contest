import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import axios from 'axios';
import config from './config';

const getApiUrl = contestId =>{
  if(contestId){
    return `${config.serverUrl}/api/contests/${contestId}`;
  }
  return `${config.serverUrl}/api/contests`;
};

const getIntialData = (contestId, apiData ) =>{
  if(contestId){
    return {
      currentContestId:apiData._id,
      contests:{
        [apiData._id]:apiData
      }
    };
  }
  return {contests:apiData.contests};
}

// Because we can't use the promise .then on the index ejs,
// we wrap the promise to a function with the promised returns and exported to the ejs
const ServerRender =(contestId) => // this is a function (don't know what sort of function it is)
axios.get(getApiUrl(contestId))
  .then(resp =>{
    const intialData = getIntialData(contestId,resp.data);
  return { intialMarkup:ReactDOMServer.renderToString(
  //This reads the react App code converted
  //to strings and renders the component on the server
    <App intialData={intialData}/>),
    intialData
  }
});


export default ServerRender;
