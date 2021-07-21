// App.test.js
import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks());// apos cada teste o mock é limpo
it('fetch joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',// simulação
    joke: 'Whiteboards ... are remarkable.',// simulação
    status: 200,// simulação
  };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  const { findByText } = render (<App />);
  await findByText('Whiteboards ... are remarkable.');

  // OUTRO JEITO

  // jest.spyOn(global, "fetch")
  // global.fetch.mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(joke),
  // });
  // const { findByText } = render(<App />);
  // await findByText('Whiteboards ... are remarkable.');// findBytext é uma função assincrona
  // expect(global.fetch).toBeCalledTimes(1);
  // expect(global.fetch).toBeCalledWith(
  //   'https://icanhazdadjoke.com/',
  //   {"headers": {"Accept": "application/json"}}
  // );
});