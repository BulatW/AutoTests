import * as d from "../helpers/default_data.json"
import * as mainP from "../locators/main_page.json"
import * as result from "../locators/result_page.json"
import * as recovery from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {
 
    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(mainP.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
          });

    afterEach('Конец теста', function () {
        cy.get(result.close).should('be.visible');
        });
   

    it('Верный пароль и верный логин', function () {
         
         cy.get(mainP.email).type(d.login);
         cy.get(mainP.password).type(d.password);
         cy.get(mainP.login_button).click();

         cy.wait(500);

         cy.get(result.title).contains("Авторизация прошла успешно");
     
     })

     it('Неверный пароль и верный логин', function () {
        
        cy.get(mainP.email).type(d.login);
        cy.get(mainP.password).type( "iLoveqastudio7");
        cy.get(mainP.login_button).click();

        cy.get(result.title).contains("Такого логина или пароля нет");
        })

     it('Верный пароль и неверный логин', function () {
        
        cy.get(mainP.email).type("german@dolnikof.ru");
        cy.get(mainP.password).type( d.password);
        cy.get(mainP.login_button).click();
    
        cy.get(result.title).contains("Такого логина или пароля нет");
        })

    it('Проверка валидации почты', function () {
           
        cy.get(mainP.email).type("germandolnikov.ru");
        cy.get(mainP.password).type( d.password);
        cy.get(mainP.login_button).click();
    
        cy.get(result.title).contains("Нужно исправить проблему валидации");
        })

    it('Проверка восстановления пароля', function () {
               
        cy.get(mainP.fogot_pass_btn).click();
        cy.get(recovery.email).type(d.login);
        cy.get(recovery.send_button).click();

        cy.get(result.title).contains("Успешно отправили пароль на e-mail");
        })

    it('Проверка  на приведение к строчным буквам в логине', function () {
           
        cy.get(mainP.email).type("GerMan@Dolnikov.ru");
        cy.get(mainP.password).type( d.password);
        cy.get(mainP.login_button).click();
        
        cy.get(result.title).contains("Авторизация прошла успешно");
          })
 
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome