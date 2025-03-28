import React from "react";
import { topSellingProducts } from "../utils/data";

const TopSellingProducts = () => {
  return (
    <div>
      {/* Section Title */}
      <h2 className="section-title">Top Selling Products</h2>

      {/* Products Table */}
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
              {/* Product Name & Image */}
              <td className="product-info">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image" 
                />
                <div>
                  <span className="product-name">{product.name}</span>
                  <span className="orders">
                    {product.orders.toLocaleString()} orders
                  </span>
                </div>
              </td>

              {/* Product Value */}
              <td className="value">{product.value}</td>

              {/* Ads Spent */}
              <td className="ads-spent">{product.adsSpent}</td>

              {/* Refunds with an Upward Arrow Indicator */}
              <td className="refunds">
                {product.refunds} <span className="arrow">↑</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
