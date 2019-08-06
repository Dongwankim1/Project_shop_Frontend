import React from 'react';
import './Login.css'

class Login extends React.Component{
    render(){
        return(
            
            <section className='login-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='login-div'>
                            <div className='login-div-1'>
                                <h4>시작합니다</h4>
                                <p><h3>로그인</h3></p>
                                <hr></hr>
                                <div className="row1">
                                    <div className="facebook divlogin">페이스북</div>
                                    <div className="google divlogin">구글</div>
                                </div>
                                <div className="login-or"><hr></hr></div>
                                <div className="form-group">
                                    <input type="text" name="username" placeholder="아이디" className="lginput"></input>
                                    <span className="input-icon"><img src={require('./img/login.JPG')} className="fa-address-card"/></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" placeholder="패스워드" className="lginput"></input>
                                    <span className="input-icon"><i></i></span>
                                </div>
                                <p className="small">
                                    <a href="/fingPassword" >패스워드 찾기</a>
                                </p>
                                <hr></hr>
                                <button className="login-button">로그인하기</button>
                                <hr></hr>
                                <a href="/register"><button className="regi-button">회원가입하기</button></a>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
                
        )
    }
}

export default Login;