---
title: What are Source Maps?
date: "2019-10-25T00:00:00.000Z"
description: ""

---

Have you heard other web developers talk about *source maps* but never truly understood their purpose? Today I wanted to talk about what they are and what we gain from utilizing source maps in our development workflow.

When you use a tool to generate an output file from a collection of source files, a *source map* is a file that maps the generated output file back to the original source files. After this mapping is interpreted by the browser's developer tools, the developer will be able to debug with the original source files instead of the generated one.

For example, let's assume for a moment that we have a minified JavaScript file. A minified JavaScript file is impossible to debug, and stack traces that result from errors occurring in a minified file are too cryptic to read. If you need to debug an error and you're using a minified file, a source map will help. A source map will allow you to debug using the original JavaScript files. Similarly, you can utilize source maps for transpiled languages such as TypeScript or CoffeeScript. This would give you the ability to debug the TypeScript or CoffeeScript files in developer tools instead of the generated JavaScript file. You can even apply source maps to CSS. Source maps are commonly used with CSS Preprocessors such as SASS or LESS to make debugging styles easier.

## But How do Source Maps Work?

The content of a source map is a JSON object containing mapping metadata that will be processed by the browser once the user opens developer tools.

Below is an example of a source map file taken straight from the [version 3 spec](https://sourcemaps.info/spec.html):

```json
{
  "version" : 3,
  "file": "out.js",
  "sourceRoot": "",
  "sources": ["foo.js", "bar.js"],
  "sourcesContent": [null, null],
  "names": ["src", "maps", "are", "fun"],
  "mappings": "A,AAAB;;ABCDE;"
}
```

In this file:

* `version` represents the version of the source map standard that is being followed. The latest version is 3, which is the version you will always want to use.
* `file` is the name of the output file that was mapped to the original collection of source files.
* `sourceRoot` allows you to declare the root path of your source files.
* `sources` is the names of the original collection of source files that were used to generate the output file.
* `sourcesContent` contains an array of the content of each source file. Each element in the array contains the content of one of the source files, following the same ordering as `sources`. This is generally used when the source files aren't available. Unless you want to inline the content of the source files in your source map, these elements can be null.
* `names` represents all of the variable names that were used in the original collection of files.
* `mappings` is a very large string that contains the actual mappings from the output file to the original collection of source files, encoded in Base64 VLQ. Why Base64 VLQ? This method of building the mappings string results in a much smaller source map file size compared to versions 1 and 2.

In order to use a source map, your generated file needs to list the path to the source map at the bottom. So as an example, if you had a file that was called "out.js", and you needed to use the source map "out.js.map", then the following comment would need to be inserted at the bottom of "out.js":

```Javascript
// out.js
var foo = "bar"
...
//# sourceMappingURL=out.js.map
```

Generally, the tool you use to generate your source map will add this comment for you. 

Once this comment is added, then when you run your app and open developer tools, the browser will look for the sourceMappingURL comment at the bottom of your generated file and will attempt to attach the source map based on the source map file name your provided.

## What about Inline Source Maps?

An inline source map is a source map that is embedded at the bottom of the generated file as a base64 encoded string:

```javascript
// out.js
var foo = "bar"
...
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9vLmpzIiwiYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCwgbnVsbF0sIm5hbWVzIjpbInNyYyIsIm1hcHMiLCJhcmUiLCJmdW4iXSwibWFwcGluZ3MiOiJBLEFBQUI7O0FCQ0RFOyJ9
```

If you were to decode the above base64 string, you would get the same source map example that I showed above.

Why use inline source maps? Since there aren't any separate source map files that need to be loaded, it brings a slight performance increase. It could be beneficial in a development environment depending on your application. However it is not recommended in a production environment because of the increased bundle size.

## Enabling Source Maps in Module Bundlers

With today's modern development tools, enabling source maps is not a difficult task at all. To prove my point, here are a few short examples from three popular module bundlers:

### Webpack

In Webpack, you can enable source maps by passing the value `"source-map"` to the option `devtool`:

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'source-map'
}
```

Depending on your goals, `"source-map"` may not always be appropriate. If you need inline source maps, you could pass `"inline-source-map"` or `"inline-cheap-source-map"`.  See [the documentation](https://webpack.js.org/configuration/devtool/) for a complete reference to the different values that can be passed to `devtool`.

### Rollup

In Rollup, source maps can be enabled by passing `true` to the key `sourcemap` in the config's `output` object:

```javascript
module.exports = {
  input: './src/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    sourcemap: true
  }
}
```

You can also use inline source maps by passing `"inline"` instead of `true`.

### Browserify

Enabling inline source maps is as simple as passing `--debug` in the command line:

```shell
browserify --debug ./src/index.js -o bundle.js
```

If you want the source maps in separate files, you'll need to use [exorcist](https://github.com/thlorenz/exorcist).

##Conclusion

Source maps are a great addition to your development workflow, as they make debugging a lot easier when dealing with code that was generated from a collection of source files (such as minified/combined or transpiled code). If you need to include source maps in your workflow, they are easy to integrate with today's modern development tools.
