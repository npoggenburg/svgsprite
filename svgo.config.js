module.exports = {
    multipass: true,
    datauri: 'unenc',
    js2svg: {
        indent: 2,
        pretty: true,
    },
    plugins: [
        'preset-default',
        'prefixIds',
        {
            name: 'sortAttrs',
            params: {
                xmlnsOrder: 'alphabetical',
            },
        },
    ],
};
