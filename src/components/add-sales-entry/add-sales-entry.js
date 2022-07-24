import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
   
import Dialog from '@mui/material/Dialog';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default class AddSalesEntry extends Component {
 
 
  constructor(props) {
    super(props)

  } 

    Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  state = {
    layoutName: "default",
    input: "",
    items:[],
    selectedItemId: ""
  };

  componentDidMount() {
    axios.get('http://localhost:4000/Items/')
      .then(res => {
        console.log(res)
        const modifiedData = this.itemsDataCreator(res.data)
        this.setState({
          items: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  itemsDataCreator(items){
    const arr = []
    items.map((item) =>{
 
    })
  }

  onChange = (input) => {
    this.setState({
      input: input
    });
    console.log("Input changed", input);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", this.state.selectedItemId);
    if(button === '{enter}'){
      const ItemObject = {
        itemId: this.state.selectedItemId,
        quantity: this.state.input
      };
      axios.post('http://localhost:4000/AddEntry/add-entry', ItemObject)
        .then(res => console.log(res.data));
  
    }
 
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  // handleShift = () => {
  //   let layoutName = this.state.layoutName;

  //   this.setState({
  //     layoutName: layoutName === "default" ? "shift" : "default"
  //   });
  // };

  onChangeInput = (event) => {
    let input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        this.keyboard.setInput(input);
      }
    );
  };

  state = {
    open: false,
  }

 
  onSubmit(e) {
 
  }
  openKeyboard(item){
    console.log(item)
    this.setState({ open: !this.state.open, selectedItemId: item._id });
  }

  render() {
    return ( <Container>
     <Row>
       {this.state?.items?.map((variant) => (
        // eslint-disable-next-line react/jsx-no-undef
       
        <Col  xs={6} sm={3} key={variant.name + '1'}>
        <Card
          onClick={()=>this.openKeyboard(variant)}
          key={variant.name}
          text='dark'
          
          className="mb-2"
        >
          <Card.Header>
          <Badge pill bg="dark">
       10
      </Badge></Card.Header>
          <Card.Body>
            <Card.Title>{variant.name}   </Card.Title>
            <Card.Text>
             
            </Card.Text>
          </Card.Body>


          
        </Card>
        </Col>
       
      ))}
      </Row>


      <div >
     
        <header className='App-header'>
          <Dialog open={this.state.open} TransitionComponent={this.Transition}>
            <DialogTitle id='simple-dialog-title'>
            <div>
        <input
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={(e) => this.onChangeInput(e)}
        />
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          onChange={(input) => this.onChange(input)}
          onKeyPress={(button) => this.onKeyPress(button)}
          theme={"hg-theme-default hg-layout-default myTheme1"}
          layoutName={this.state.layoutName}
          layout={{
            default: [
              "1 2 3",
              "4 5 6",
              "7 8 9",
              "0 {bksp}",
              "{enter}"
            ]
          }}
          buttonTheme={[
            {
              class: "hg-red",
              buttons: "Q W E R T Y q w e r t y"
            },
            {
              class: "hg-highlight",
              buttons: "Q q"
            }
          ]}
        />
      </div>
            </DialogTitle>
            <button onClick={() => this.setState({ open: !this.state.open })}>
              OK
            </button>
          </Dialog>
        </header>
      </div>
      </Container>);
  }
}