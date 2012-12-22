test( 'valid identifiers', function() {
    var validIdentifiers = [
        '',
        'a',
        'aa',
        'aaa',
        'aaaa',
        'aaaaa',
        'a1',
        'a11',
        'a1a',
        'a11aa',
        'a11aa',
        'aa1aa',
        'abc',
        '$',
        '$1',
        '$11',
        '$a',
        '$_',
        '$_a',
        '$a_',
        '$_a1',
        '$1a_',
        '$1_a',
        '$111',
        '$aaa',
        '$AAA',
        '$___',
        '$$$$',
        'a$',
        'aa$',
        'a1$',
        'a1_$',
        'a11_$',
        'a_11$',
        'a__11$',
        'aa11__$',
        'aa__11$',
        'aaaa___$',
        'aaaa$$$$',
        'a$$$___',
        'a11$___',
        'a$_',
        'A',
        'A3',
        'A3$',
        'A33$',
        'AA33$$$',
        'A_3$',
        'A_$3',
        'A$_3',
        'A3_$',
        'AA_3$',
        'AA_$3',
        'AA$_3',
        'AA3_$',
        'AAA_3$',
        'AAA_$3',
        'AAA$_3',
        'AAA3_$',
        'A_33$',
        'A_$33',
        'A$_33',
        'A33_$',
        'A_3$$',
        'A_$$3',
        'A$$_3',
        'A3_$$',
        'A__3$',
        'A__$3',
        'A$__3',
        'A3__$',
        '_',
        '_A3',
        '_A3$',
        '_A33$',
        '_AA33$$$',
        '_A_3$',
        '_A_$3',
        '_A$_3',
        '_A3_$',
        '_AA_3$',
        '_AA_$3',
        '_AA$_3',
        '_AA3_$',
        '_AAA_3$',
        '_AAA_$3',
        '_AAA$_3',
        '_AAA3_$',
        '_A_33$',
        '_A_$33',
        '_A$_33',
        '_A33_$',
        '_A_3$$',
        '_A_$$3',
        '_A$$_3',
        '_A3_$$',
        '_A__3$',
        '_A__$3',
        '_A$__3',
        '_A3__$',
        'a.b',
        'a.b.c',
        'a.b.c.d',
        'a.b.c.d.e',
        'a.b.c.d.e.f',
        'a.b.c.d.e.f.g',
        'a.b.c.d.e.f.g.h',
        'a.b.c.d.e.f.g.h.i',
        'a.b.c.d.e.f.g.h.i.j',
        'a.b.c.d.e.f.g.h.i.j.k',
        'a.b.c.d.e.f.g.h.i.j.k.l',
        'a.b.c.d.e.f.g.h.i.j.k.l.m',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.y',
        'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.y.z',
        'a1.b1',
        'a11.b11',
        'a$.b$',
        '$a.$b',
        '$$.$$',
        'a.a',
        'aa.aa',
        'aa.$$',
        'aa.$$$',
        'aa.$$.aa',
        'aa.$$.aa.$$',
        'a_.b_',
        '_a._b',
        '__.__',
        'a.a',
        'aa.aa',
        'aa.__',
        'aa.___',
        'aa.__.aa',
        'aa.__.aa._',
        'a_$.b_',
        '_a.$_b',
        '__$.$__',
        'a.$a$',
        'aa$.$aa',
        'aa.__$',
        'aa.___$',
        'aa.__$.aa',
        'aa.__$.aa._$'
    ];
    for ( var i = 0; i < validIdentifiers.length; i++ ) {
        var nsString = validIdentifiers[i];
        ok( namespace( nsString ), 'Valid namespace "' + nsString + '"' );
    }
});

