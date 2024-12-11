<template>
    <v-container>
      <v-card flat>
        <v-card-title>Shift Log Report</v-card-title>
  
        <!-- Loading spinner while fetching data -->
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
          class="ma-5"
          size="64"
        ></v-progress-circular>
  
        <!-- Show the data table if there are logs -->
        <v-data-table
          v-else
          :headers="headers"
          :items="shiftLogs"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Search Shift Logs</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
        </v-data-table>
  
        <!-- Message when no data is available -->
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const search = ref("");
  const shiftLogs = ref([]);
  const headers = [
    { text: "Date", value: "date" },
    { text: "Shift", value: "shift" },
    { text: "In-Charge", value: "incharge" },
    { text: "Team", value: "team" },
    { text: "Line", value: "line" },
    { text: "Start Time", value: "startTime" },
    { text: "End Time", value: "endTime" },
    { text: "Breakdown Details", value: "breakdownDetails" },
    { text: "Solution", value: "solution" },
    { text: "Maintenance", value: "maintenance" },
    { text: "Remarks", value: "remarks" },
  ];
  
  // Loading state to track whether the data is being fetched
  const loading = ref(true);
  
  // Fetch data from API
  onMounted(async () => {
    try {
      const response = await fetch(
        "https://api-shiftlogger-dev-001.azurewebsites.net/api/ShiftLog"
      );
      if (!response.ok) throw new Error("Failed to fetch shift logs.");
      shiftLogs.value = await response.json();
    } catch (error) {
      console.error(error.message);
    } finally {
      loading.value = false; // Hide the loading spinner once the data is fetched
    }
  });
  </script>
  
  <style scoped>
  /* Optional: You can style the loading spinner or the table as needed */
  </style>
  