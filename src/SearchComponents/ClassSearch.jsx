/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const ClassSearch = ({ classes }) => {
  const [selectedClass, setSelectedClass] = useState('');

  console.log('Class Search', classes);

  if (selectedClass) {
    return (
      <div>
        {selectedClass}
        <Button onClick={() => setSelectedClass('')}>Return</Button>
      </div>
    );
  }

  return (
    <div className='py-5' style={{backgroundColor: '#2F4F4F'}}>
      <h2 style={{color: 'whitesmoke'}} className='text-center mb-5'>Select a class for more info</h2>
      <Container>
        <Row  xs={1} md={2} lg={3} className="g-4">
          {classes.map((classObj, i) => (
            <Col key={i}>
              <Card className='card card w-75 mx-auto rounded' style={{backgroundColor: 'oldlace'}}>
                <Card.Body className='d-flex justify-content-center' onClick={() => setSelectedClass(classObj.index)}>
                  <div>
                    <Image
                      src={`../src/resources/${classObj.name}.jpg`}
                      alt={classObj.name}
                      style={{height: '20rem', borderRadius: '12px'}}
                      fluid
                    />
                    <Card.Title className='text-center mt-3'>
                      {classObj.name}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default ClassSearch;