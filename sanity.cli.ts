import {defineCliConfig} from 'sanity/cli'
export const projectId = "hekqjt0e";
export const dataset = "production";

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
