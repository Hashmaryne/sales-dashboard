import React from "react";
import { countryData } from "../utils/data";

const SalesTable = () => {
  return (
    <div className="sales-table">
      {/* Table Header */}
      <h3>Sales by Country</h3>

      {/* Sales Data Table */}
      <table>
        <tbody>
          {countryData.map((country, index) => (
            <tr key={index}>
              {/* Country Column with Flag */}
              <td className="country">
                <img
                  src={`https://flagcdn.com/w40/${country.flag}.png`}
                  alt={country.name}
                  className="flag"
                />
                <span className="label">Country:</span> {country.name}
              </td>

              {/* Sales Column */}
              <td className="sales">
                <span className="label">Sales:</span> {country.sales}
              </td>

              {/* Bounce Rate Column */}
              <td className="bounce">
                <span className="label">Bounce:</span> {country.bounce}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
