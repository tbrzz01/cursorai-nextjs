import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const columns = pgTable("columns", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  order: integer("order").notNull(),
});

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  assignee: text("assignee"),
  status: text("status").notNull(), // This could be a foreign key to columns.name or columns.id
  columnId: integer("column_id"),   // Optionally, a foreign key to columns.id
});
