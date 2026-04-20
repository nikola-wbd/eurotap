"use client";

import { useState } from "react";
import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";
import { EMAIL, PHONE, PHONE_DISPLAY } from "../utils";
import emailjs from "emailjs-com";

// EmailJS configuration - Replace these with your actual values from emailjs.com
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) return;

    setLoading(true);
    setError("");

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
      // Fallback to mailto if EmailJS not configured
      const sub = encodeURIComponent(`Upit za namještaj – ${form.interest || "Opće"}`);
      const body = encodeURIComponent(
        `Ime: ${form.name}\nKontakt: ${form.contact}\nInteresovanje: ${form.interest}\n\nPoruka:\n${form.message}`
      );
      window.open(`mailto:${EMAIL}?subject=${sub}&body=${body}`);
      setSent(true);
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.contact,
          interest: form.interest || "Opće",
          message: form.message,
          to_email: EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      setError("Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte direktno.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = { color: "var(--bark)" };

  return (
    <section id="kontakt" data-screen-label="08 Kontakt" className="sec sec-alt">
      <div className="max-w-[1480px] mx-auto">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="sec-label">Kontakt</span>
            <WordReveal
              text="Vaša ideja zaslužuje pravu realizaciju."
              tag="h2"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.8rem,5vw,3.8rem)",
                color: "var(--bark)",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.15,
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="brass-div" />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "3.5rem 6rem",
            alignItems: "start",
          }}
        >
          {/* LEFT - Contact Info */}
          <ScrollReveal>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  color: "var(--bark)",
                  lineHeight: 1.65,
                  maxWidth: "420px",
                  marginBottom: "3rem",
                }}
              >
                Ne prodajemo iz kataloga. Slušamo vas, savjetujemo vas, i izrađujemo
                isključivo po vašim mjerama i željama.
              </p>

              <div style={{ marginBottom: "2.5rem" }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--walnut)",
                    marginBottom: "0.7rem",
                  }}
                >
                  Napišite Nam
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(1.4rem,3.2vw,2.6rem)",
                    lineHeight: 1.1,
                    color: "var(--bark)",
                    textDecoration: "underline",
                    textDecorationColor: "var(--walnut)",
                    textUnderlineOffset: "8px",
                    textDecorationThickness: "1.5px",
                    transition: "color 0.4s, text-decoration-thickness 0.4s",
                    wordBreak: "break-all",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--walnut-deep)";
                    (e.currentTarget as HTMLAnchorElement).style.textDecorationThickness =
                      "2.5px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--bark)";
                    (e.currentTarget as HTMLAnchorElement).style.textDecorationThickness =
                      "1.5px";
                  }}
                >
                  {EMAIL}
                </a>
              </div>

              <div style={{ marginBottom: "2.5rem" }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--walnut)",
                    marginBottom: "0.7rem",
                  }}
                >
                  Pozovite Nas
                </span>
                <a
                  href={`tel:${PHONE}`}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(1.8rem,4vw,3.4rem)",
                    lineHeight: 1.1,
                    color: "var(--bark)",
                    textDecoration: "underline",
                    textDecorationColor: "var(--walnut)",
                    textUnderlineOffset: "8px",
                    textDecorationThickness: "1.5px",
                    transition: "color 0.4s",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--walnut-deep)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--bark)")
                  }
                >
                  {PHONE_DISPLAY}
                </a>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                    fontSize: "0.68rem",
                    color: "var(--stone)",
                    marginTop: "0.5rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Dostupni svaki radni dan 08–18h.
                </span>
              </div>

              <a
                href="https://maps.google.com/?q=Bukva+109+Tešanj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.9,
                  color: "var(--stone)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--walnut)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--stone)")
                }
              >
                Bukva 109<br />
                74260 Tešanj<br />
                Bosna i Hercegovina
              </a>
            </div>
          </ScrollReveal>

          {/* RIGHT - Form */}
          <ScrollReveal delay={2}>
            <div>
              {sent ? (
                <div style={{ textAlign: "center", padding: "4rem 0" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "1.85rem",
                      color: "var(--bark)",
                    }}
                  >
                    Hvala. Javljamo se u roku od 24 sata.
                  </p>
                  <div className="brass-div" style={{ marginTop: "1.5rem" }} />
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}
                >
                  <input
                    className="fi"
                    style={inputStyle}
                    name="name"
                    value={form.name}
                    onChange={set}
                    placeholder="Vaše ime"
                    required
                  />
                  <input
                    className="fi"
                    style={inputStyle}
                    name="contact"
                    value={form.contact}
                    onChange={set}
                    placeholder="Email ili broj telefona"
                    required
                  />
                  <div style={{ position: "relative" }}>
                    <select
                      className="fi"
                      style={{ ...inputStyle, cursor: "pointer" }}
                      name="interest"
                      value={form.interest}
                      onChange={set}
                    >
                      <option value="" disabled>
                        Šta vas zanima?
                      </option>
                      {[
                        "Stolice",
                        "Sofe",
                        "Kreveti",
                        "Garniture",
                        "Komercijalni prostor (hotel, restoran)",
                        "Ostalo",
                      ].map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <span
                      style={{
                        position: "absolute",
                        right: "0.5rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "var(--stone)",
                        fontSize: "0.7rem",
                      }}
                    >
                      ↓
                    </span>
                  </div>
                  <textarea
                    className="fi"
                    style={{ ...inputStyle, resize: "none" }}
                    name="message"
                    value={form.message}
                    onChange={set}
                    placeholder="Opišite svoju viziju ili postavite pitanje. Odgovaramo u roku od 24h."
                    rows={4}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      fontFamily: "var(--font-jost), system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.65rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      background: loading ? "var(--oat)" : "var(--walnut)",
                      color: "var(--cream)",
                      border: "none",
                      padding: "1.2rem",
                      cursor: "pointer",
                      transition: "background 0.4s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading)
                        e.currentTarget.style.background = "var(--walnut-deep)";
                    }}
                    onMouseLeave={(e) => {
                      if (!loading)
                        e.currentTarget.style.background = "var(--walnut)";
                    }}
                  >
                    {loading ? "Šalje se…" : "Pošaljite Upit"}
                  </button>

                  {error && (
                    <p
                      style={{
                        fontFamily: "var(--font-jost), system-ui, sans-serif",
                        fontSize: "0.75rem",
                        color: "#c44",
                        textAlign: "center",
                      }}
                    >
                      {error}
                    </p>
                  )}

                  <span
                    style={{
                      fontFamily: "var(--font-jost), system-ui, sans-serif",
                      fontSize: "0.62rem",
                      letterSpacing: "0.06em",
                      color: "var(--stone)",
                      textAlign: "center",
                    }}
                  >
                    Odgovaramo u roku od 24 sata. Uvijek osobno.
                  </span>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
