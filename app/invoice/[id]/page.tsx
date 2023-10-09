import { InvoiceDetail, Nav, Navigation } from '@/components';

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Nav />
      <div style={{ width: '100%' }}>
        <Navigation productName="Invoice" addLink="/invoice/add" />
        <InvoiceDetail />
      </div>
    </div>
  );
}
