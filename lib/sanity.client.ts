import { createClient } from 'next-sanity'

export const projectId = "hekqjt0e";
export const dataset = "production";
const apiVersion = "2022-11-15";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
})