import { Grid } from '@mantine/core';
import classes from './productitem.module.css';
import Link from 'next/link';

export default function ProductItem() {
  return (
    <Link href={`/products/12`}>
      <Grid className={classes.bottom}>
        <Grid.Col span={2}>1</Grid.Col>
        <Grid.Col tt={'capitalize'} span={3} ta={'center'}>
          Dhoni 4
        </Grid.Col>
        <Grid.Col span={3} tt={'capitalize'} ta={'center'}>
          Piece
        </Grid.Col>
        <Grid.Col span={3} ta={'right'}>
          4500
        </Grid.Col>
      </Grid>
    </Link>
  );
}
