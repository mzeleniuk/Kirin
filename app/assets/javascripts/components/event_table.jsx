var EventTable = React.createClass({
  render: function () {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="col-lg-3 col-md-3 col-sm-3 col-xs-3">Name</th>
              <th className="col-lg-2 col-md-2 col-sm-2 col-xs-2">Date</th>
              <th className="col-lg-3 col-md-3 col-sm-3 col-xs-3">Place</th>
              <th className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3">Test</td>
              <td className="col-lg-2 col-md-2 col-sm-2 col-xs-2">June 10</td>
              <td className="col-lg-3 col-md-3 col-sm-3 col-xs-3"> Silent Hill</td>
              <td className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Meeting</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});
