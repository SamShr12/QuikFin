'use client';
import { Nav, Navigation, ProductItem } from '@/components';
import classes from './product.module.css';
import { Grid } from '@mantine/core';

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
            <Grid.Col span={2} style={{ fontSize: '18px' }}>
              #
            </Grid.Col>
            <Grid.Col span={3} ta={'center'} style={{ fontSize: '18px' }}>
              Item name
            </Grid.Col>
            <Grid.Col span={3} ta={'center'} style={{ fontSize: '18px' }}>
              Unit
            </Grid.Col>
            <Grid.Col ta={'right'} span={3} style={{ fontSize: '18px' }}>
              Rate
            </Grid.Col>
          </Grid>
        </div>
        <div>
          <ProductItem />
        </div>
      </div>
    </div>
  );
}
