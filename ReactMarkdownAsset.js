const { Asset } = require('parcel-bundler');

class MarkdownAsset extends Asset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'js';
    }

    parse(markdownString) {
        // Escape backticks (essential) and newlines (cosmetic)
        const safeString = markdownString
                              .replace(/`/g, '\\`')
                              .replace(/\n/g, '\\n');
        // Create Markdown component w/out JSX
        const code = `React.createElement(
          ReactMarkdown,
          {source: \`${safeString}\`},
          null
        )`;
        this.code = code;
    }
    collectDependencies() {
      this.addDependency('react');
      this.addDependency('react-markdown');
    }
    generate() {
      // Render into a module template
      const module = `
        const React = require('react');
        const ReactMarkdown = require('react-markdown');
        module.exports = function() { return ${this.code}; };
      `;
      // Send to JS bundler
      return { 'js': module };
    }
}

module.exports = MarkdownAsset;
