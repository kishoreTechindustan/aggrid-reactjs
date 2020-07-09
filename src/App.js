
import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import 'ag-grid-enterprise';
import { v4 as uuidv4 } from 'uuid';
import ChildMessageRenderer from './components/common/ChildMessageRenderer'

var moment = require('moment'); 
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'UID',
          field: 'uid',
          sortable: true,
          filter: true,
          cellRenderer: 'agGroupCellRenderer',
          editable: false,
        },
        {
          headerName: 'Product Name',
          field: 'productName',
          sortable: true,
          filter: true,
        },
        ,
        {
          headerName: 'Brand',
          field: 'brand',
          sortable: true,
          filter: true,
        },

        {
          headerName: 'Purchased Date',
          field: 'purchasedDate',
          sortable: true,
          filter: true,
        },

        {
          headerName: 'Price',
          field: 'price',
          sortable: true,
          filter: true,
        },
        {
          headerName: ' Offered Price',
          field: 'offeredPrice',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Expriation Date',
          field: 'expriationDate',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Total Batches',
          field: 'totalBaches',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Quantity',
          field: 'quantity',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Price per unit/gram',
          field: 'ppu',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Unit Size',
          field: 'unitSize',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Unit Type',
          field: 'unitType',
          sortable: true,
          filter: true,
        },
        // {
        //   headerName: 'Actions',
        //   field: 'actions',
        //   sortable: true,
        //   filter: true,
        // },
        {
          headerName: 'Actions',
          field: 'actions',
          cellRenderer: 'childMessageRenderer',
          colId: 'params',
          // minWidth: 200,
          sortable: true,
          filter: true,
          editable: false,
        },
      ],
      context: { componentParent: this },

      frameworkComponents: {
        childMessageRenderer: ChildMessageRenderer,
      },

      rowData: [
        {
          uid: uuidv4(),
          productName: 'Santa Clause X1100',
          brand: 'Santa Clause',
          purchasedDate: moment('2010-02-01').valueOf(),
          price: 3500.5,
          offeredPrice: 2500.5,
          expriationDate: moment('2020-08-01').valueOf(),
          totalBaches: '4',
          quantity: '3500',
          ppu: 1250.5,
          unitSize: '1',
          unitType: 'unit',
          // actions: 'edit/delete',
          batchRecord: [
            {
              brandId: uuidv4(),
              created: moment('2018-06-03').format('MM/DD/YYYY'),

              expirationDate: moment('2020-08-01').format('MM/DD/YYYY'),
              quantity: 45,
              inventory: 'Safe',
              unitType: 'unit',
              vendor: {
                id: '154654654',
                name: 'Kishore Kumar',
                companyName: 'tecHindustan',
                joined: '<moment date>',
              },
              price: 1250.5,
            },
          ],
        },
        {
          uid: uuidv4(),
          productName: 'Banta X1100',
          brand: 'Banta Clause',
          purchasedDate: moment().valueOf(),
          price: 3500.5,
          offeredPrice: 2500.5,
          expriationDate: moment().valueOf(),
          totalBaches: '4',
          quantity: '3500',
          ppu: 1250.5,
          unitSize: '1',
          unitType: 'unit',
          // actions: 'edit/delete',
          batchRecord: [
            {
              brandId: uuidv4(),
              created: moment('2019-06-03').format('MM/DD/YYYY'),

              expirationDate: moment('2021-06-03').format('MM/DD/YYYY'),
              quantity: 45,
              inventory: 'Safe',
              unitType: 'unit',
              vendor: {
                id: '154654654',
                name: 'Kishore Kumar',
                companyName: 'tecHindustan',
                joined: '<moment date>',
              },
              price: 1250.5,
            },
          ],
        },
        {
          uid: uuidv4(),
          productName: 'xyz',
          brand: 'nike',
          purchasedDate: moment().valueOf(),
          price: 3500.5,
          offeredPrice: 2500.5,
          expriationDate: moment().valueOf(),
          totalBaches: '4',
          quantity: '2500',
          ppu: 150.5,
          unitSize: '2',
          unitType: 'unit',
          // actions: 'edit/delete',
          batchRecord: [
            {
              brandId: uuidv4(),
              created: moment('2020-06-03').format('MM/DD/YYYY'),

              expirationDate: moment('2022-06-03').format('MM/DD/YYYY'),
              quantity: 45,
              inventory: 'Safe',
              unitType: 'unit',
              vendor: {
                id: '154654654',
                name: 'Kishore Kumar',
                companyName: 'tecHindustan',
                joined: '<moment date>',
              },
              price: 1250.5,
            },
          ],
        },
        {
          uid: uuidv4(),
          productName: 'abc',
          brand: 'pumma',
          purchasedDate: moment().valueOf(),
          price: 2500.5,
          offeredPrice: 2500.5,
          expriationDate: moment().valueOf(),
          totalBaches: '4',
          quantity: '3800',
          ppu: 1250.5,
          unitSize: '4',
          unitType: 'unit',
          // actions: 'edit/delete',
          batchRecord: [
            {
              brandId: uuidv4(),
              created: moment('2018-06-03').format('MM/DD/YYYY'),

              expirationDate: moment('2020-02-04').format('MM/DD/YYYY'),
              quantity: 45,
              inventory: 'Safe',
              unitType: 'unit',
              vendor: {
                id: '154654654',
                name: 'Kishore Kumar',
                companyName: 'tecHindustan',
                joined: '<moment date>',
              },
              price: 1250.5,
            },
          ],
        },
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 80,
        filter: true,
        sortable: true,
        resizable: true,
        editable: true,
      },

      editType: 'fullRow',

      rowSelection: 'single',

      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: [
            { field: 'brandId' },
            { field: 'created' },
            {
              field: 'expirationDate',
              minWidth: 150,
            },
            {
              field: 'quantity',
            },
            {
              field: 'inventory',
              minWidth: 150,
            },
            { field: 'unitType' },
            { field: 'vendor' },
            { field: 'price' },
          ],
          defaultColDef: { flex: 1 },
        },
        getDetailRowData: function (params) {
          params.successCallback(params.data.batchRecord);
        },
      },
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
  };

  addItems = () => {
    var newItems = [createNewRowData()];
    var res = this.gridApi.applyTransaction({ add: newItems });
    console.log(res, 'additem');
  };

  addItemsNew = () => {
    var newItems = [createNewRowData2()];
    var res = this.gridApi.applyTransaction({ add: newItems });
  

  };

  onRemoveSelected = () => {
    // var selectedRows = this.gridApi.getSelectedRows();
    // let selectedId = selectedRows.map(node => node.uid);
    // let newRowData = this.state.rowData.filter(
    //   rowData => rowData.uid !== selectedId[0]
    // );
    // this.setState({ rowData: newRowData });

    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.applyTransaction({ remove: selectedData });
    console.log(res, 'res delete');
  };

  clearData = () => {
    this.gridApi.setRowData([]);
  };

  methodFromParent = (cell) => {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.applyTransaction({ remove: selectedData });
    alert('Parent Component Method from delete  ' + cell + '!');
  };

  methodFromParent2 = (indx) => {
    this.gridApi.setFocusedCell(indx, 'uid');
    this.gridApi.startEditingCell({
      rowIndex: indx,
      colKey: 'uid',
    });
  };

  methodFromParent3 = () => {
    var itemsToUpdate = [];

    this.gridApi.forEachNode((rowNode) => {
      let data = rowNode.data;
      itemsToUpdate.push(data);
      var res = this.gridApi.applyTransaction({ update: itemsToUpdate });
      console.log(res, 'iupppdatee ');
      this.gridApi.stopEditing();
    });

    alert('updated !');
  };

  //   methodFromParent4 = () => {
  //     var itemsToUpdate = [];
  //     // this.gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
  //     //   if (index >= 2) {
  //     //     return;
  //     //   }
  //     //   var data = rowNode.data;
  //     //   data.price = Math.floor(Math.random() * 20000 + 20000);
  //     //   itemsToUpdate.push(data);
  //     // });
  //     // var res = this.gridApi.applyTransaction({ update: itemsToUpdate });
  // this.gridApi.forEachNode( (d)=>console.log(d,'d') );
  //   };

  render() {
    return (
      <div
        className='ag-theme-alpine-dark'
        style={{
          height: '600px',
          width: '100%',
        }}
      >
        <div className=' d-flex justify-content-between pt-4'>
          <div className='title-left'>
            <h1 className='text-dark'> Records</h1>
          </div>
          <div className='title-right '>
            <button
              type='button'
              className='btn btn-success mr-2'
              onClick={this.addItems}
            >
              Add Quicly
            </button>
            <button
              type='button'
              className='btn btn-dark mr-2'
              onClick={this.addItemsNew}
            >
              Add New
            </button>
            <button
              type='button'
              className='btn btn-primary mr-2'
              onClick={this.clearData}
            >
              Remove All
            </button>

            <button
              type='button'
              className='btn btn-danger mr-2'
              onClick={this.onRemoveSelected}
            >
              Delete
            </button>
          </div>
        </div>

        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          defaultColDef={this.state.defaultColDef}
          masterDetail={true}
          onGridReady={this.onGridReady}
          detailCellRendererParams={this.state.detailCellRendererParams}
          // onFirstDataRendered={this.onFirstDataRendered.bind(this)}
          rowSelection={this.state.rowSelection}
          editType={this.state.editType}
          // stopEditingWhenGridLosesFocus={true}
          frameworkComponents={this.state.frameworkComponents}
          context={this.state.context}
        ></AgGridReact>
      </div>
    );
  }
}

  function createNewRowData() {
    var newData = {
      uid: uuidv4(),
      productName: 'Santa Clause X1100',
      brand: 'Santa Clause',
      purchasedDate: moment('2010-02-01').valueOf(),
      price: 3500.5,
      offeredPrice: 2500.5,
      expriationDate: moment('2020-08-01').valueOf(),
      totalBaches: '4',
      quantity: '3500',
      ppu: 1250.5,
      unitSize: '1',
      unitType: 'unit',
      // actions: 'edit/delete',
      batchRecord: [
        {
          brandId: uuidv4(),
          created: moment('2018-06-03').format('MM/DD/YYYY'),

          expirationDate: moment('2020-08-01').format('MM/DD/YYYY'),
          quantity: 45,
          inventory: 'Safe',
          unitType: 'unit',
          vendor: {
            id: '154654654',
            name: 'Kishore Kumar',
            companyName: 'tecHindustan',
            joined: '<moment date>'
          },
          price: 1250.5
        }
      ]
    };
    return newData;
  }



  function createNewRowData2() {
    var newData = {
      uid: uuidv4(),
      productName: '',
      brand: '',
      purchasedDate: '',
      price: '',
      offeredPrice: '',
      expriationDate: '',
      totalBaches: '',
      quantity: '',
      ppu: '',
      unitSize: '',
      unitType: '',
      // actions: 'edit/delete',
      batchRecord: [
        {
          brandId: uuidv4(),
          created: '',

          expirationDate: '',
          quantity: '',
          inventory: '',
          unitType: '',
          vendor: {
            id: '',
            name: '',
            companyName: '',
            joined: '',
          },
          price: '',
        },
      ],
    };
    return newData;
  }


export default App;