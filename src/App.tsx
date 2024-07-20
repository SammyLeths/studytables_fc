import { studyOneData } from "./data";
import TableRow from "./TableRow";

import "./App.css";

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

function App() {
  return (
    <div className="table_container pt-2">
      <div className="title text-center pb-4 pt-2">
        <h1 className="text-5xl">Smart Finance</h1>
        <h3 className="text-base font-medium -mt-3">
          Regular DataTable Without Freeze Column
        </h3>
      </div>
      <div className="overflow-x-auto">
        <div className="p-3 bg-gray-300 w-fit mx-auto">
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
                <TableRow data={data} key={data.symbol + index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
