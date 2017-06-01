let SortColumn = React.createClass({
  handleSort: function (e) {
    e.preventDefault();

    let order = this.props.order == 'desc' ? 'asc' : 'desc';
    this.props.handleSortColumn(this.props.name, order);
  },

  render: function () {
    let active = this.props.sort == this.props.name;
    let display_name = active ? <u>{this.props.text}</u> : this.props.text;
    let direction;

    if (active) {
      direction = this.props.order == "asc" ?
        <span className="glyphicon glyphicon-chevron-up m-l-xs" aria-hidden="true"></span> :
        <span className="glyphicon glyphicon-chevron-down m-l-xs" aria-hidden="true"></span>
    }

    return (
      <span className="sortable" onClick={this.handleSort}>
        {display_name} {direction}
      </span>
    );
  }
});
