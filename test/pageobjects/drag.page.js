class DragPage  {

  get menuDrag () { return $("~Drag")}
  
  async abrirMenuDrag() {
    const menu = this.menuDrag;
    await menu.waitForDisplayed({ timeout: 5000 });
    await menu.click();
  }
}

export default new DragPage()