import { newSpecPage } from '@stencil/core/testing';
import { DragAndDropContainer } from '../drag-and-drop-container';

describe('drag-and-drop-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DragAndDropContainer],
      html: `<drag-and-drop-container></drag-and-drop-container>`,
    });
    expect(page.root).toEqualHtml(`
      <drag-and-drop-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </drag-and-drop-container>
    `);
  });
});
