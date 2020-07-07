'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: [
        ClientSideRowModelModule,
        MasterDetailModule,
        MenuModule,
        ColumnsToolPanelModule
      ],
      columnDefs: [
        {
          field: 'name',
          cellRenderer: 'agGroupCellRenderer'
        },
        { field: 'account' },
        { field: 'calls' },
        {
          field: 'minutes',
          valueFormatter: "x.toLocaleString() + 'm'"
        }
      ],
      defaultColDef: { flex: 1 },
      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: [
            { field: 'callId' },
            { field: 'direction' },
            {
              field: 'number',
              minWidth: 150
            },
            {
              field: 'duration',
              valueFormatter: "x.toLocaleString() + 's'"
            },
            {
              field: 'switchCode',
              minWidth: 150
            }
          ],
          defaultColDef: { flex: 1 }
        },
        getDetailRowData: function(params) {
          params.successCallback(params.data.callRecords);
        }
      },
      rowData: []
    };
  }

//   onGridReady = params => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;

//     const httpRequest = new XMLHttpRequest();
//     const updateData = data => {
//       this.setState({ rowData: data });
//     };

//     httpRequest.open(
//       'GET',
//       'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/simple/data/data.json'
//     );
//     httpRequest.send();
//     httpRequest.onreadystatechange = () => {
//       if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//         updateData(JSON.parse(httpRequest.responseText));
//       }
//     };
//   };

//   onFirstDataRendered = params => {
//     setTimeout(function() {
//       params.api.getDisplayedRowAtIndex(1).setExpanded(true);
//     }, 0);
//   };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          id='myGrid'
          style={{
            height: '100%',
            width: '100%'
          }}
          className='ag-theme-alpine'
        >
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            masterDetail={true}
            // detailCellRendererParams={this.state.detailCellRendererParams}
            // onGridReady={this.onGridReady}
            // onFirstDataRendered={this.onFirstDataRendered.bind(this)}
            rowData={this.state.rowData}
          />
        </div>
      </div>
    );
  }
}
