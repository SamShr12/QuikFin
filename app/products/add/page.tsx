import { Nav, Navigation, NewItems } from '@/components';
import classes from './newproduct.module.css';
import { Button, Code, Group } from '@mantine/core';

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Nav product="Product" />
      </div>
      <div
        style={{
          width: '100%',
        }}
      >
        <Navigation productName="Products" addLink="/products/add" />
        <Group className={classes.space}>
          <h1>New Entry</h1>
          <Button fw={700}>Save</Button>
        </Group>
        <NewItems />
      </div>
    </div>
  );
}
