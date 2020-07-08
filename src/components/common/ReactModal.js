import React from 'react';

import 'react-responsive-modal/styles.css';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';

export default class ReactModal extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     show: false,
                     validated:'false',
                     products: {
                       uid: '',
                       productName: '',
                       brand: '',
                       purchasedDate: '',
                       price: '',
                       offeredPrice: '',
                       expriationDate: '',
                       totalBatches: '',
                       quantity: '',
                       ppu: '',
                       unitSize: '',
                       unitType: '',
                       actions: ''
                     }
                   };
                 }

                 handleShow = () => this.setState({ show: true });
                 handleClose = () => this.setState({ show: false });

                 
                 handleChange =(e)=> {
               
                const products =this.state;
                const {name,value}=e.target;
                products[name]=value;
                 this.setState({products})
                

                    }

                 handleSubmit = (e) => {
                           e.preventDefault();

                              console.log(this.state.products,'submit')
                };

                 render() {
                   
                   return (
                     <div>
                       <Button variant='primary' onClick={this.handleShow}>
                         Launch demo modal
                       </Button>

                       <Modal
                         show={this.state.show}
                         onHide={this.handleClose}
                         size='lg'
                       >
                         <Modal.Header closeButton>
                           <Modal.Title>Modal heading</Modal.Title>
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
                                   required
                                 />
                               </Form.Group>

                               <Form.Group
                                 as={Col}
                                 controlId='formGridproductName'
                               >
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

                               <Form.Group
                                 as={Col}
                                 controlId='formGridpurchasedDate'
                               >
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

                               <Form.Group
                                 as={Col}
                                 controlId='formGridofferedPrice'
                               >
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
                               <Form.Group
                                 as={Col}
                                 controlId='formGridexpriationDate'
                               >
                                 <Form.Label>expriationDate</Form.Label>
                                 <Form.Control
                                   onChange={this.handleChange}
                                   type='text'
                                   placeholder='expriationDate'
                                   name='expriationDate'
                                   value={this.state.products.expriationDate}
                                 />
                               </Form.Group>

                               <Form.Group
                                 as={Col}
                                 controlId='formGridtotalBatches'
                               >
                                 <Form.Label>totalBatches</Form.Label>
                                 <Form.Control
                                   onChange={this.handleChange}
                                   type='text'
                                   placeholder='totalBatches'
                                   name='totalBatches'
                                   value={this.state.products.totalBatches}
                                 />
                               </Form.Group>
                             </Form.Row>

                             <Form.Row>
                               <Form.Group
                                 as={Col}
                                 controlId='formGridquantity'
                               >
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
                             </Form.Row>

                             <Form.Row>
                               <Form.Group
                                 as={Col}
                                 controlId='formGridunitSize'
                               >
                                 <Form.Label>unitSize</Form.Label>
                                 <Form.Control
                                   onChange={this.handleChange}
                                   type='text'
                                   placeholder='unitSize'
                                   name='unitSize'
                                   value={this.state.products.unitSize}
                                 />
                               </Form.Group>

                               <Form.Group
                                 as={Col}
                                 controlId='formGridunitType'
                               >
                                 <Form.Label>unitType</Form.Label>
                                 <Form.Control
                                   onChange={this.handleChange}
                                   type='text'
                                   placeholder='unitType'
                                   name='unitType'
                                   value={this.state.products.unitType}
                                 />
                               </Form.Group>
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
                           <Button
                             variant='secondary'
                             onClick={this.handleClose}
                           >
                             Close
                           </Button>
                         </Modal.Footer>
                       </Modal>
                     </div>
                   );
                 }
               }

// import React from 'react';

// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import { Form, Row, Col, Button } from 'react-bootstrap';

// export default class ReactModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//       products: {
//         uid: '',
//         productName: '',
//         brand: '',
//         purchasedDate: '',
//         price: '',
//         offeredPrice: '',
//         expriationDate: '',
//         totalBatches: '',
//         quantity: '',
//         ppu: '',
//         unitSize: '',
//         unitType: '',
//         actions: ''
//       }
//     };
//   }
//   onOpenModal = () => {
//     this.setState({ open: true });
//   };
//   onCloseModal = () => {
//     this.setState({ open: false });
//   };
//   render() {
//     const { open } = this.state;
//     return (
//       <div>
//         <button onClick={this.onOpenModal}>Open modal</button>
//         <Modal open={open} onClose={this.onCloseModal} center>
//           <div>
//             <form onSubmit={this.handleSubmit}>
//               <label>
//                 Name:
//                 <input
//                   type='text'
//                   value={this.state.uid}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <label>
//                 Product Name:
//                 <input
//                   type='text'
//                   value={this.state.productName}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <input type='submit' value='Submit' />
//             </form>

//             <Form>
//               <Form.Row>
//                 <Form.Group as={Col} controlId='formGridEmail'>
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type='email' placeholder='Enter email' />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId='formGridPassword'>
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type='password' placeholder='Password' />
//                 </Form.Group>
//               </Form.Row>

//               <Form.Group controlId='formGridAddress1'>
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control placeholder='1234 Main St' />
//               </Form.Group>

//               <Form.Group controlId='formGridAddress2'>
//                 <Form.Label>Address 2</Form.Label>
//                 <Form.Control placeholder='Apartment, studio, or floor' />
//               </Form.Group>

//               <Form.Row>
//                 <Form.Group as={Col} controlId='formGridCity'>
//                   <Form.Label>City</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId='formGridState'>
//                   <Form.Label>State</Form.Label>
//                   <Form.Control as='select' value='Choose...'>
//                     <option>Choose...</option>
//                     <option>...</option>
//                   </Form.Control>
//                 </Form.Group>

//                 <Form.Group as={Col} controlId='formGridZip'>
//                   <Form.Label>Zip</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>

//               <Form.Group id='formGridCheckbox'>
//                 <Form.Check type='checkbox' label='Check me out' />
//               </Form.Group>

//               <Button variant='primary' type='submit'>
//                 Submit
//               </Button>
//             </Form>
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }
