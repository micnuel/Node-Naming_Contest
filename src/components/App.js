import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';


const pushState =(obj, url) =>{
  window.history.pushState ( obj, '',  url);
};

const onPopState = handler =>{
  window.onpopstate = handler;
};

class App extends React.Component{
  static propTypes ={
    intialData: React.PropTypes.object.isRequired
  };
  state=this.props.intialData;


  componentDidMount(){
    onPopState((event) =>{
      this.setState({
        currentContestId:(event.state || {}).currentContestId
      });
    });

  }

  componentWillUnmount(){
    onPopState(null);
  }

  fetchContest = (contestId) =>{
    pushState(
    {currentContestId:contestId},
    `/contest/${contestId}`
  );
api.fetchContest(contestId)
  .then(contest =>{
    this.setState({
      currentContestId:contest._id,
      contests:{
        ...this.state.contests,
        [contest._id]:contest
      }
    });
  });

  };

  fetchContestList = () =>{
    pushState(
    {currentContestId: null},
    `/`
  );
api.fetchContestList()
  .then(contests =>{
    this.setState({
      currentContestId:null,
      contests
    });
  });

  };
  fetchNames =(nameIds) =>{
    api.fetchNames(nameIds)
    .then(names =>{
      this.setState({
        names
      });
    });
  };

currentContest(){
  return this.state.contests[this.state.currentContestId];
}
pageHeader(){
  if(this.state.currentContestId){
    return this.currentContest().contestName;
  }
  return 'Contest Heading';
}
lookupName = (nameId) =>{
  if(!this.state.names || !this.state.names[nameId]){
    return {
      name: '___Loading___'
    };
  }
  return this.state.names[nameId];

};

addName = (newName, contestId) =>{
  api.addName(newName, contestId)
  .then(resp=>
  this.setState({
    contests:{
      ...this.state.contests,
      [resp.updatedContest._id]: resp.updatedContest
    },
    names:{
      ...this.state.names,
      [resp.newName._id]: resp.newName
    }
  }))
  .catch(console.error);
};
currentContent(){
    if(this.state.currentContestId){
   return <Contest
      contestlistClick={this.fetchContestList}
      fetchNames = {this.fetchNames}
      lookupName ={this.lookupName}
      addName={this.addName}
     {...this.currentContest()}
   />;
  }
  return <ContestList list_contests={this.state.contests}
  onContestClick ={this.fetchContest} />;
}
  render()
  {
  return(
    <div className = 'App text-center'>
    <Header headerMessage = {this.pageHeader()}/>
    {this.currentContent()}
    </div>
  );
}
}



export default App;
