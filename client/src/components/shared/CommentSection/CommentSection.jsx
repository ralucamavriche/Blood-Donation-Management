import React, { Component } from "react";
import CommentCard from "./CommentCard";

export default class CommentSection extends Component {
  render() {
    return (
      <>
        <div className=" py-3 shadow-sm p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="card" style={{width:"100%"}}>
              <div className="card-header" style={{background: '#03A9F4'}}>
              <h4 className="mb-0">Comments:</h4>
              </div>
              <div className="card-body">
                <div className="text">
                {this.props.comments.length &&
                  this.props.comments.map((e) => {
                    return <CommentCard data={e} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
