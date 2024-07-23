"use client";
import React from "react";
import "./page.css";

import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const [showThankyou, setShowThankyou] = useState(false);
  const [firstName, setFirstName] = useState("");

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {!showThankyou && (
        <Form setShowThankyou={setShowThankyou} setFirstName={setFirstName} />
      )}
      {showThankyou && <Thankyou firstName={firstName} />}
    </>
  );
};

function Form({ setFirstName, setShowThankyou }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    setShowThankyou(true);
    setFirstName(data.firstName);
  };

  return (
    <div className="form__section">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-wrapper">
          <input
            className="input"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />

          <span className="error">
            {errors.firstName ? "This field is required" : ""}
          </span>
        </div>

        <div className="form__input-wrapper">
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          <span className="error">
            {errors.lastName ? "This field is required" : ""}
          </span>
        </div>

        <div className="form__input-wrapper">
          <input
            className="input"
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          <span className="error">
            {errors.email ? "This field is required" : ""}
          </span>
        </div>

        <button type="submit" className="form__btn">
          Get an invite
        </button>
        <p className="form__p">
          * By clicking the button, you are agreeing to our Terms and Services.
        </p>
      </form>
    </div>
  );
}

const Thankyou = ({ firstName }) => {
  return (
    <div className="thankyou__wrapper">
      <p className="thankyou__text">Thank you, {firstName}!</p>
    </div>
  );
};

export default FormPage;
