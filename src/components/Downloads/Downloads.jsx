import React, { Component } from "react";
import "./Downloads.scss";
class Downloads extends Component {
  render() {
    return (
      <div className="container-fluid downloads">
        <div className="row row-md-12 row-sm-12 row-lg-12">
          <h1 className="textdown">Register Now!</h1>
        </div>
        <div className="row ">
          <div className="col col-lg-6 col-md-6 col-sm-6">
            <div className="card cardbox">
              <img
                src="https://somya51p.github.io/ERS-society/images/form.png"
                className="card-img-top downimage"
                alt="loading.."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b style={{ color: "Pink" }}>Membership Form</b>
                  <br />
                  <small>
                    Fill this{" "}
                    <span>
                      <a
                        className="a"
                        href="https://docs.google.com/forms/u/0/"
                      >
                        Form
                      </a>
                    </span>{" "}
                    to be a registered member of ERS!!
                  </small>
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-6">
            <div className="card cardbox">
              <img
                src="https://somya51p.github.io/ERS-society/images/report.png"
                className="card-img-top downimage"
                alt="loading..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b style={{ color: "Pink" }}>Members</b>
                  <br />
                  <small>
                    After submitting the form, check your name in this{" "}
                    <span>
                      <a
                        className="a"
                        href="https://somya51p.github.io/ERS-society/images/ers.pdf"
                      >
                        List!
                      </a>
                    </span>
                  </small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Downloads;
