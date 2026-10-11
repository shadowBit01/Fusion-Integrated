import { useState } from "react";
import {
  Box,
  Table,
  Title,
  Text,
  Badge,
  Avatar,
  Group,
  Button,
  Alert,
} from "@mantine/core";

export interface PendingLeaveRequest {
  id: number;
  employeeName: string;
  employeeId: string;
  category: string;
  startDate: string;
  endDate: string;
  days: number;
  stationAddress: string;
  status: "pending";
  submittedAt: string;
}

const pendingRequests: PendingLeaveRequest[] = [
  { id: 1, employeeName: "Alice Brown", employeeId: "EMP001", category: "CL", startDate: "2024-02-01", endDate: "2024-02-03", days: 3, stationAddress: "HQ Building A", status: "pending", submittedAt: "2024-01-25T10:30:00Z" },
  { id: 2, employeeName: "Charlie Wilson", employeeId: "EMP002", category: "RH", startDate: "2024-02-05", endDate: "2024-02-07", days: 3, stationAddress: "Remote", status: "pending", submittedAt: "2024-01-26T14:15:00Z" },
  { id: 3, employeeName: "Diana Miller", employeeId: "EMP003", category: "EL", startDate: "2024-02-10", endDate: "2024-02-15", days: 6, stationAddress: "Branch Office B", status: "pending", submittedAt: "2024-01-27T09:45:00Z" },
];

export function LeaveApprovalQueue() {
  const [requests, setRequests] = useState(pendingRequests);

  const handleApprove = (id: number) => {
    setRequests(requests.filter((r) => r.id !== id));
    // Add approval logic here
    console.log(`Approved leave request #${id}`);
  };

  const handleReject = (id: number, reason?: string) => {
    setRequests(requests.filter((r) => r.id !== id));
    // Add rejection logic here
    console.log(`Rejected leave request #${id}: ${reason || "No reason provided"}`);
  };

  return (
    <Box>
      <Title order={2} mb="md">Leave Approval Queue</Title>
      
      {requests.length === 0 ? (
        <Alert title="No pending leave requests" color="blue" icon={<span>✓</span>} />
      ) : (
        <Table striped hoverable>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Employee</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Start Date</Table.Th>
              <Table.Th>End Date</Table.Th>
              <Table.Th>Days</Table.Th>
              <Table.Th>Station Address</Table.Th>
              <Table.Th>Submitted At</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {requests.map((request) => (
              <Table.Tr key={request.id}>
                <Table.Td>{request.id}</Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Avatar size="sm" radius="xl">{request.employeeName.charAt(0)}</Avatar>
                    <Text>{request.employeeName} ({request.employeeId})</Text>
                  </Group>
                </Table.Td>
                <Table.Td><Badge color="blue">{request.category}</Badge></Table.Td>
                <Table.Td>{request.startDate}</Table.Td>
                <Table.Td>{request.endDate}</Table.Td>
                <Table.Td>{request.days}</Table.Td>
                <Table.Td c="dimmed" size="sm">{request.stationAddress}</Table.Td>
                <Table.Td c="dimmed" size="xs">{new Date(request.submittedAt).toLocaleDateString()}</Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Button size="xs" color="green" onClick={() => handleApprove(request.id)}>
                      Approve
                    </Button>
                    <Button size="xs" color="red" onClick={() => handleReject(request.id)}>
                      Reject
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}

      <Text c="dimmed" size="sm" mt="md">
        Unit Heads and Sanctioning Authorities can view and approve/reject pending leave requests.
      </Text>
    </Box>
  );
}
