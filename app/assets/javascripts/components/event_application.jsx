let EventApplication = React.createClass({
  getInitialState: function () {
    return {events: []};
  },

  componentDidMount: function () {
    this.getDataFromApi();
  },

  getDataFromApi: function () {
    let self = this;

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

  handleSearch: function (events) {
    this.setState({events: events});
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Kirin</h1>
        </div>

        <div className="row m-b-lg">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <SearchForm handleSearch={this.handleSearch}/>
          </div>
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
