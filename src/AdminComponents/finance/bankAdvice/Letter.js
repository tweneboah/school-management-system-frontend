import React from "react";

function Letter({
  salutations,
  setsalutations,
  setsubject,
  subject,
  month,
  year,
  body,
  setbody,
  author,
  setauthor,
  bank,
  staff,
}) {
  return (
    <div className="content__container mb-3">
      <div className="row mb-3">
        <label className="form-label col-sm-2">Salutations</label>
        <div className="col-sm-9">
          <input
            onChange={(e) => setsalutations(e.target.value)}
            type="text"
            name="bank"
            value={salutations}
            className="form-control"
            placeholder=""
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="form-label col-sm-2">Subject</label>
        <div className="col-sm-9">
          <input
            onChange={(e) => setsubject(e.target.value)}
            type="text"
            name="bank"
            value={subject}
            className="form-control"
            placeholder=""
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="form-label col-sm-2">Bank</label>
        <div className="col-sm-9">
          <input
            readOnly
            type="text"
            name="bank"
            value={bank}
            className="form-control"
            placeholder=""
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="form-label col-sm-2">Pay Period</label>
        <div className="col-sm-9">
          <input
            readOnly
            type="text"
            name="bank"
            value={`${month} ${year} `}
            className="form-control"
            placeholder=""
          />
        </div>
      </div>
      <table className="table table-bordered my-5">
        <thead>
          <tr>
            <th scope="col">Staff Name</th>
            <th scope="col">Account Number</th>
            <th scope="col">Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {staff.length > 0 ? (
            staff.map((res) => (
              <tr key={res._id}>
                <td>{res?.name}</td>
                <td>{res?.accountNumber}</td>
                <td>{}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center text-bold" colSpan={3}>
                {" "}
                No Staff Registered
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="row mb-3">
        <label className="form-label col-sm-2">Body</label>
        <div className="col-sm-9">
          <textarea
            onChange={(e) => setbody(e.target.value)}
            type="text"
            name="bank"
            rows="5"
            value={body}
            className="form-control"
            placeholder=""
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="form-label col-sm-2">Author</label>
        <div className="col-sm-9">
          <input
            onChange={(e) => setauthor(e.target.value)}
            type="text"
            name="bank"
            value={author}
            className="form-control"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
}

export default Letter;
