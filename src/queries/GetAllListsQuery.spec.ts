import td from "testdouble";
import { GqlContext } from "@generated/graphql/types";
import { GetAllListsQuery } from "./GetAllListsQuery";

const testGetAllLists = (context: GqlContext) =>
  GetAllListsQuery({}, {}, context, null);

test("GetAllLists", async () => {
  const context = td.object<GqlContext>();

  const lists = [{ name: "name", id: "someId", createdAt: new Date() }];
  td.when(
    context.dataSources.listsApi.TodoListControllerApi.getLists()
  ).thenResolve(lists);

  const result = await testGetAllLists(context);

  expect(result).toEqual(lists);
});
