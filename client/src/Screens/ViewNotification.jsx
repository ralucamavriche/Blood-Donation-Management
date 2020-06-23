import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

import { withRouter } from "react-router-dom";
import BreadcrumsModel from "./../components/shared/Breadcrum/BreadcrumsModel";
import Moment from "react-moment";
import CommentSection from "./../components/shared/CommentSection/CommentSection";
import { addComment, getRequests,updateViewField } from "../actions/requestActions";
import Alert from './../components/shared/Alert/Alert';

class ViewNotification extends Component {
  componentDidMount() {
    this.props.getRequests();

    if(this.props.auth.user !== null) {
      const user_id = this.props.auth.user._id;
      if(this.props.request.requests){
          this.props.request.requests.map((notification,index) =>{
            if (notification._id === this.props.match.params.id){
              const viewedByTemp = notification.viewedBy;
              if(viewedByTemp.includes(user_id) === false){
                viewedByTemp.push(user_id);
                this.props.updateViewField(notification._id, viewedByTemp);
              }
            }
          })
      }
    }
    
  }
  
  state = {
    comments: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id_notification = this.props.match.params.id;
    this.props.request.requests &&
      this.props.request.requests.map((e, index) => {
        if (e._id === id_notification) {
          let comments = e.comments;
          const comment = {
            author: "Spital 7",
            author_id: "",
            description: this.state.comments,
          };
          comments.push(comment);
          this.setState({
            comments: "",
          });
          this.props.addComment(id_notification, comments);
        }
      });
  };

  render() {
    return (
      <>
        {JSON.stringify}
        {this.props.request.requests &&
          this.props.request.requests.map((e, index) => {
            if (e._id === this.props.match.params.id)
              return (
                <>
                  <Navbar />

                  <BreadcrumsModel
                    options={[
                      { to: "/", name: "Blood D" },
                      { to: "/notifications", name: "Notifications" },
                    ]}
                    currentLink="Donare Sange"
                  />
                  <div className="container">
                    <div className="row mt-4">
                      <>
                        <div class="col jumbotron">
                          <h1 class="display-4">Notificare</h1>
                          <h3>{e.title}</h3>
                          <p class="lead">{e.description}</p>
                          <hr class="my-4"></hr>
                          <p>
                            <span className="author">{e.author}</span> requests{" "}
                            <span className="request">{e.blood_type} !</span>
                          </p>
                          <hr class="my-4"></hr>
                          <span>
                            {<Moment fromNow>{new Date(e.date)}</Moment>}
                          </span>
                        </div>
                      </>
                    </div>

                    <Container className="py-3">
                      <Row>
                        <Card style={{ width: "100%" }}>
                          <CardHeader>
                            <h4 class="mb-0">Add comment </h4>
                          </CardHeader>
                          <CardBody>
                            <Form onSubmit={this.onSubmit}>
                              <FormGroup>
                                <Label for="request">
                                  <h5 class="mb-0">{e.author}</h5>
                                </Label>
                                <Input
                                  required
                                  input="text"
                                  name="comments"
                                  value={this.state.comments}
                                  id="comments"
                                  placeholder="Add comments"
                                  onChange={this.onChange}
                                />
                                <Button
                                  color="dark"
                                  style={{ marginTop: "2rem" }}
                                  block
                                >
                                  Add a comment
                                </Button>
                              </FormGroup>
                            </Form>
                          </CardBody>
                        </Card>
                      </Row>
                    </Container>

                    <CommentSection comments={e.comments} />
                  </div>
                  {
            this.props.main.isOpenAlert === true && (
              <Alert text={this.props.main.text} style={this.props.main.style} handleClose={this.props.closeAlert}/>  
            )
          }
                </>
              );
          })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  request: state.request,
  auth: state.auth,
  main:state.main
});

export default withRouter(
  connect(mapStateToProps, { addComment, getRequests,updateViewField })(ViewNotification)
);
