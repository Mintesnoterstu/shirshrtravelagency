import React, { useEffect, useState } from 'react';
import destinationsData from '../data/destinations.json';
import { Link } from 'react-router-dom';

export default function Discovery() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Convert object to array for mapping
    setDestinations(Object.entries(destinationsData));
  }, []);

  return (
    <main style={{padding: '2rem 1rem'}}>
      <h1>Explore Destinations</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
        {destinations.map(([id, dest]) => (
          <Link key={id} to={`/tours/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <div style={{background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '1.5rem', transition: 'box-shadow 0.2s', cursor: 'pointer'}}>
              <h2 style={{marginBottom: '0.5rem'}}>{dest.meta.title}</h2>
              <p style={{color: '#555'}}>{dest.meta.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 