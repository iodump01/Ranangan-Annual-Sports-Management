import React from "react";
import { Label } from "@windmill/react-ui";

export const SelectOptionsgenerator = ({ title, options, required }) => {
  return (
    <Label className="mt-4">
      <span>{title}</span>
      <select className="mt-1" required={required}>
        <option>Computer</option>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </Label>
  );
};
