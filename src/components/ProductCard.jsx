import React from 'react';
import { Star, Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease'
    }}>
      <div style={{ width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', fontWeight: '600' }}>
            {product.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#374151' }}>{product.rating}</span>
            <span style={{ fontSize: '11px', color: '#9ca3af' }}>({product.reviewsCount})</span>
          </div>
        </div>

        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#111827', margin: '0 0 6px 0', lineHeight: '1.3' }}>
          {product.name}
        </h3>

        <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0', flex: 1, lineHeight: '1.4' }}>
          {product.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
          <span style={{ fontSize: '18px', fontWeight: '700', color: '#111827' }}>
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={() => onAddToCart(product)}
            style={{
              backgroundColor: '#111827',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 14px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Plus size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
