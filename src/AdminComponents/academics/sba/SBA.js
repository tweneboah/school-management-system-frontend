import React, { useState } from "react";
import Search from "./Search";
import SBATable from "./SbaTable";
import axios from "../../../store/axios";
import { errorAlert } from "../../../utils";
import Edit from "./EditModal";

function SBA() {
  const [data, setdata] = useState([]);
  const [students, setstudents] = useState([]);

  const [exam, setexam] = useState("");
  const [classWork, setclassWork] = useState({
    a1: "",
    a2: "",
    a3: "",
    a4: "",
  });
  const [position, setposition] = useState("");
  const [loading, setloading] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [term, setterm] = useState("");
  const [classID, setclassID] = useState("");
  const [course, setcourse] = useState("");
  const [year, setyear] = useState("");
  const [isSet, setisSet] = useState(false);
  const [selectedUser, setselectedUser] = useState({});
  const [loadingClass, setloadingClass] = useState(false);

  const handleSearch = (e) => {
    setisSet(false);
    e.preventDefault();
    if (classID === "" || term === "" || course === "" || year === "") {
      return errorAlert("Please select all fields");
    }
    setloadingClass(true);
    axios.get(`/classes/classCode/${classID}`).then((res) => {
      if (!res.data.docs?.sba || res.data.docs?.sba === false) {
        setloadingClass(false);
        return errorAlert("SBA not set for this class");
      }
      setisSet(true);
      axios.get(`/sba/${classID}/${course}/${year}/${term}`).then((result) => {
        setloadingClass(false);
        setdata(result.data.docs);
        setstudents(result.data.docs?.students);
      });
    });
  };

  const handleEdit = (id) => {
    setopenEdit(true);
    let selectedStudent = data.students.find((e) => e._id === id);
    setselectedUser(selectedStudent);
    setexam(selectedStudent?.exam);
    setclassWork(selectedStudent?.classWork);
  };

  const handleonSubmit = () => {
    setloading(true);
    axios
      .put(`/sba/update/student/${data?._id}/${selectedUser?._id}`, {
        classWork,
        exam,
        userID: selectedUser?.userID,
        name: selectedUser?.name,
        position: position,
      })
      .then((res) => {
        setopenEdit(false);
        setloading(false);
        setstudents(res.data?.students);
        console.log(res.data);
      });
  };

  return (
    <div>
      <h3>SBA</h3>
      <div className="mb-3">
        <Search
          academicYear={year}
          setacademicYear={setyear}
          setterm={setterm}
          term={term}
          course={course}
          setcourse={setcourse}
          classID={classID}
          setclass={setclassID}
          loading={loadingClass}
          handleSearch={handleSearch}
        />
      </div>
      {isSet && <SBATable rows={students} handleEdit={handleEdit} />}

      <Edit
        name={selectedUser?.name}
        userID={selectedUser?.userID}
        exam={exam}
        classID={classID}
        loading={loading}
        setposition={setposition}
        position={position}
        setexam={setexam}
        setclassWork={setclassWork}
        classWork={classWork}
        open={openEdit}
        onSubmit={handleonSubmit}
        setOpen={setopenEdit}
      />
    </div>
  );
}

export default SBA;
