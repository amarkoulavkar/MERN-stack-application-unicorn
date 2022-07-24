import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditItem extends Component {

  constructor(props) {
    super(props)

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
    this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
    this.onChangeItemImage = this.onChangeItemImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      category: '',
      price: '',
      image: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Items/edit-item/' + this.props.match.params.id)
      .then(res => {
        console.log(res)
        this.setState({
          name: res.data.name,
          category: res.data.category,
          price: res.data.price,
          image: res.data.image
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeItemName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeItemCategory(e) {
    this.setState({ category: e.target.value })
  }

  onChangeItemPrice(e) {
    this.setState({ price: e.target.value })
  }

  onChangeItemImage(e) {
    this.setState({ image: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const ItemObject = {
      name: this.state.name,
      category: this.state.category,
      price: this.state.price,
      image: this.state.image
    };

    axios.put('http://localhost:4000/Items/update-item/' + this.props.match.params.id, ItemObject)
      .then((res) => {
        console.log(res.data)
        console.log('Item successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/item-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeItemName} />
        </Form.Group>

        <Form.Group controlId="Category">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={this.state.category} onChange={this.onChangeItemCategory} />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangeItemPrice} />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={this.state.image} onChange={this.onChangeItemImage} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Item
        </Button>
      </Form>
    </div>);
  }
}