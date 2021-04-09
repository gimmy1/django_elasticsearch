import React, { useState } from 'react'; // changed

import './App.css';

import { Col, Container, Row } from 'react-bootstrap';

import ResultList from './components/ResultList';
import Search from './components/Search';

function App () {
  // new
  const [results, setResults] = useState([]);

  // new
  const search = query => {
    setResults([
      {
        id: 'ecf8760a-d139-4d63-83bc-6ddbac9f87dc',
        country: 'US',
        description: 'A youthful, exciting wine that offers plenty of earth and cassis.',
        points: 92,
        price: '65.00',
        variety: 'Cabernet Sauvignon',
        winery: 'Staglin'
      }
    ]);
  };

  return (
    <Container className='pt-3'>
      <h1>Perusable</h1>
      <p className='lead'>
        Use the controls below to peruse the wine catalog and filter the results.
      </p>
      <Row>
        <Col lg={4}>
          <Search search={search} /> {/* changed */}
        </Col>
        <Col lg={8}>
          <ResultList results={results} /> {/* changed */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;