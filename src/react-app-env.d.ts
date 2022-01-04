/// <reference types="react-scripts" />

// Extend the process.env interface to declare some new expected variables
declare namespace NodeJS {
  interface ProcessEnv {
    DEBUG_MODE: boolean;
  }
}

type Shell = 'Worklog' | 'Admin' | 'Functions';
