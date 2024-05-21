describe("访问我的个人网站", () => {
  it("访问我的个人网站", () => {
    cy.visit("http://ahjie.com");
  });
  it("登录", () => {
    cy.get(".el-button").click();
  });
});
