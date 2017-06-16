import React from 'react';

class ContestPreview extends React.Component {
  handleClick = () =>{
    this.props.onClick_props(this.props._id);
  };
  render(){
    return(
      <div className = 'link ContestPreview' onClick={this.handleClick}>
      <div className='category-name'> {this.props.categoryName}</div>
      <div className='contest-name'> {this.props.contestName}</div>
      </div>
    );
  }
}


export default ContestPreview;

ContestPreview.propTypes ={
  _id:React.PropTypes.string.isRequired,
  onClick_props:React.PropTypes.func.isRequired,
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
};
