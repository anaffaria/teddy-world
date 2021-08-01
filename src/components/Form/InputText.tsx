import { useField } from "@unform/core";
import { HTMLProps } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { parseToCSSClass } from "../Utils/ParseToCSS";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  name: string;
  type?: string;
  id?: string;
  className?: string;
}

function InputText({ name, className, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="custom-group">
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        className={parseToCSSClass(className, error)}
      />

      {error && <span style={{ color: "rgba(204, 0, 0, 1)" }}>{error}</span>}
    </div>
  );
}

export default InputText;
