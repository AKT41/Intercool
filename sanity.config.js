import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'cvg7rp0h',
    dataset: 'production',
    title: 'İntercool',
    apiVersion: '2023-07-21',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config
