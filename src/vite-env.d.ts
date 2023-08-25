/*
 * @Date: 2023-08-11 18:06:13
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-11 18:32:25
 * @FilePath: /business-website/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}