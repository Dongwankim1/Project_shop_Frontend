import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.css';
import { observer, inject } from 'mobx-react';

@inject('authStore')
@observer
class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    logout =()=>{
        const {authStore} = this.props;
        authStore.deleteToken();
    }
    render() {
        const{authStore} = this.props;
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
                                            <li className="menu-ul-li"><Link to="/items"><a className="menu-ul-a">PRODUCT</a></Link>    </li>
                                        <li className="menu-ul-li"><a className="menu-ul-a">JOB</a></li>
                                        <li className="menu-ul-li"><a className="menu-ul-a">DONGWAN</a></li>
                             </ul>
                                    </div>
                                <div className='loginmember-div-master'>
                                        <div className='loginmember-div-master-1'>
                                            <span className='loginmember-span'>
                                            {
                                                authStore.isLoggedIn && <a classname="point-a">포인트 : 1111</a>
                                            }
                                                {
                                             
                                            authStore.isLoggedIn ? 
                                                        <Link to="/"><a onClick={this.logout} className='login-a'>환영합니다,ㅇㅇ님</a></Link> :
                                                        <Link to="/login"><a className='login-a'>로그인</a>
                                                        </Link>        
                                       
                                        }
                                        {
                                                    !authStore.isLoggedIn && <a className='login-a'>회원가입</a>
                                        }
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

export default Header;