import { Nav, Navigation, ProductItem } from '@/components';
import classes from './product.module.css';
import { Grid, GridCol } from '@mantine/core';

export default function Page() {
  return (
    <div className={classes.callFlex}>
      <div>
        <Nav product="Product" />
      </div>
      <div
        style={{
          width: '100%',
        }}
      >
        <Navigation productName="Products" addLink="/products/add" />
        <div>
          <Grid className={classes.bottom}>
            <GridCol span={2} style={{ fontSize: '18px' }}>
              #
            </GridCol>
            <GridCol span={3} ta={'center'} style={{ fontSize: '18px' }}>
              Item name
            </GridCol>
            <GridCol span={3} ta={'center'} style={{ fontSize: '18px' }}>
              Unit
            </GridCol>
            <GridCol ta={'right'} span={3} style={{ fontSize: '18px' }}>
              Rate
            </GridCol>
          </Grid>
        </div>
        <div>
          <ProductItem />
        </div>
      </div>
    </div>
  );
}
