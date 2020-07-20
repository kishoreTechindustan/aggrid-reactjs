import React, { Component } from "react";
import ModalDemo from './ModalDemo'
export default class ChildMessageRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
     data:[],
    };
  }

  deleteButton = () => {
   // console.log(this.props, "sssgpp");
    this.props.context.componentParent.methodFromParent(
      `Row: ${this.props.node.rowIndex}`
    );
    //  var selectedData = this.gridApi.getSelectedRows();
    //  var res = this.gridApi.applyTransaction({ remove: selectedData });
    //  console.log(res, 'res delete');
  };

  onBtStartEditing = () => {
    this.setState({ toggle: true });
    let {data} =this.props.node;
     this.setState({data})

    // this.props.context.componentParent.methodFromParent2(
    //   this.props.node.rowIndex
    // );
    
  };

  onBtStopEditing = (products) => {
    let itemsToUpdate=[]
    //console.log(products,'ppppp')
   // this.props.context.componentParent.methodFromParent3();

    this.props.api.forEachNode((rowNode) => {
      let data = rowNode.data;
      itemsToUpdate.push(products);
      var res = this.props.api.applyTransaction({ update: itemsToUpdate });
     console.log(res,'ress uppppdd')
    });

    this.setState({ toggle: false });
  };
    
  toggleOff=()=>{
    this.setState({toggle:false})
  }
  //  updateItems = () => {
  //      this.props.context.componentParent.methodFromParent4();
  // //    var itemsToUpdate = [];
  // //    this.gridApi.forEachNodeAfterFilterAndSort(function (
  // //      rowNode,
  // //      index
  // //    ) {
  // //      if (index >= 2) {
  // //        return;
  // //      }
  // //      var data = rowNode.data;
  // //      data.price = Math.floor(Math.random() * 20000 + 20000);
  // //      itemsToUpdate.push(data);
  // //    });
  // //    var res = this.gridApi.applyTransaction({
  // //      update: itemsToUpdate,
  // //    });
  // //    printResult(res);
  //  };

  render() {
    return (
      <div>
        {this.state.toggle ? (
          <button className='btn btn-success ' onClick={()=>this.onBtStopEditing()}>
            <i className='fa fa-check  '></i>
          </button>
        ) : (
             <button className='btn btn-warning ' onClick={()=> this.onBtStartEditing()}  >
            <i className='fa fa-pencil  '></i>
          </button>
        )}

        {!this.state.toggle && (
          <button
            //   style={{ height: 20, lineHeight: 0.5 }}
            onClick={this.deleteButton}
            className='btn btn-danger ml-1 '
          >
            <i className='fa fa-trash' aria-hidden='true'></i>
          </button>
        )}
        {this.state.toggle ? <ModalDemo show={true} data={this.state.data} onBtStopEditing={this.onBtStopEditing} toggleOff={this.toggleOff}/> :''}
      </div>
    );
  }
}

