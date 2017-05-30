let Event = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },

  handleDelete: function (e) {
    e.preventDefault();

    $.ajax({
      method: 'DELETE',
      url: '/api/events/' + this.props.event.id,

      success: function (data) {
        this.props.handleDeleteRecord(this.props.event);
      }.bind(this),

      error: function (xhr, status, error) {
        alert('Cannot delete requested record: ' + error);
      }
    });
  },

  render: function () {
    let event = this.props.event;

    return (
      <tr>
        <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">{event.name}</td>
        <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">{event.event_date}</td>
        <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3">{event.place}</td>
        <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3">{event.description}</td>
        <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <a className="btn btn-red btn-xs" title="Delete Event" onClick={this.handleDelete}>
            <span className="glyphicon glyphicon-trash m-r-xs" aria-hidden="true"/>
            Delete
          </a>
        </td>
      </tr>
    )
  }
});
