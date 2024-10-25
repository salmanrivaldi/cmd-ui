import ToggleButton from "@/components/01-Atoms/Button/ToggleButton";

interface RowData {
  id: number;
  name: string;
  email: string;
  details: string;
}

const TableRowWithCollapse: React.FC<{
  row: RowData;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ row, isExpanded, onToggle }) => {
  return (
    <>
      <tr className="bg-gray-100 border-b">
        <td className="px-4 py-2">{row.id}</td>
        <td className="px-4 py-2">{row.name}</td>
        <td className="px-4 py-2">{row.email}</td>
        <td className="px-4 py-2">
          <ToggleButton
            onClick={onToggle}
            isExpanded={isExpanded}
          />
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-gray-200">
          <td
            colSpan={4}
            className="px-4 py-2"
          >
            {row.details}
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRowWithCollapse;
