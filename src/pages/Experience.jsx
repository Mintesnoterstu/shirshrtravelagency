import React from 'react';
import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinations.json';

export default function Experience() {
  const { destinationId } = useParams();
  const dest = destinations[destinationId];

  if (!dest) return <main style={{padding: '2rem'}}><h2>Destination not found.</h2></main>;

  return (
    <main style={{padding: '2rem 1rem'}}>
      <section style={{marginBottom: '2rem'}}>
        <h1>{dest.meta.title}</h1>
        <p>{dest.meta.description}</p>
      </section>
      <section style={{marginBottom: '2rem'}}>
        <h2>Highlights</h2>
        <ul>
          {dest.content.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </section>
      <section style={{marginBottom: '2rem'}}>
        <h2>Tours</h2>
        <ul>
          {dest.content.tours.map((tour, i) => (
            <li key={i}><strong>{tour.name}</strong> - {tour.duration} - {tour.price}</li>
          ))}
        </ul>
      </section>
      <section style={{marginBottom: '2rem'}}>
        <h2>Gallery</h2>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          {dest.content.gallery.map((img, i) => (
            <img key={i} src={img} alt={dest.meta.title + ' photo'} style={{width: 180, borderRadius: 8}} />
          ))}
        </div>
      </section>
      <Link to="/tours" style={{color: '#0077cc'}}>← Back to all tours</Link>
    </main>
  );
} 