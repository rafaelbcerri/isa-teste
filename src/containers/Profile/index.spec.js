import axios from 'axios';
import {
  render,
  waitFor,
  cleanup,
  screen,
  fireEvent,
  act
} from '@testing-library/react';

import Profile from '.';

describe.only('Profile', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup()
  })

  describe('when component starts', () => {
    it('should show Loading text', () => {
      let container;

      act(() => {
        const rootElem = render(<Profile />);
        container = rootElem.container;
      });

      expect(container).toMatchSnapshot();
    });
  })

  describe('when user is loaded', () => {
    it('should render', async () => {
      let container;
      const axiosGetSpy = jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: {
          name: 'Robot',
          email: 'robot@example.com'
        }});

      act(() => {
        const rootElem = render(<Profile />);
        container = rootElem.container;
      });

      await waitFor(() => expect(axiosGetSpy).toBeCalled());

      expect(container).toMatchSnapshot();
    });

    describe('and card button is clicked', () => {
      it('should open an alert', async () => {
        window.alert = jest.fn();
        axios.get = jest.fn().mockResolvedValueOnce({
          data: { name: 'Robot', email: 'robot@example.com' }
        });

        act(() => {render(<Profile />)});
        await waitFor(() => expect(axios.get).toBeCalled());
        act(() => {fireEvent.click(screen.getByText(/Enviar/))});

        expect(window.alert).toBeCalled();
      });
    });
  });
});