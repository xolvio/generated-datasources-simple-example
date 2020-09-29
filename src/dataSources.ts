import { Controllers } from "@generated/api";

export const dataSources = () => ({
  listsApi: new Controllers("http://localhost:8090/"),
});
