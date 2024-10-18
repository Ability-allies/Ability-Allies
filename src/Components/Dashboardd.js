// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Import Firebase authentication config
import './styles/Dashboardd.css';

const Dashboard = () => {
    const [data, setData] = useState([]); // State to hold fetched data
    const [user, setUser] = useState(null); // State to hold authenticated user
    const [loading, setLoading] = useState(true); // State to handle loading state

    // Fetch data from API
    const fetchData = async (uid) => {
        try {
            const response = await fetch(`https://api.example.com/data?user=${uid}`); // Replace with your API URL
            const json = await response.json();
            setData(json); // Set state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Track the user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // Set user if logged in
                fetchData(user.uid); // Fetch user-specific data
            } else {
                setUser(null); // No user is logged in
            }
            setLoading(false); // Stop loading once user status is checked
        });

        return () => unsubscribe(); // Clean up listener on unmount
    }, []);

    // If still loading, show a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no user is logged in, display a message
    if (!user) {
        return <div>Please log in to access your dashboard.</div>;
    }

    return (
        <div className="dashboard">
            <div className="header">
                Ability Allies Dashboard - Welcome, {user.email}!
            </div>
            <div className="content">
                {/* Display fetched data in cards */}
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div className="card" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No data available for your account.</p>
                )}
                {/* Your existing static feature cards */}
                <div className="card">
                    <h3>Feature 1</h3>
                    <p>Description of feature 1.</p>
                </div>
                <div className="card">
                    <h3>Feature 2</h3>
                    <p>Description of feature 2.</p>
                </div>
                <div className="card">
                    <h3>Feature 3</h3>
                    <p>Description of feature 3.</p>
                </div>
                <div className="card">
                    <h3>Feature 4</h3>
                    <p>Description of feature 4.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
