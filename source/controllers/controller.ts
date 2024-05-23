import { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export class Controller {
    /**
     * Initializes the application by importing and executing all the controller modules.
     *
     * @param {FastifyInstance} instance - The Fastify instance to be passed to the controller modules.
     * @return {Promise<void>} A promise that resolves when all the controller modules have been executed.
     */
    public async Startup(instance: FastifyInstance): Promise<void> {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const files = fs.readdirSync(__dirname).filter(file => file !== "controller.js");

        for (const file of files) {
            const filePath = path.join(__dirname, file);
            const module = await import("file://" + filePath);
            if (typeof module.default === "function") module.default(instance);
        }
    }
}