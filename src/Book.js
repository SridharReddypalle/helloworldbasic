import React,{Component} from 'react';
class Book extends Component{
    constructor(props){
        super(props)
        this.state={
          book:this.props.book
        }
    }
    add=()=>{
        this.props.addToWishList(this.state.book)
    }
    render(){
        return(
            <div>
            <h3>{this.state.book.title}</h3>
            <h3>Author:{this.state.book.author}</h3>
            <button onClick={this.add}>Add To WishList</button>
            </div>
        )
    }
}
export default Book;