import React, { useEffect, useState } from "react";
import Table from "../../../AdminComponents/shared/ListTable";
import axios from "../../../store/axios";
import { useSelector } from "react-redux";
import { selectYearGroup } from "../../../store/slices/schoolSlice";
import { selectUser } from "../../../store/slices/userSlice";

const tableHeader = [
  { id: "createdAt", name: "Date" },
  { id: "paymentType", name: "Type" },
  { id: "student", name: "Student" },
  { id: "amount", name: "Amount" },
  { id: "year", name: "Year" },
  { id: "term", name: "Term" },
];

function NonBillPayment() {
  const [data, setdata] = useState([]);
  const [year, setyear] = useState("");
  const [term, setterm] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [loading, setloading] = useState(false);
  const user = useSelector(selectUser);
  const years = useSelector(selectYearGroup);

  useEffect(() => {
    axios.get(`/nonbillpayment`).then((res) => {
      setdata(res.data);
    });
  }, []);

  console.log(data);

  const handleSearch = () => {};

  return (
    <div>
      <form className="content__container row">
        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            Year
          </label>
          <div className="">
            <select
              name="academic-calendar"
              className="form-select"
              value={year}
              onChange={(e) => setyear(e.target.value)}
            >
              <option defaultValue hidden>
                Choose...
              </option>
              {years &&
                years.map((y) => (
                  <option value={y?.year} key={y._id}>
                    {y?.year}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            Term
          </label>
          <div className="">
            <select
              name="academic-calendar"
              className="form-select"
              value={term}
              onChange={(e) => setterm(e.target.value)}
            >
              <option defaultValue hidden>
                Choose...
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            From
          </label>
          <div className="å">
            <input
              value={from}
              onChange={(e) => setfrom(e.target.value)}
              type="date"
              className="form-control"
              name="from"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            To
          </label>
          <div className="">
            <input
              value={to}
              onChange={(e) => setto(e.target.value)}
              type="date"
              className="form-control"
              name="to"
            />
          </div>
        </div>
        <div className="mb-3">
          <button
            onClick={handleSearch}
            disabled={loading}
            type="submit"
            className="btn blue__btn"
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Search
          </button>
        </div>
      </form>
      <div className="content__container mt-5">
        <div className="text-center">
          <h5>
            <strong>{user?.name}</strong>
          </h5>
          <h5>NON-BILL PAYMENTS RECEIVED</h5>
        </div>
        <Table data={data} tableHeader={tableHeader}></Table>
      </div>
    </div>
  );
}

export default NonBillPayment;
