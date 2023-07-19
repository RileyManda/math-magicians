import React, { useState, useEffect } from 'react';
import { apiKey, apiUrl, apiHeaders } from '../api/config';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl, {
          ...apiHeaders,
          headers: {
            ...apiHeaders.headers,
            'X-Api-Key': apiKey,
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        if (json.length > 0) {
          setQuote(json[0].quote);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="QuotesContainer">
        <div className="Quotes">
          <div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>Error:</div>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="QuotesContainer">
      <div className="Quotes">
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default Quotes;
