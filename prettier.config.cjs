module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'ignore',

    overrides: [
        {
            files: ['*.xml', '*.qweb'],
            options: {
                parser: 'xml',
                xmlWhitespaceSensitivity: 'ignore',
                xmlSelfClosingSpace: true,
                bracketSameLine: false,
            },
        },
        {
            files: '*.js',
            options: {
                parser: 'babel',
                semi: true,
                singleQuote: true,
                tabWidth: 4,
            },
        },
        {
            files: '*.scss',
            options: {
                parser: 'scss',
                singleQuote: true,
                tabWidth: 4,
            },
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
                tabWidth: 4,
            },
        },
        {
            files: '*.html',
            options: {
                parser: 'html',
                htmlWhitespaceSensitivity: 'css',
            },
        },
    ],
};
