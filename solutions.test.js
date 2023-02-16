it('should check if sentence is pangram', function(){
    expect(isPangram('Cwm fjord bank glyphs vext quiz')).toEqual(true);
    expect(isPangram('Jink cwm, zag veldt, fob qursh pyx')).toBe(true);
    expect(isPangram('Cwm fjord bank glyphs vext quiz')).toBeTruthy();
});

it('should make sure numbers are not pangrams', function(){
    expect(isPangram('123123')).toBe(false);
})