import { useField } from "@unform/core";
import { useEffect } from "react";
import { useRef } from "react";

export interface InputProps {
  name: string;
  type?: string;
  id?: string;
  className?: string;
  [key: string]: string | undefined;
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

  function parseToCSSClass() {
    return [error ? "field-error" : "", className ?? ""]
      .toString()
      .replaceAll(",", " ");
  }

  return (
    <div className="custom-group">
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        className={parseToCSSClass()}
      />
      {error && <span style={{color: 'rgba(204, 0, 0, 1)'}}>{error}</span>}
    </div>
  );
}

export default InputText;
