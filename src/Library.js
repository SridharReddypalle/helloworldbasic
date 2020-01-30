import React,{Component} from 'react';
import Booklist from './Booklist';
import Wishlist from './Wishlist';
class Library extends Component{
    constructor(){
        super()
        var books=[
            {
                id:1,
                title:'React Js',
                author:'Deva'
            },
            {
                id:2,
                title:'Node Js',
                author:'Manasa'
            }
        ]
        this.state={
            books:books,
            wishlist:[]
         }
    }
    addToWishList = (book) => {
        console.log(JSON.stringify(book))
        this.setState({
            wishlist:[
                ...this.state.wishlist,book
            ]
        })
    }
    render(){
        return(
            <div>
            <h1>Library</h1>
            <Booklist books={this.state.books} addToWishList={this.addToWishList}/>
            <Wishlist books={this.state.wishlist}/>
            </div>
        )
    }
}
export default Library;