import { rest } from "msw";

const handlers = [
  rest.get("default", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: { data: "world" } }));
  }),
];
export default handlers;
