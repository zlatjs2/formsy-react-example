import React, { Component } from "react";
import Formsy from "formsy-react";
import MyInput from "./MyInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    fetch("http://example.com/", {
      method: "post",
      body: JSON.stringify(model)
    });
  }

  render() {
    return (
      <Formsy
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <MyInput
          name="email"
          type="text"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
        <MyInput
          name="foo"
          type="text"
          validations="isLength:8"
          validationError="isLength Error"
        />
        <MyInput
          name="foo"
          type="text"
          validations="isNumeric"
          validationError="isNumeric Error"
        />
        <MyInput
          name="password"
          type="password"
          validations="maxLength:8"
          validationError="maxLength Error"
        />
        <MyInput
          name="email"
          validations={{
            isEmail: true,
            maxLength: 15
          }}
          validationErrors={{
            isEmail: "You have to type valid email",
            maxLength: "You can not type in more than 50 characters"
          }}
        />

        <MyInput name="email" validations="isEmail" />
        <MyInput name="number" validations="isNumeric,isLength:5" />
        <MyInput
          name="number"
          validations={{
            isNumeric: true,
            isLength: 5
          }}
        />
        <MyInput
          name="number"
          validations={{
            myCustomIsFiveValidation: function(values, value) {
              values;
              value;
              return 5 === value ? true : "No five";
            }
          }}
        />
        <button type="submit" disabled={!this.state.canSubmit}>
          Submit
        </button>
      </Formsy>
    );
  }
}

export default App;
