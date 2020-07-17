import React, { Component } from 'react';

export default class CustomTooltip extends Component {
  getReactContainerClasses() {
    return ['custom-tooltip'];
  }

  render() {
    const data = this.props.api.getDisplayedRowAtIndex(this.props.rowIndex)
      .data;
    return (
      <div className={'panel panel-' + (this.props.type || 'primary')}>
        <div className="panel-heading">
          <h3 className="panel-title">{data.productName}</h3>
        </div>
        <div className="panel-body">
          <h4 style={{ whiteSpace: 'nowrap' }}>{data.productName}</h4>
        </div>
      </div>
    );
  }
}
