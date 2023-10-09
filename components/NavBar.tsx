import { Sidebar } from './Sidebar/Sidebar';

export default function Nav({ product }: any) {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Sidebar />
    </div>
  );
}
