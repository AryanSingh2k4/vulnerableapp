import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import { PRODUCTS } from './data/products';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOrderComplete = () => {
    setCartItems([]);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Hero Banner */}
        <section style={{
          backgroundColor: '#111827',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '48px 40px',
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          backgroundImage: 'radial-gradient(circle at 80% 20%, #1f2937 0%, #111827 70%)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#93c5fd'
          }}>
            <Sparkles size={14} />
            <span>Autumn 2026 Collection Live</span>
          </div>

          <h1 style={{ fontSize: '36px', fontWeight: '800', margin: 0, letterSpacing: '-0.025em', maxWidth: '600px', lineHeight: '1.2' }}>
            Elevate Your Everyday Essentials
          </h1>

          <p style={{ fontSize: '16px', color: '#9ca3af', margin: 0, maxWidth: '540px', lineHeight: '1.5' }}>
            Curated precision hardware, everyday apparel, and minimalist accessories engineered for focus and modern living.
          </p>
        </section>

        {/* Feature Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <Truck size={24} color="#3b82f6" />
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>Complimentary Shipping</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>On all domestic orders over $50</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <RotateCcw size={24} color="#10b981" />
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>30-Day Hassle-Free Return</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Direct door-to-door return pickups</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <ShieldCheck size={24} color="#8b5cf6" />
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>Verified Stripe Security</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>256-bit encrypted checkout flow</div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', margin: 0 }}>
            {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Collection`}
          </h2>
          <span style={{ fontSize: '14px', color: '#6b7280' }}>
            Showing {filteredProducts.length} items
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', marginTop: '60px', padding: '32px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0 }}>
          &copy; 2026 NextStore Retail Inc. All rights reserved.
        </p>
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}
