"use client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type: string;
  minLen?: number;
  number?: boolean;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors | any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  minLen,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...(type === "email"
          ? {
              ...register(id, {
                required: "Please enter your " + label,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid " + label,
                },
              }),
            }
          : type === "number"
          ? {
              ...register(id, {
                required: "Please enter your " + label,
                minLength: {
                  value: minLen!,
                  message: "Minimum " + minLen + " digits required",
                },
              }),
            }
          : {
              ...register(id, {
                required: "Please enter your " + label,
              }),
            })}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-full
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          left-4
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : "text-[#002E6D]"}
        `}
      >
        {errors[id] ? (
          <span className="uppercase text-xs">{errors[id]?.message}</span>
        ) : (
          label
        )}
      </label>
      <span className="text-xs ml-5 text-red-500 animate-pulse"></span>
    </div>
  );
};

export default Input;
