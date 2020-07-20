import React from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import validateProduct from "../../validations/product";
import cn from "classnames";

export default class ReactModal extends React.Component {
  constructor(props) {
    super(props);
    let { data } = this.props;
    this.state = {
      show: this.props.show,
      validated: "false",
      product: {
        uid: (data && data.uid) || "",
        productName: (data && data.productName) || "",
        brand: (data && data.brand) || "",
        purchasedDate: (data && data.purchasedDate) || "",
        price: (data && data.price) || "",
        offeredPrice: (data && data.offeredPrice) || "",
        expriationDate: (data && data.expriationDate) || "",
        totalBaches: (data && data.totalBaches) || "",
        quantity: (data && data.quantity) || "",
        ppu: (data && data.ppu) || "",
        unitSize: (data && data.unitSize) || "",
        unitType: (data && data.unitType) || "",
        batchRecord: (data && data.batchRecord) || "",
      },
      errors: {},
    };
  }

  handleShow = () => this.setState({ show: true });
  handleClose = () => {
    this.setState({ show: false });
    this.props.toggleOff();
  };

  handleChange = (e) => {
    const product = this.state.product;
    const { name, value } = e.target;
    console.log(name, "name", value, "value");
    product[name] = value;
    this.setState({ product });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { product } = this.state;
    const { isValid, errors } = validateProduct(product);
    if (isValid) {
      this.props.onBtStopEditing(product, toast);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { errors = {}, product } = this.state;

    return (
      <div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          size='lg'
          backdrop='static'
        >
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
                    value={product.uid}
                    disabled
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridproductName'>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    className={
                      !product.productName &&
                      cn({ "input-error": errors.productName })
                    }
                    name='productName'
                    onChange={this.handleChange}
                    type='text'
                    value={product.productName}
                  />
                  {errors && errors.productName && !product.productName && (
                    <p className='error'>{errors.productName}</p>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridbrand'>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    className={
                      !product.brand && cn({ "input-error": errors.brand })
                    }
                    name='brand'
                    onChange={this.handleChange}
                    type='text'
                    value={product.brand}
                  />
                  {errors && errors.brand && !product.brand && (
                    <p className='error'>{errors.brand}</p>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId='formGridpurchasedDate'>
                  <Form.Label>Purchased Date</Form.Label>
                  <Form.Control
                    className={
                      !product.purchasedDate &&
                      cn({ "input-error": errors.purchasedDate })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='purchasedDate'
                    value={product.purchasedDate}
                  />
                  {errors && errors.purchasedDate && !product.purchasedDate && (
                    <p className='error'>{errors.purchasedDate}</p>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridprice'>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    className={
                      !product.price &&
                      cn({ "input-error": errors.price })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='price'
                    value={product.price}
                  />
                     {errors && errors.price && !product.price && (
                    <p className='error'>{errors.price}</p>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId='formGridofferedPrice'>
                  <Form.Label>Offered Price</Form.Label>
                  <Form.Control
                    className={
                      !product.offeredPrice &&
                      cn({ "input-error": errors.offeredPrice })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='offeredPrice'
                    value={product.offeredPrice}
                  />
                     {errors && errors.offeredPrice && !product.offeredPrice && (
                    <p className='error'>{errors.offeredPrice}</p>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridexpriationDate'>
                  <Form.Label>Expriation Date</Form.Label>
                  <Form.Control
                    className={
                      !product.expriationDate &&
                      cn({ "input-error": errors.expriationDate })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='expriationDate'
                    value={product.expriationDate}
                  />
                     {errors && errors.expriationDate && !product.expriationDate && (
                    <p className='error'>{errors.expriationDate}</p>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId='formGridtotalBaches'>
                  <Form.Label>Total Batches</Form.Label>
                  <Form.Control
                    className={
                      !product.totalBaches &&
                      cn({ "input-error": errors.totalBaches })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='totalBaches'
                    value={product.totalBaches}
                  />
                     {errors && errors.totalBaches && !product.totalBaches && (
                    <p className='error'>{errors.totalBaches}</p>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridquantity'>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    className={
                      !product.productName &&
                      cn({ "input-error": errors.quantity })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='quantity'
                    value={product.quantity}
                  />
                     {errors && errors.quantity && !product.quantity && (
                    <p className='error'>{errors.quantity}</p>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId='formGridppu'>
                  <Form.Label>Price Per Unit /Gram</Form.Label>
                  <Form.Control
                    className={
                      !product.ppu &&
                      cn({ "input-error": errors.ppu })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='ppu'
                    value={product.ppu}
                  />
                     {errors && errors.ppu && !product.ppu && (
                    <p className='error'>{errors.ppu}</p>
                  )}
                </Form.Group>

                {/* <Form.Group as={Col} controlId='formGridpricePerUnit'>
                  <Form.Label>Price per unit/gram</Form.Label>
                  <Form.Control
                    as='select'
                    name='ppu'
                    value={product && product.ppu}
                    onChange={this.handleChange}
                  >
                    <option value='unit'>unit</option>
                    <option value='gram'>gram</option>
                  </Form.Control>
                </Form.Group> */}
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridunitSize'>
                  <Form.Label>Unit Size</Form.Label>
                  <Form.Control
                    className={
                      !product.unitSize &&
                      cn({ "input-error": errors.unitSize })
                    }
                    onChange={this.handleChange}
                    type='text'
                    name='unitSize'
                    value={product.unitSize}
                  />
                    {errors && errors.unitSize && !product.unitSize && (
                    <p className='error'>{errors.unitSize}</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId='formGridpricePerUnit'>
                  <Form.Label>Unit Type</Form.Label>
                  <Form.Control
                    className={
                      !product.unitType &&
                      cn({ "input-error": errors.unitType })
                    }
                    as='select'
                    name='unitType'
                    value={product && product.unitType}
                    onChange={this.handleChange}
                  >
                    <option value='unit'>unit</option>
                    <option value='gram'>gram</option>
                  </Form.Control>
                    {errors && errors.unitType && !product.unitType && (
                    <p className='error'>{errors.unitType}</p>
                  )}
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='primary' type='submit' onClick={this.handleSubmit}>
              Submit
            </Button>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
