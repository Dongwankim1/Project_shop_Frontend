import React from 'react';
import './Login.css'
import Axios from 'axios';
import { inject } from 'mobx-react';






@inject('authStore')
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
        username:'admin',
        password:'admin'
    };
        console.log(props);
    }
    onInputChanged=(event)=>{
        const target = event.target;
        if(target.name ==='username'){
            this.setState({
                username:target.value
                
            });
            
        }else if(target.name ==='password'){
            this.setState({
                password:target.value
            });
        }
    }

    login=()=>{
        
        Axios.post(

        )
    }


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
                                    <input type="text" name="username" onChange={this.onInputChanged} placeholder="아이디" className="lginput"></input>
                                    <span className="input-icon"><img src={require('./img/login.JPG')} className="fa-address-card"/></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" onChange={this.onInputChanged} placeholder="패스워드" className="lginput"></input>
                                    <span className="input-icon"><img src={require('./img/password.JPG')} className="pass-card" ></img></span>
                                </div>
                                <p className="small">
                                    <a href="/fingPassword" >패스워드 찾기</a>
                                </p>
                                <hr></hr>
                                <button className="login-button" onClick={this.login}>로그인하기</button>
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