import React from 'react';
import './Footer.css';
export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <footer className='footer-data'>
                <hr/>
            <div className= 'index-data-div-big-footer'>
                    <div className='index-data-div-low-footer1'>
                        <div className='index-data-small1 div-footer'>                            
                            <h4>ABOUT
                                DIZZY.KR
                            </h4>
                            <ul>
                                <li>Boxing1</li>
                                <li>Boxing1</li>
                                <li>Boxing1</li>
                                <li>Boxing1</li>
                                <li>Boxing1</li>
                                <li>Boxing1</li>
                            </ul>
                        </div>
                        <div className='index-data-small2 div-footer'>
                        <h4>SECRET HOME</h4>
                        <ul>
                        <li><a>이용약관</a></li>
                         <li><a>개인정보취급장침</a></li>
                        <li>
                                    <a><img className="iconimg" src={require('./snsimg/구글.png')}></img></a>
                                    <a><img className="iconimg" src={require('./snsimg/유튜브1.png')}></img></a>
                                    <a><img className="iconimg" src={require('./snsimg/인스타그램1.png')}></img></a>
                                    <a><img className="iconimg" src={require('./snsimg/카카오스토리1.png')}></img></a>
                                    <a><img className="iconimg" src={require('./snsimg/카카오톡.png')}></img></a>
                                    <a><img className="iconimg" src={require('./snsimg/네이버밴드.png')}></img></a>
                        </li>
                        </ul>
                        </div>
                        <div className='index-data-small3 div-footer'>
                        <h4>SUBSCRIBE</h4>
                        </div>
                    </div>
                    <div className='index-data-div-low-footer2'>
                        <span>(주)디찌홈 | 사업자등록번호 : 999-99-99999 | 통신판매업 신고번호 : 제2097-서울서초-1707 | 서울특별시 양천구 신월4동 | 대표자 : 김동완 | 전화번호 : 010-9747-5200</span>
                    </div>
            </div>
            </footer>
        
            )

    }
}