QUnit.test("Checking change of title", function (assert) {
    var list = document.getElementsByClassName('subsubcategory-level')[0];
    var liElem = list.getElementsByTagName('li')[0];
    var elemVal = liElem.innerText;
    var elemLink = liElem.getAttribute('data-link');
    liElem.click();
    
    var pageTitle = document.title;
    assert.equal(pageTitle, elemVal);
});

QUnit.test("Checking change of content", function (assert) {
    var done = assert.async();
    var list = document.getElementsByClassName('subsubcategory-level')[0];
    var liElem = list.getElementsByTagName('li')[0];
    var elemLink = liElem.getAttribute('data-link');
    liElem.click();
    
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var newData = document.getElementById('content').innerHTML;
            assert.equal(newData, xmlHttpReq.responseText)
            done();
        }    
    }
    xmlHttpReq.open('GET', elemLink, true);
    xmlHttpReq.send();
});