import fastify from "fastify";
import { Controller } from "./controllers/controller.js";

const controller = new Controller();
const application = fastify({ logger: true });

await controller.Startup(application);

application.listen({ port: 9140 }).then(() => {
    console.log("API is live! http://localhost:9140")
});