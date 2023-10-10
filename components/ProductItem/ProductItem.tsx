import { Grid, GridCol } from '@mantine/core';
import classes from './productitem.module.css';
import Link from 'next/link';

export default function ProductItem() {
  return (
    <Link href={`/products/12`}>
      <Grid className={classes.bottom}>
        <GridCol span={2}>1</GridCol>
        <GridCol tt={'capitalize'} span={3} ta={'center'}>
          Dhoni 4
        </GridCol>
        <GridCol span={3} tt={'capitalize'} ta={'center'}>
          Piece
        </GridCol>
        <GridCol span={3} ta={'right'}>
          4500
        </GridCol>
      </Grid>
    </Link>
  );
}
