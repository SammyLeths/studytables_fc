import { MapPinIcon } from "@heroicons/react/16/solid";

interface RangeCellProps {
  week_range: {
    position: string;
    lower: number;
    upper: number;
  };
  isActive: boolean;
  toggleActive: () => void;
}

const RangeCell = ({ week_range, isActive, toggleActive }: RangeCellProps) => {
  return (
    <td
      className={`text-nowrap m-0 p-0 border border-slate-200 ${
        isActive ? `bg-gray-300` : ""
      }`}
      onClick={toggleActive}
    >
      <a href="#" className="pl-3 pr-8 block">
        <div className="range">
          <div className="position border-b-2 border-gray-500">
            <MapPinIcon
              className={`${week_range.position} size-4 text-blue-500 border-b-2 border-blue-500 pb-[0.1rem] -mb-[2px]`}
            />
          </div>
          <div className="values flex justify-between">
            <span className="text-xs">{week_range.lower}</span>
            <span className="text-xs">{week_range.upper}</span>
          </div>
        </div>
      </a>
    </td>
  );
};

export default RangeCell;
