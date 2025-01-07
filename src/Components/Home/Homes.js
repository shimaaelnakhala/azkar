import React, { Fragment, useEffect } from 'react'
import {  Card, Container, Row } from 'react-bootstrap'
import { useAdkar } from '../Customs/CustomContext';
import './home.css'
import { Link } from 'react-router-dom';
export default function Homes() {
  const{setAdkar,adkar}= useAdkar()
  useEffect(() => {
  fetch('/all.json')
  .then(respons=>respons.json())
  .then(data=> {
    const tasabeeh = data
    setAdkar(tasabeeh)
  })
  }, [setAdkar]);

  return (
    <Fragment>
    <Container className='py-5'>
    <Row sm={2} xs={1}  >
    {adkar.map((adkarItem, index) => (
      <div  className='col-md-4 col-xs-12 col-sm-6 my-2' key={index}>
      <Card className='h-100 py-3 cardbox'>
      <Card.Body className='m-auto text-center'>
      <Card.Title className='fw-bold fs-4'>
      {adkarItem.category}
      </Card.Title>
      <Link to={`/${adkarItem.category}`} className="text-light btn-danger px-4 fs-5 my-3 btn">
      فلنبدأ
    </Link>
      </Card.Body>
      </Card>
      </div>
    ))}
    </Row>
    </Container>
    </Fragment>
  )
}
