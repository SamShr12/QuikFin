import { Grid, GridCol } from '@mantine/core';

export default function AddItemsInvoice() {
  return (
    <Grid
      style={{ padding: '1rem 1rem 1rem 1.8rem', border: '0.5px solid #ccc', fontWeight: '600' }}
    >
      <GridCol span={1}>#</GridCol>
      <GridCol span={3}>Item</GridCol>
      <GridCol span={3}>Quantity</GridCol>
      <GridCol span={3} ta={'center'}>
        Rate
      </GridCol>
      <GridCol span={2} ta={'right'}>
        Amount
      </GridCol>
    </Grid>
  );
}
