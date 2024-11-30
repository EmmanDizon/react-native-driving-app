import { Stack } from "expo-router";

const TabLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="chat" />
    </Stack>
  );
};

export default TabLayout;
