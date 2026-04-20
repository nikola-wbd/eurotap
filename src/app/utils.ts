export function goTo(id: string) {
  if (id === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}

export const EMAIL = "euro.tap6@gmail.com";
export const PHONE = "+387 61 576 000";
export const PHONE_DISPLAY = "061 / 576-000";
