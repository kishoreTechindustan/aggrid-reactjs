import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
var moment = require("moment");

export default class BrandCellRenderer extends Component {
  constructor(props) {
    super(props);



    this.props = props;
  }

  // refresh(props) {
  //   this.setState({
  //     value: props.value,
  //   });
  //   return true;
  // }

  onAdd() {
    var oldData = this.props.node.data;

    var oldBatchRecord = oldData.batchRecord;

    var newBatchRecord = oldBatchRecord.slice(0);
    newBatchRecord.push({
      brandId: uuidv4(),
      created: "",

      expirationDate: "",
      quantity: "",
      inventory: "",
      unitType: "",
      vendor: {
        id: "",
        name: "",
        companyName: "",
        joined: "",
      },
      price: "",
    });

    var newData = {
      uid: oldData.uid,
      productName: oldData.productName,
      brand: oldData.brand,
      purchasedDate: oldData.purchasedDate,
      price: oldData.price,
      offeredPrice: oldData.offeredPrice,
      expriationDate: oldData.expriationDate,
      totalBaches: oldData.totalBaches,
      quantity: oldData.quantity,
      ppu: oldData.ppu,
      unitSize: oldData.unitSize,
      unitType: oldData.unitType,
      batchRecord: newBatchRecord,
    };
    this.props.api.applyTransaction({
      update: [newData],
    });
    this.props.node.setExpanded(true);

    alert("add");
  }

  // onRemove() {
  //   var oldData = this.props.node.data;

  //   var oldBatchRecord = oldData.batchRecord;

  //   if (oldBatchRecord.length == 0) {
  //     return;
  //   }
  //   var newBatchRecord = oldBatchRecord.slice(0);
  //   newBatchRecord.pop();
  //   var newData = {
  //     uid: oldData.uid,
  //     productName: oldData.productName,
  //     brand: oldData.brand,
  //     purchasedDate: oldData.purchasedDate,
  //     price: oldData.price,
  //     offeredPrice: oldData.offeredPrice,
  //     expriationDate: oldData.expirationDate,
  //     totalBaches: oldData.totalBaches,
  //     quantity: oldData.quantity,
  //     ppu: oldData.ppu,
  //     unitSize: oldData.unitSize,
  //     unitType: oldData.unitType,
  //     batchRecord: newBatchRecord,
  //   };
  //   this.props.api.applyTransaction({
  //     update: [newData],
  //   });
  //   alert("remove");
  // }


  render() {
    return (
      <div className='brand-renderer'>
        <button className='btn btn-success ' onClick={this.onAdd.bind(this)}>
          +
        </button>
        {/* <button
          className='btn btn-danger ml-2 '
          onClick={this.onRemove.bind(this)}
        >
          -
        </button> */}
      </div>
    );
  }
}
