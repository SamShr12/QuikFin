import { Button, Card, Grid, SimpleGrid, Text } from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './dash.module.css';
import Link from 'next/link';

const mockdata = [
  {
    title: 'Add product',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: <IconGauge />,
    link: '/products/add',
  },
  {
    title: 'Add Invoice',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: <IconUser />,
    link: '/invoice/add',
  },
];
export default function Dashboard() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      {feature.icon}
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
      <Link style={{ width: '100%' }} href={feature.link}>
        <Button w={'100%'} mt={'xl'}>
          Add
        </Button>
      </Link>
    </Card>
  ));
  return (
    <div style={{ padding: '1rem', marginTop: '-4.5rem' }}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </div>
  );
}
