import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send("service_hbabubr", "template_cw00g56", form, "QQOo7a0JeRt5NmInt")
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
        setOpen(false);
      })
      .catch(() => {
        toast.error("Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50">
      <form
        onSubmit={sendEmail}
        className="
        w-[380px] p-8 rounded-2xl
        bg-black/60 backdrop-blur-xl
        border border-cyan-500/30
        shadow-[0_0_25px_rgba(34,211,238,0.35)]
        text-white
        "
      >
        <h2
          className="
          text-2xl font-semibold mb-6 text-center
          bg-gradient-to-r from-cyan-400 to-blue-500
          bg-clip-text text-transparent
          "
        >
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="
          w-full mb-4 p-3 rounded-lg
          bg-black/50 border border-cyan-500/20
          focus:border-cyan-400
          focus:shadow-[0_0_10px_#22d3ee]
          outline-none transition
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="
          w-full mb-4 p-3 rounded-lg
          bg-black/50 border border-cyan-500/20
          focus:border-cyan-400
          focus:shadow-[0_0_10px_#22d3ee]
          outline-none transition
          "
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="
          w-full mb-6 p-3 rounded-lg
          bg-black/50 border border-cyan-500/20
          focus:border-cyan-400
          focus:shadow-[0_0_10px_#22d3ee]
          outline-none transition
          "
        />

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
            w-1/2 py-2 rounded-lg
            border border-gray-500
            hover:border-cyan-400
            hover:shadow-[0_0_10px_#22d3ee]
            transition
            "
          >
            Close
          </button>

          <button
            type="submit"
            disabled={loading}
            className="
            w-1/2 py-2 rounded-lg
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:from-cyan-400 hover:to-blue-500
            shadow-[0_0_15px_#22d3ee]
            hover:shadow-[0_0_25px_#22d3ee]
            transition
            "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
