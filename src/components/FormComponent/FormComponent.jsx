import { useState } from "react";
import "./FormComponent.scss";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirmed: "",
    gender: "",
    comments: "",
    iMissSummer: false,
  });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === value ? checked : value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(formData);

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirmed: "",
      gender: "",
      comments: "",
      iMissSummer: false,
    });
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={handleClick} className="form__content">
          <label htmlFor="firstname">Firstname </label>
          <input
            type="text"
            onChange={handleChange}
            name="firstname"
            id="firstname"
            value={formData.firstname}
          />

          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            onChange={handleChange}
            name="lastname"
            id="lastname"
            value={formData.lastname}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            value={formData.email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            value={formData.password}
          />

          <label htmlFor="passwordConfirmed">Confirm Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="passwordConfirmed"
            id="passwordConfirmed"
            value={formData.passwordConfirmed}
          />

          <fieldset>
            <legend>Your Gender</legend>
            <div>
              <input
                type="radio"
                name="gender"
                id="king"
                onChange={handleChange}
                value="king"
                checked={formData.gender === "king"} //om gender = värdet (alltså king) så får den KING som värdet i checked
              />
              <label htmlFor="king">King</label>
            </div>

            <div>
              <input
                type="radio"
                name="gender"
                id="queen"
                onChange={handleChange}
                value="queen"
                checked={formData.gender === "queen"}
              />
              <label htmlFor="queen">Queen</label>
            </div>

            <div>
              <input
                type="radio"
                name="gender"
                id="unicorn"
                onChange={handleChange}
                value="unicorn"
                checked={formData.gender === "unicorn"}
              />
              <label htmlFor="unicorn">Unicorn</label>
            </div>
          </fieldset>
          <br />

          <label htmlFor="comments">Any comments?</label>
          <textarea
            placeholder="Write anything you want..."
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formData.comments}
          />

          <br />

          <div>
            <input
              type="checkbox"
              checked={formData.iMissSummer} //Vid checkbox är det checked som avgör om "värdet" är true eller false
              name="iMissSummer"
              id="iMissSummer"
              onChange={handleChange}
            />
            <label htmlFor="iMissSummer">Are you friendly?</label>
          </div>

          <br />
          <br />
          <button>View the result</button>
        </form>
      </div>
    </div>
  );
}
