import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL,
    // trace: 'on-first-retry',
  },
  reporter: 'list',
});
