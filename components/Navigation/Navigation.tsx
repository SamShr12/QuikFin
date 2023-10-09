'use client';
import { Autocomplete, Group, Burger, rem, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconCodePlus } from '@tabler/icons-react';
import classes from './navigation.module.css';
import Link from 'next/link';

export default function Navigation({ productName, addLink }: any) {
  const [opened, { toggle }] = useDisclosure(false);
  const links = [
    { link: '/about', label: 'Help', id: '1' },
    { link: '/pricing', label: 'Shortcut', id: '2' },
    { link: '/learn', label: 'Export', id: '3' },
    { link: addLink, label: <IconCodePlus />, id: '4' },
  ];
  const items = links.map((link) => (
    <Link key={link.id} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Text fw={900} size="26px">
            {productName}
          </Text>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}
