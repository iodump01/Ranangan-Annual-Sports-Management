import React,{useState} from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Input, Label, Select,Card, CardBody } from "@windmill/react-ui";
import { Button } from "@windmill/react-ui";
import { MailIcon } from "../icons";
// import { ChooseDepartment } from "../components/register/ChooseDepartment";

function Forms() {
  const [selected , setselected ] = useState()
  return (
    <>
      <PageTitle className="align-center">Registration Form</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Card>
  <CardBody>
  {/* <ChooseDepartment/> */}
  </CardBody>
</Card>
   
        <Label className="mt-4">
          <span>Year</span>
          <Select className="mt-1">
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
            <option>Fourth Year</option>
            <option>11th Std</option>
            <option>12th Std</option>
          </Select>
        </Label>
        <Label className="mt-4">
          <span>Sports</span>
          <Select className="mt-1">
            <option>Football</option>
            <option>Cricket</option>
            <option>Chess</option>
            <option>Carrom</option>
            <option>Volleyball</option>
            <option>Kabaddi</option>
          </Select>
        </Label>
        <Label>
          <span>Name</span>
          <Input className="mt-1" placeholder="Akshay Kumar" />
        </Label>
        <Label>
          <span>ZPRN</span>
          <Input className="mt-1" placeholder="Z35929232I" />
        </Label>
        <Label>
          <span>E-Mail ID</span>
          <div className="relative text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-400">
            <input
              className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-blue form-input"
              placeholder="akshaykumar@gmail.com"
            />
            <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <Label>
            <span>Phone No</span>
            <Input className="mt-1" placeholder="+919874563210" />
          </Label>
        </Label>
        <Label className="mt-4">
          <span>Blood Group</span>
          <Select className="mt-1">
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
        <div id="setting_form">
          <Label id="label_setting_1" className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
              I agree to the <span className="underline">privacy policy</span>
            </span>
          </Label>
          <Button
            id="button_form"
            onClick={(event) => (window.location.href = "/login")}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default Forms;
