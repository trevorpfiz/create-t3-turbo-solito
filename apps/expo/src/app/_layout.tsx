import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Provider } from "@acme/app/src/provider";

import "../styles.css";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  return (
    <Provider>
      {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f472b6",
          },
        }}
      />
      <StatusBar />
    </Provider>
  );
}
