import "./App.css";
import { MapPinIcon } from "@heroicons/react/16/solid";

interface StudyData {
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
    position: number;
    lower: number;
    upper: number;
  };
}

const headers = [
  "Symbol",
  "Name",
  "Price (Intraday)",
  "Change",
  "% Change",
  "Volume",
  "Avg Vol (3 months)",
  "Market Cap",
  "PE RTatio (TTM)",
  "52 Week Range",
];

const studyOneData: StudyData[] = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 120.92,
    change: -0.86,
    percent_change: -0.71,
    volume: 179.725 * 1000000,
    average_volume: 476.275 * 1000000,
    market_cap: 2.973 * 1000000000000,
    pe_ratio: 71.1,
    week_range: {
      position: 14,
      lower: 39.23,
      upper: 132.84,
    },
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 205.79,
    change: +12.67,
    percent_change: +6.56,
    volume: 130.189 * 1000000,
    average_volume: 60.814 * 1000000,
    market_cap: 3.153 * 1000000000000,
    pe_ratio: 31.98,
    week_range: {
      position: 20,
      lower: 164.08,
      upper: 220.2,
    },
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 169.72,
    change: -4.07,
    percent_change: -2.34,
    volume: 52.723 * 1000000,
    average_volume: 90.353 * 1000000,
    market_cap: 541.334 * 1000000000,
    pe_ratio: 43.41,
    week_range: {
      position: 6,
      lower: 138.8,
      upper: 299.29,
    },
  },
  {
    symbol: "AMD",
    name: "Advanced Micro Devices, Inc.",
    price: 159.27,
    change: -1.07,
    percent_change: -0.67,
    volume: 32.022 * 1000000,
    average_volume: 57.407 * 1000000,
    market_cap: 257.166 * 1000000000,
    pe_ratio: 230.59,
    week_range: {
      position: 12,
      lower: 93.12,
      upper: 227.3,
    },
  },
  {
    symbol: "BAC",
    name: "Bank of America Corporation",
    price: 38.85,
    change: -0.81,
    percent_change: -2.05,
    volume: 22.66 * 1000000,
    average_volume: 37.296 * 1000000,
    market_cap: 304.212 * 1000000000,
    pe_ratio: 13.41,
    week_range: {
      position: 6,
      lower: 24.96,
      upper: 40.19,
    },
  },
  {
    symbol: "PFE",
    name: "Pfizer Inc.",
    price: 28.03,
    change: -0.04,
    percent_change: -0.14,
    volume: 18.483 * 1000000,
    average_volume: 39.283 * 1000000,
    market_cap: 158.835 * 1000000000,
    pe_ratio: 0,
    week_range: {
      position: 5,
      lower: 25.2,
      upper: 39.87,
    },
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    price: 186.3,
    change: -0.76,
    percent_change: -0.41,
    volume: 16.841 * 1000000,
    average_volume: 38.986 * 1000000,
    market_cap: 1.939 * 1000000000000,
    pe_ratio: 52.2,
    week_range: {
      position: 20,
      lower: 118.35,
      upper: 191.7,
    },
  },
  {
    symbol: "NEE",
    name: "NextEra Energy, Inc.",
    price: 72.07,
    change: -4.9,
    percent_change: -6.36,
    volume: 15.882 * 1000000,
    average_volume: 12.006 * 1000000,
    market_cap: 147.916 * 1000000000,
    pe_ratio: 19.67,
    week_range: {
      position: 16,
      lower: 47.15,
      upper: 80.47,
    },
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 176,
    change: +0.99,
    percent_change: +0.57,
    volume: 14.929 * 1000000,
    average_volume: 27.704 * 1000000,
    market_cap: 2.185 * 1000000000,
    pe_ratio: 27.05,
    week_range: {
      position: 20,
      lower: 115.35,
      upper: 180.41,
    },
  },
  {
    symbol: "INTC",
    name: "Intel Corporation",
    price: 31,
    change: +0.09,
    percent_change: +0.29,
    volume: 15.034 * 1000000,
    average_volume: 49.545 * 1000000,
    market_cap: 131.92 * 1000000000,
    pe_ratio: 31.95,
    week_range: {
      position: 5,
      lower: 29.73,
      upper: 51.28,
    },
  },
  {
    symbol: "T",
    name: "AT&T Inc.",
    price: 17.79,
    change: -0.07,
    percent_change: -0.38,
    volume: 13.711 * 1000000,
    average_volume: 35.178 * 1000000,
    market_cap: 127.514 * 1000000000,
    pe_ratio: 9.56,
    week_range: {
      position: 15,
      lower: 13.43,
      upper: 18.45,
    },
  },
  {
    symbol: "WFC",
    name: "Wells Fargo & Company",
    price: 57.46,
    change: -0.47,
    percent_change: -0.82,
    volume: 11.158 * 1000000,
    average_volume: 17.245 * 1000000,
    market_cap: 200.394 * 1000000000,
    pe_ratio: 11.97,
    week_range: {
      position: 18,
      lower: 38.39,
      upper: 62.55,
    },
  },
  {
    symbol: "ADBE",
    name: "Adobe Inc.",
    price: 525.31,
    change: +66.57,
    percent_change: +14.51,
    volume: 14.734 * 1000000,
    average_volume: 3.524 * 1000000,
    market_cap: 235.339 * 1000000000,
    pe_ratio: 47.41,
    week_range: {
      position: 12,
      lower: 433.97,
      upper: 638.25,
    },
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
    price: 109.11,
    change: -0.93,
    percent_change: -0.85,
    volume: 13.214 * 1000000,
    average_volume: 17.246 * 1000000,
    market_cap: 489.46 * 1000000000,
    pe_ratio: 13.37,
    week_range: {
      position: 14,
      lower: 95.77,
      upper: 123.75,
    },
  },
];

