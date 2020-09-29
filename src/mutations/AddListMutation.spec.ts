import td from "testdouble";
import { GqlContext, MutationAddListArgs } from "@generated/graphql/types";
import { AddListMutation } from "./AddListMutation";

const testAddList = (variables: MutationAddListArgs, context: GqlContext) =>
  AddListMutation({}, variables, context, null);

test("AddList", async () => {
  const context = td.object<GqlContext>();

  const name = "new name";

  const resolvedList = { createdAt: new Date(), id: "someId", name };
  td.when(
    context.dataSources.listsApi.TodoListControllerApi.createList({
      text: name,
    })
  ).thenResolve(resolvedList);

  const variables: MutationAddListArgs = { name };

  const result = await testAddList(variables, context);

  expect(result).toEqual(resolvedList);
});
