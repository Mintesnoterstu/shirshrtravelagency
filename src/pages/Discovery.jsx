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
    <main style={{padding: '2rem 1rem', maxWidth: '1400px', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#333'}}>Explore Ethiopia's Wonders</h1>
      <div style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem', 
        marginTop: '2rem'
      }}>
        {destinations.map(([id, dest]) => (
          <Link key={id} to={`/tours/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <div style={{
              background: '#fff', 
              borderRadius: '16px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}>
              <div style={{
                height: '200px',
                backgroundImage: `url(${dest.meta.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.3))'
                }}></div>
              </div>
              <div style={{padding: '1.5rem'}}>
                <h2 style={{
                  marginBottom: '0.75rem', 
                  fontSize: '1.4rem',
                  color: '#333',
                  fontWeight: '600'
                }}>
                  {dest.meta.title}
                </h2>
                <p style={{
                  color: '#666', 
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                  fontSize: '0.95rem'
                }}>
                  {dest.meta.short}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  <span style={{
                    background: '#0077cc',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    Explore
                  </span>
                  <span style={{
                    color: '#0077cc',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {dest.content.tours.length} tours available
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 