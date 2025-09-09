import legacy from '@vitejs/plugin-legacy'

export default {
    plugins: [
        legacy({
            targets: ['> 0.2% and not dead', 'last 7 major versions', 'Firefox ESR', '>= 5% in CN'],
        }),
    ],
}