import React, { useState } from "react";
import { SelectOptionsgenerator } from "./utils/SelectOptionsgenerator";
export const ChooseSport = ({ handleSelectedSport }) => {
  return (
    <SelectOptionsgenerator
      label="Choose Sports"
      options={[
        "Cricket",
        "Football",
        "Volley Ball",
        "Badminton",
        "Chess",
        "Throw Ball",
        "Kabaddi",
      ]}
      instructionOption={"Select Sport"}
      required={true}
      onSelectHandler={handleSelectedSport}
    />
  );
};
