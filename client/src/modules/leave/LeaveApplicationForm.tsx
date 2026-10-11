import { useState } from "react";
import {
  Box,
  Paper,
  Title,
  Text,
  Select,
  Checkbox,
  TextInput,
  DateTimePicker,
  FileInput,
  Button,
  Group,
  Alert,
} from "@mantine/core";
import type { ReactNode } from "react";

export interface LeaveFormData {
  category: string;
  halfDay: boolean;
  startDate: string | null;
  endDate: string | null;
  stationAddress: string;
  stationDetails: string;
  substituteEmployee: string | null;
}

export function LeaveApplicationForm() {
  const [formData, setFormData] = useState<LeaveFormData>({
    category: "",
    halfDay: false,
    startDate: null,
    endDate: null,
    stationAddress: "",
    stationDetails: "",
    substituteEmployee: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitting leave application:", formData);
  };

  return (
    <Paper p="md" shadow="sm" radius="md">
      <Title order={2} mb="md">Leave Application</Title>
      <form onSubmit={handleSubmit}>
        <Box mb="md">
          <Select
            label="Leave Category"
            placeholder="Select leave type"
            value={formData.category}
            onChange={(value) => setFormData({ ...formData, category: value || "" })}
            data={[
              { value: "CL", label: "Casual Leave (CL)" },
              { value: "RH", label: "Sick Leave (RH)" },
              { value: "SCL", label: "Special Casual Leave (SCL)" },
              { value: "EL", label: "Earned Leave (EL)" },
              { value: "COL", label: "Compensatory Leave (COL)" },
              { value: "VL", label: "Voluntary Leave (VL)" },
            ]}
            required
          />
        </Box>

        <Group mb="md">
          <TextInput
            label="Start Date"
            type="date"
            value={formData.startDate ? formData.startDate.split("T")[0] : ""}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value || null })}
            required
            min={new Date().toISOString().split("T")[0]}
          />
          <TextInput
            label="End Date"
            type="date"
            value={formData.endDate ? formData.endDate.split("T")[0] : ""}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value || null })}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </Group>

        <Checkbox
          label="Half-day leave"
          checked={formData.halfDay}
          onChange={(e) => setFormData({ ...formData, halfDay: e.target.checked })}
          mb="md"
        />

        <TextInput
          label="Station Leave Address"
            placeholder="Enter station address"
            value={formData.stationAddress}
            onChange={(e) => setFormData({ ...formData, stationAddress: e.target.value })}
            required
            mb="md"
        />

        <TextInput
          label="Station Details"
          placeholder="Additional station information"
          value={formData.stationDetails}
          onChange={(e) => setFormData({ ...formData, stationDetails: e.target.value })}
          required
          mb="md"
        />

        <TextInput
          label="Substitute Employee Nomination"
          placeholder="Enter substitute employee name (optional)"
          value={formData.substituteEmployee || ""}
          onChange={(e) => setFormData({ ...formData, substituteEmployee: e.target.value || null })}
          mb="md"
        />

        <Group justify="right">
          <Button type="submit" color="blue">Submit Application</Button>
        </Group>
      </form>
    </Paper>
  );
}
