import React, { useCallback, useEffect } from 'react';
import { Container, Card, Row, CloseButton } from 'react-bootstrap';
import { useAdkar } from '../Customs/CustomContext';

export default function Ahadiths() {
  const { adkar, setAdkar } = useAdkar();

  useEffect(() => {
    fetch('/ahdiths.json')
      .then((response) => response.json())
      .then((data) => {
        const tasabeeh = data.items;
        const sortedText = tasabeeh.sort((a, b) => a.arab.length - b.arab.length);
        console.log(tasabeeh);
        setAdkar(sortedText);
      });
  }, []);

  const handleClose = useCallback((index) => {
    const updatedAdkar = adkar.filter((_, i) => i !== index);
    setAdkar(updatedAdkar);
      },[setAdkar,adkar]);

  return (
    <Container>
      <div className='my-4 text-center '>
        <h1 className=' '>أحاديث نبوية</h1>
        <span className='text-secondary fs-6'>" سنن أبي داود " </span>
      </div>
      <Row className='mt-2 ' xs={1}>
        {adkar.map((adkarItem, index) => (
          <div className='col-md-12 my-2' key={index}>
            <Card className='border-secondary custom-border border-3 py-3'>
              <CloseButton className='px-3' onClick={() => handleClose(index)} />
              <Card.Body>
                <h3 className='text-center fw-bold'>{adkarItem.arab}</h3>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
}
