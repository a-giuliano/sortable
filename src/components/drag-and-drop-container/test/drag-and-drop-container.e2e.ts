import { newE2EPage } from '@stencil/core/testing';

describe('drag-and-drop-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<drag-and-drop-container></drag-and-drop-container>');

    const element = await page.find('drag-and-drop-container');
    expect(element).toHaveClass('hydrated');
  });
});
