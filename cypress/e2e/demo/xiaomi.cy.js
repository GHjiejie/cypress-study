describe("小米商城", () => {
  // 使用it函数定义测试用例，第一个参数是测试用例的名称，第二个参数是测试用例的具体实现
  it("访问小米商城", () => {
    cy.visit("https://www.mi.com/");
  });
  it("搜索小米11", () => {
    cy.get(".mi-btn > .shortcut__item--wrapper > .micon").click();
    // cy.get(".search").type("小米11");
  });
});
