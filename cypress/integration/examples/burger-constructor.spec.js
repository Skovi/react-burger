describe('Приложение открывается', function () {
  it('Должно быть запущено по адресу localhost:3000', function () {
    cy.visit('http://localhost:3000');
  });

  const dragAndDrop = (index) => {
    cy.get('[data-cy="ingredient"]').eq(index).trigger('dragstart');
    cy.get('[data-cy="drop-target"]').trigger('drop');
  };

  it("Ингредиенты должны прокрутиться после нажатия на кнопку 'Соусы'", function () {
    cy.get("[class^=tab_tab]").contains("Соусы").click();
    cy.contains("Соус с шипами Антарианского плоскоходца");
  });

  it("Ингредиенты должны прокрутиться после нажатия на кнопку 'Начинки'", function () {
    cy.get("[class^=tab_tab]").contains("Начинки").click();
    cy.contains("Биокотлета из марсианской Магнолии");
  });

  it('Drag and Drop должен отрабатывать корректно', function () {
    dragAndDrop(0);
    cy.get('[data-cy="up-bun"]')
      .children().should(($children) => {
        expect($children).to.have.length(3);
      });
    cy.get('[data-cy="down-bun"]')
      .children().should(($children) => {
        expect($children).to.have.length(1);
      });
    dragAndDrop(1)
    cy.get('[data-cy="up-bun"]')
      .children().should(($children) => {
        expect($children).to.have.length(3);
      });
    cy.get('[data-cy="down-bun"]')
      .children().should(($children) => {
        expect($children).to.have.length(1);
      });
    dragAndDrop(2)
    dragAndDrop(3)
    dragAndDrop(4)
    dragAndDrop(5)
    cy.get('[data-cy="other-ingredients-container"]')
      .children().should(($children) => {
        expect($children).to.have.length(4);
      });
  });

  it("Должно открыться модальное окно после нажатия кнопки 'Продолжить', отображать детали ингредиента и закрывать модальное окно после нажатия на крестик", function () {
    cy.contains("Соус Spicy-X").click();
    cy.contains("Детали ингредиента").should("be.visible");
    cy.contains("Соус Spicy-X");
    cy.contains("20");
    cy.get("[class^=modal_close]").click();
    cy.contains("Детали ингредиента").should("not.exist");
  });

  it("Должен отработать оформление заказа, открытие\закрытие модального окна", function () {
    cy.get("[class^=button_button]").contains("Оформить заказ").click();
    cy.contains("Вход");
    cy.get("[class^=input__icon]").first().click();
    cy.get("input[name=email]").type("sko.v.i@yandex.ru");
    cy.get("[class^=input__icon]").last().click();
    cy.get("input[name=password]").type(`789456{enter}`);
    cy.contains("Соберите бургер");
    cy.get("button").contains("Оформить заказ").click();
    cy.contains("Загрузка...");
    cy.wait(20000);
    cy.contains("Идентификатор заказа").should("be.visible");
    cy.get("[class^=modal_close]").click();
    cy.contains("Идентификатор заказа").should("not.exist");
  });

}); 
