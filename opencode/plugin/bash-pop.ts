import type { Plugin } from "@opencode-ai/plugin";

export const BashPop: Plugin = async ({
  project,
  client,
  $,
  directory,
  worktree,
}) => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "bash" && typeof output.args?.command === "string") {
      }
    },
  };
};
