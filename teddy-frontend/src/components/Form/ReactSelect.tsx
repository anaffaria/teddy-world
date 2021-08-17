import React, { useRef, useEffect } from "react";
import { OptionTypeBase } from "react-select";
import Select, { Props as CreatableProps } from "react-select";

import { useField } from "@unform/core";

interface Props extends CreatableProps<OptionTypeBase> {
  name: string;
  multiple?: boolean;
}

export default function CreatableSelect({ name, multiple, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => ref.state.value,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.select.clearValue();
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <Select
        defaultValue={defaultValue}
        ref={selectRef}
        // @ts-expect-error
        isMulti={multiple}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && <span style={{ color: "rgba(204, 0, 0, 1)" }}>{error}</span>}
    </>
  );
}
