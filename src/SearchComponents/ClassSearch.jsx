/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const ClassSearch = ({ classes }) => {
  const [selectedClass, setSelectedClass] = useState('');

  console.log('Class Search', classes)
  return (
    <>
      <Container>
        <Row  xs={1} md={2} lg={3} className="g-4">
          {classes.map((classObj, i) => (
            <Col key={i}>
              <Card className='card card w-75 mx-auto'>
                <Image
                  src={`../src/resources/${classObj.name}.jpg`}
                  alt={classObj.name}
                  fliud
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
};

export default ClassSearch;