import Task from "./task.js";

/**
 * @interface Pagination
 * Pagination data model
 */
export default interface Pagination {
    Page: number;
    Size: number;
    Total: number;
    TotalPages: number;
    Tasks: Task[];
}