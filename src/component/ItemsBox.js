import React from 'react';
import { inject } from 'mobx-react';
import {withRouter} from 'react-router-dom';
import './ItemsBox.css';


@inject('authStore')
class ItemBox extends React.Component{

    goToItem=()=>{
        const item = this.props.item;
        this.props.history.push('/items/' + item.id);
    }



    render(){
        const{authStore}=this.props;
        const item = this.props.item;
        let image = item.image;
     

        if (!image.startsWith('http')){
            image=authStore.BASE_URL + image;
        }
        return(
           <div className="item-container" onClick={this.goToItem}>
            <img src={image} alt=""/>
            <p className="item-title">{item.title}</p>
            <p className="item-price"></p>


           </div>
        )
    }
}



export default withRouter(ItemBox);