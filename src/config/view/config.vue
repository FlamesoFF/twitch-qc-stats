<template>
  <v-app>
    <v-container>
      <v-toolbar>
        <h1>Configuration</h1>
      </v-toolbar>

      <v-text-field label="Your in-game nickname:" v-model="streamer.name"></v-text-field>

      <v-btn @click="saveConfig()" color="info">Save</v-btn>

      <v-alert
        v-show="alert"
        type="success"
        transition="fade-transition"
      >
        Saved
      </v-alert>
    </v-container>
  </v-app>
</template>

<script lang="ts" src="./config.ts"></script>
<style lang="scss" scoped></style>