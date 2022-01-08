/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./CheckOut.css";
import useInput from "../../Hooks";

const CheckOut = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: NumberInputHasError,
    valueChangeHandler: NumberChangeHandler,
    inputBlurHandler: NumberBlurHandler,
    reset: resetNumberInput,
  } = useInput((value) => value.trim().length > 10);
  const {
    value: enteredLocation,
    isValid: enteredLocationIsValid,
    hasError: LocationInputHasError,
    valueChangeHandler: LocationChangeHandler,
    inputBlurHandler: LocationBlurHandler,
    reset: resetLocationInput,
  } = useInput((value) => value.trim() !== "");

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    let formIsValid = false;
    if (enteredNameIsValid && enteredNumberIsValid && enteredLocationIsValid) {
      formIsValid = true;
    }
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      number: enteredNumber,
      location: enteredLocation,
    });

    resetNameInput();
    resetNumberInput();
    resetLocationInput();
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const numberInputClasses = NumberInputHasError
    ? "form-control invalid"
    : "form-control";
  const locationInputClasses = LocationInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name Must Be Added</p>}
      </div>
      <div className={numberInputClasses}>
        <label htmlFor="Number">your Number</label>
        <input
          type="number"
          id="number"
          onChange={NumberChangeHandler}
          onBlur={NumberBlurHandler}
          value={enteredNumber}
        />
        {NumberInputHasError && (
          <p className="error-text"> Number Must Be Added correctly</p>
        )}
        <div />
      </div>
      <div className={locationInputClasses}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="Location"
          onChange={LocationChangeHandler}
          onBlur={LocationBlurHandler}
          value={enteredLocation}
        />
        {LocationInputHasError && (
          <p className="error-text">Location Must Be Added</p>
        )}
      </div>
      <div className="form-actions">
        <div>
          <button type="button" onClick={props.onCancel} className="button">
            Cancel
          </button>
          <button className="button buttonx">Confirm</button>
        </div>
      </div>
    </form>
  );
};
export default CheckOut;
