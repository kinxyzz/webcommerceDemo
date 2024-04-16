export function emailValidation(email: string) {
  // Format email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validasi format email
  if (!emailRegex.test(email)) {
    return false; // Format email tidak sesuai
  }

  // Pemisahan username dan domain
  const [username, domain] = email.split("@");

  // Validasi panjang username dan domain
  if (username.length > 64 || domain.length > 255) {
    return false; // Panjang username atau domain melebihi batas
  }

  // Validasi domain dengan regex
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!domainRegex.test(domain)) {
    return false; // Format domain tidak sesuai
  }

  return true; // Email valid
}

export const passwordValidation = (password: string): boolean => {
  if (password.length < 5) {
    return false;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordRegex.test(password);
};
