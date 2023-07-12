import React, { useState, useEffect } from 'react';
import { apiKey, apiUrl, apiHeaders } from '../api/config';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(apiUrl, {
        ...apiHeaders,
        headers: {
          ...apiHeaders.headers,
          'X-Api-Key': apiKey,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          if (json.length > 0) {
            setQuote(json[0].quote);
          }
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="QuotesContainer">
        <div className="Quotes">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="QuotesContainer">
      <div className="Quotes">
        {' '}
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default Quotes;
