<template>
  <v-container>
    <v-card class="p-6">
      <v-card-title class="text-h5">Shift Log Entry</v-card-title>
      <v-divider class="mb-4"></v-divider>

      <v-row>
        <!-- Left Column -->
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.date"
            label="Date"
            type="datetime-local"
            :error-messages="errors.date"
            outlined
            dense
            clearable
          ></v-text-field>

          <v-select
            v-model="form.shift"
            :items="shiftOptions"
            label="Shift"
            :error-messages="errors.shift"
            outlined
            dense
          ></v-select>

          <v-select
            v-model="form.incharge"
            label="Incharge"
            :items="inchargeOptions"
            item-text="label"
            item-value="value"
            :error-messages="errors.incharge"
            outlined
            dense
          ></v-select>

          <v-select
            v-model="form.team"
            label="Team"
            :items="teamOptions"
            item-text="label"
            item-value="value"
            :error-messages="errors.team"
            outlined
            dense
          ></v-select>

          <v-select
            v-model="form.line"
            label="Line"
            :items="lineOptions"
            item-text="label"
            item-value="value"
            :error-messages="errors.line"
            outlined
            dense
          ></v-select>

          <v-textarea
            v-model="form.breakdownDetails"
            label="Breakdown Details"
            :error-messages="errors.breakdownDetails"
            outlined
            dense
          ></v-textarea>
        </v-col>

        <!-- Right Column -->
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.startTime"
            label="Start Time"
            type="datetime-local"
            :error-messages="errors.startTime"
            outlined
            dense
            clearable
          ></v-text-field>

          <v-text-field
            v-model="form.endTime"
            label="End Time"
            type="datetime-local"
            :error-messages="errors.endTime"
            outlined
            dense
            clearable
          ></v-text-field>

          <v-textarea
            v-model="form.solution"
            label="Solution Done"
            :error-messages="errors.solution"
            outlined
            dense
          ></v-textarea>

          <v-textarea
            v-model="form.remarks"
            label="Remarks"
            :error-messages="errors.remarks"
            outlined
            dense
          ></v-textarea>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>

      <!-- Preventive Maintenance & Checklist -->
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="form.maintenance"
            label="Preventive Maintenance"
            :items="maintenanceOptions"
            item-text="label"
            item-value="value"
            :error-messages="errors.maintenance"
            outlined
            dense
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-checkbox
            v-model="form.checkbox"
            label="Checklist Completed"
            :error-messages="errors.checkbox"
          ></v-checkbox>
        </v-col>
      </v-row>

      <!-- Action Buttons -->
      <v-row>
        <v-col cols="12" class="text-end">
          <v-btn @click="submit" color="primary" class="me-2" outlined>
            <v-icon left>mdi-check</v-icon> Submit
          </v-btn>
          <v-btn @click="resetForm" color="secondary" outlined>
            <v-icon left>mdi-refresh</v-icon> Clear
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

// Options for dropdowns
const shiftOptions = ["Morning", "AfterNoon", "Night"];
const inchargeOptions = ["supervisor_a", "supervisor_b"];
const teamOptions = ["team1", "team2"];
const lineOptions = ["line1", "line2", "line3"];
const maintenanceOptions = ["Am", "PM", "CPM"];

// Reactive form object
const form = reactive({
  date: "",
  shift: "",
  incharge: "",
  team: "",
  line: "",
  breakdownDetails: "",
  startTime: "",
  endTime: "",
  solution: "",
  remarks: "",
  maintenance: "",
  checkbox: false,
});

// Errors object
const errors = reactive({});

// Reset form
const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key] = Array.isArray(form[key]) ? [] : "";
    if (key === "checkbox") form[key] = false;
  });
};

// Simple validation function
const validateForm = () => {
  Object.keys(form).forEach((key) => {
    if (!form[key] && key !== "checkbox") {
      errors[key] = "This field is required.";
    } else {
      errors[key] = "";
    }
  });
  return Object.values(errors).every((error) => error === "");
};

// Handle form submission
const submit = async () => {
  if (validateForm()) {
    try {
      const response = await fetch("https://api-shiftlogger-dev-001.azurewebsites.net/api/ShiftLog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) { 
        throw new Error("Failed to save data.");
      }

      alert("Form submitted successfully.");
      resetForm();
      Object.keys(errors).forEach((key) => (errors[key] = "")); // Clear errors after submission
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }
  } else {
    alert("Please fill all required fields.");
  }
};
</script>
