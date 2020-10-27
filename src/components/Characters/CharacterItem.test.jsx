import React from 'react';
import { render } from '@testing-library/react';
import Character from './CharacterItem';

describe('Character component', () => {
    it('renders a character', () => {
        const { asFragment } = render(
            <Character
              name='Ryan'
              photoUrl='Test'
            />);
            expect(asFragment()).toMatchSnapshot();
    });
});
