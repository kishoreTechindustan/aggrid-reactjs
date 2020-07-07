
import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import 'ag-grid-enterprise';
import { v4 as uuidv4 } from 'uuid';
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
          editable: false
        },
        {
          headerName: 'Product Name',
          field: 'productName',
          sortable: true,
          filter: true
        },
        ,
        {
          headerName: 'Brand',
          field: 'brand',
          sortable: true,
          filter: true
        },

        {
          headerName: 'Purchased Date',
          field: 'purchasedDate',
          sortable: true,
          filter: true
        },

        {
          headerName: 'Price',
          field: 'price',
          sortable: true,
          filter: true
        },
        {
          headerName: ' Offered Price',
          field: 'offeredPrice',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Expriation Date',
          field: 'expriationDate',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Total Batches',
          field: 'totalBaches',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Quantity',
          field: 'quantity',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Price per unit/gram',
          field: 'ppu',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Unit Size',
          field: 'unitSize',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Unit Type',
          field: 'unitType',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Actions',
          field: 'actions',
          sortable: true,
          filter: true
        }
      ],
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
          actions: 'edit/delete',
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
          actions: 'edit/delete',
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
                joined: '<moment date>'
              },
              price: 1250.5
            }
          ]
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
          actions: 'edit/delete',
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
                joined: '<moment date>'
              },
              price: 1250.5
            }
          ]
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
          actions: 'edit/delete',
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
                joined: '<moment date>'
              },
              price: 1250.5
            }
          ]
        }
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        filter: true,
        sortable: true,
        resizable: true,
        editable: true
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
              minWidth: 150
            },
            {
              field: 'quantity'
            },
            {
              field: 'inventory',
              minWidth: 150
            },
            { field: 'unitType' },
            { field: 'vendor' },
            { field: 'price' }
          ],
          defaultColDef: { flex: 1 }
        },
        getDetailRowData: function(params) {
          params.successCallback(params.data.batchRecord);
        }
      }
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
  };

  addItems = () => {
    var newItems = [createNewRowData()];
    var res = this.gridApi.applyTransaction({ add: newItems });
    console.log(res,'additem');
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




  render() {
    return (
      <div
        className='ag-theme-alpine'
        style={{
          height: '600px',
          width: '100%'
        }}
      >
        <div className='m-2 d-flex justify-content-center  '>
          <button type='button' className='btn btn-success mr-2' onClick={this.addItems}>
            Add
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
            className='btn btn-danger mr2'
            onClick={this.onRemoveSelected}
          >
            Delete
          </button>
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
          stopEditingWhenGridLosesFocus={true}
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
      actions: 'edit/delete',
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

export default App;