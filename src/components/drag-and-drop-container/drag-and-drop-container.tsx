import { Component, Host, h, Prop } from '@stencil/core';
import Sortable from 'sortablejs';

@Component({
  tag: 'drag-and-drop-container',
  styleUrl: 'drag-and-drop-container.css',
  scoped: true,
})
export class DragAndDropContainer {
  @Prop() containerTitle: string;
  @Prop() group: string;

  private container: HTMLElement;

  componentDidLoad() {
    Sortable.create(this.container, {
      animation: 150,
      group: this.group,
      ghostClass: 'ghost',
    });
  }

  render() {
    return (
      <Host>
        <h1>{this.containerTitle}</h1>
        <div ref={el => (this.container = el as HTMLElement)}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
