import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
var moment = require("moment");

export default class BrandCellRenderer2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle2:false
    };

    this.props = props;
  }

//   refresh(props) {
//     this.setState({
//       value: props.value,
//     });
//     return true;
//   }


  onEdit=()=> {
     this.props.api.setFocusedCell(this.props.node.rowIndex, "brandId");
    this.props.api.startEditingCell({
      rowIndex: this.props.node.rowIndex,
      colKey: "brandId",
    });
    this.setState({ toggle2: true });

    
  }


  onStop = () => {
    var itemsToUpdate = [];

    this.props.api.forEachNode((rowNode) => {
      let data = rowNode.data;
      itemsToUpdate.push(data);
      var res = this.props.api.applyTransaction({ update: itemsToUpdate });
      this.props.api.stopEditing();
      console.log(res,'update resss')
    });
   
    this.setState({ toggle2: false });
  };


  onRemove=()=> {
    var selectedData = this.props.api.getSelectedRows();
    let id=selectedData[0].brandId;
    // console.log(id,'selectedid')
    // var res = this.props.api.applyTransaction({ remove: selectedData });

    //console.log(res,'deelelteeee ')
   
    this.props.context.componentParent.methodFromParent4(id);

  }

  render() {
    return (
      <div className='brand-renderer'>
        {this.state.toggle2 ?  <button className='btn btn-success ' onClick={this.onStop}>
        <i className='fa fa-check  '></i>
        </button>: <button className='btn btn-warning ' onClick={this.onEdit}>
        <i className='fa fa-pencil  '></i>
        </button>}
        <button
          className='btn btn-danger ml-2 '
          onClick={this.onRemove}
        >
          <i className='fa fa-trash' aria-hidden='true'></i>
        </button>

      </div>
    );
  }
}
