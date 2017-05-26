let SearchForm = React.createClass({
  handleSearch: function () {
    let query = ReactDOM.findDOMNode(this.refs.query).value;
    let self = this;

    $.ajax({
      url: '/api/events/search',
      data: {query: query},

      success: function (data) {
        self.props.handleSearch(data);
      },

      error: function (xhr, status, error) {
        alert('Search error: ' + status + '; ' + xhr + '; ' + error);
      }
    });
  },

  render: function () {
    return (
      <div className="input-group search-field">
        <div className="input-group-addon">
          <span className="glyphicon glyphicon-search" aria-hidden="true"/>
        </div>

        <input onChange={this.handleSearch}
               type="text"
               className="form-control"
               placeholder="Type search phrase here..."
               ref="query"/>
      </div>
    )
  }
});
