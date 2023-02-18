import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const MODE = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = MODE === 'development'

    return buildWebpackConfig({
        mode: MODE,
        paths,
        isDev,
        port: PORT
    })
}
