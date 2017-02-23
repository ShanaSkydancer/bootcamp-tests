var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var expectedResults = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

describe('The findItemsOver function', function(){

    it('should findItemsOver correctly', function(){
        assert.deepEqual(findItemsOver20(itemList, 20), expectedResults);
    });
});
