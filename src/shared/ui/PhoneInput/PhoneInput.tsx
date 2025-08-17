import React, { FC } from "react";

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const formatPhoneNumber = (value: string): string => {
  let digits = value.replace(/\D/g, ""); // только цифры

  if (!digits.startsWith("7")) {
    digits = "7" + digits;
  }

  digits = digits.substring(0, 11); // максимум 11 цифр

  let formatted = "+7";
  if (digits.length > 1) {
    formatted += " (" + digits.substring(1, 4);
  }
  if (digits.length >= 5) {
    formatted += ") " + digits.substring(4, 7);
  }
  if (digits.length >= 8) {
    formatted += "-" + digits.substring(7, 9);
  }
  if (digits.length >= 10) {
    formatted += "-" + digits.substring(9, 11);
  }

  return formatted;
};

export const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(formatPhoneNumber(e.target.value));
  };

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      className="border rounded-lg px-3 py-2 w-full"
      placeholder={placeholder || "+7 (___) ___-__-__"}
      maxLength={18}
    />
  );
};
