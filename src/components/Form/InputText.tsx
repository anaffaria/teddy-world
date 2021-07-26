import { useField } from "@unform/core";
import { useEffect } from "react";
import { useRef } from "react";

export interface InputProps {
  name: string;
}

function InputText({ name }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <input type="text" ref={inputRef} />;
}

export default InputText;
