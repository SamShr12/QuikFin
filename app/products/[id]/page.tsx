import { Nav, Navigation, ProductDetail } from '@/components';
import React from 'react';

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Nav />
      <div style={{ width: '100%' }}>
        <Navigation productName="Products" addLink="/products/add" />
        <ProductDetail />
      </div>
    </div>
  );
}
