import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Profil = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h2 className='profil'>A propos de moi</h2>
        </div>
    );
};

export default Profil;