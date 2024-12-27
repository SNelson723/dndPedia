import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const ClassSearch = ({ classes }) => {
  const [selectedClass, setSelectedClass] = useState('');

  return (
    <div className="background ">
    {classes.map((class, i) => (

    ))}
  </div>
  )
};

export default ClassSearch;