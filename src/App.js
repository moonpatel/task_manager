import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import SideBar from './components/SideBar';

function App() {
    return (
        <React.Fragment>
            <SideBar />
            <MainSection />
        </React.Fragment>
    );
}

export default App;
