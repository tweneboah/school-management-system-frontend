import React, { useState, useEffect } from "react";
import axios from "../../store/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { Link, useParams } from "react-router-dom";
import ListTable from "../../components/courses/NotesTable";
import { getCapitalize } from "../../utils";

const tableHeader = [
  { id: "date", name: "Date" },
  { id: "descripton", name: "Topic" },
  { id: "data", name: "File" },
];

function CourseDetails() {
  const [course, setcourse] = useState([]);
  const [loading, setloading] = useState(false);
  const [notes, setnotes] = useState([]);
  const { id } = useParams();
  const user = useSelector(selectUser);

  useEffect(() => {
    axios.get(`/courses/courseCode/${id}`).then((res) => {
      console.log(id);
      setcourse(res.data.docs);
    });
  }, [id]);

  useEffect(() => {
    setloading(true);
    axios.get(`/notes/course/${id}`).then((res) => {
      setloading(false);
      console.log(res.data);
      setnotes(res.data.docs);
    });
  }, [id]);

  const handleDelete = () => {};

  const handleEdit = () => {};

  console.log(course);

  return (
    <div>
      <div className="d-flex justify-content-between align--items-center mb-5">
        <div
          style={{ background: "#051f3e" }}
          className="content__container text-center"
        >
          <h3>Course Details</h3>
          <h4> {getCapitalize(course?.name)}</h4>
          <h6>{course?.code}</h6>
        </div>
        <div>
          {user?.role !== "student" && (
            <Link
              to={`/academics/courses/add/${course?.code}`}
              className="btn blue__btn"
            >
              Add New Note
            </Link>
          )}
        </div>
      </div>

      <h3>Course Notes</h3>
      <ListTable
        tableHeader={tableHeader}
        data={notes}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        loading={loading}
        noActions={user?.role === "student" ? true : false}
        isEdit={true}
        user={user?.id}
      />
    </div>
  );
}

export default CourseDetails;
