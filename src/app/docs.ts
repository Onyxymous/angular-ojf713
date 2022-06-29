import { Text } from './texts';

export interface Doc {
  id: number;
  name: string;
  body: Text;
}

export const docs = [
  {
    id: 1,
    name: 'Test Document',
    body: {
      stuff: 'This is a document with Arial, black, 11 pt font',
      font: 'Arial',
      size: 11,
      color: '000000',
      highlight: '',
      isBold: false,
      isItalic: false,
      isUnderlined: false,
    },
  },
  {
    id: 2,
    name: 'Test Document 2',
    body: {
      stuff:
        'This is a document with Times New Roman, white, black highlight, 24 pt font',
      font: 'Times New Roman',
      size: 24,
      color: 'ffffff',
      highlight: '000000',
      isBold: true,
      isItalic: true,
      isUnderlined: true,
    },
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
