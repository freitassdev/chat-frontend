import React from 'react';
import './Sidebar.css'
import images from '../../assets';
import { Tooltip } from 'primereact/tooltip';

const Sidebar: React.FC = () => {
    // const check = images.check;
    const doubleCheck = images.doubleCheck;
    const userProfile = images.userSvg;
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="profile-image">
                    <img src={userProfile} alt="profile" />
                </div>
                <div className="sidebar-header-icons">
                    <Tooltip target=".tooltip-icon"></Tooltip>
                    <div className="sidebar-header-icon">
                        <i className='pi pi-comment tooltip-icon'
                            data-pr-tooltip="Nova Conversa"
                            data-pr-position="bottom"
                            data-pr-at="center top"
                            data-pr-my="center-2"></i>
                    </div>
                    <div className="sidebar-header-icon">
                        <i className='pi pi-cog tooltip-icon'
                            data-pr-tooltip="Configurações"
                            data-pr-position="bottom"
                            data-pr-at="center top"
                            data-pr-my="center-2"></i>
                    </div>
                </div>
            </div>
            <div className="siderbar-content">
                <div className="sidebar-item">
                    <div className="user-image">
                        <img src={userProfile} alt="user" />
                    </div>

                    <div className="name-and-message">
                        <div className="user-name">
                            <p>Nome do Usuário</p>
                        </div>
                        <div className="last-message">
                            <img src={doubleCheck} className="last-message-icon" />
                            <p>Lorem ipsum dolor sit amet   ...</p>
                        </div>
                    </div>
                    <div className="last-message-day">
                        <p>Domingo</p>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="user-image">
                        <img src={userProfile} alt="user" />
                    </div>

                    <div className="name-and-message">
                        <div className="user-name">
                            <p>Nome do Usuário</p>
                        </div>
                        <div className="last-message">
                            <img src={doubleCheck} className="last-message-icon" />
                            <p>Lorem ipsum dolor sit amet   ...</p>
                        </div>
                    </div>
                    <div className="last-message-day">
                        <p>Domingo</p>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="user-image">
                        <img src={userProfile} alt="user" />
                    </div>

                    <div className="name-and-message">
                        <div className="user-name">
                            <p>Nome do Usuário</p>
                        </div>
                        <div className="last-message">
                            <img src={doubleCheck} className="last-message-icon" />
                            <p>Lorem ipsum dolor sit amet   ...</p>
                        </div>
                    </div>
                    <div className="last-message-day">
                        <p>Domingo</p>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="user-image">
                        <img src={userProfile} alt="user" />
                    </div>

                    <div className="name-and-message">
                        <div className="user-name">
                            <p>Nome do Usuário</p>
                        </div>
                        <div className="last-message">
                            <img src={doubleCheck} className="last-message-icon" />
                            <p>Lorem ipsum dolor sit amet   ...</p>
                        </div>
                    </div>
                    <div className="last-message-day">
                        <p>Domingo</p>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="user-image">
                        <img src={userProfile} alt="user" />
                    </div>

                    <div className="name-and-message">
                        <div className="user-name">
                            <p>Nome do Usuário</p>
                        </div>
                        <div className="last-message">
                            <img src={doubleCheck} className="last-message-icon" />
                            <p>Lorem ipsum dolor sit amet   ...</p>
                        </div>
                    </div>
                    <div className="last-message-day">
                        <p>Domingo</p>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="user-image">
                        <img src={userProfile} alt="user" />
                    </div>

                    <div className="name-and-message">
                        <div className="user-name">
                            <p>Nome do Usuário</p>
                        </div>
                        <div className="last-message">
                            <img src={doubleCheck} className="last-message-icon" />
                            <p>Lorem ipsum dolor sit amet   ...</p>
                        </div>
                    </div>
                    <div className="last-message-day">
                        <p>Domingo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
