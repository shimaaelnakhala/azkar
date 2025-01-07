import React, { Fragment } from 'react'
import { Modal } from 'react-bootstrap'
import { Check } from 'react-bootstrap-icons'
import { useAdkar } from '../Customs/CustomContext'

export default function ModalSuccess() {
  const{show,handleClose}=useAdkar()
  return (
<Fragment>
<Modal show={show} animation={true} size='sm'  onHide={handleClose} centered>
<Modal.Header className='border-0 py-2 text-bg-success'>
<Modal.Title className='m-auto '>
<h2 > <Check  className='fw-bold py-4'/>تهانينا  لقد انتهيت</h2>
</Modal.Title>
</Modal.Header>
<Modal.Body className='px-5 border-0 pb-2 py-3'>
<h2 >جزاك الله كل الخير
</h2>
</Modal.Body>
</Modal>

</Fragment>)
}