test( 'invalid identifiers', function () {
    var invalidIdentifiers = [
        ' ',
        '\n',
        '\t',
        '\r',
        '\b',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '0a',
        '1a',
        '2a',
        '3a',
        '4a',
        '5a',
        '6a',
        '7a',
        '8a',
        '9a',
        '10a',
        '11a',
        '12a',
        '13a',
        '14a',
        '15a',
        '16a',
        '17a',
        '18a',
        '19a',
        '0$',
        '1$',
        '2$',
        '3$',
        '4$',
        '5$',
        '6$',
        '7$',
        '8$',
        '9$',
        '10$',
        '11$',
        '12$',
        '13$',
        '14$',
        '15$',
        '16$',
        '17$',
        '18$',
        '19$',
        '0_',
        '1_',
        '2_',
        '3_',
        '4_',
        '5_',
        '6_',
        '7_',
        '8_',
        '9_',
        '10_',
        '11_',
        '12_',
        '13_',
        '14_',
        '15_',
        '16_',
        '17_',
        '18_',
        '19_',
        '\na',
        ' a',
        'a ',
        ' a ',
        ' 3 ',
        '3 ',
        ' 3',
        ' 3 ',
        '%',
        ' %',
        ' % ',
        ' & ',
        ' # ',
        '#',
        ' "',
        '"',
        '€',
        ' €',
        '€ ',
        '!',
        ' !',
        ' ! ',
        '##',
        '?',
        '+',
        '-',
        '++',
        '--',
        '*',
        '**',
        '/',
        '\\',
        '(',
        ')',
        ' (',
        ' )',
        '=',
        '==',
        '===',
        '´',
        '`',
        '^',
        '\'',
        '¨',
        'ä',
        'Ä',
        'ö',
        'Ö',
        'å',
        'Å',
        ']',
        '[',
        '}',
        '{',
        'a\na',
        'a a',
        'aa ',
        'a a ',
        'a 3 ',
        'a3 ',
        'a 3',
        'a 3 ',
        'a%',
        'a %',
        'a % ',
        'a & ',
        'a # ',
        '#',
        'a "',
        'a"',
        'a€',
        'a €',
        'a€ ',
        'a!',
        'a !',
        'a ! ',
        'a##',
        'a?',
        'a+',
        'a-',
        'a++',
        'a--',
        'a*',
        'a**',
        'a/',
        'a\\',
        'a(',
        'a)',
        'a (',
        'a )',
        'a=',
        'a==',
        'a===',
        'a´',
        'a`',
        'a^',
        'a\'',
        'a¨',
        'aä',
        'aÄ',
        'aö',
        'aÖ',
        'aå',
        'aÅ',
        'a]',
        'a[',
        'a}',
        'a{',
        '7777a',
        '0000a',
        '000a000',
        '0aaaa0',
        '0a0a0a',
        '0a0a0a0',
        'a.b\nc',
        '1.a',
        'a.1.b',
        'a.b.c.1d',
        '1.2.3',
        '$.€',
        'a.ä.b',
        'a.b.#',
        'aaa.bbb.ccc€',
        'aaa.111.bbb',
        'AA.BB.3C',
        'A1.B2.C3%'
    ];
    ok( true, 'yeh' );
    throws( function () { throw 'Aha' }, 'hmmmm');
    for ( var i = 0; i < invalidIdentifiers.length; i++ ) {
        var nsString = invalidIdentifiers[i];
        try {
            namespace( nsString );
            ok( false, 'Failed to identify an invalid namespace "' + nsString + '"' );
        } catch ( err ) {
            ok( true, 'Invalid namespace detected correctly "' + nsString + '". Reason: ' + err );
        }
    }
});

test( 'root object in global', function () {
    if ( 'org' in window ) {
        delete window.org;
    }
    var org = namespace( 'org' );
    ok( window.org, 'Defining namespace "org" should create window.a' );
    ok( typeof window.org === 'object', 'The root object "org" is an object' );
    deepEqual( namespace._cache[ 'org' ], org, '"org" should be in the cache' );
});

test( 'example', function () {
    namespace( 'com.userpixel.test' ).hello = function ( str ) {
        return 'Hello ' + str + '!';
    }

    equal( com.userpixel.test.hello( 'world' ), 'Hello world!', 'The hello world example works!' );
})