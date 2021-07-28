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

function InputText({ name, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <input defaultValue={defaultValue} ref={inputRef} {...rest} />;
}

export default InputText;
