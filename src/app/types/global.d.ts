declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGAElement>>
    export default SVG
}

declare const IS_DEV: boolean
