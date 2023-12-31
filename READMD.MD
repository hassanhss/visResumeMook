Babel，它是 JS 编译器，能将 ES6 代码转成 ES5，让我们使用最近的语言特性，而不需要担心兼容性的问题。
```
npm install @babel/polyfill@7.12.1 --save
npm install @babel/core@7.14.3 @babel/cli@7.14.3 --save-dev
npm install @babel/preset-env@7.14.2 @babel/preset-react@7.13.13 @babel/preset-typescript@7.13.0 --save-dev

npm install @babel/plugin-transform-runtime@7.14.3 --save-dev
npm install @babel/plugin-transform-modules-commonjs@7.14.0 --save-dev

```
css-loader版本不对引起的问题，参考[!https://segmentfault.com/q/1010000040029248]