"use client";

import React, { useState } from "react";
import ReactSelect, { components, StylesConfig, MenuListProps } from "react-select";
import Label from "./Label";

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  options: OptionType[];
  label: string;
  placeholder?: string;
  loadMore?: boolean;
  onChange?: (selectedOption: OptionType | null) => void;
  onLoadMore?: () => void;
}

const Select: React.FC<SelectProps> = ({ options, label, placeholder, onChange, loadMore, onLoadMore }) => {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    if (onLoadMore) {
      setLoading(true);
      onLoadMore();
      setLoading(false);
    }
  };

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "",
      borderColor: "#d1d5db",
      boxShadow: "none",
      cursor: "pointer",
      fontSize: "14px",
      "&:hover": { borderColor: "" },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f3f4f6" : "white",
      color: "#111827",
      padding: "0.5rem",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#111827",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
  };

  // Custom MenuList component untuk menampilkan tombol Load More
  const MenuList = (props: MenuListProps<OptionType, false>) => {
    return (
      <div>
        <components.MenuList {...props}>{props.children}</components.MenuList>
        {loadMore && (
          <div style={{ textAlign: "center", padding: "0.5rem" }}>
            <button
              onClick={handleLoadMore}
              style={{
                width: "100%",
                backgroundColor: "#f3f4f6",
                border: "none",
                padding: "0.5rem",
                cursor: "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Memuat..." : "Tampilkan lagi"}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-2">
      <Label>{label}</Label>
      <ReactSelect
        options={options}
        styles={customStyles}
        className=""
        placeholder={placeholder || "Pilih"}
        onChange={onChange}
        components={{ MenuList }}
        isClearable
      />
    </div>
  );
};

export default Select;
