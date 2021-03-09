import React from 'react';

import { render, cleanup } from '@testing-library/react';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // 1st
    it('render', () => {
        render(<About />);
    });
    // 2nd
    it('matches snapshot DOM node structure', () => {
        // render about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})