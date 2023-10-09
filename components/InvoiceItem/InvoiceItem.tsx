import { Button, Grid } from '@mantine/core';
import classes from './invoice.module.css';
import Link from 'next/link';

export default function InvoiceItem() {
  return (
    <Link href={`/invoice/123`}>
      <Grid className={classes.bottom}>
        <Grid.Col span={1} style={{ fontSize: '18px' }}>
          1
        </Grid.Col>
        <Grid.Col span={2} style={{ fontSize: '18px' }}>
          INV-1
        </Grid.Col>
        <Grid.Col span={1} style={{ fontSize: '18px' }}>
          <Button color="green" c={'#fff'} size="compact-sm">
            Paid
          </Button>
        </Grid.Col>
        <Grid.Col span={2} ta={'center'} style={{ fontSize: '18px' }}>
          Party
        </Grid.Col>
        <Grid.Col span={2} ta={'center'} style={{ fontSize: '18px' }}>
          Date
        </Grid.Col>
        <Grid.Col ta={'center'} span={2} style={{ fontSize: '18px' }}>
          Base Total
        </Grid.Col>
        <Grid.Col ta={'right'} span={2} style={{ fontSize: '18px' }}>
          Remaining Amount
        </Grid.Col>
      </Grid>
    </Link>
  );
}
