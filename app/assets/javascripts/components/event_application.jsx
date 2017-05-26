var EventApplication = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Kirin</h1>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <EventTable />
          </div>
        </div>
      </div>
    )
  }
});
