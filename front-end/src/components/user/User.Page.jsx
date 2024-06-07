import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './User.Page.css';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('it-IT', options);
};

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error retrieving user data:', error);
        setError('Error retrieving user data');
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-center">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="profile-card">
            <div className="profile-card-header">
              <h2 className="profile-title">User Profile</h2>
            </div>
            {error && <p className="text-danger">{error}</p>}
            {userData ? (
              <div className="profile-card-body">
                <p className="profile-text">Name: {userData.name}</p>
                <p className="profile-text">Surname: {userData.surname}</p>
                <p className="profile-text">Date Of Birth: {formatDate(userData.dateOfBirth)}</p>
                <p className="profile-text">Server: {userData.continent}</p>
                <p className="profile-text">Username: {userData.username}</p>
                <p className="profile-text">Email: {userData.email}</p>
              </div>
            ) : (
              <div className="profile-card-body">
                <p>Loading user data...</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
