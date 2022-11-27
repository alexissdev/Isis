import "./environment/local.environment.ts";
import "./database/database.ts";

import Server from './models/server.ts';

const server: Server = new Server();

server.start();