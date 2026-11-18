import dragPage from "../pageobjects/drag.page.js"
//Referencia: https://webdriver.io/docs/api/mobile/dragAndDrop/

describe("Testes na tela DragDrop", () => {
  beforeEach(async () => {
    await dragPage.abrirMenuDrag();
    await driver.pause(1000);
  });

  it.skip("Deve arrastar a peça até o lugar certo", async () => {
    const peca_1 = await $("~drag-l1"); // Peça de origem
    const destino_1 = await $("~drop-l1"); // Slot de destino

    await peca_1.dragAndDrop(destino_1)
    await driver.pause(2000);
  });

  it("Deve montar o quebra-cabeça completo com dragAndDrop", async () => {
    // Mapeamento das peças de origem e seus respectivos destinos no tabuleiro
    const pecas = [
      { origem: "~drag-l1", destino: "~drop-l1" },
      { origem: "~drag-l2", destino: "~drop-l2" },
      { origem: "~drag-l3", destino: "~drop-l3" },
      { origem: "~drag-c1", destino: "~drop-c1" },
      { origem: "~drag-c2", destino: "~drop-c2" },
      { origem: "~drag-c3", destino: "~drop-c3" },
      { origem: "~drag-r1", destino: "~drop-r1" },
      { origem: "~drag-r2", destino: "~drop-r2" },
      { origem: "~drag-r3", destino: "~drop-r3" }
    ];

    // Executa o arrastar e soltar (dragAndDrop) para cada peça do quebra-cabeça
    for (let item of pecas) {
      const elementOrigem = await $(item.origem);
      const elementDestino = await $(item.destino);
      
      await elementOrigem.dragAndDrop(elementDestino);
      await driver.pause(500); // Pequena pausa para estabilizar o movimento na tela
    }

    // Resultado esperado após completar o quebra-cabeça
    const mensagem = await $('android=new UiSelector().text("Congratulations")');
    await expect(mensagem).toBeDisplayed();
    await driver.pause(2000);
  });
});