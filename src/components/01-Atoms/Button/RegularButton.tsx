import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface RegularButtonProps {
  text?: string;
  type: "primary" | "secondary" | "danger";
  icon?: IconDefinition;
  onClick: () => void;
  size?: "small" | "large";
}

export default function RegularButton({ text, type, icon, onClick, size }: RegularButtonProps) {
  let buttonTypeClass = "";

  if (type === "primary") {
    buttonTypeClass = "bg-indigo-500 text-white hover:bg-indigo-600";
  } else if (type === "secondary") {
    buttonTypeClass = "bg-slate-100 border text-slate-600 hover:bg-slate-200";
  } else if (type === "danger") {
    buttonTypeClass = "bg-rose-600 text-white";
  }

  const sizeClass = size === "small" ? "text-xs px-2 h-[30px]" : size === "large" ? "text-lg px-6 h-[45px]" : "text-sm px-4 h-[38px]";

  return (
    <button
      className={`transition-colors ${buttonTypeClass} ${sizeClass}`}
      onClick={onClick}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          className={text ? "mr-2" : ""}
        />
      )}
      {text}
    </button>
  );
}
