import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = (props) => {
  // props
  const { setCategories } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(c => [value, ...c,]);
    setValue("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon1"
            >
              Push
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="value"
            value={value}
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </div>
  );
};


AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
