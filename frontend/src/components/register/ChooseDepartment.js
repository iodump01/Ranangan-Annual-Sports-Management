import React, { useState } from "react";
import { SelectOptionsgenerator } from "./utils/SelectOptionsgenerator";
export const ChooseDepartment = ({ setSelectedDepartment }) => {
  return (
    <SelectOptionsgenerator
      label="Choose Department"
      options={[
        "Computer",
        "Information Technology",
        "Mechanical",
        "Electrical",
        "ENTC",
      ]}
      instructionOption={"Select Department"}
      required={true}
      onSelectHandler={setSelectedDepartment}
    />
  );
};
