import React, { Component } from 'react';
import  { images } from 'react';

// import {} from './img2.jpeg';
import heroBg from "../assets";



export default class P extends Component {


    

    constructor(props) {
        super(props);
    
        this.state = {
          count1: 0,
          count2: 0,
          count3: 0,
          count4: 0,
        };
    
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick1.bind(this);
        this.handleClick4 = this.handleClick2.bind(this);
      }
    
      handleClick1() {
        this.setState(prevState => ({
          count1: prevState.count1 + 1,
        }));
      }
    
      handleClick2() {
        this.setState(prevState => ({
          count2: prevState.count2 + 1,
        }));
      }

      handleClick3() {
        this.setState(prevState => ({
          count3: prevState.count3 + 1,
          
        }));
      }
    
      handleClick4() {
        this.setState(prevState => ({
          count4: prevState.count4 + 1,
        }));
      }



    render() {

        const myStyle={
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };

        const { count1, count2 } = this.state;
        const totalCount1 = count1 + count2;
        const { count3, count4 } = this.state;
        const totalCount2 = count3 + count4;
    

        return (
            
            <div className='bg-gray-900'  style={myStyle}>
                <h1 className='text-left my-5 text-white'>Proposal</h1>
                <div className="container">
                <div className="card text-center  text-white  border border-light border-info " style={{backgroundColor:'rgb(21,16,48)'}}>
  <div className="card-header  ">
    <h5 className="card-title my-4">Project Governence</h5>
    
  </div>
  <div className="card-body  ">
    <p className="card-text">Vote the given Bounties</p>
  </div>
  </div>
<div className="container my-5 text-center ">
               <div className="row">
                <div className="column">
                <div className="card mx-auto text-white border border-info" style={{width: "50rem",backgroundColor:'rgb(21,16,48)'}} >
                <div className="card-body">
                    <h5 className="card-title">Juhu Beach</h5>
                    <p className="card-text">lot of plastic waste</p>
                    <p>Percentage of Yes : {(count1/(count1+count2)*100).toFixed(2)}%</p>
                    <button  onClick={this.handleClick1}type="button" className="btn btn-success btn-lg  mx-3">Yes</button>
                    <p>Percentage of No: {(count2/(count1+count2)*100).toFixed(2)}%</p>
                <button  onClick={this.handleClick2}type="button" className="btn btn-danger btn-lg mx-3">No</button>
                </div>
                </div>
               </div>
</div>
<div className="column">
                <div className="card my-1 mx-auto text-white border-info " style={{width: "50rem",backgroundColor:'rgb(21,16,48)'}} >
              
                <div className="card-body">
                    <h5 className="card-title">Pune </h5>
                    <p className="card-text">Near to FC road</p>
                    <p>Percentage of Yes : {(count3/(count3+count4)*100).toFixed(2)}%</p>
                    <button onClick={this.handleClick3}type="button" className="btn btn-lg btn-success mx-3">Yes</button>
                    <p>Percentage of Yes : {(count4/(count3+count4)*100).toFixed(2)}%</p>
                <button onClick={this.handleClick4}type="button" className="btn btn-lg btn-danger mx-3">No</button>
                </div>
                </div>
               </div>


  </div>
</div>
</div>
            
        )
    }
}