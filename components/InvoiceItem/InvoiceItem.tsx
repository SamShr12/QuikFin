import { Button, Grid, GridCol } from '@mantine/core';
import classes from './invoice.module.css';
import Link from 'next/link';

export default function InvoiceItem() {
  return (
    <Link href={`/invoice/123`}>
      <Grid className={classes.bottom}>
        <GridCol span={1} style={{ fontSize: '18px' }}>
          1
        </GridCol>
        <GridCol span={2} style={{ fontSize: '18px' }}>
          INV-1
        </GridCol>
        <GridCol span={1} style={{ fontSize: '18px' }}>
          <Button color="green" c={'#fff'} size="compact-sm">
            Paid
          </Button>
        </GridCol>
        <GridCol span={2} ta={'center'} style={{ fontSize: '18px' }}>
          Party
        </GridCol>
        <GridCol span={2} ta={'center'} style={{ fontSize: '18px' }}>
          Date
        </GridCol>
        <GridCol ta={'center'} span={2} style={{ fontSize: '18px' }}>
          Base Total
        </GridCol>
        <GridCol ta={'right'} span={2} style={{ fontSize: '18px' }}>
          Remaining Amount
        </GridCol>
      </Grid>
    </Link>
  );
}
