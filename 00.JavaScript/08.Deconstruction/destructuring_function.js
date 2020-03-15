function showIt1(title, director) {
    console.log(`showIt1 - 제목 : ${title}, 감독 : ${director}`);
}

showIt1('새로운 희망', '조지 루카스');

function showIt2(arg) {
    console.log(`showIt2 - 제목 : ${arg.title}, 감독 : ${arg.director}`);
}

const arg = {title: '제국의 역습', director: '어빈 커슈너'};
showIt2(arg);

// Object shorthand
function showIt3({title, director}) {
    console.log(`showIt3 - 제목 : ${title}, 감독 : ${director}`);
}

const title = '제다이의 귀환';
const director = '리처드 마퀸드';
showIt3({title, director});


function getCharactorInfo() {
    const character = '아나킨 스카이워커';
    const actor = '헤이든 크리스텐슨';
    return {character, actor}
}

const {character, actor} = getCharactorInfo();
console.log(`character: ${character}, actor: ${actor}`);