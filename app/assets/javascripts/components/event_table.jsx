let EventTable = React.createClass({
  handleDeleteRecord: function () {
    this.props.handleDeleteRecord();
  },

  handleUpdateRecord: function (old_event, event) {
    this.props.handleUpdateRecord(old_event, event);
  },

  handleSortColumn: function (name, order) {
    this.props.handleSortColumn(name, order);
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
              <th className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <SortColumn name="name" text="Name" sort={this.props.sort} order={this.props.order}
                            handleSortColumn={this.handleSortColumn}/>
              </th>
              <th className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <SortColumn name="event_date" text="Date" sort={this.props.sort} order={this.props.order}
                            handleSortColumn={this.handleSortColumn}/>
              </th>
              <th className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <SortColumn name="place" text="Place" sort={this.props.sort} order={this.props.order}
                            handleSortColumn={this.handleSortColumn}/>
              </th>
              <th className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <SortColumn name="description" text="Description" sort={this.props.sort} order={this.props.order}
                            handleSortColumn={this.handleSortColumn}/>
              </th>
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
