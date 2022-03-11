export const validateFrenchPhoneNumber = number => {
  return String(number)
    .toLowerCase()
    .match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
};

export default validateFrenchPhoneNumber;
