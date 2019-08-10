import React from 'react';
import { inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import './Itemdetail.css'

@inject('authStore')
class Itemdetail extends React.Component{

    constructor(props){
        super(props);
        this.state={
            item:null
        };
        console.log('Itemdetail props',this.props)
    }

    componentDidMount(){
        this.getItem();
    }

    getItem =()=>{
        const{authStore} = this.props;
        const itemId = this.props.match.params.itemId;
        Axios.get(authStore.BASE_URL + '/items/'+itemId)
        .then((response)=>{
            console.log("err?")
            const item = response.data;
            this.setState({
                item:item
            });
        });
    }
    
    render(){
        const item = this.state.item;
        const title = item ? item.title : '';
        const image = item ? item.image : null;
        const content = item ? item.description : null;
        console.log('이미지는 ?',item)
        return (
            <div className="Itemdetail-div-master">
                <div className="img-div-master">
                    <img className="detail-img" src={image} />

                </div>
                <div className="desc-div-master">
                    <div className="detail-subject-div">
                        <p>{title}</p>
                    </div>
                    <div className="detail-content-div">
                        <p>{content}</p>
                    </div>
                    <div className="detail-button-div">
                        <button className="detail-button" >주문하기</button>
                        <button className="detail-button" >장바구니 추가</button>

                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Itemdetail);