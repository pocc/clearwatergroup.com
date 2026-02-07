import app from "../../src/server/index";

export const onRequest: PagesFunction = (context) => {
  return app.fetch(context.request, context.env, context as unknown as ExecutionContext);
};
