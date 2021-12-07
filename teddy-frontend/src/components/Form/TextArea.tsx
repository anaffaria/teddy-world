import { useField } from "@unform/core";
import { HTMLProps } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { parseToCSSClass } from "../Utils/ParseToCSS";

export interface textAreaProps extends HTMLProps<HTMLTextAreaElement> {
  name: string;
  type?: string;
  id?: string;
  className?: string;
}

function TextArea({ name, className, ...rest }: textAreaProps) {
  const texAreaRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: texAreaRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="custom-group">
      <textarea
        defaultValue={defaultValue}
        ref={texAreaRef}
        {...rest}
        className={parseToCSSClass(className, error)}
      />

      {error && <span style={{ color: "rgba(204, 0, 0, 1)" }}>{error}</span>}
    </div>
  );
}

export default TextArea;
