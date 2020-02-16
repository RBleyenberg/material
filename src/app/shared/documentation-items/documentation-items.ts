import {Injectable} from '@angular/core';

export interface AdditionalApiDoc {
  name: string;
  path: string;
}

export interface DocItem {
  id: string;
  name: string;
  summary?: string;
  packageName?: string;
  apiDocId?: string;
  additionalApiDocs?: AdditionalApiDoc[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
  summary?: string;
}

export interface DocSection {
  name: string;
  summary: string;
}

const CDK = 'cdk';
const COMPONENTS = 'components';
export const SECTIONS: {[key: string]: DocSection} = {
  [COMPONENTS]: {
    name: 'Components',
    summary: 'Angular Material comprises a range of components which implement common ' +
    'interaction patterns according to the Material Design specification.'
  },
  [CDK]: {
    name: 'CDK',
    summary: 'The Component Dev Kit (CDK) is a set of tools that implement common interaction ' +
    'patterns whilst being unopinionated about their presentation. It represents an abstraction ' +
    'of the core functionalities found in the Angular Material library, without any styling ' +
    'specific to Material Design. Think of the CDK as a blank state of well-tested functionality ' +
    'upon which you can develop your own bespoke components.'
  },
};


const DOCS: {[key: string]: DocCategory[]} = {
  [COMPONENTS]: [
    {
      id: 'forms',
      name: 'CRM',
      summary: 'Controls that collect and validate user input.',
      items: [
        {
          id: 'autocomplete',
          name: 'Relaties',
          summary: 'Suggests relevant options as the user types.',
          additionalApiDocs: [{name: 'Testing', path: 'material-autocomplete.html'}],
        }
      ]
    }
  ],
  [CDK] : [
    {
      id: 'component-composition',
      name: 'Common Behaviors',
      summary: 'Tools for implementing common application features.',
      items: [
        {
          id: 'a11y',
          name: 'Accessibility',
          summary: 'Utilities for screen readers, focus and more.',
        },
        {
          id: 'bidi',
          name: 'Bidirectionality',
          summary: 'Utilities to respond to changes in LTR/RTL layout direction.',
        },
        {
          id: 'clipboard',
          name: 'Clipboard',
          summary: 'Helpers for working with the system clipboard.'
        },
        {
          id: 'drag-drop',
          name: 'Drag and Drop',
          summary: 'Directives enabling drag-and-drop interactions',
        },
        {
          id: 'layout',
          name: 'Layout',
          summary: 'Utilities to respond to changes in viewport size.',
        },
        {
          id: 'observers',
          name: 'Observers',
          summary: 'Utilities to respond to changes to element properties.',
        },
        {
          id: 'overlay',
          name: 'Overlay',
          summary: 'Utilities for dynamically displaying floating content.',
        },
        {
          id: 'platform',
          name: 'Platform',
          summary: 'Provides information about the user\'s platform.',
        },
        {
          id: 'portal',
          name: 'Portal',
          summary: 'Utilities for dynamically displaying content into a target.',
        },
        {
          id: 'scrolling',
          name: 'Scrolling',
          summary: 'Directives for managing scroll events.',
        },
        {
          id: 'text-field',
          name: 'Text field',
          summary: 'Utilities for working with text input fields.',
        },
      ]
    },
    {
      id: 'components',
      name: 'Components',
      summary: 'Unstyled components with useful functionality.',
      items: [
        {
          id: 'stepper',
          name: 'Stepper',
          summary: 'Presents content as steps through which to progress.',
        },
        {
          id: 'table',
          name: 'Table',
          summary: 'A configurable component for displaying tabular data.',
        },
        {
          id: 'tree',
          name: 'Tree',
          summary: 'Presents hierarchical content as an expandable tree.',
        },
      ]
    },
    {
      id: 'testing',
      name: 'Testing',
      summary: 'Utilities for testing common components.',
      items: [
        {
          id: 'test-harnesses',
          name: 'Component Harnesses',
          summary: 'Foundation for component test harnesses.',
          apiDocId: 'cdk-testing',
          additionalApiDocs: [
            {
              name: 'Testbed',
              path: 'cdk-testing-testbed.html'
            },
            {
              name: 'Protractor',
              path: 'cdk-testing-protractor.html'
            }
          ],
        }
      ]
    }
    // TODO(jelbourn): re-add utilities and a11y as top-level categories once we can generate
    // their API docs with dgeni. Currently our setup doesn't generate API docs for constants
    // and standalone functions (much of the utilities) and we have no way of generating API
    // docs more granularly than directory-level (within a11y) (same for viewport).
  ]
};

for (const category of DOCS[COMPONENTS]) {
  for (const doc of category.items) {
    doc.packageName = 'material';
  }
}

for (const category of DOCS[CDK]) {
  for (const doc of category.items) {
    doc.packageName = 'cdk';
  }
}

const ALL_COMPONENTS = DOCS[COMPONENTS].reduce(
  (result: DocItem[], category: DocCategory) => result.concat(category.items), []);
const ALL_CDK = DOCS[CDK].reduce(
  (result: DocItem[], cdk: DocCategory) => result.concat(cdk.items), []);
const ALL_DOCS = ALL_COMPONENTS.concat(ALL_CDK);
const ALL_CATEGORIES = DOCS[COMPONENTS].concat(DOCS[CDK]);

@Injectable()
export class DocumentationItems {
  getCategories(section: string): DocCategory[] {
    return DOCS[section];
  }

  getItems(section: string): DocItem[] {
    if (section === COMPONENTS) {
      return ALL_COMPONENTS;
    }
    if (section === CDK) {
      return ALL_CDK;
    }
    return [];
  }

  getItemById(id: string, section: string): DocItem | undefined {
    const sectionLookup = section === 'cdk' ? 'cdk' : 'material';
    return ALL_DOCS.find(doc => doc.id === id && doc.packageName === sectionLookup);
  }

  getCategoryById(id: string): DocCategory | undefined {
    return ALL_CATEGORIES.find(c => c.id === id);
  }
}
