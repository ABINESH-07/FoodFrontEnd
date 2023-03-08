import React,{Component} from 'react';
import './Food.css'
import axios from 'axios'

class ValidatingForm extends Component{

    constructor(props){
        super(props);
        this.state={
            Sno:'',
            Items:'',
            Rate:'',
            Rating:'',
            time:''
        };
    }
    
    handleSnoChange=(event)=>{
        this.setState({sno:event.target.value})
    };
    handleItemsChange=(event)=>{
        this.setState({items:event.target.value})
    };
    handleRateChange=(event)=>{
        this.setState({rate:event.target.value})
    };
    handleRatingChange=(event)=>{
        this.setState({rating:event.target.value})
    };
    handleTimeChange=(event)=>{
        this.setState({time:event.target.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            items: this.state.items,
            rate: this.state.rate,
            rating: this.state.rating,
            time: this.state.time
        };
        
        axios.post('http://127.0.0.1:8080/p', data)
    }
    render(){

    return ( 
        <><center>
        <div className='container'>
        <form onSubmit={this.handleSubmit}>
            <h1>LOGIN</h1>
            
            <div className='row'>
                <label>S.No : </label><br></br>
                <input type="number" id='sno' placeholder='S no' value={this.state.sno}
                    onChange={this.handleSnoChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.sno}</p> */}

            <div className='row'>
                <label>Items: </label><br></br>
                <input type="text" id='Items' placeholder='  Enter the Item...' value={this.state.items}
                    onChange={this.handleItemsChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.Animename}</p> */}

            <div className='row'>
                <label>Rate :</label><br></br>
                <input type="text" id='Rate' placeholder=' Enter the rate... ' value={this.state.rate}
                    onChange={this.handlerateChange}/>
                    </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.Maincharacter}</p> */}

            {/* <p  style={{color:"red"}}>{formErrors.noofepisodes}</p> */}

            <div className='row'>
                <label>Rating :</label><br></br>
                <input type="number" id='rating' placeholder='  rating ' value={ this.state.rating}
                    onChange={this.handleRatingChange}/>
            </div>
            <div className='row'>
                <label>Time : </label><br></br>
                <input type="text" id='time' placeholder='Enter the time of food... ' value={this.state.time}
                    onChange={this.handleTimeChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.price}</p> */}
            
            {/* <p  style={{color:"red"}}>{formErrors.team}</p><br></br> */}

            <div className='row'>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
        </div></center>
        </>
     );
    }
}

export default ValidatingForm