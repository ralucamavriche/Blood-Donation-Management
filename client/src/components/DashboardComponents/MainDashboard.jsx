import React, { Component } from 'react'
import {
  getFeedbacks, updateFeedback
} from "./../../actions/mainActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import BreadcrumsModel from './../shared/Breadcrum/BreadcrumsModel';

class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isOpenConfirm: false,
      questionConfirm: "",
      idAppointment: "",
      searchText: "",
      status: "",
      checkboxDenied: true,
      checkboxAccepted: true,
      checkboxPending: true,
    };
  }

  componentDidMount() {
    this.props.getFeedbacks();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  toggleConfirm = () => {
    this.setState({ isOpenConfirm: !this.state.isOpenConfirm });
  };
  handleSendApp = () => {
    // RO DO change status

  };

  handleStatus = async (idDonor, status) => {
    this.props.updateAppointment(idDonor, status);
    await this.props.getAppointment();
  };
  handleAnswer = async (answer) => {
    if (answer === "cancel") {
      this.setState({
        isOpenConfirm: false,
        questionConfirm: "",
      });
    } else if (answer === "continue") {
      this.props.updateFeedback(this.state.idAppointment, this.state.status);
      await this.props.getFeedbacks();
    }
  };

  filterData = (name, email, status) => {
    if (
      this.state.searchText === "" ||
      name.includes(this.state.searchText) ||
      email.includes(this.state.searchText) ||
      status.includes(this.state.searchText)
    ) {
      if (
        status.toLowerCase() === "pending" &&
        this.state.checkboxPending === true
      )
        return true;
      if (
        status.toLowerCase() === "accepted" &&
        this.state.checkboxAccepted === true
      )
        return true;
      if (
        status.toLowerCase() === "denied" &&
        this.state.checkboxDenied === true
      )
        return true;
    }

    return false;
  };
  render() {
    const { user } = this.props.auth;
    return (
      <>
       <BreadcrumsModel
                options={[{ to: "/", name: "Blood Donation" }]}
                currentLink="Feedbacks"
            />
        {user && user.role === "admin" && (
          <>
            <div className="input-group mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={this.state.searchText}
                onChange={(e) => this.setState({ searchText: e.target.value })}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 mt-3">
              <div className="custom-control custom-checkbox custom-control-inline">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={this.state.checkboxPending}
                  onChange={() =>
                    this.setState({
                      checkboxPending: !this.state.checkboxPending,
                    })
                  }
                  id="checkboxPending"
                />
                <label className="custom-control-label" htmlFor="checkboxPending">
                  Pending
                </label>
              </div>

              <div className="custom-control custom-checkbox custom-control-inline">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={this.state.checkboxAccepted}
                  onChange={() =>
                    this.setState({
                      checkboxAccepted: !this.state.checkboxAccepted,
                    })
                  }
                  id="checkboxAccepted"
                />
                <label className="custom-control-label" htmlFor="checkboxAccepted">
                  Accepted
                </label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={this.state.checkboxDenied}
                  onChange={() =>
                    this.setState({
                      checkboxDenied: !this.state.checkboxDenied,
                    })
                  }
                  id="checkboxDenied"
                />
                <label className="custom-control-label" htmlFor="checkboxDenied">
                  Denied
                </label>
              </div>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Type OF</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                  <th className="text-center" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.main.feedbacks &&
                  this.props.main.feedbacks.map(
                    (
                      { _id, rating,typeOfFeedback,description, status = "pending" },
                      index
                    ) => {
                      if (this.filterData(typeOfFeedback.toLowerCase(), description.toLowerCase(), status) === true)
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{rating}</td>
                            <td>{typeOfFeedback}</td>
                            <td>{description}</td>
                            <td>{status.toUpperCase()}</td>
                            <td className="text-center" >
                              <button
                                title="Accepted"
                                onClick={() =>
                                  this.setState({
                                    isOpenConfirm: true,
                                    questionConfirm:
                                      "Are you sure you wanna publish this feedback?",
                                    idAppointment: _id,
                                    status: "Accepted",
                                  })
                                }
                                className="btn btn-success mx-2"
                              >
                               Accepted
                              </button>
                              <button
                                title="Denied"
                                onClick={() =>
                                  this.setState({
                                    isOpenConfirm: true,
                                    questionConfirm:
                                      "Are you sure you wanna denie this appointment?",
                                    idAppointment: _id,
                                    status: "Denied",
                                  })
                                }
                                className="btn btn-danger"
                              >
                               Denied
                              </button>
                            </td>
                          </tr>
                        );
                        return null;
                    }
                  )}
              </tbody>
            </table>
          </>
        )}
<ConfirmModal
          isOpen={this.state.isOpenConfirm}
          toggle={this.toggleConfirm}
          question={this.state.questionConfirm}
          handleAnswer={this.handleAnswer}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  donor: state.donor,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  request: state.request,
  main:state.main
});

export default withRouter(
  connect(mapStateToProps, { getFeedbacks, updateFeedback })(
    MainDashboard
  )
);
