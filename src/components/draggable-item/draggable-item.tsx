import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'draggable-item',
  styleUrl: 'draggable-item.css',
  shadow: true,
})
export class DraggableItem {
  @Prop() taskTitle: string;
  @Prop() dueDate: string;
  @Prop() assigneeAvatar: string;

  render() {
    return (
      <Host>
        <h1>{this.taskTitle}</h1>
        <div class="bottom-row">
          <ion-icon size="32" name="calendar-outline"></ion-icon>
          <p>{this.dueDate}</p>
          <img src={this.assigneeAvatar} />
        </div>
      </Host>
    );
  }
}
