import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{textAlign: 'center', padding: '3rem 1rem'}}>
      <h1>Welcome to Shirsh Travel Agency</h1>
      <p>Discover Ethiopia's wonders with us!</p>
      <Link to="/tours" style={{padding: '1rem 2rem', background: '#0077cc', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>Explore Tours</Link>
    </main>
  );
} 