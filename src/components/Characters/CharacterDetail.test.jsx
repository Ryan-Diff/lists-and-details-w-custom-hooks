import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { getCharacterById } from '../../Services/avatarApi';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../Services/avatarApi.js');

describe('CharacterDetail component', () => {
  it('display a character', () => {
    getCharacterById.mockResolvedValue({
      id: 1,
      name: 'Aang',
      imageUrl: 'Aang',
      position: 'Dead Avatar',
      affiliation: 'The World'
    });
    render(<MemoryRouter initialEntries={['/character/1']}>
      <Route path="/character/:id" component={CharacterDetail}/>
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Aang');
      screen.getByAltText('Aang');
      screen.getByText('Dead Avatar');
      screen.getByText('The World');
    });

  });
});