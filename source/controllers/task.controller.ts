import { FastifyInstance, FastifyRequest } from "fastify";
import Pagination from "../models/pagination.js";
import Task from "../models/task.js";
import { TaskRepository } from "../repositories/task.repository.js";

export default (instance: FastifyInstance) => {
    /**
     * @Get /:size/:page (R)
     * List all tasks ordered by creation date
     */
    instance.get("/:Size/:Page", async (request: FastifyRequest, response: any) => {
        try {
            const pagination = request.params as Pagination;

            const repository = new TaskRepository();

            const result = await repository.Get(pagination);

            response.send(result);
        } catch (error: any) {
            response.status(500).send({ code: error.code, message: error.error })
        }
    })

    /**
     * @Post / (C)
     * Responsible for creating the task
     */
    instance.post("/", async (request: FastifyRequest, response: any) => {
        try {
            const task = request.body as Task;

            const repository = new TaskRepository();

            const result = await repository.Create(task);
            response.status(201).send(result);
        } catch (error: any) {
            response.status(500).send({ code: error.code, message: error.error })
        }
    })

    /**
     * @Put / (U)
     * Responsible for updating the task
     */
    instance.put("/", async (request: FastifyRequest, response: any) => {
        try {
            const task = request.body as Task;

            const repository = new TaskRepository();

            await repository.Update(task);
            response.status(204).send();
        } catch (error: any) {
            response.status(500).send({ code: error.code, message: error.error })
        }
    })

    /**
     * @Delete / (D)
     * Responsible for deleting the task
     */
    instance.delete("/", async (request: FastifyRequest, response: any) => {
        try {
            const task = request.body as Task;

            const repository = new TaskRepository();

            await repository.Delete(task);
            response.status(204).send();
        } catch (error: any) {
            response.status(500).send({ code: error.code, message: error.error })
        }
    })
}