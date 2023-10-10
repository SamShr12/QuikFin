'use client';
import { Grid, GridCol, Group, Menu, Text, TextInput, UnstyledButton } from '@mantine/core';
import classes from './proddet.module.css';
import { useState } from 'react';
import { IconChevronDown, IconNotes } from '@tabler/icons-react';

const data = [
  { label: 'English' },
  { label: 'German' },
  { label: 'Italian' },
  { label: 'French' },
  { label: 'Polish' },
];

export default function ProductDetail() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<IconNotes width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));
  return (
    <div style={{ padding: '1rem' }}>
      <div>
        <Grid className={classes.bottom}>
          <GridCol span={6}>
            <TextInput
              label="Item Name"
              placeholder="OMG, it also has a placeholder"
              required
              // value={value}
              // onChange={(event) => setValue(event.currentTarget.value)}
              // onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
              mt="md"
              autoComplete="nope"
              size="lg"
            />
          </GridCol>
          <GridCol span={6}>
            <TextInput
              label="Type"
              placeholder="OMG, it also has a placeholder"
              required
              className={classes.insert_input}
              // value={value}
              // onChange={(event) => setValue(event.currentTarget.value)}
              // onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
              mt="md"
              autoComplete="nope"
              size="lg"
            />
          </GridCol>
          <GridCol span={6}>
            <Menu
              onOpen={() => setOpened(true)}
              onClose={() => setOpened(false)}
              radius="md"
              width="target"
              withinPortal
            >
              <Text size="lg">Unit</Text>
              <Menu.Target>
                <UnstyledButton
                  className={classes.control}
                  data-expanded={opened || undefined}
                  w={'100%'}
                  bg={classes.color_gray}
                  h={'3.2em'}
                >
                  <Group gap="xs" w={'100%'}>
                    <IconNotes width={22} height={22} />
                    <span className={classes.dropdown_text}>{selected.label}</span>
                  </Group>
                  <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>{items}</Menu.Dropdown>
            </Menu>
          </GridCol>
          <GridCol span={6}>
            <TextInput
              label="Rate"
              placeholder="OMG, it also has a placeholder"
              required
              className={classes.insert_input}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoComplete="nope"
              pb={'lg'}
              size="lg"
            />
          </GridCol>
        </Grid>
      </div>
    </div>
  );
}
