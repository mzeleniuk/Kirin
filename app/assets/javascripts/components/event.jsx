var Event = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render: function () {
    var event = this.props.event;

    return (
      <tr>
        <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3">{event.name}</td>
        <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">{event.event_date}</td>
        <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3">{event.place}</td>
        <td className="col-lg-4 col-md-4 col-sm-4 col-xs-4">{event.description}</td>
      </tr>
    )
  }
});
