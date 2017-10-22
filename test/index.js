const indextest = require('../src/index')
const assert = require('chai').assert

describe('check leave a message information',function(){
    describe('check e-mail',function(){
        it('should have "@" in it',function(){
            assert.isFalse(indextest.checkEmail("asdf.asdf"))
        })
        it('should not have two "@" in it',function(){
            assert.isFalse(indextest.checkEmail("asdf@@104.asdf"))
        })
        it('should not hvae special character',function(){
            assert.isFalse(indextest.checkEmail("ab$c@104.com"))
            assert.isFalse(indextest.checkEmail("a*bc@104.com"))
            assert.isFalse(indextest.checkEmail("abc@104.co%m"))
            assert.isFalse(indextest.checkEmail("ab我c@104.com"))
        })
    })
    describe('check name',function(){
        // it('should not hvae special characte',function(){
        //     assert.isFalse(indextest.checkName("peter"))
        // })        
        it('should at least 3 english alphabet',function(){
            assert.isFalse(indextest.checkName(""))
            assert.isFalse(indextest.checkName("a"))
            assert.isFalse(indextest.checkName("ab"))
            assert(indextest.checkName("abc"))
        })
    })
})
