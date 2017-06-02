let Event = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },

  getInitialState: function () {
    return {edit: false};
  },

  handleDelete: function (e) {
    e.preventDefault();

    $.ajax({
      method: 'DELETE',
      url: '/api/events/' + this.props.event.id,

      success: function (data) {
        this.props.handleDeleteRecord();
      }.bind(this),

      error: function (xhr, status, error) {
        alert('Cannot delete requested record: ' + error);
      }
    });
  },

  handleToggle: function (e) {
    e.preventDefault();

    this.setState({edit: !this.state.edit});
  },

  validRecord: function () {
    if (this.recordValue("name") && this.recordValue("place") &&
        this.recordValue("event_date") && this.recordValue("description")) {
      return true;
    } else {
      return false;
    }
  },

  recordValue: function (field) {
    return ReactDOM.findDOMNode(this.refs[field]).value;
  },

  handleUpdate: function (e) {
    e.preventDefault();

    if (this.validRecord()) {
      let event_data = {
        name: this.recordValue("name"),
        description: this.recordValue("description"),
        event_date: this.recordValue("event_date"),
        place: this.recordValue("place")
      };

      $.ajax({
        method: 'PUT',
        url: '/api/events/' + this.props.event.id,
        data: {event: event_data},

        success: function (data) {
          this.props.handleUpdateRecord(this.props.event, data);
          this.setState({edit: false});
        }.bind(this),

        error: function (xhr, status, error) {
          alert('Cannot update requested record: ' + error);
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  },

  renderRecord: function () {
    let event = this.props.event;

    return (
      <tr>
        <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">{event.name}</td>
        <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">{event.event_date}</td>
        <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3">{event.place}</td>
        <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3">{event.description}</td>
        <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <a className="btn btn-blue btn-xs m-r-xs" title="Edit Event" onClick={this.handleToggle}>
            <span className="glyphicon glyphicon-pencil m-r-xs" aria-hidden="true"/>
            Edit
          </a>

          <a className="btn btn-red btn-xs" title="Delete Event" onClick={this.handleDelete}>
            <span className="glyphicon glyphicon-trash m-r-xs" aria-hidden="true"/>
            Delete
          </a>
        </td>
      </tr>
    )
  },

  renderForm: function () {
    return (
      <tr>
        <td>
          <div className="input-group teal-field">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-tag" aria-hidden="true"/>
            </div>

            <input name="name"
                   defaultValue={this.props.event.name}
                   className="form-control"
                   type="text"
                   placeholder="Name"
                   ref="name"/>
          </div>
        </td>
        <td>
          <div className="input-group teal-field">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-time" aria-hidden="true"/>
            </div>

            <input name="event_date"
                   defaultValue={this.props.event.event_date}
                   className="form-control"
                   type="date"
                   placeholder="Event date"
                   ref="event_date"/>
          </div>
        </td>
        <td>
          <div className="input-group teal-field">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-map-marker" aria-hidden="true"/>
            </div>

            <input name="place"
                   defaultValue={this.props.event.place}
                   className="form-control"
                   type="text"
                   placeholder="Place"
                   ref="place"/>
          </div>
        </td>
        <td>
          <div className="input-group teal-field">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"/>
            </div>

            <input name="description"
                   defaultValue={this.props.event.description}
                   className="form-control"
                   type="text"
                   placeholder="Description"
                   ref="description"/>
          </div>
        </td>
        <td>
          <a className="btn btn-teal m-r-xs" title="Save changes" onClick={this.handleUpdate}>
            <span className="glyphicon glyphicon-ok m-r-xs" aria-hidden="true"/>
            Save
          </a>

          <a className="btn btn-grey" title="Cancel changes" onClick={this.handleToggle}>
            <span className="glyphicon glyphicon-repeat m-r-xs" aria-hidden="true"/>
            Cancel
          </a>
        </td>
      </tr>
    );
  },

  render: function () {
    if (this.state.edit) {
      return (this.renderForm());
    } else {
      return (this.renderRecord());
    }
  }
});
