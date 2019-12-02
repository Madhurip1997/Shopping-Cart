import React, { Component } from 'react';
import blackpng from './images/black.png';
import bluepng from './images/blue.png';
import redpng from './images/red.png';

import './App.css';

class App extends Component {

     constructor(props){
       super(props);
       this.state ={
          black :"active",
          red :"",
          blue :"",
          productDetails :{ price: "₹ 999.00", "latestReviewDate": "2018-10-21T00:00:00.000Z",
                            name: "Bluetooth Speakers", 
                            title: "JBL Go Portable Wireless Bluetooth Speaker with Mic", 
                            category: "Bluetooth Speakers", productId: "ABCD1234", 
                            createdAt: "2018-08-31T09:36:08.448Z", reviewCount: 3013},
          topScores: [ { topic: "Sound Quality", score: 4.6 ,id :1},
                         { topic: "Bass", score: 4.2 ,id:2}, 
                         { topic: "Design and Build", score: 4.2 ,id:3},
                         { topic: "Battery Backup", score: 4.2,id:4 } ] 
       }
     }

     onChangeProductColor=(e)=>{
     //condition for blue
      if(e.target.value == 'blue'){
       this.setState({blue:"active",productDetails: { ...this.state.productDetails, productId: "ABCD890",price:"₹ 1099.00"}});
     }else{
      this.setState({blue:""});
     }
     
     //condition for red
     if(e.target.value == 'red'){
       this.setState({red:"active",productDetails: { ...this.state.productDetails, productId: "ABCD4567",price:"₹ 1199.00"}})
     } else{ this.setState({red:""});
     
     //condition for black
     }if(e.target.value == 'black'){
       this.setState({black:"active",productDetails: { ...this.state.productDetails, productId: "ABCD1234",price:"₹ 999.00"}})
     }else{
      this.setState({black:""});
     }
   }

   addtoCart=()=>{
     alert("Product Added to Cart");
   }

  render() {
    return <div className="container">
      <div className="left-column">
        <img data-image="black" src={blackpng} alt="" className={this.state.black} />
        <img data-image="blue" src={bluepng} alt="" className={this.state.blue} />
        <img data-image="red" src={redpng} className={this.state.red} alt="" />

        <marquee>Hurry up! Only Few left ...  </marquee>  

      </div>

      <div className="right-column">
        <div className="product-description">
          <span className="productName">Product Name : {this.state.productDetails.name}</span>
          <h3>{this.state.productDetails.title}</h3>
          <span>Category : {this.state.productDetails.category}</span><br/>
          <span>Product ID : {this.state.productDetails.productId}</span><br/>
          <span>Manufactured Date: {this.state.productDetails.createdAt}</span><br/>
          <span>Review Count : {this.state.productDetails.reviewCount}</span><br/>
          <ul>
        {
          this.state.topScores.map(function(e){
            return <li key={e.id}>{e.topic} - {e.score}</li>;
          })
        }
        </ul>
        </div>

        <div className="product-configuration">
          <div className="product-color">
            <span>Color</span>

            <div className="color-choose">
              <div>
                <input data-image="red" type="radio" id="red" name="color" value="red" checked="" className="" onClick={(e)=>this.onChangeProductColor(e)}/>
                <label for="red"><span></span></label>
              </div>
              <div>
                <input data-image="blue" type="radio" id="blue" name="color" value="blue" className="" onClick={(e)=>this.onChangeProductColor(e)} />
                <label for="blue"><span></span></label>
              </div>
              <div>
                <input data-image="black" type="radio" id="black" name="color" value="black" className="active" onClick={(e)=>this.onChangeProductColor(e)} />
                <label for="black"><span></span></label>
              </div>
            </div>
          </div>
          <div className="cable-config">
            <span>Cable configuration</span>
            <div className="cable-choose">
              <button>Straight</button>
              <button>Coiled</button>
              <button>Long-coiled</button>
            </div>
          </div>
        </div>
        <div className="product-price">
          <span>{this.state.productDetails.price}</span>
          <a className="cart-btn" onClick={this.addtoCart}>Add to cart</a>
        </div>
      </div>
    </div>
  }
}
export default App;
