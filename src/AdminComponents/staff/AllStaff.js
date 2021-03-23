import React, { useState, useEffect } from "react";
import Search from "../shared/Search";
import StaffTable from "../shared/TableListUsers";
import axios from "../../store/axios";
import { errorAlert } from "../../utils";
import Loading from "../../Loading";
import { pdf } from "../../components/tables/pdf";
import Paper from "@material-ui/core/Paper";

const headCells = [
  { id: "userID", numeric: false, disablePadding: false, label: "Teacher ID" },
  { id: "photoUrl", numeric: false, disablePadding: false, label: "Photo" },
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  {
    id: "middlename",
    disablePadding: true,
    label: "Middle Name",
  },
  { id: "surname", disablePadding: true, label: "Last Name" },
  { id: "class", disablePadding: false, label: "Class" },
  { id: "Gender", disablePadding: false, label: "Gender" },
];

function AllStaff() {
  const [name, setname] = useState("");
  const [userID, setuserID] = useState("");
  const [staff, setstaff] = useState([]);
  const [storeData, setstoreData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get("/teachers")
      .then((res) => {
        setloading(false);
        setstaff(res.data);
        setstoreData(res.data);
      })
      .catch((err) => {
        setloading(false);
      });
  }, []);

  console.log(staff);

  const generatePDF = () => {
    const headers = [
      { key: "userID", label: "UserID" },
      { key: "name", label: "Name" },
      { key: "middleName", label: "Middle Name" },
      { key: "surname", label: " SurName" },
      { key: "gender", label: "Gender" },
      { key: "classID", label: "Class" },
    ];

    pdf({ data: staff, headers, filename: "AllStaff" });
  };

  console.log(staff);
  const handleDelete = (id) => {
    let ans = window.confirm(`Are sure you want to delete user ${id}`);
    if (ans) {
      axios.delete(`/user/delete/${id}`).then((res) => {
        if (res.data.error) {
          errorAlert(res.data.error);
        }
        setstaff(staff.filter((i) => i.userID !== id));
      });
    }
  };

  const handleWithdraw = (i) => {
    let ans = window.confirm(
      `Are you sure you want to withdraw this staff member ${i}`
    );
    console.log(ans);
    if (ans) {
      axios.put(`/teachers/update/${i}`, { withdraw: true }).then((res) => {
        console.log(res.data);
        if (res.data.error) {
          errorAlert(res.data.error);
        }
        setstaff(staff.filter((e) => e.userID !== i));
      });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setstaff(storeData);
    setname("");
    setuserID("");
  };
  const handleSearch = (e) => {
    e.preventDefault();
    let newStaff = [];
    if (name) {
      newStaff = storeData.filter(
        (i) =>
          i.name.toLowerCase().includes(name.toLowerCase()) ||
          i.surname.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (userID) {
      newStaff = storeData.filter((i) =>
        i.userID.toLowerCase().includes(userID.toLowerCase())
      );
    }
    setstaff(newStaff);
  };

  const inputFields = [
    {
      type: "text",
      label: "Search by Name",
      name: "",
      value: name,
      onChange: setname,
    },
    {
      type: "text",
      label: "Search by UserID",
      name: "",
      value: userID,
      onChange: setuserID,
    },
  ];

  return (
    <>
      {loading && <Loading />}
      <div className="content__container mb-5">
        <Search
          inputFields={inputFields}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      </div>

      <StaffTable
        route="staff"
        loading={loading}
        students={staff}
        handleWithdraw={handleWithdraw}
        handleDelete={handleDelete}
        headCells={headCells}
      />

      <div className="d-flex justify-content-end">
        <button onClick={generatePDF} className="btn orange__btn ">
          Download PDF
        </button>
      </div>
    </>
  );
}

export default AllStaff;
