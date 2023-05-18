import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class CarouselClass extends Component{
  imgs=['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg']
  i = 0;

  constructor(){
      super();
      this.state = {
        imageSrc: this.imgs[0],
        isRunning: false,
      };
  }

  nextImg = ()=>{
    if(this.i<3){
      this.i++;
      this.setState({imageSrc: this.imgs[this.i]});
    }
  }

  prevImg = ()=>{
    if(this.i>0){
      this.i--;
      this.setState({imageSrc: this.imgs[this.i]});
    }     
  }

  
  crslImg = () => {
    if (!this.state.isRunning) {
      this.intervalId = setInterval(this.crslHandler, 1000);
      this.setState({ isRunning: true });
    }
  };

  stopCrslImg = () => {
    clearInterval(this.intervalId);
    this.setState({ isRunning: false });
  };

  crslHandler = () => {
    if (this.i <= 3) {
      this.i++;
      if (this.i === 4) {
        this.i = 0;
      }
      this.setState({ imageSrc: this.imgs[this.i] });
    }
  };


  render(){
    return (
      <div className="cardClass">
        <Card style={{ width: '18rem' }}>
          <div>
            <Card.Img className="crsClass" variant="top" src={this.state.imageSrc} />
          </div>
          <Card.Body>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button onClick={this.nextImg}>Next</Button>
              <Button onClick={this.prevImg}>Prev</Button>
              <Button onClick={this.crslImg}>Carousel</Button>
              <Button onClick={this.stopCrslImg}>Stop</Button>
            </ButtonGroup>
          </ButtonToolbar>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default CarouselClass;
