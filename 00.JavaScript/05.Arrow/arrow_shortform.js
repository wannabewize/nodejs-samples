function doIt( runner ) {
    runner();
}

doIt( () => { console.log('hahaha'); } );

// 1 sentence는 {} 생략 가능
doIt( () => console.log('hahaha') );


function doIt2( runner ) {
    const ret = runner();
    console.log('Do It2 :', ret);
}


doIt2( () => { return 10; } );

// 1줄 return 코드의 경우 {}, return 생략 가능
doIt2( () => 10 );