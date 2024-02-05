import React from 'react';
import { createRoot } from 'react-dom/client';
import loadable from '@loadable/component';

const App = loadable(() => import('./components/SkillsComponent'));

const rootElement = document.getElementById('skill-root');
const root = createRoot(rootElement);
root.render(<App />);
