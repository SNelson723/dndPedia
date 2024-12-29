/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import axios from 'axios';

const ClassSearch = ({ classes }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedClassInfo, setSelectedClassInfo] = useState({});

  useEffect(() => {
    const getSelectedClassInfo = async () => {
      const { data } = await axios.get(`https://www.dnd5eapi.co/api/classes/${selectedClass}`);
      setSelectedClassInfo(data);
    };

    getSelectedClassInfo();
  }, [selectedClass])

  if (selectedClass) {
    console.log('Working?', selectedClassInfo);
    return (
      <div className='py-4' style={{backgroundColor: '#2F4F4F', minHeight: '95vh'}}>
        <h2 style={{color: 'whitesmoke'}} className='text-center mb-4'>{selectedClassInfo.name}</h2>
        <Container className='rounded py-2' style={{backgroundColor: 'oldlace'}}>

        </Container>
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