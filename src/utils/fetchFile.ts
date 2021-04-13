/* eslint-disable @typescript-eslint/no-explicit-any */
import { Octokit } from "@octokit/core";
import { exit } from "process";
import { err } from "./err";
import { OctokitResponse } from "@octokit/types/dist-types/OctokitResponse";
import ora from "ora";

export const fetchFile = async (gist_id: string): Promise<string> => {
  const octokit = new Octokit();
  let res: OctokitResponse<any, number>;
  const spinner = ora("fetchining file").start();
  try {
    res = await octokit.request(`GET /gists/${gist_id}`);
  } catch (error) {
    err(error);
    spinner.fail();
    exit();
  }
  spinner.succeed();
  const firstKey: string = Object.keys(res.data.files)[0];
  let content: string;
  if (firstKey.endsWith(".rn")) {
    content = res.data.files[firstKey].content;
  } else {
    err(`${firstKey} is not a valid runner file`);
    exit();
  }
  return content;
};
