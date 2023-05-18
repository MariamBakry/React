import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ElementsClass extends Component{
    getData = (e)=>{
        this.setState({my_text:e.target.value})        
    }

    resetData = (e)=>{
        this.setState({my_text:''})        
    }

    constructor(){
        super();
        this.state = {
            my_text:""
        }
    }

    render(){
        return(
            <Form>
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Enter any text here</Form.Label>
                        <Form.Control type='text' id="disabledTextInput" placeholder="your text..." value={this.state.my_text} onChange={this.getData}/>
                        <p>{this.state.my_text}</p>
                    </Form.Group>
                    <Button type="submit" onClick={this.resetData}>Reset</Button>
                </fieldset>
            </Form>
        )
    }
}

export default ElementsClass;
