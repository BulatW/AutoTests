describe('Покупка_аватара', function () {

    it('Покупка_аватара', function () {
         cy.visit('https://pokemonbattle.me/');
        
         cy.get(':nth-child(1) > .auth__input').type("bulatkamalov1405@mail.ru");
         cy.get('#password').type('711339Qwe');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.available > button').first().click();
          cy.wait(2000);
         cy.get('.credit').type('5555 5555 5555 5599');
          cy.wait(2000);
         cy.get('.k_input_ccv').type('125');
          cy.wait(2000);
         cy.get('.k_input_date').type('1125');
          cy.wait(2000);
         cy.get('.k_input_name').type('Badim_Patitov');
          cy.wait(2000);
         cy.get('.pay-btn').click();
          cy.wait(2000);
         cy.get('#cardnumber').type('56456');
          cy.wait(2000);
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');




        
         })

    });