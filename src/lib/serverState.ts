
// Utility for handling server-side state serialization
export function serializeServerState(state: any) {
  try {
    return JSON.stringify(state);
  } catch (error) {
    console.error('Failed to serialize server state:', error);
    return '{}';
  }
}

export function deserializeServerState(serializedState: string) {
  try {
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Failed to deserialize server state:', error);
    return {};
  }
}

// Helper to ensure consistent state between server and client
export function createHydrationSafeState(serverData: any) {
  // Only return keys that match your Redux state structure
  return {
    cart: serverData.cart || { items: [] },
    search: serverData.search || { keyword: "" }
  };
}
