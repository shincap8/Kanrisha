import React from 'react';
import history from '../history';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

export class Advanced extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      freelancerId: history.location.state.freelancerId,
      taskId: history.location.state.taskId,
      value: 0,
    };
  }

  render () {
    let type_render = '';
    if (this.props.type === 0) {
      type_render = <div className="">
                      <label className="col-md-4">
                        <input type="checkbox"
                        name="value"
                        onChange={this.props.onChangeOption} />
                        Done
                      </label>
                    </div>
    } else if (this.props.type === 2) {
      type_render =  <div className="form-group">
                        <div className="row ml-0">
                          <label className="mr-2">Update</label>
                          <div>
                            <input
                            type="number"
                            onChange={this.props.onChange}
                            min={0}
                            name="value"
                            placeholder="Enter a number"
                            value={this.props.value}/>
                          </div>
                        </div>
                      </div>
    } else {
      type_render = <div className="form-group">
                    <label className="mr-2 font-weight-bold">Update</label>
                    <div className="col-8 md-4">
                      <RangeSlider
                        value={this.props.value}
                        onChange={this.props.onSetValue}
                        tooltip='on'/>
                    </div>
                  </div>
    }
    return (
      <div className="col-6">
        <h5>Task advance</h5>
        <h6 className="mt-5">Please submit your total progress</h6>
        <form onSubmit={this.props.onSubmit}>
          <div className="mt-5">
            {type_render}
          </div>

          <button type="submit" onClick={this.props.onSubmit} className="btn btn-primary" >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Advanced;