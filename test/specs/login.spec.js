import loginPage from "../pageobjects/login.page.js";

describe('Funcionalidade: Login', () => {
    beforeEach(async() => {
        await loginPage.abrirMenu()
    });
    afterEach(async() => {
        await browser.relaunchActiveApp()
    });

    it('Deve fazer login com sucesso', async () => {
        await loginPage.preencherLogin('alex@teste.com', '12345678')
        await expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
        await $('id=android:id/button1').click()
    });
    // Teste negativo
    it('Deve falhar ao fazer login com email inválido', async () => {
        await loginPage.preencherLogin('alexteste.com', '12345678')
        await loginPage.mensagemErro('Please enter a valid email address')      
    });
    it('Deve falhar ao fazer login com senha inválida', async () => {
        await loginPage.preencherLogin('alex@teste.com', '12345')
        await loginPage.mensagemErro('Please enter at least 8 characters')
    });
});