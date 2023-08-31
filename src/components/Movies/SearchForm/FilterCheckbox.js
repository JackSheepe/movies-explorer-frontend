import React from "react";

function FilterCheckbox() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="search-form__checkbox-container btn">
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="search-form__checkbox"
      />
      <label
        htmlFor="checkbox"
        className={`search-form__slider ${
          isChecked ? "search-form__slider_checked" : ""
        }`}
      >
        <span
          className={`search-form__slider-custom ${
            isChecked ? "search-form__slider-custom_checked" : ""
          }`}
        ></span>
      </label>
      <span onClick={handleCheckboxChange} className="search-form__label">
        Короткометражки
      </span>
    </div>
  );
}

export default FilterCheckbox;
