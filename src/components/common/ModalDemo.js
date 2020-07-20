import React from "react";

import { Form, Col, Button, Modal } from "react-bootstrap";

export default class ReactModal extends React.Component {
    
  constructor(props) {
      super(props);
     let {data} = this.props;
    this.state = {
      show: this.props.show,
      validated: "false",
      products: {
        uid: data && data.uid || '',
          productName: data && data.productName || '',
          brand: data && data.brand || '',
          purchasedDate: data && data.purchasedDate || '',
          price: data && data.price || '',
          offeredPrice: data && data.offeredPrice || '',
          expriationDate: data && data.expriationDate || '',
          totalBaches: data && data.totalBaches || '',
          quantity: data && data.quantity || '',
          ppu: data && data.ppu || '',
          unitSize: data && data.unitSize || '',
          unitType: data && data.unitType || '',
          batchRecord: data && data.batchRecord || '',
      },
    };
  }

  handleShow = () => this.setState({ show: true });
  handleClose = () => {
      this.setState({ show: false })
      this.props.toggleOff()
};

  handleChange = (e) => {
    const products = this.state.products;
    const { name, value } = e.target;
    console.log(name, "name", value, "value");
    products[name] = value;
    this.setState({ products });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state, "submit");
    this.props.onBtStopEditing(this.state.products)
  };

  render() {
     
    return (
      <div>
        {/* <Button variant='primary' onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

            <Modal show={this.state.show} onHide={this.handleClose} size='lg' backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Record Update</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='formGriduid'>
                  <Form.Label>UID</Form.Label>
                  <Form.Control
                    name='uid'
                    onChange={this.handleChange}
                    type='text'
                    placeholder='UID'
                    value={this.state.products.uid}
                    disabled
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridproductName'>
                  <Form.Label>productName</Form.Label>
                  <Form.Control
                    name='productName'
                    onChange={this.handleChange}
                    type='text'
                    placeholder='productName'
                    value={this.state.products.productName}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridbrand'>
                  <Form.Label>brand</Form.Label>
                  <Form.Control
                    name='brand'
                    onChange={this.handleChange}
                    type='text'
                    placeholder='brand'
                    value={this.state.products.brand}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridpurchasedDate'>
                  <Form.Label>purchasedDate</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='purchasedDate'
                    name='purchasedDate'
                    value={this.state.products.purchasedDate}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridprice'>
                  <Form.Label>price</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='price'
                    name='price'
                    value={this.state.products.price}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridofferedPrice'>
                  <Form.Label>offeredPrice</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='offeredPrice'
                    name='offeredPrice'
                    value={this.state.products.offeredPrice}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridexpriationDate'>
                  <Form.Label>expriationDate</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='expriationDate'
                    name='expriationDate'
                    value={this.state.products.expriationDate}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridtotalBaches'>
                  <Form.Label>totalBaches</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='totalBaches'
                    name='totalBaches'
                                    value={this.state.products.totalBaches}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridquantity'>
                  <Form.Label>quantity</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='quantity'
                    name='quantity'
                    value={this.state.products.quantity}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridppu'>
                                    <Form.Label>Price Per Unit /Gram</Form.Label>
                                    <Form.Control
                                        onChange={this.handleChange}
                                        type='text'
                                        placeholder='ppu'
                                        name='ppu'
                                        value={this.state.products.ppu}
                                    />

                                </Form.Group>

                {/* <Form.Group as={Col} controlId='formGridpricePerUnit'>
                  <Form.Label>Price per unit/gram</Form.Label>
                  <Form.Control
                    as='select'
                    name='ppu'
                    value={this.state.products && this.state.products.ppu}
                    onChange={this.handleChange}
                  >
                    <option value='unit'>unit</option>
                    <option value='gram'>gram</option>
                  </Form.Control>
                </Form.Group> */}
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridunitSize'>
                  <Form.Label>unitSize</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='unitSize'
                    name='unitSize'
                    value={this.state.products.unitSize}
                  />
                </Form.Group>
                            <Form.Group as={Col} controlId='formGridpricePerUnit'>
                                <Form.Label>unitType</Form.Label>
                                <Form.Control
                                    as='select'
                                    name='unitType'
                                    value={this.state.products && this.state.products.unitType}
                                    onChange={this.handleChange}
                                >
                                    <option value='unit'>unit</option>
                                    <option value='gram'>gram</option>
                                </Form.Control>
                            </Form.Group>
{/* 
                <Form.Group as={Col} controlId='formGridunitType'>
                  <Form.Label>unitType</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='unitType'
                    name='unitType'
                    value={this.state.products.unitType}
                  />
                </Form.Group> */}


              </Form.Row>

              {/* <Form.Row>
                               <Form.Group as={Col} controlId='formGridprice'>
                                 <Form.Label>State</Form.Label>
                                 <Form.Control as='select' value='Choose...'>
                                   <option>Choose...</option>
                                   <option>...</option>
                                 </Form.Control>
                               </Form.Group>
                               <Form.Group as={Col} controlId='formGridZip'>
                                 <Form.Label>Zip</Form.Label>
                                 <Form.Control />
                               </Form.Group>
                             </Form.Row> */}

              <Button
                variant='primary'
                type='submit'
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
