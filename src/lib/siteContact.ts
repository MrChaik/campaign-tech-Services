export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
export const CONTACT_MOBILE = import.meta.env.VITE_CONTACT_MOBILE;

export function whatsAppUrl(message: string, phone = CONTACT_MOBILE) {
  const digits = phone.replace(/\D/g, "");
  const international = digits.length === 10 ? `91${digits}` : digits;
  return `https://wa.me/${international}?text=${encodeURIComponent(message)}`;
}
