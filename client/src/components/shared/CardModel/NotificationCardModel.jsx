import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function NotificationCardModel(props) {
  const { data } = props;
  const date = data.title ? new Date(data.date) : new Date();
  return true ? (
    <div className="row mb-4 ">
      <div className=" col  card text-center" style={{padding:"0"}}>
        {data.viewedBy &&
        data.viewedBy.includes(props.auth.user._id) === false ? (
          <div className="card-header custom_header_notification" style={{color:"#B22222"}}>
           <h5>Notifications</h5> {" "}
            <span className="badge badge-secondary custom_bagde">New</span>
          </div>
        ) : (
          <div className="card-header">Notifications</div>
        )}

        <div className="card-body">
          <h5 className="card-title">{data.title || "No title"}</h5>
          <p className="card-text">{data.description}</p>
    
          <Link  className="btn btn-primary btn-xl js-scroll-trigger" to={`/notifications/${data._id}`}>
          View notification
          </Link>
        </div>

        <div className="card-footer text-muted">
          <Moment fromNow>{date}</Moment>
        </div>
      </div>
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({
  request: state.request,
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, {})(NotificationCardModel));
