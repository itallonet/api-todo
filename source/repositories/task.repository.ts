import Pagination from "../models/pagination.js";
import Task from "../models/task.js";
import context from "./context.js";

export class TaskRepository {
    /**
     * Creates a new task in the database.
     *
     * @param {Task} task - The task object to be created.
     * @return {Promise<Task>} A promise that resolves to the created task.
     * @throws {Error} If there is an error creating the task.
     */
    public async Create(task: Task): Promise<Task> {
        try {
            return await context.task.create({ data: { Name: task.Name.toString() } });
        } catch (error) {
            throw error;
        }
    }

    /**
     * Updates a task in the database.
     *
     * @param {Task} task - The task object to be updated.
     * @return {Promise<boolean>} A promise that resolves to true if the task is successfully updated, false otherwise.
     * @throws {Error} If there is an error updating the task.
     */
    public async Update(task: Task): Promise<boolean> {
        try {
            await context.task.update({ where: { ID: task.ID.valueOf() }, data: { Name: task.Name.toString(), Done: task.Done.valueOf() } });
            return true;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Deletes a task from the database.
     *
     * @param {Task} task - The task object to be deleted.
     * @return {Promise<boolean>} A promise that resolves to true if the task is successfully deleted, false otherwise.
     * @throws {Error} If there is an error deleting the task.
     */
    public async Delete(task: Task): Promise<boolean> {
        try {
            await context.task.delete({ where: { ID: task.ID.valueOf() } });
            return true;
        } catch (error) {
            throw error;
        }
    }

    /**
     * List all tasks ordered by creation date.
     *
     * @param {Pagination} pagination - Pagination parameters.
     * @return {Promise<Pagination>} A promise that resolves to the pagination object.
     * @throws {Error} If there is an error fetching the tasks.
     */
    public async Get(pagination: Pagination): Promise<Pagination> {
        try {
            const { Page, Size } = pagination;
            const result = await context.task.findMany({
                skip: (Page - 1) * Size,
                take: parseInt(Size.toString()),
                orderBy: { CreatedAt: 'desc' }
            })

            return {
                Page, 
                Size,
                Tasks: result.map(task => ({ ...task, ID: task.ID.valueOf() } as Task))
            } as Pagination;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}