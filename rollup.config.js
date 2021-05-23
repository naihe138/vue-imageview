import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
import precss from 'precss'
export default [
  {
    input: './src/index.vue',
    output: {
      format: 'esm',
      file: 'dist/imageview.esm.js'
    },
    plugins: [
      vue({
        style: {
          postcssPlugins: [
            precss(),
            autoprefixer()
          ]
        }
      })
    ]
  }
]