const checkSign = (value: number) => {
  const sign = Math.sign(value);
  return sign == 1 ? `+${value}` : value;
};

const checkColor = (value: number) => {
  const sign = Math.sign(value);
  return sign == 1 ? "text-green-500" : "text-red-500";
};

const numberFormatter = (value: number) => {
  if (value > 1000000 && value < 1000000000) {
    return (value / 1000000).toFixed(3) + "M";
  } else if (value > 1000000000 && value < 1000000000000) {
    return (value / 1000000000).toFixed(3) + "B";
  } else if (value >= 1000000000000) {
    return (value / 1000000000000).toFixed(3) + "T";
  } else if (value == 0) {
    return "N/A";
  } else {
    return value.toFixed(2);
  }
};

function App() {
  return (
    <>
      <div className="table_container">
        <div className="table_wrapper p-3 bg-gray-300 overflow-x-auto">
          <table className="table-auto border border-slate-200">
            <thead className="text-left">
              <tr className="bg-sky-200 h-10">
                <th className="px-3 border border-slate-200">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded border-slate-300"
                    aria-label="Select All"
                  />
                </th>
                {headers.map((data, index) => (
                  <th
                    key={index}
                    className="pl-3 pr-8 text-nowrap border border-slate-200"
                  >
                    {data}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-left">
              {studyOneData.map((data, index) => (
                <tr
                  key={data.symbol + index}
                  className="cursor-pointer odd:bg-white even:bg-slate-100"
                >
                  <td className="px-3 m-0 p-0 border border-slate-200">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded border-slate-300"
                      aria-label="Select All"
                    />
                  </td>
                  <td className="text-nowrap m-0 p-0 border border-slate-200">
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200 text-blue-700 font-semibold"
                    >
                      {data.symbol}
                    </a>
                  </td>
                  <td className="text-nowrap m-0 p-0 border border-slate-200">
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {data.name}
                    </a>
                  </td>
                  <td className="text-nowrap m-0 p-0 font-semibold border border-slate-200">
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {data.price}
                    </a>
                  </td>
                  <td
                    className={`text-nowrap m-0 p-0 font-semibold border border-slate-200 ${checkColor(
                      data.change
                    )}`}
                  >
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {checkSign(data.change)}
                    </a>
                  </td>
                  <td
                    className={`text-nowrap m-0 p-0 font-semibold border border-slate-200 ${checkColor(
                      data.percent_change
                    )} `}
                  >
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {checkSign(data.percent_change) + "%"}
                    </a>
                  </td>
                  <td className="text-nowrap m-0 p-0 border border-slate-200">
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {numberFormatter(data.volume)}
                    </a>
                  </td>
                  <td className="text-nowrap m-0 p-0 border border-slate-200">
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {numberFormatter(data.average_volume)}
                    </a>
                  </td>
                  <td className="text-nowrap m-0 p-0 border border-slate-200">
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {numberFormatter(data.market_cap)}
                    </a>
                  </td>
                  <td className="text-nowrap m-0 p-0 border border-slate-200">
                    <a
                      href="#"
                      className="pl-3 pr-8 block  py-[0.59rem] focus:bg-slate-200"
                    >
                      {numberFormatter(data.pe_ratio)}
                    </a>
                  </td>
                  <td className="text-nowrap m-0 p-0 border border-slate-200">
                    <a href="#" className="pl-3 pr-8 block focus:bg-slate-200">
                      <div className="range">
                        <div className="position border-b-2 border-gray-500">
                          <MapPinIcon
                            className={`size-6 text-blue-500 border-b-2 border-blue-500 pb-1 -mb-[2px] ml-${data.week_range.position}`}
                          />
                        </div>
                        <div className="values flex justify-between">
                          <span className="text-xs">
                            {data.week_range.lower}
                          </span>
                          <span className="text-xs">
                            {data.week_range.upper}
                          </span>
                        </div>
                      </div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
