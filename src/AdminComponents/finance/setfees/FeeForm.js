import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectFees } from "../../../store/slices/schoolSlice";

function FeeForm({
  classID,
  loading,
  tution,
  settution,
  setfacility,
  facility,
  maintenance,
  setmaintenance,
  exam,
  setexam,
  setclass,
  type,
  settype,
  isEdit,
  onSubmit,
}) {
  const feesType = useSelector(selectFees);
  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <form className="row content__container" action="">
        {!isEdit && (
          <>
            <div className="col-md-10 mb-3">
              <label className="form-label">Select fees Category</label>
              <select
                ref={register({ required: true })}
                value={classID}
                onChange={(e) => setclass(e.target.value)}
                name="class"
                className="form-select"
              >
                <option defaultValue hidden>
                  Choose...
                </option>
                {feesType?.length > 0 ? (
                  feesType.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.name}
                    </option>
                  ))
                ) : (
                  <option disabled>No data yet</option>
                )}
              </select>
              {errors.class && (
                <span className=" form-error text-danger mb-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="col-md-10 mb-3">
              <label className="form-label">Select Type</label>
              <select
                value={type}
                ref={register({ required: true })}
                onChange={(e) => settype(e.target.value)}
                name="type"
                className="form-select"
              >
                <option defaultValue hidden>
                  Choose...
                </option>
                <option value="border">Border</option>
                <option value="freshBorder">Fresh Boarder</option>
                <option value="day">Day</option>
                <option value="freshDay">Fresh Day</option>
              </select>
              {errors.type && (
                <span className=" form-error text-danger mb-2">
                  This field is required
                </span>
              )}
            </div>
          </>
        )}
        <div className="col-md-10 mb-3">
          <div className="row mb-2">
            <label className="col-2 form-label">Tution Fee</label>
            <div className="col-10">
              <input
                ref={register({ min: 0 })}
                value={tution}
                onChange={(e) => settution(e.target.value)}
                type="number"
                className="form-control"
                name="tution"
              />
            </div>
          </div>
          <div className="row mb-2">
            <label className="col-2 form-label">Facility User Fee</label>
            <div className="col-10">
              <input
                value={facility}
                onChange={(e) => setfacility(e.target.value)}
                type="number"
                ref={register({ min: 0 })}
                className="form-control"
                name="facility"
              />
            </div>
          </div>
          <div className="row mb-2">
            <label className="col-2 form-label">Maintenance Fee</label>
            <div className="col-10">
              <input
                value={maintenance}
                onChange={(e) => setmaintenance(e.target.value)}
                type="number"
                ref={register({ min: 0 })}
                className="form-control"
                name="maintenance"
              />
            </div>
          </div>
          <div className="row mb-2">
            <label className="col-2 form-label">Exam Fee</label>
            <div className="col-10">
              <input
                value={exam}
                onChange={(e) => setexam(e.target.value)}
                type="number"
                ref={register({ min: 0 })}
                className="form-control"
                name="exam"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 md-3">
          <button
            disabled={loading}
            onClick={handleSubmit(onSubmit)}
            className="btn blue__btn"
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            {isEdit ? "Save Changes" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeeForm;
