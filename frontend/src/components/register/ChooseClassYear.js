import React, { useState } from "react";
import { SelectOptionsgenerator } from "./utils/SelectOptionsgenerator";
export const ChooseClassYear = ({setSelectedClassYear}) => {
  return (
    <SelectOptionsgenerator
      label="Choose Year"
      options={[
        "First Year",
        "Second Year",
        "Third Year",
        "Fourth Year",
      ]}
      instructionOption={"Select Year"}
      required={true}
      onSelectHandler={setSelectedClassYear}
    />
  );
};
