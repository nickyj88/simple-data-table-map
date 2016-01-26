import React from 'react';
import { connect } from 'react-redux'
import { editRow, deleteRow } from '../actions';

import DataMap from '../components/DataMap';
import DataTableBox from '../components/DataTableBox';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
  }
  handleDeleteRow(regionName, code){
    this.props.dispatch(deleteRow(regionName, code));
  }
  handleEditRow(regionName, newValue){
    this.props.dispatch(editRow(regionName, newValue));
  }
  render() {
    return (
      <div>
        <div className="container">
          <DataMap regionData={this.props.regionData} />
        </div>
        <div className="container">
          <DataTableBox 
            regionData={this.props.regionData}
            emptyRegions={this.props.emptyRegions}
            onEditRow={this.handleEditRow}
            onDeleteRow={this.handleDeleteRow}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
    emptyRegions: state.emptyRegions
  }
}

export default connect(mapStateToProps)(App);
