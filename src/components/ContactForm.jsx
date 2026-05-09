import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={HandleChange}
        placeholder="Your Name"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={HandleChange}
        placeholder="Your Email"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={HandleChange}
        placeholder="Your Message"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
