import { Group, Code, ScrollArea, rem, Text } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import classes from './sidebar.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Link from 'next/link';

const mockdata = [
  {
    label: 'Dashboard',
    icon: <IconGauge />,
    link: '/',
  },
  {
    label: 'Products',
    icon: <IconNotes />,
    link: '/products',
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Invoices',
    icon: <IconCalendarStats />,
    link: '/invoice',
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  {
    label: 'Unpaid Invoices',
    link: '/unpaid-invoice',
    icon: <IconPresentationAnalytics />,
  },
  {
    label: 'Paid Invoices',
    link: '/paid-invoice',
    icon: <IconFileAnalytics />,
  },
  {
    label: 'Settings',
    icon: <IconAdjustments />,
  },
];

export function Sidebar() {
  const links = mockdata.map((item) => (
    <Group key={item.label}>
      <Link href={`${item.link}`} className={classes.links}>
        <div className={classes.play}>
          <div className={classes.icons}>{item.icon}</div>
          <Text className={classes.linksInner}>{item.label}</Text>
        </div>
      </Link>
    </Group>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          {/* <Logo style={{ width: rem(120) }} /> */}
          <Code fw={700}>v1.0.1</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <ColorSchemeToggle />
      </div>
    </nav>
  );
}
