import React from 'react'
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {newLogo} from '../assets'
import { SidebarData } from './Data';
import { Link } from 'react-router-dom';




function Bhargav() {
  return (
    <div>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <p><br></br></p>
        <div className=' text-gray-300 grid grid-cols-5 w-screen h-screen px-24' style={{ backgroundImage: `url(${newLogo})` }}>
        {/* <div className=' h-[480px] bg-white rounded-xl p-2 ml-4 pt-3 my-2 flex flex-col gap-3 drop-shadow-xl col-span-1 '> */}
          
        <div className='col-span-5 flex'>
        
        
          
          <div className='mx-2 h-screen bg-gray-900 w-screen rounded drop-shadow-2xl'>
            <div className='flex '>
           <h4 className='p-2 mt-3 ml-1 font-bold'>Available Bounty</h4>
            </div>
            <div className='flex flex-wrap'>
            {SidebarData.map((item,index)=>{
            return(
              <Card className='p-2 m-4 hover:bg-green-400'  style={{ width: '14rem',height:'12rem'  }}>
                  <Card.Img variant="top" src={newLogo} />
                   <Card.Body>
                    <Card.Title className='text-black'><Link className='no-underline text-black' to='/card'>{item.heading}</Link></Card.Title>                      
                  </Card.Body>
                </Card>
            )
          }
          )
          }
            </div>
            

          </div>
          <div className='container'>
        <div>

          <div className=' h-28 mb-3 bg-gray-900 drop-shadow-xl p-3 rounded text-xl font-semibold'> 
          <div className='flex justify-between'>
          <p className=''>Governance Power</p>
            <p className='text-gray-400 text-sm p-2 hover:text-gray-300 hover:cursor-pointer'>View</p>
          </div>
          <p className=' text-gray-400 text-sm'>Connect your wallet to view.</p>
          </div>
        </div>
          <div className='mt-2 h-3/4 bg-gray-900  drop-shadow-xl p-3 rounded text-xl font-semibold'>
            Assets
            <p className='text-2xl'></p>
          </div>
          </div>
        
        
        </div>
        
        </div>    
    </div>
        

    
  )
}

export default Bhargav
