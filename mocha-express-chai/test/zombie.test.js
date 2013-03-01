describe("zombie suite", function() {

  before(function() {
    this.server = app.listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: "http://localhost:3000" });
  })

  after(function(done){
    this.server.close(done);
  })

  describe("plain page", function(){
    it("submits form", function(done) {
      var browser = this.browser;
      browser.visit("/", function(){
        browser.success.should.be.true;
        browser.text("title").should.eql("Hello world");
        browser
          .fill("email", "test@exmple.com")
          .pressButton("Save", function() {
            // Form submitted, new page loaded.
            browser.success.should.be.true;
            done();
          })
      })
    })
  })

  describe("javascript page", function(){
    it("contains #content div", function(done){
      var browser = this.browser;
      browser.visit("/javascript", function(){
        browser.success.should.be.true;
        browser.query("#content").should.exist;
        done();
      })
    })

    it("add div to page", function(done){
      var browser = this.browser;
      browser.visit("/javascript", function(){
        browser.success.should.be.true;
        var content = browser.query("#content");
        browser.fire("click", content, function(){
          browser.query(".my-data").should.exist;
          done();
        })
      })
    })
  })

})
