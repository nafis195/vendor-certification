import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCertifications } from '../../utils/api';
import { filterCertifications } from '../../utils/filterUtils';
import '../../styles/pages/home.css';

function HomePage() {
  const [certifications, setCertifications] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchCertifications().then(setCertifications);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredCertifications = filterCertifications(certifications, filters);

  return (
    <div className="home-page">
      <h1>Vendor Certifications</h1>
      <div className="filters">
        {/* Add filter inputs here */}
      </div>
      <ul className="certification-list">
        {filteredCertifications.map(cert => (
          <li key={cert.id}>
            <Link to={`/certification/${cert.id}`}>{cert.certification_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
