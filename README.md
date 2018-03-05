![POLITICO](https://rawgithub.com/The-Politico/src/master/images/logo/badge.png)

# parcel-plugin-react-markdown

A plugin for [Parcel.js](https://parceljs.org/) bundler that renders markdown files into React components using [react-markdown](https://github.com/rexxars/react-markdown).

### Use

1. Install the plugin

  ```
  $ yarn add parcel-plugin-react-markdown
  ```

2. Import your markdown files!

  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import MarkdownComponent from './Markdown.md';

  ReactDOM.render(<MarkdownComponent/>, document.getElementById('app'));
  ```

### Test

```
$ npm test
```
