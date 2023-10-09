import { Grid } from '@mantine/core';

export default function AddItemsInvoice() {
  return (
    <Grid
      style={{ padding: '1rem 1rem 1rem 1.8rem', border: '0.5px solid #ccc', fontWeight: '600' }}
    >
      <Grid.Col span={1}>#</Grid.Col>
      <Grid.Col span={3}>Item</Grid.Col>
      <Grid.Col span={3}>Quantity</Grid.Col>
      <Grid.Col span={3} ta={'center'}>
        Rate
      </Grid.Col>
      <Grid.Col span={2} ta={'right'}>
        Amount
      </Grid.Col>
    </Grid>
  );
}
