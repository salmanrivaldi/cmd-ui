const ToggleButton: React.FC<{ onClick: () => void; isExpanded: boolean }> = ({ onClick, isExpanded }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {isExpanded ? "Collapse" : "Expand"}
    </button>
  );
};

export default ToggleButton;
