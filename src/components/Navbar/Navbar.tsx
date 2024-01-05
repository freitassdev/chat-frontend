import React from 'react';
import './Navbar.css'
import images from '../../assets';

const Navbar: React.FC = () => {
    const userProfile = images.userSvg;

    return (
        <nav>
            <div className="nav-content">
                <div className="nav-header">
                    <div className='nav-image'>
                        <img src={userProfile} alt="profile" />
                    </div>
                    <div className='nav-name'>
                        <div className="user-name">
                            <p>Nome do Usuário</p>
                        </div>
                        <div className="message">
                            <p className="">Clique para mostrar mais dados do contato.</p>
                        </div>
                    </div>
                </div>
                <div className="nav-options">
                    <div className='nav-option'>
                        <i className='pi pi-search'></i>
                    </div>
                    <div className='nav-option'>
                        <i className='pi pi-ellipsis-v'></i>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
