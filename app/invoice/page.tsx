'use client';
import { InvoiceItem, Nav, Navigation } from '@/components';
import { Grid } from '@mantine/core';
import classes from './invoice.module.css';

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Nav />
      <div style={{ width: '100%' }}>
        <Navigation productName="Invoice" addLink="/invoice/add" />
        <div>
          <Grid className={classes.bottom}>
            <Grid.Col span={1} style={{ fontSize: '18px' }}>
              #
            </Grid.Col>
            <Grid.Col span={2} style={{ fontSize: '18px' }}>
              Invoice No
            </Grid.Col>
            <Grid.Col span={1} style={{ fontSize: '18px' }}>
              Status
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
        </div>
        <div>
          <InvoiceItem />
        </div>
      </div>
    </div>
  );
}
