import React from "react";
import { Label, Select } from "@windmill/react-ui";

export const SelectOptionsgenerator = ({
  label,
  options,
  required,
  onSelectHandler,
  instructionOption,
}) => {
  return (
    <Label className="mt-4">
      <span>{label} : </span>
      <Select
        className="mt-1 border rounded-sm p-3"
        required={required}
        onChange={(e) => onSelectHandler(e.target.value)}
      >
        <option value="">{instructionOption}</option>
        {options.map((option) => (
          <option key={option} value={option  }>{option}</option>
        ))}
      </Select>
    </Label>
  );
};
