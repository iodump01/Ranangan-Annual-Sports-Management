import React from "react";
import { Label, Select } from "@windmill/react-ui";
import { SelectOptionsgenerator } from "../utils/SelectOptionsgenerator";
export const ChooseDepartment = () => {
  return (
    <SelectOptionsgenerator
      label="Choose Department"
      options={[
        "Computer",
        "Information Technology",
        "Mechanical",
        "Electrical",
        "Robotics And Automations",
        "AIDS",
        "ENTC",
      ]}
      required={true}
    />
  );
};
