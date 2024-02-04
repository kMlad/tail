"use client";

import { Card, Image, Text, Group, Badge, Center, Button } from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./FeaturesCard.module.css";
import Link from "next/link";

export type P = {
  id: string;
  name: string;
  desc: string;
  price: string;
  imageUrl: string;
  link: string;
};

const mockdata = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation },
];

export function FeaturesCard({ name, desc, price, imageUrl, link }: P) {
  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={imageUrl} alt="Tesla Model S" />
        </Card.Section>

        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}>{name}</Text>
            <Text fz="xs" c="dimmed">
              {desc}
            </Text>
          </div>
        </Group>
        <Card.Section className={classes.section}>
          <Group gap={30}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                {price}
              </Text>
            </div>
              <Button component="a" href={link} radius="xl" style={{ flex: 1 }} color="orange">
                Buy now
              </Button>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}
