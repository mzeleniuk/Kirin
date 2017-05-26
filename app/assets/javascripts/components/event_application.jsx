var EventApplication = React.createClass({
  getInitialState: function () {
    return {events: []};
  },

  componentDidMount: function () {
    this.getDataFromApi();
  },

  getDataFromApi: function () {
    var self = this;

    $.ajax({
      url: '/api/events',

      success: function (data) {
        self.setState({events: data});
      },

      error: function (xhr, status, error) {
        alert('Cannot get data from API: ' + error);
      }
    });
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Kirin</h1>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <EventTable events={this.state.events}/>
          </div>
        </div>
      </div>
    )
  }
});
