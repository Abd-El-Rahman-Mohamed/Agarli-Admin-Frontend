import React from 'react';
import { Product } from '../../types';
import './Dashboard.css';
import kankyKitadakateImage from '../../assets/kanky-kitadakate.png';
import arrowUpRightIcon from '../../assets/arrow-up-right.svg';

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
        return 'status-success';
      case 'pending':
        return 'status-pending';
      case 'failed':
        return 'status-failed';
      default:
        return '';
    }
  };

  return (
    <div className="product-table-container">
      <div className="table-header">
        <h3 className="table-title">Product Popular</h3>
        <button className="show-all-btn">
          <span>Show All</span>
          <img src={arrowUpRightIcon} alt="arrow" className="arrow-icon" />
        </button>
      </div>

      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="product-cell">
                  <div className="product-info">
                    <img
                      src={index === 0 ? kankyKitadakateImage : (product.image.startsWith('/api/placeholder') ? kankyKitadakateImage : product.image)}
                      alt={product.name}
                      className="product-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = kankyKitadakateImage;
                      }}
                    />
                    <div className="product-details">
                      <div className="product-id">{product.id}</div>
                      <div className="product-name">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="price-cell">{formatCurrency(product.price)}</td>
                <td className="sales-cell">{product.sales.toLocaleString()}</td>
                <td className="status-cell">
                  <span className={`status-badge ${getStatusClass(product.status)}`}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;