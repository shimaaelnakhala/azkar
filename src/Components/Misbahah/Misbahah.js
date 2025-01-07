import React from 'react'
import { Button} from 'react-bootstrap'
import { useAdkar } from '../Customs/CustomContext'

export default function Misbahah() {
  const {Counter,handleIncrement,reset}= useAdkar()




  return (
    <div>
  <div className='container mesbahah my-5 pt-md-4 rounded-3'>
  <h1 className='my-4 pt-2 text-success text-center ' >ألا بذكر الله تطمئن القلوب</h1>
  <div className='flex-wrap-reverse' onClick={handleIncrement}>  
  <h1 className='w-25 text-bg-success py-4 text-center mx-auto rounded-5 py-sm-5' onClick={handleIncrement}>{Counter}</h1>
  </div>
  <Button className='py-1 my-3 rounded-5 btn-success fs-3 px-5 m-auto d-flex justify-content-center align-items-center' onClick={reset}>   إعادة العد</Button>

     </div>
     </div> 
  )
}
