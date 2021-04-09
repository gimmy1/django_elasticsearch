import React from 'react';

import { sanitize } from 'dompurify'; // new
import { Card } from 'react-bootstrap'; // new

// changed
function ResultList ({ results }) {
  // new
  const resultItems = results.map(result =>
    <Card className='mb-3' key={result.id}>
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${sanitize(result.winery)} ${sanitize(result.variety)}`
          }}
        ></Card.Title>
        <Card.Subtitle
          className='mb-2 text-muted'
        >{result.country} | {result.points} Points | ${result.price}
        </Card.Subtitle>
        <Card.Text dangerouslySetInnerHTML={{ __html: sanitize(result.description) }} />
      </Card.Body>
    </Card>
  );

  // changed
  return (
    <div>
      {!results && <p>Search using the left panel.</p>}
      {results && results.length === 0 && <p>No results found.</p>}
      {resultItems}
    </div>
  );
}

export default ResultList;