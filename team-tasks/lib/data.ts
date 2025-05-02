import { db } from "./db";
import { columns, tasks } from "../drizzle/schema";
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Update the functions below to add the delay
export async function getColumns() {
  await delay(10000); // 10 second delay
  return db.select().from(columns).orderBy(columns.order);
}

export async function getTasks() {
  await delay(10000); // 10 second delay
  return db.select().from(tasks);
}
