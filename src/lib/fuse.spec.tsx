import { render } from '@testing-library/react';

import FuseReact from './fuse';

describe('FuseReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FuseReact />);
    expect(baseElement).toBeTruthy();
  });
});
