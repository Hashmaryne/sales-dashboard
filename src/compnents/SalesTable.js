import React from "react";
import { countryData } from "../utils/data";

const SalesTable = () => {
    return (
      <div>
        <h3>Sales by Country</h3>
        <table>
          <tbody>
            {countryData.map((country, index) => (
              <tr key={index}>
                <td className="country">
                <img 
                  src={`https://flagcdn.com/w40/${country.flag}.png`} 
                  alt={country.name} 
                  className="flag"
                />
                <span className="label">Country:</span> {country.name}
              </td>
                <td className="sales">
                  <span className="label">Sales:</span> {country.sales}
                </td>
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