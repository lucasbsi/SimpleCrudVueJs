<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>User Crud</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          dense
          :headers="headers"
          :items="users"
          item-key="name"
          class="elevation-1"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserCrud",
  data: () => ({
    users: [
      {
        id: 1,
        name: "Andrew",
        location: "Brazil",
      },
      {
        id: 2,
        name: "Julio",
        location: "Canadá",
      },
    ],
    headers: [
      { text: "Nome", align: "start", sortable: true, value: "name" },
      { text: "Localização", value: "location" },
    ],
  }),
};
</script>
