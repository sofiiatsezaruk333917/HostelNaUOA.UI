import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import FormValidation from "../ModalOA/FormValidation";
const Input = ({
                   error,
                   id,
                   label,
                   setDataForm,
                   setError,
                   ...attrs
               }) => {
    const setValue = data => {
        FormValidation(data, id, setError);
        setDataForm(data);
    };
    return (
        <div className={"my-3 has-error"}>
            {id === "number" ? (
                <PhoneInput
                    inputStyle={{width: '100%'}}
                    onBlur={event => setValue(event.target.value)}
                    onChange={phone =>
                        error.isError === "first"
                            ? setDataForm(phone)
                            : error.isError
                                ? setValue(phone)
                                : setDataForm(phone)
                    }
                    id={id}
                    {...attrs}
                />
            ) : (
                <input
                    onBlur={event => setValue(event.target.value)}
                    onChange={event =>
                        error.isError === "first"
                            ? setDataForm(event.target.value)
                            : error.isError
                                ? setValue(event.target.value)
                                : setDataForm(event.target.value)
                    }
                    name={id}
                    id={id}
                    className={`form-control ${
                        error.isError === "first"
                            ? ""
                            : error.isError
                                ? "is-invalid"
                                : "is-valid"
                    }`}
                    {...attrs}
                />
            )}
            {error.isError === "first" ? (
                ""
            ) : error.isError ? (
                <span className="text-danger">{error.title}</span>
            ) : null}
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    setDataForm: PropTypes.func.isRequired,
    label: PropTypes.string,
    error: PropTypes.object,
    setError: PropTypes.func
};

export default Input;
