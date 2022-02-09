import { newE2EPage } from '@stencil/core/testing';

describe('draggable-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<draggable-item></draggable-item>');

    const element = await page.find('draggable-item');
    expect(element).toHaveClass('hydrated');
  });
});
