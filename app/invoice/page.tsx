import { InvoiceItem, Nav, Navigation } from '@/components';
import { Grid, GridCol } from '@mantine/core';
import classes from './invoice.module.css';

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Nav />
      <div style={{ width: '100%' }}>
        <Navigation productName="Invoice" addLink="/invoice/add" />
        <div>
          <Grid className={classes.bottom}>
            <GridCol span={1} style={{ fontSize: '18px' }}>
              #
            </GridCol>
            <GridCol span={2} style={{ fontSize: '18px' }}>
              Invoice No
            </GridCol>
            <GridCol span={1} style={{ fontSize: '18px' }}>
              Status
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
        </div>
        <div>
          <InvoiceItem />
        </div>
      </div>
    </div>
  );
}
