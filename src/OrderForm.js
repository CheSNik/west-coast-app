import React from "react";
import "./OrderForm.css";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ducttype: "",
      five: "",
      six: "",
      email: "",
      //duct: [[]], //[[key1,number1],[key2, number2]]
      //elbowSize: [],
      submitted: false,
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    var data = {
      ducttype: this.state.ducttype,
      five: this.state.five,
      six: this.state.six,
      email: this.state.email,
    };
    var URL =
      "https://tyl37n80n3.execute-api.us-west-1.amazonaws.com/Prod/POST";

    fetch(URL, {
      method: "POST",
      headers: {
        // "Access-Control-Allow-Origin": "*",

        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Success!", data);
      })
      .catch(
        (error) => {
          console.error("Error:", error);
        },

        this.setState({ submitted: true }, () => {
          setTimeout(
            () =>
              this.setState({
                ducttype: "",
                five: "",
                six: "",
                email: "",
                submitted: false,
              }),
            1000
          );
        })
      );
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="col-4 offset-1"> Delivery request</h1>

        <div className="row offset-1">
          <div className="row col-5">
            <label className="col-4" htmlFor="ducttype">
              Duct type
            </label>
            <select
              name="ducttype"
              value={this.state.ducttype}
              onChange={this.onFieldChange}
            >
              <option value="6">R 6"</option>
              <option value="8">R 8"</option>
              <option value="4.2">R 4.2"</option>
            </select>
          </div>
          <div className="col-6">
            <label className="col-4" htmlFor="ducttype">
              Elbow
            </label>
          </div>
        </div>
        <br />
        <div className="row offset-1">
          <div className="col-4 ">
            <label className="col-4" htmlFor="name">
              5"
            </label>
            <input
              type="text"
              name="five"
              value={this.state.five}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              6"
            </label>
            <input
              type="text"
              name="six"
              value={this.state.six}
              onChange={this.onFieldChange}
            />
            {/* <label className="col-4" htmlFor="name">
              7"
            </label>
            <input
              type="text"
              name="seven"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              8"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              9"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              10"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              12"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              14"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              16"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              18"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              20"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              22"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            /> */}
          </div>
          <div className="col-4 offset-1">
            <label className="col-4" htmlFor="name">
              5"
            </label>
            <input type="text" name="five" />
            <label className="col-4" htmlFor="name">
              6"
            </label>
            <input type="text" name="six" />
            {/* <label className="col-4" htmlFor="name">
              7"
            </label>
            <input
              type="text"
              name="seven"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              8"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              9"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              10"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              12"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              14"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              16"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              18"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              20"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
            <label className="col-4" htmlFor="name">
              22"
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            /> */}
          </div>
        </div>
        <br />
        <div className="col-4 offset-1">
          <button
            type="submit"
            value="Submit"
            className="btn btn-light btn-lg btn-radius"
          >
            Send request
          </button>
        </div>
        <br />
        <div className="col-4 offset-1">
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onFieldChange}
          />
        </div>
      </form>
    );
  }
}

export default OrderForm;
