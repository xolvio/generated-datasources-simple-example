import { QueryResolvers } from "@generated/graphql/types";

export const GetAllListsQuery: QueryResolvers["GetAllLists"] = (
  parent,
  args,
  context
) => context.dataSources.listsApi.TodoListControllerApi.getLists();
