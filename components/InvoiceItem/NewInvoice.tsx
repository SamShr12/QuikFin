'use client';
import { Grid, TextInput } from '@mantine/core';
import { useState } from 'react';
import classes from './invoice.module.css';
import { DatePickerInput } from '@mantine/dates';

export default function NewInvoice() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Grid className={classes.bottom}>
      <Grid.Col span={6}>
        <TextInput
          label="Invoice No"
          placeholder="OMG, it also has a placeholder"
          required
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt="md"
          autoComplete="nope"
          size="lg"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput
          label="Party"
          placeholder="OMG, it also has a placeholder"
          required
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt="md"
          autoComplete="nope"
          size="lg"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <DatePickerInput
          valueFormat="DD MMM YYYY"
          label="Pick date"
          placeholder="Pick date"
          size="lg"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput
          label="Party"
          placeholder="OMG, it also has a placeholder"
          required
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoComplete="nope"
          size="lg"
        />
      </Grid.Col>
    </Grid>
  );
}
