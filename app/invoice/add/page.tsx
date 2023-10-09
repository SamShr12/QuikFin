'use client';
import { AddItemsInvoice, Nav, Navigation, NewInvoice } from '@/components';
import { Autocomplete, Button, Code, Flex, Grid, Group, TextInput, Title } from '@mantine/core';
import classes from './invoiceadd.module.css';

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Nav />
      <div style={{ width: '100%' }}>
        <Navigation productName="Invoice" addLink="/invoice/add" />
        <Group className={classes.space}>
          <h1>New Entry</h1>
          <Button fw={700}>Save</Button>
        </Group>
        <NewInvoice />
        <div style={{ padding: '1rem' }}>
          <Flex gap={'xl'}>
            <Title>Items</Title>

            <Autocomplete
              w={'50%'}
              pt={'.5em'}
              placeholder="Search..."
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />
          </Flex>
          <Grid
            style={{
              padding: '1rem 1rem 1rem 1rem',
              marginTop: '2rem',
              fontSize: '20px',
              border: '1px solid #ccc',
              fontWeight: '900',
            }}
          >
            <Grid.Col span={1} fw={'bolder'}>
              #
            </Grid.Col>
            <Grid.Col span={3}>Item</Grid.Col>
            <Grid.Col span={3}>Quantity</Grid.Col>
            <Grid.Col span={3} ta={'center'}>
              Rate
            </Grid.Col>
            <Grid.Col span={2} ta={'right'}>
              Amount
            </Grid.Col>
          </Grid>
          <AddItemsInvoice />
          <TextInput w={'40%'} mt={'lg'} size="lg" label="Total" placeholder="Total" />
        </div>
      </div>
    </div>
  );
}
