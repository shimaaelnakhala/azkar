import React, { Fragment, useEffect,} from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { PatchMinus, PatchPlus } from 'react-bootstrap-icons'
import { useAdkar } from '../Customs/CustomContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cardazkar.css'
import ModalSuccess from '../Modals/ModalSuccess';
import { useParams } from 'react-router-dom';
export default function CardAzkar() {
  const { decrement,setAdkar,increaseFontSize,decreaseSize,filteredAdkar, setFilteredAdkar ,fontSize} = useAdkar();
  const { category } = useParams();
    useEffect(() => {
      fetch('/all.json')
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.find((adkarItem) => adkarItem.category === category);
          const sortedText = filtered.array.sort((a, b) => a.text.length - b.text.length);
          setFilteredAdkar(sortedText);
          setAdkar(filtered.array);
        });
    }, [category, setAdkar]);
    const colClass = filteredAdkar.length < 3 ? 'col-12 ' : 'col-md-4 col-sm-6 col-xs-12';
  return (
    <Fragment>
    <Container >
    <h2 className='text-center pb-3 pt-5'>{category}</h2>
    <Row xs={1} >
    {filteredAdkar.map((Item, id) => (
    <div className={`${colClass} my-2`} key={id}>
      <Card className="h-100 border-secondary custom-border border-2">
          <div className="d-flex px-3 pt-3">
            <p className="px-1 text-success fw-bold fs-4" onClick={increaseFontSize}>
              <PatchPlus />
            </p>
            <p
              className="px-1 text-secondary fw-bold fs-4"
              onClick={decreaseSize}
            >
              <PatchMinus  />
            </p>
          </div>
          <Card.Body>
            <h3
              className="text-center fw-bold "
              style={{ fontSize: `${fontSize}px` }}
            >
              {Item.text}
            </h3>
            <div className="mx-auto d-flex justify-content-center">
              <Button
                className="btn-danger fs-5 my-3 mx-1 text-center"
                onClick={() => decrement(id)}
              >
                {Item.count}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    ))}
    </Row>
    </Container>
    <ModalSuccess/>
    <ToastContainer/>
   </Fragment>
  )
}
