import React from "react";
import { topSellingProducts } from "../utils/data";

const TopSellingProducts = () => {
  return (
    <div>
      <h2 className="section-title">Top Selling Products</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Value</th>
            <th>Ads Spent</th>
            <th>Refunds</th>
          </tr>
        </thead>
        <tbody>
          {topSellingProducts.map((product) => (
            <tr key={product.id}>
              <td className="product-info">
                <img src={product.image} alt={product.name} className="product-image" />
                <div>
                  <span className="product-name">{product.name}</span>
                  <span className="orders">{product.orders.toLocaleString()} orders</span>
                </div>
              </td>
              <td className="value">{product.value}</td>
              <td className="ads-spent">{product.adsSpent}</td>
              <td className="refunds">{product.refunds} <span className="arrow">↑</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
