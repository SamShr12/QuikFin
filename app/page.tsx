// 'use client';
import { Dashboard, Nav, Navigation } from '@/components';

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Nav />
      <div
        style={{
          width: '100%',
        }}
      >
        <Navigation productName="Dashboard" addLink="/products/add" />
        <Dashboard />
      </div>
    </div>
  );
}
