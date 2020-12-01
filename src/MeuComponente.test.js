import { render, screen } from '@testing-library/react';
import MeuComponente from './MeuComponente';



test('when there is no data', () => {
  const { container } = render(<MeuComponente />);
  expect(container).toMatchSnapshot();
});

test('when there is data', () => {
  const { container } = render(<MeuComponente isEnabled />);

  // expect(screen.getByText('PEixeinho')).toBeInTheDocument();
  // expect(screen.getByTestId('PEixeinho')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
