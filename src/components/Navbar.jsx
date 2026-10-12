import React from 'react';
import { ShoppingBag, Search, ShieldCheck } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, searchTerm, onSearchChange, selectedCategory, onSelectCategory }) {
  const categories = ['All', 'Electronics', 'Accessories', 'Apparel'];

  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            backgroundColor: '#111827',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <ShoppingBag size={20} />
          </div>
          <div>
            <span style={{ fontSize: '18px', fontWeight: '700', color: '#111827', letterSpacing: '-0.5px' }}>NextStore</span>
            <span style={{ fontSize: '11px', color: '#6b7280', display: 'block', marginTop: '-2px' }}>Modern Retail</span>
          </div>
        </div>

        <div style={{
          flex: 1,
          maxWidth: '480px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', color: '#9ca3af' }} />
          <input
            type="text"
            placeholder="Search premium products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px 10px 38px',
              borderRadius: '9999px',
              border: '1px solid #d1d5db',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#f9fafb'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onOpenCart}
            style={{
              position: 'relative',
              backgroundColor: '#111827',
              color: '#ffffff',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            <ShoppingBag size={18} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{
                backgroundColor: '#ef4444',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '700',
                borderRadius: '9999px',
                padding: '2px 6px',
                marginLeft: '4px'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 12px 24px',
        display: 'flex',
        gap: '8px'
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              border: selectedCategory === cat ? '1px solid #111827' : '1px solid #e5e7eb',
              backgroundColor: selectedCategory === cat ? '#111827' : '#ffffff',
              color: selectedCategory === cat ? '#ffffff' : '#4b5563',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}
