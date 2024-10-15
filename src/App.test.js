// App.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { setCity } from './redux/mainSlice';
import { handleChangeSearchKey } from './redux/actions';

const mockStore = configureStore([]);

describe('App Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      city: { name: 'Test City', country: 'Test Country' },
      weather: {
        condition: { text: 'Sunny' },
        last_updated: '2023-10-15',
        temp_c: 25,
        feelslike_c: 24,
        windchill_c: 23,
        heatindex_c: 26,
        dewpoint_c: 20,
        wind_mph: 10,
        wind_degree: 180,
        pressure_mb: 1013,
        precip_mm: 0,
        humidity: 50,
        cloud: 20,
        gust_kph: 15,
      },
      cities: [{ id: 1, name: 'Test City' }, { id: 2, name: 'Another City' }],
    });
  });

  test('renders header and input', () => {
    render(
        <Provider store={store}>
          <App />
        </Provider>
    );

    expect(screen.getByText('Weather App')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('displays weather information when a city is selected', () => {
    render(
        <Provider store={store}>
          <App />
        </Provider>
    );

    expect(screen.getByText('Test City - Test Country')).toBeInTheDocument();
    expect(screen.getByText('Weather: Sunny')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 25 °C')).toBeInTheDocument();
  });

  test('dispatches action on city selection', () => {
    const expectedActions = [{ type: setCity.type, payload: { id: 1, name: 'Test City' } }];

    render(
        <Provider store={store}>
          <App />
        </Provider>
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });

    expect(store.getActions()).toEqual(expect.arrayContaining(expectedActions));
  });
});
