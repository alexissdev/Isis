import EnvironmentLoader from "./environment.loader.ts";

export class EnvironmentExample implements EnvironmentLoader {
  load(): void {
    Deno.env.set("PORT", "3000");
    Deno.env.set("MONGO_URI", "mongodb://localhost/deno_rest_api");
  }
}
