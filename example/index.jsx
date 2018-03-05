import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import MarkdownComponent from './markdown.md';

const app = document.getElementById('app');

ReactDOM.render(<MarkdownComponent />, app);
