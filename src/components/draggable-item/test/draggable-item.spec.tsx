import { newSpecPage } from '@stencil/core/testing';
import { DraggableItem } from '../draggable-item';

describe('draggable-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DraggableItem],
      html: `<draggable-item></draggable-item>`,
    });
    expect(page.root).toEqualHtml(`
      <draggable-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </draggable-item>
    `);
  });
});
