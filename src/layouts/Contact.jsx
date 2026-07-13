import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { useMediaQuery } from "../hooks/useResponsive";

const inputStyle = {
  width: "100%",
  background: "#fff",
  border: "none",
  borderBottom: "1px solid #000",
  padding: "10px",
  //   fontFamily: "'Poppins',sans-serif",
  fontSize: "0.8rem",
  color: "black", // Changed text color to black for visibility on a white background
  letterSpacing: "0.02em",
  outline: "none",
  transition: "border-color 0.25s",
};

const labelStyle = {
  fontFamily: "'Poppins',sans-serif",
  fontSize: "0.55rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#000",
  marginBottom: "0.4rem",
  display: "block",
};

function Field({ label, children }) {
  return (
    <div className="my-2 w-full">
      <span style={labelStyle}>{label}</span>
      {children}
    </div>
  );
}

export default function Contact() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    mobile: "",
    type: "",
    desc: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.type) return;
    const subject = encodeURIComponent(`Consultation Request - ${form.type}`);
    const body = encodeURIComponent(
      `Name: ${form.first} ${form.last}\nBusiness Email: ${form.email}\nMobile: ${form.mobile}\nConsultation Type: ${form.type}\n\nProject Description:\n${form.desc}`
    );
    window.location.href = `mailto:contact@epsinity.com?subject=${subject}&body=${body}`;
  };

  const focusBorder = (e) => {
    e.target.style.borderColor = "var(--accent)";
  };
  const blurBorder = (e) => {
    e.target.style.borderColor = "var(--rule2)";
  };

  return (
    <section
      id="Contact"
      className="flex flex-col-reverse md:flex-row justify-center w-full h-full items-center mx-auto md:gap-30"
    >
      <div className="flex flex-col w-full md:w-1/3 mt-10 md:mt-0 items-center justify-center  z-10 rounded-2xl h-110 md:mx-auto">
        <img src="/logo.svg" className="w-30 mx-auto" alt="" />
        <a
          href="mailto:epsinity@gmail.com"
          data-hover
          className="mx-auto my-5 font-mono"
        >
          epsinity@gmail.com
        </a>
      </div>
      <div
        className="w-full md:w-2/3 h-full md:mx-auto z-10 md:my-3 p-2 md:p-8 rounded-2xl"
        ref={ref}
      >
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="z-12 w-full"
        >
          {/* First + Last Name */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            <Field label="First Name *">
              <input
                required
                value={form.first}
                onChange={set("first")}
                onFocus={focusBorder}
                onBlur={blurBorder}
                style={inputStyle}
              />
            </Field>
            <Field label="Last Name *">
              <input
                required
                value={form.last}
                onChange={set("last")}
                onFocus={focusBorder}
                onBlur={blurBorder}
                style={inputStyle}
              />
            </Field>
          </div>

          <Field label="Business Email *">
            <input
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              onFocus={focusBorder}
              onBlur={blurBorder}
              style={inputStyle}
            />
          </Field>

          <Field label="Mobile Number">
            <input
              type="tel"
              value={form.mobile}
              onChange={set("mobile")}
              onFocus={focusBorder}
              onBlur={blurBorder}
              placeholder="+91 000 000 0000"
              style={inputStyle}
            />
          </Field>

          <Field label="Consultation Type *">
            <div style={{ position: "relative" }}>
              <select
                required
                value={form.type}
                onChange={set("type")}
                onFocus={(e) => {
                  focusBorder(e);
                  setDropdownOpen(true);
                }}
                onBlur={(e) => {
                  blurBorder(e);
                  setDropdownOpen(false);
                }}
                style={{
                  ...inputStyle,
                  appearance: "none",
                  WebkitAppearance: "none",
                  cursor: "pointer",
                  paddingRight: "1.5rem",
                }}
              >
                <option
                  value=""
                  disabled
                  style={{ background: "var(--surface)" }}
                >
                  Select...
                </option>
                <option
                  value="Consultancy"
                  style={{ background: "var(--surface)" }}
                >
                  Consultancy
                </option>
                <option
                  value="Training"
                  style={{ background: "var(--surface)" }}
                >
                  Training
                </option>
              </select>
              <motion.span
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  right: 4,
                  top: "50%",
                  translateY: "-50%",
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  transform: "translateY(-50%)",
                }}
              >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </div>
          </Field>

          <Field label="Project Description">
            <textarea
              value={form.desc}
              onChange={set("desc")}
              onFocus={focusBorder}
              onBlur={blurBorder}
              placeholder="Tell us about your engineering requirements..."
              rows={3}
              style={{ ...inputStyle, resize: "none" }}
            />
          </Field>

          <button
            type="submit"
            data-hover
            style={{
              marginTop: "0.5rem",
              padding: "14px",
              fontFamily: "'Poppins',sans-serif",
              fontSize: "0.66rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "1px solid #000",
              color: "#000",
              background: "white",
              cursor: "pointer",
              transition: "background 0.22s, color 0.22s",
            }}
          >
            Request Consultation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
