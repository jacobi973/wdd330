const {findAnwser} = require('./week5');

describe('findAnwser()', () => {
    it('should handle true statement', ()=>{
        const anwser = true;
        expect(findAnwser(anwser)).toEqual(true)
    });

});

describe('findAnwser()', () => {
    it('should handle false statement', ()=>{
        const anwser = false;
        expect(findAnwser(anwser)).toEqual('WOW')
    });

});