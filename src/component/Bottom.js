import React from 'react';
import { inject } from 'mobx-react';
import Axios from 'axios';
import ItemBox from './ItemsBox';
import './Bottom.css';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));





@inject('authStore')
class Bottom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            offset: 0,
            limit: 6,
            isLoadingItems : false
        };
        
        
    }

    progress = () => {

        const { completed } = this.state;

        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });

    };


    componentDidMount() {
        this.indexItems();
        window.addEventListener("scroll", this.handleScroll, true);
    }

    indexItems() {
        if (!this.state.isLoadingItems) {
            this.setState({
                isLoadingItems: true
            })
          
            
            const { authStore } = this.props;
            Axios.get(authStore.BASE_URL + '/test/?offset=' + this.state.offset + '&limit=' + this.state.limit)
                .then((response) => {
                    let items = response.data.item
                    // console.log("indexItems");
                    // console.log(items);
                    if (this.state.offset !== 0) {
                        items = this.state.items.concat(items);
                    }

                    this.setState({
                        items,
                        offset: this.state.offset + 6
                    });
                }).finally(() => {
                    this.setState({
                        isLoadingItems: false
                    })
                });
        }
    }


    handleScroll = () => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight,
            document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop,
            document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        if ((scrollTop + clientHeight) + 1 > scrollHeight) {
            setTimeout(function () {
                console.log("Bottom");
              
            }, 1000);

            this.indexItems();
            
        }
    }

    render() {
        
        const items = this.state.items.map((item) => {
            return (
                <ItemBox key={item.id} item={item} />
            )
        })
        return (

            <div className='Bottom-div-master'>
                <div className="Bottom-div-master1">
                    <div className="Bottom-div-inner">
                        {items}
                        
                        
                 </div>
                           {
                            
                        this.state.isLoadingItems && <div><CircularProgress className="Circle" color="secondary"/></div>
                        }
                </div>
            </div>
        )
    }
}

export default Bottom;




