import { Button, Group } from '@mantine/core';
import classes from './invoice.module.css';

export default function InvoiceDetail() {
  return (
    <div>
      <Group className={classes.space}>
        <h1>New Entry</h1>
        <Button fw={700}>Save</Button>
      </Group>
    </div>
  );
}
