import React, { useState, useEffect } from 'react';
import apiKey from '../api/config';

function Quotes() {
  const [data, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=happiness',
        {
          headers: {
            'X-Api-Key': apiKey,
          },
        },
      );
      const json = await res.json();
      console.log(json);
      setQuotes(json);
    };
    fetchData();
  }, [setQuotes]);
  return (
    <div>
      {data.map((quotes) => (
        <p key={quotes.id}>{quotes.quote}</p>
      ))}
    </div>
  );
}
export default Quotes;
