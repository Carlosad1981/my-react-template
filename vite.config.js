import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'My React Template',
                short_name: 'MyReactTemplate',
                start_url: '/',
                display: 'fullscreen',
                background_color: '#ffffff',
                theme_color: '#000000',
                icons: [
                    {
                        src: '/src/assets/img/icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/src/assets/img/icons/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg}']
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@fragments': path.resolve(__dirname, 'src/fragments'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
})
