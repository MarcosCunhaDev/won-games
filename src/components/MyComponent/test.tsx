import { render } from '@testing-library/react';

import MyComponent from '.';

describe('<MyComponent />', () => {
  it('should render the heading', () => {
    render(<MyComponent />);
    // expect(
    //   screen.getByRole('heading', { name: /MyComponent/i }).toBeInTheDocument()
    // );
  });
});
