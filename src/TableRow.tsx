import { useState } from "react";
import RangeCell from "./RangeCell";
import { checkSign, checkColor, numberFormatter } from "./lib/utils";

interface TableRowProps {
  data: {
    symbol: string;
    name: string;
    price: number;
    change: number;
    percent_change: number;
    volume: number;
    average_volume: number;
    market_cap: number;
    pe_ratio: number;
    week_range: {
      position: string;
      lower: number;
      upper: number;
    };
  };
}

const TableRow = ({ data }: TableRowProps) => {
  const [activeCells, setActiveCells] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleActive = (cellKey: string) => {
    setActiveCells((prev) => ({ ...prev, [cellKey]: !prev[cellKey] }));
  };

  return (
    <tr
      key={data.symbol}
      className="cursor-pointer odd:bg-white even:bg-slate-100"
    >
      <td className="px-3 m-0 p-0 border border-slate-200">
        <input
          type="checkbox"
          className="form-checkbox rounded border-slate-300"
          aria-label="Select All"
        />
      </td>
      <td
        className={`text-nowrap m-0 p-0 border border-slate-200 ${
          activeCells["symbol"] ? `bg-gray-300` : ""
        }`}
        onClick={() => toggleActive("symbol")}
      >
        <a
          href="#"
          className="pl-3 pr-8 block py-[0.59rem] text-blue-700 font-semibold"
        >
          {data.symbol}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 border border-slate-200 ${
          activeCells["name"] ? `bg-gray-300` : ""
        }`}
        onClick={() => toggleActive("name")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {data.name}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 font-semibold border border-slate-200 ${
          activeCells["price"] ? `bg-gray-300` : ""
        }`}
        onClick={() => toggleActive("price")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {data.price}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 font-semibold border border-slate-200 ${checkColor(
          data.change
        )} ${activeCells["change"] ? `bg-gray-300` : ""}`}
        onClick={() => toggleActive("change")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {checkSign(data.change)}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 font-semibold border border-slate-200 ${checkColor(
          data.percent_change
        )} ${activeCells["percent_change"] ? `bg-gray-300` : ""}`}
        onClick={() => toggleActive("percent_change")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {checkSign(data.percent_change) + "%"}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 border border-slate-200 ${
          activeCells["volume"] ? `bg-gray-300` : ""
        }`}
        onClick={() => toggleActive("volume")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {numberFormatter(data.volume)}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 border border-slate-200 ${
          activeCells["average_volume"] ? `bg-gray-300` : ""
        }`}
        onClick={() => toggleActive("average_volume")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {numberFormatter(data.average_volume)}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 border border-slate-200 ${
          activeCells["market_cap"] ? `bg-gray-300` : ""
        }`}
        onClick={() => toggleActive("market_cap")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {numberFormatter(data.market_cap)}
        </a>
      </td>
      <td
        className={`text-nowrap m-0 p-0 border border-slate-200 ${
          activeCells["pe_ratio"] ? `bg-gray-300` : ""
        }`}
        onClick={() => toggleActive("pe_ratio")}
      >
        <a href="#" className="pl-3 pr-8 block py-[0.59rem]">
          {numberFormatter(data.pe_ratio)}
        </a>
      </td>
      <RangeCell
        week_range={data.week_range}
        isActive={activeCells["week_range"]}
        toggleActive={() => toggleActive("week_range")}
      />
    </tr>
  );
};

export default TableRow;
