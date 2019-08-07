import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.css';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <header>
                <div className='header-div-data'>
                    <div className='header-div-Link'>
                        <Link to="/"><a className='header-a'>DIZZY HOME</a></Link>
                    </div>
                </div>

            </header>
                
            <nav>
                <div className="div-master-menu">
                        <div className="div-master-menu-1">
                            <div className="div-master-menu-2">
                            <div className='menu-logingroup-div'>
                                
                                <div className="menu-ul-div">
                             <ul className="menu-ul">
                                        <li className="menu-ul-li"><a className="menu-ul-a">HOME</a></li>
                                        <li className="menu-ul-li"><a className="menu-ul-a">SALE</a></li>
                                        <li className="menu-ul-li"><a className="menu-ul-a">BOTTOM</a></li>
                                        <li className="menu-ul-li"><a className="menu-ul-a">JOB</a></li>
                                        <li className="menu-ul-li"><a className="menu-ul-a">DONGWAN</a></li>
                             </ul>
                                    </div>
                                <div className='loginmember-div-master'>
                                        <div className='loginmember-div-master-1'>
                                        <span className='loginmember-span'>
                                                <Link to="/login"><a className='login-a'>로그인</a></Link>
                                            <a className='login-a'>회원가입</a>
                                        </span>
                                    </div>
                                </div>
                             </div>   
                        </div>
                    </div>
                </div>
            </nav>
            </div>

        )

    }
}