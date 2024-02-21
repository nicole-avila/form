import { useState } from "react";

export default function useFormData() {
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

  return { formData, setFormData, handleChange };
}
