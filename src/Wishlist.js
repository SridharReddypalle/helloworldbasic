import React,{Component} from 'react';
class Wishlist extends Component{
    constructor(props){
        super(props)
        this.state={
          books:props.books
        }
    }
    componentWillReceiveProps(newProps){
        this.setState({
            books:newProps.books
        })

    }
    render(){
        return(
            <div>
            <h4>WishList:{this.state.books.length}</h4>
            <p></p>
            </div>
        )
    }
}
export default Wishlist;