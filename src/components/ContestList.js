import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList =({list_contests, onContestClick}) =>(
  <div className ='contest_list'>
  {
Object.keys(list_contests).map(single_contestId=>
    <ContestPreview key={single_contestId}
    onClick_props = {onContestClick}
     {...list_contests[single_contestId]} />

)}
  </div>
);

export default ContestList;

ContestList.propTypes ={
  list_contests: React.PropTypes.object,
  onContestClick:React.PropTypes.func.isRequired,
};
