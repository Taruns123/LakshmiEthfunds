import React, { Component } from "react";


export class Card extends Component {
  
  

  render() {

    let {title,description,imageUrl, newsUrl, author ,date} = this.props;
    return (
    
    <div className="container">

    <div className="card text-light bg-dark border-secondary " style={{ width: "18rem" }}>

  <div className="card-body">
    <h5 className="h-25 card-title text-success">Lock Tokens</h5>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter the amount</label>
  <input type="number" className="form-control bg-dark" id="exampleFormControlInput1"  />
</div>
  </div>
  
  <p className="list-group-item bg-dark d-flex justify-content-between"><p>Duration</p><p>Max: 5y</p></p>
  <ul className="list-group list-group-flush">
    <li className="d-flex justify-content-around"><div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autoComplete="off" checked={true} /> 1y
  </label>
  <label className="btn btn-secondary"><input type="radio" name="options" id="option2" autoComplete="off" />2y </label>
  <label className="btn btn-secondary"><input type="radio" name="options" id="option2" autoComplete="off" />3y</label>
  <label className="btn btn-secondary"><input type="radio" name="options" id="option2" autoComplete="off" />4y</label>
  <label className="btn btn-secondary"><input type="radio" name="options" id="option2" autoComplete="off" />5y</label>
  <label className="btn btn-secondary"><input type="radio" name="options" id="option2" autoComplete="off" />Custom</label>

</div></li>
    
  </ul>
  <div className="card-body">
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
    <><button type="button" className="btn btn-outline-success btn-lg btn-block">Lock tokens</button>
<button type="button" className="btn btn-secondary btn-lg btn-block">Cancel</button></>
  </div>
</div>
    </div>
    );
  }
}

export default Card;



