import React, { useState, useEffect } from 'react';
import apiKey from '../api/config';

function Quotes() {
  const [quote, setQuote] = useState('');

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
      if (json.length > 0) {
        setQuote(json[0].quote);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
}

export default Quotes;
