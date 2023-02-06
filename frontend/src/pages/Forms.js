import React, { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Input, Label, Select, Card, CardBody } from "@windmill/react-ui";
import { Button } from "@windmill/react-ui";
import { MailIcon } from "../icons";
import { ChooseDepartment } from "../components/register/ChooseDepartment";
import { ChooseClassYear } from "../components/register/ChooseClassYear";
import { ChooseSport } from "../components/register/ChooseSports";
import { FormControls } from "../components/register/FormControls";
import axios from "axios";

function Forms() {
  const [selectedDepartment, setSelectedDepartment] = useState(() => "");
  const [selectedClassYear, setSelectedClassYear] = useState(() => "");
  const [selectedSport, setSelectedSport] = useState(() => "");
  const [selectedSportDetail, setSelectedSportDetail] = useState(() => {});
  const [numberOfPlayers, setnumberOfPlayers] = useState([]);
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
    // console.log(arrayRange(1, 14, 1));
  const handleSelectedSport = async (sportsName) => {
    setSelectedSport(() => sportsName);
    const fetchSportsDetails = async (sportsName) => {
      const data = await axios.get(
        `http://localhost:4000/api/v1/fetchSports/${sportsName}`
      );
      setSelectedSportDetail(data.data);
      setnumberOfPlayers(arrayRange(1, 14, 1));
    };
    fetchSportsDetails(sportsName);
    // console.log(selectedSportDetail);
  };

  return (
    <div className="m-3">
      <div className="px-4 py-3 my-1 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <PageTitle className="align-center dark:bg-black">
          Registration Form
        </PageTitle>
      </div>
      <Card>
        <CardBody>
          {/* <ChooseDepartment setSelectedDepartment={setSelectedDepartment} />
            {selectedDepartment ? (
              <ChooseClassYear setSelectedClassYear={setSelectedClassYear} />
            ) : (
              ""
            )}
            {selectedClassYear ? (
              <ChooseSport setSelectedSport={setSelectedSport} />
            ) : (
              ""
            )}
          {selectedSport?(
            
            <FormControls/>
            ):""} */}
          <ChooseSport handleSelectedSport={handleSelectedSport} />

          {selectedSport && selectedSportDetail ? (
            selectedSportDetail.NumOfPlayers == 1 ? (
              <>
                <h1 className="my-5 text-red-400">Please fill the details</h1>
                <FormControls />
                <div id="setting_form">
                  <Label id="label_setting_1" className="mt-6" check>
                    <Input type="checkbox" required={true} />
                    <span className="ml-2">
                      I agree to the{" "}
                      <span className="underline">privacy policy</span>
                    </span>
                  </Label>
                  <Button
                    id="button_form"
                    onClick={(event) => (window.location.href = "/login")}
                  >
                    Submit
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h1 className="my-5 text-red-400">
                  Please fill up Team details
                </h1>
                {numberOfPlayers.map((e) => {
                  return <FormControls index={e} key={e} />;
                })}
                <FormControls />
                <div id="setting_form">
                  <Label id="label_setting_1" className="mt-6" check>
                    <Input type="checkbox" required={true} />
                    <span className="ml-2">
                      I agree to the{" "}
                      <span className="underline">privacy policy</span>
                    </span>
                  </Label>
                  <Button
                    id="button_form"
                    onClick={(event) => (window.location.href = "/login")}
                  >
                    Submit
                  </Button>
                </div>
              </>
            )
          ) : (
            ""
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default Forms;
