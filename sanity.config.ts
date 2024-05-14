import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import { media } from 'sanity-plugin-media'
import StudioNavbar from './components/StudioNavbar';
const projectId = "hekqjt0e";
const dataset = "production";

export default defineConfig({
  name: 'default',
  title: 'my-blog-sanity',
  basePath: '/studio',

   projectId,
  dataset ,

  
  plugins: [deskTool(), visionTool() ,media()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar
    }
  },
  theme: myTheme

})
