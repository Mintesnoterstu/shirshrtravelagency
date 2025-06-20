import React from 'react';
import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinations.json';

export default function Experience() {
  const { destinationId } = useParams();
  const dest = destinations[destinationId];

  if (!dest) return <main style={{padding: '2rem'}}><h2>Destination not found.</h2></main>;

  return (
    <main style={{padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto'}}>
      <section style={{marginBottom: '3rem'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#333'}}>{dest.meta.title}</h1>
        <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '1rem'}}>{dest.meta.description}</p>
        {dest.content.description && (
          <p style={{lineHeight: '1.6', fontSize: '1.1rem'}}>{dest.content.description}</p>
        )}
      </section>
      
      <section style={{marginBottom: '3rem'}}>
        <h2 style={{color: '#0077cc', marginBottom: '1rem'}}>✨ Highlights</h2>
        <ul style={{listStyle: 'none', padding: 0}}>
          {dest.content.highlights.map((h, i) => (
            <li key={i} style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>• {h}</li>
          ))}
        </ul>
      </section>
      
      <section style={{marginBottom: '3rem'}}>
        <h2 style={{color: '#0077cc', marginBottom: '1rem'}}>🗺️ Available Tours</h2>
        <div style={{display: 'grid', gap: '1rem'}}>
          {dest.content.tours.map((tour, i) => (
            <div key={i} style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e9ecef'}}>
              <h3 style={{margin: '0 0 0.5rem 0', color: '#333'}}>{tour.name}</h3>
              <p style={{margin: '0', color: '#666'}}>Duration: {tour.duration} | Price: {tour.price}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section style={{marginBottom: '3rem'}}>
        <h2 style={{color: '#0077cc', marginBottom: '1rem'}}>📸 Gallery</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
          {dest.content.gallery.map((img, i) => (
            <div key={i} style={{background: '#f0f0f0', height: '200px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}}>
              [Image: {img.split('/').pop().replace('.jpg', '')}]
            </div>
          ))}
        </div>
      </section>
      
      <Link to="/tours" style={{color: '#0077cc', textDecoration: 'none', fontWeight: 'bold'}}>← Back to all tours</Link>
    </main>
  );
} 