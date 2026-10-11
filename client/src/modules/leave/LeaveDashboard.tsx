import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Table,
  Title,
  Text,
  Badge,
  Avatar,
  Group,
  Button,
} from "@mantine/core";

export interface LeaveBalance {
  category: string;
  available: number;
  used: number;
  total: number;
}

export interface LeaveApplication {
  id: number;
  employeeName: string;
  category: string;
  startDate: string;
  endDate: string;
  status: "pending" | "approved" | "rejected";
  days: number;
}

const leaveBalances: LeaveBalance[] = [
  { category: "CL", available: 12, used: 5, total: 17 },
  { category: "RH", available: 18, used: 3, total: 21 },
  { category: "EL", available: 30, used: 10, total: 40 },
  { category: "COL", available: 5, used: 2, total: 7 },
];

const pastApplications: LeaveApplication[] = [
  { id: 1, employeeName: "John Doe", category: "CL", startDate: "2024-01-15", endDate: "2024-01-17", status: "approved", days: 3 },
  { id: 2, employeeName: "Jane Smith", category: "RH", startDate: "2024-01-10", endDate: "2024-01-12", status: "approved", days: 2 },
  { id: 3, employeeName: "Bob Johnson", category: "CL", startDate: "2024-01-05", endDate: "2024-01-06", status: "rejected", days: 2 },
];

export function LeaveDashboard() {
  return (
    <Box>
      <Title order={2} mb="md">Leave Dashboard</Title>
      
      <Grid gutter="md" mb="xl">
        {leaveBalances.map((balance) => (
          <Card key={balance.category} shadow="sm" padding="lg">
            <Group justify="space-between">
              <Text fw="bold">{balance.category}</Text>
              <Badge color={balance.available > 0 ? "green" : "red"}>{balance.available} days available</Badge>
            </Group>
            <Text c="dimmed" size="sm">Total: {balance.total} | Used: {balance.used}</Text>
          </Card>
        ))}
      </Grid>

      <Title order={3} mb="md" mt="xl">Past Leave Applications</Title>
      
      <Table striped hoverable>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Employee</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Start Date</Table.Th>
            <Table.Th>End Date</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Days</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {pastApplications.map((app) => (
            <Table.Tr key={app.id}>
              <Table.Td>{app.id}</Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <Avatar size="sm" radius="xl">{app.employeeName.charAt(0)}</Avatar>
                  <Text>{app.employeeName}</Text>
                </Group>
              </Table.Td>
              <Table.Td><Badge color="blue">{app.category}</Badge></Table.Td>
              <Table.Td>{app.startDate}</Table.Td>
              <Table.Td>{app.endDate}</Table.Td>
              <Table.Td>
                <Badge color={app.status === "approved" ? "green" : app.status === "rejected" ? "red" : "yellow"}>
                  {app.status}
                </Badge>
              </Table.Td>
              <Table.Td>{app.days}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Group justify="right" mt="xl">
        <Button variant="outline">Export Report</Button>
      </Group>
    </Box>
  );
}
