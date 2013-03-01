describe("supertest suite", function() {
  it("testing with the help of super-agent", function(done) {
    user
      .get("/hello")
      .end(function (res) {
        res.should.be.html;
        res.should.have.status(200);
        res.should.have.header("Content-Length", "12");
        res.text.should.equal("Hello world!");
        done();
    });
  });

  it("submits form", function(done) {
    user
      .get("/form")
      .query({"email": "test@exmple.com"})
      .end(function (res) {
        res.should.have.status(302);
        done();
    });
  });
});
