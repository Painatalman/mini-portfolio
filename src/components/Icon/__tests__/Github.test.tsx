import { render, screen } from '@testing-library/react';

import { Github } from '../Github';

describe('{pascalCase name}', () => {
  it('renders with default width', () => {
    render(<Github />);

    const el = screen.getByRole('presentation');
    expect(el).toHaveAttribute('width', '32');
  });

  it('renders with custom width', () => {
    render(<Github width={8} />);

    const el = screen.getByRole('presentation');
    expect(el).toHaveAttribute('width', '8');
  });
});
