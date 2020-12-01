import {
  render,
  screen,
  fireEvent,
  act
} from '@testing-library/react';
import checkPropTypes from 'check-prop-types';

import Card from '.';

describe('Card', () => {
  let onClick = jest.fn();

  it('should check propTypes', () => {
    expect(
      checkPropTypes(
        { title: Card.propTypes.title },
        {},
        'prop',
        'Card',
      ),
    ).toBe(
      'Failed prop type: The prop `title` is marked as required in `Card`, but its value is `undefined`.',
    );
    expect(
      checkPropTypes(
        { text: Card.propTypes.text },
        {},
        'prop',
        'Card',
      ),
    ).toBe(
      'Failed prop type: The prop `text` is marked as required in `Card`, but its value is `undefined`.',
    );
    expect(
      checkPropTypes(
        { onClick: Card.propTypes.onClick },
        {},
        'prop',
        'Card',
      ),
    ).toBe(
      'Failed prop type: The prop `onClick` is marked as required in `Card`, but its value is `undefined`.',
    );
  });

  describe('when props are correct', () => {
    it('should renders the component correctly', () => {
      const { container } = render(
        <Card
          title='Title'
          text='Example text'
          onClick={onClick}
        />,
      );
      expect(container).toMatchSnapshot();
    });

    describe('and send button is clicked', () => {
      it('should call onClick', () => {
        render(
          <Card
            title='Title'
            text='Example text'
            onClick={onClick}
          />,
        );
        const sendButton = screen.getByText(/Enviar/);
        fireEvent.click(sendButton);
        expect(onClick).toBeCalled();
      });

      it('should hide title', () => {
        const { getByText } =render(
          <Card
            title='Title'
            text='Example text'
            onClick={onClick}
          />,
        );
        const sendButton = getByText(/Esconde titulo/);
        const title = getByText(/Title/);
        expect(title).toBeInTheDocument();

        act(() => {
          fireEvent.click(sendButton);
        });

        expect(title).not.toBeInTheDocument();
      });
    });
  });
});