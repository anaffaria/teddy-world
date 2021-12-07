import { useRef, useEffect, ReactNode, SelectHTMLAttributes } from "react";

import { useField } from "@unform/core";
import { parseToCSSClass } from "../Utils/ParseToCSS";

interface SelectProps {
  name: string;
  children: ReactNode;
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps;

export function Select({ name, children, className, ...rest }: Props) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef.current,
      name: fieldName,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="custom-group">
      <select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        className={parseToCSSClass(className, error)}
        {...rest}
      >
        {children}
      </select>

      {error && <span style={{ color: "rgba(204, 0, 0, 1)" }}>{error}</span>}
    </div>
  );
}
