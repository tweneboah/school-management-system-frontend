import React, { useState, useEffect } from "react";
import Search from "../../shared/Search";
import Table from "../../shared/AttendanceTable";
import { Link } from "react-router-dom";
import axios from "../../../store/axios";
import { useSelector } from "react-redux";
import { selectClasses } from "../../../store/slices/schoolSlice";

function Attendance() {
  const [classID, setclassID] = useState("");
  const [date, setDate] = useState("");
  const [attendanceData, setattendanceData] = useState([]);
  const [storeData, setstoreData] = useState([]);
  const classes = useSelector(selectClasses);

  const handleSearch = (e) => {
    e.preventDefault();
    let newClasses = [];
    if (classID) {
      newClasses = storeData.filter((i) =>
        i?.classID?.toLowerCase().includes(classID?.toLowerCase())
      );
    }
    if (date) {
      //let today = new Date()
      newClasses = newClasses.filter((i) =>
        i?.date?.includes(new Date(date).toISOString())
      );
    }
    setattendanceData(newClasses);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setclassID("");
    setDate("");
    setattendanceData(storeData);
  };

  useEffect(() => {
    axios.get("/attendance/students").then((res) => {
      console.log(res.data);
      setattendanceData(res.data);
      setstoreData(res.data);
    });
  }, []);

  const inputFields = [
    {
      type: "select",
      label: "Search by Class",
      value: classID,
      options: classes.map((e) => {
        return {
          id: e.classCode,
          name: e.name,
        };
      }),
      name: "studentID",
      onChange: setclassID,
    },
    {
      type: "date",
      label: "Search by Date",
      value: date,
      name: "date",
      onChange: setDate,
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-8">
          <Search
            handleSearch={handleSearch}
            handleReset={handleReset}
            title="Student's Attendance"
            inputFields={inputFields}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Link to="/attendance/students/register" className="btn blue__btn">
            Register Attendance
          </Link>
        </div>
      </div>

      <Table attendanceData={attendanceData} />
    </div>
  );
}

export default Attendance;
