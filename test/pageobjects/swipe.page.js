class SwipePage  {

  get menuSwipe () { return $("~Swipe")}
  
  async abrirMenuSwipe() {
    const menu = this.menuSwipe;
    await menu.waitForDisplayed({ timeout: 5000 });
    await menu.click();
}
}

export default new SwipePage()