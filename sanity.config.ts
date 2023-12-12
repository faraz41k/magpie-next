import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'



export const config = defineConfig({
    projectId : "68id7anl",
    dataset: "production",
    title: "magpie-tours",
    apiVersion: "2023-11-12",
    basePath: "/admin",
    plugins: [deskTool()],
    schema : {types: schemas}
})