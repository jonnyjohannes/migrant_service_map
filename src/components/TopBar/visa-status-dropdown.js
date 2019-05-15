import React from "react";
import CheckBoxDropdown from "./checkbox-dropdown";

export default class VisaStatusDropdown extends React.Component {
  state = { visaStatusValue: "Current Visa Status" };

  render() {
    const { className, visaTypes, onChange = () => {} } = this.props;
    const { visaStatusValue } = this.state;
    return (
      <CheckBoxDropdown
        className={className}
        options={visaTypes}
        header={
          <>
            <h2>VISA STATUS</h2>
            <p>Current Visa Status</p>
          </>
        }
      />
    );
  }
}
