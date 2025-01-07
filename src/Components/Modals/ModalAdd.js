import React, { Fragment } from 'react'
import { useAdkar } from '../Customs/CustomContext'
import { Form } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'

export default function ModalAdd() {
  const{showAdd,handleCloseAdd,handleChange,addData,handleSubmit}=useAdkar()
  return (
    <Fragment>
    <Modal show={showAdd} animation={true} size='md'  onHide={handleCloseAdd} centered>
    <Modal.Header className='border-0 py-2 text-bg-success' >
    <Modal.Title><h2 className='m-2 '> <Plus/>إضافة ذكر / دعاء</h2></Modal.Title>
    </Modal.Header >
    <Modal.Body className='px-5 border-0 pb-2'>
   <Form className='mb-3' onSubmit={handleSubmit}>
   <Form.Label className='fw-bold fs-4' >النص</Form.Label>
   <br/>
   <textarea className='fw-4 w-100 border-success rounded-1 border-2 p-2' name='content' value={addData.text} onChange={handleChange}/>
   <Form.Label className='fw-bold fs-4'>العدد</Form.Label>
   <Form.Control  type='number' className=' border-success border-2 p-2' name='count' value={addData.count} onChange={handleChange}/>
   <div className='d-flex my-3'>
   <Button className='btn btn-success mx-1 fs-5' type='submit'>اضافة</Button>
   <Button className='btn btn-danger mx-1 fs-5' onClick={handleCloseAdd}>رجوع</Button>
   </div>
   </Form>
  </Modal.Body>
  </Modal>
    
    </Fragment>
  )
}
