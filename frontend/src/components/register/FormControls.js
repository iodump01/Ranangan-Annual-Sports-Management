import React from "react";
import { Input, Label, Select, Button } from "@windmill/react-ui";
import { MailIcon } from "../../icons";
export const FormControls = ({index}) => {
  console.log("🚀 ~ file: FormControls.js:5 ~ FormControls ~ index", index);
  
  return (
<div className="justify-center my-3">
  <div className="block p-6 rounded-lg shadow-lg border bg-white dark:bg-gray-700 dark:text-white">
    <h5 className="text-gray-900 text-xl leading-tight dark:text-white font-medium mb-2">Player {index?index:" Information"}</h5>

      <Label className="my-4">
        <span>Name</span>
        <Input className="mt-1" placeholder="e.g. Akshay Kumar" name="name" />
      </Label>
      <Label className="my-4">
        <span>ZPRN</span>
        <Input className="mt-1" placeholder="e.g. Z35929232I" name="zprn" />
      </Label>
      <Label className="my-4">
        <span>E-Mail ID</span>
        <div className="relative text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-400">
          <input
            className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-blue form-input"
            placeholder="e.g. akshaykumar@gmail.com"
            name="email"
          />
          <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
            <MailIcon className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>
        <Label className="my-4">
          <span>Phone No</span>
          <Input className="mt-1" placeholder="e.g. +919874563210" name="phone" />
        </Label>
        <Label className="my-4">
          <span>Gender</span>
          <Select className="mt-1" name="gender">
            <option>Male</option>
            <option>Female</option>
          </Select>
        </Label>
      </Label>
      <Label className="my-4">
        <span>Branch Name</span>
        <Input className="mt-1" placeholder="e.g. Computer Science" name="department" />
      </Label>
      <Label className="my-4">
        <span>Class</span>
        <Input className="mt-1" placeholder="e.g. Third Year" name="class" />
      </Label>
      <Label className="my-4">
        <span>Blood Group</span>
        <Select className="mt-1" name="bg">
          <option>O+</option>
          <option>O-</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
        </Select>
      </Label>
    </div>
    </div>
  );
};
