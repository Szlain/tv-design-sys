import { render } from '@testing-library/react';

import { JsxButton } from './fuse';

describe('FuseReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsxButton />);
    expect(baseElement).toBeTruthy();
  });
});
