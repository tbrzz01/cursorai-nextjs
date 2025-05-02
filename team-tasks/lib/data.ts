import { db } from "./db";
import { columns, tasks } from "../drizzle/schema";

export async function getColumns() {
  return db.select().from(columns).orderBy(columns.order);
}

export async function getTasks() {
  return db.select().from(tasks);
} 