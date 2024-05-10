import { RCABuilding } from "@Data/reatlorca/types";

type JsonValue =  null | { [key: string]: JsonValue } | JsonValue[] | RCABuilding;

// Function to retrieve a value from a nested JSON object based on a dot-separated path
export function getValueFromPath(data: JsonValue, path: string): JsonValue | undefined {
  const keys = path.split('.');
  let current: JsonValue | undefined = data;
  
  for (const key of keys) {
    if (typeof current === 'object' && current !== null && key in current) {
      
      current = (current as { [key: string]: JsonValue })[key];
      
    } else {
      return undefined; // Path does not exist
    }
  }
  
  return current;
}