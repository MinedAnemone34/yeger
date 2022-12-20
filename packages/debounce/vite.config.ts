import { defineConfig } from 'vite'
import { libPlugin } from 'vite-plugin-lib'

export default defineConfig({
  plugins: [
    libPlugin({
      entry: 'src/main.ts',
      formats: ['es', 'umd'],
      name: 'debounce',
    }),
  ],
  test: {
    include: ['test/**/*.test.ts'],
    coverage: {
      enabled: !!process.env.COVERAGE,
      all: true,
      include: ['src/**/*.*'],
    },
  },
})
