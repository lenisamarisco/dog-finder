import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogDetails from './dogDetails.js';


// Mock data for dogs
const dogs = [
  {
    id: 1,
    name: "Fido",
    breed: "Golden Retriever",
    age: 3,
    description: "Friendly and playful",
  },
];

test('renders', () => {
  render(
    <MemoryRouter>
      <DogDetails dog={dogs[0]} />
    </MemoryRouter>
  );
});
