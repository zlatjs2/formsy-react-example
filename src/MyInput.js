import { withFormsy } from "formsy-react";
import React from "react";
import TextField from "material-ui/TextField";
import { orange500, blue500 } from "material-ui/styles/colors";

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    const styles = {
      errorStyle: {
        color: orange500
      },
      underlineStyle: {
        borderColor: orange500
      },
      floatingLabelStyle: {
        color: orange500
      },
      floatingLabelFocusStyle: {
        color: blue500
      }
    };
    return (
      <div>
        {this.props.validations === "isNumeric" ? (
          <TextField
            hintText="Hint Text"
            errorText={errorMessage}
            errorStyle={styles.errorStyle}
            // floatingLabelText="Floating Label Text"
            onChange={this.changeValue}
            type={this.props.type}
            value={this.props.getValue() || ""}
          />
        ) : (
          <TextField
            hintText="Hint Text"
            errorText={errorMessage}
            // floatingLabelText="Floating Label Text"
            onChange={this.changeValue}
            type={this.props.type}
            value={this.props.getValue() || ""}
          />
        )}
      </div>
    );
  }
}

export default withFormsy(MyInput);
