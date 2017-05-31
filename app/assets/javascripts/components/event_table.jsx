let EventTable = React.createClass({
  handleDeleteRecord: function (event) {
    this.props.handleDeleteRecord(event);
  },

  handleUpdateRecord: function (old_event, event) {
    this.props.handleUpdateRecord(old_event, event);
  },

  render: function () {
    let events = [];

    this.props.events.forEach(function (event) {
      events.push(<Event event={event} key={'event' + event.id}
                         handleDeleteRecord={this.handleDeleteRecord}
                         handleUpdateRecord={this.handleUpdateRecord}/>);
    }.bind(this));

    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="col-lg-2 col-md-2 col-sm-2 col-xs-2">Name</th>
              <th className="col-lg-2 col-md-2 col-sm-2 col-xs-2">Date</th>
              <th className="col-lg-3 col-md-3 col-sm-3 col-xs-3">Place</th>
              <th className="col-lg-3 col-md-3 col-sm-3 col-xs-3">Description</th>
              <th className="col-lg-2 col-md-2 col-sm-2 col-xs-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {events}
          </tbody>
        </table>
      </div>
    )
  }
});
