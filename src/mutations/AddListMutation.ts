import { MutationResolvers } from "@generated/graphql/types";

export const AddListMutation: MutationResolvers["AddList"] = (
  parent,
  args,
  context
) =>
  context.dataSources.listsApi.TodoListControllerApi.createList({
    text: args.name,
  });
