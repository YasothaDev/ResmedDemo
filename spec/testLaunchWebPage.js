var selenium = require('selenium-webdriver');

describe('Test to Launch Web page', function() {

    //Open ResMed website
    beforeEach(function(done){
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).build();
        this.driver.get('https://www.resmed.com/').then(done);
    },250000);

    afterEach(function(done){
        this.driver.quit().then(done);
    },250000);

    //Test Navigation link to Support and search for Products
    it('Should show the correct URL', function(done){
        
        this.driver.findElement(selenium.By.linkText('Patients and families')).click();

        this.driver.findElement(selenium.By.linkText('Support')).click();

        this.driver.findElement(selenium.By.xpath('//*[@id="dummy-content-search-text"]')).click();

        this.driver.findElement(selenium.By.name('q')).sendKeys("Products"); 
        
        this.driver.sleep(5000);

        this.driver.getCurrentUrl().then(function(value){
            expect(value).toContain('/consumer');
                
        done();
        });

    });

});

     



