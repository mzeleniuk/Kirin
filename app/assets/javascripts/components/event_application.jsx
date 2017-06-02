let EventApplication = React.createClass({
  getInitialState: function () {
    return {events: [], sort: "name", order: "asc", page: 1, pages: 0};
  },

  componentDidMount: function () {
    this.getDataFromApi(this.state.page);
  },

  getDataFromApi: function (page) {
    let self = this;

    $.ajax({
      url: '/api/events',
      data: {page: page},

      success: function (data) {
        self.setState({events: data.events, pages: parseInt(data.pages), page: parseInt(data.page)});
      },

      error: function (xhr, status, error) {
        alert('Cannot get data from API: ' + error);
      }
    });
  },

  handleSearch: function (events) {
    this.setState({events: events});
  },

  handleAdd: function () {
    this.getDataFromApi(this.state.page);
  },

  handleDeleteRecord: function () {
    this.getDataFromApi(this.state.page);
  },

  handleUpdateRecord: function (old_event, event) {
    let events = this.state.events.slice();
    let index = events.indexOf(old_event);

    events.splice(index, 1, event);
    this.setState({events: events});
  },

  handleSortColumn: function (name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }

    $.ajax({
      url: '/api/events',
      data: {sort_by: name, order: order, page: this.state.page},
      method: 'GET',

      success: function (data) {
        this.setState({events: data.events, sort: name, order: order});
      }.bind(this),

      error: function (xhr, status, error) {
        alert('Cannot sort events: ' + error);
      }
    });
  },

  handleChangePage: function (page) {
    this.getDataFromApi(page);
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Kirin</h1>
        </div>

        <div className="row m-b-lg">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <NewForm handleAdd={this.handleAdd}/>
          </div>
        </div>

        <div className="row m-b-lg">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <SearchForm handleSearch={this.handleSearch}/>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <EventTable events={this.state.events}
                        sort={this.state.sort}
                        order={this.state.order}
                        handleDeleteRecord={this.handleDeleteRecord}
                        handleUpdateRecord={this.handleUpdateRecord}
                        handleSortColumn={this.handleSortColumn}/>
            <Pagination page={this.state.page}
                        pages={this.state.pages}
                        handleChangePage={this.handleChangePage}/>
          </div>
        </div>
      </div>
    )
  }
});
