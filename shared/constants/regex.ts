export const nameRegex = /^[0-9a-zäöüß\u0430-\u044f ,.'-]+$/i;
export const numbersOnlyRegex = /^[0-9.]+$/;
export const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
export const phoneRegex = /\d+/;
export const passwordRegex =
  /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\W)(?=.{8,}$).*$/gm;

export const emailRegex = /^[\w.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)+$/;

export const urlRegex =
  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g;
