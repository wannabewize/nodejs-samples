var Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1' });

const Actor = sequelize.define('Actor', {
    name: { type: Sequelize.STRING(100), allowNull: false }
}, { timestamps: false });

const Movie = sequelize.define('Movie', {
    name: { type: Sequelize.STRING(100), allowNull: false }
}, { timestamps: false });


async function doManyToMany() {
    try {
        Movie.hasMany(Actor);
        // hasMany로 하면 Circular 관계 에러 발생
        // Filmography 테이블 생성
        Actor.belongsToMany(Movie, { through: 'Filmography' });

        await sequelize.sync({});

        let actor1 = await Actor.create({ name: 'actor1' }, { log: false });
        let actor2 = await Actor.create({ name: 'actor2' }, { log: false });
        let actor3 = await Actor.create({ name: 'actor3' }, { log: false });

        let movie1 = await Movie.create({ name: 'movie1' }, { log: false });
        let movie2 = await Movie.create({ name: 'movie2' }, { log: false });

        await movie1.addActor(actor1);
        await movie1.addActor(actor3);
        await movie2.addActors([actor2, actor3]);

        await actor1.setMovies(movie1);
        await actor1.setMovies(movie1);        
        await actor2.setMovies([movie1, movie2]);

        // 확인
        const findActor = await Actor.findOne({where: {name: 'actor3'}});
        console.log('findActor:', findActor.name);
        const findMovies = await findActor.getMovies();

        console.log('findMovies:', findMovies);

    } catch (error) {
        console.error(error);
    }
}


(async () => {
    try {
        await doManyToMany();
        sequelize.close();
    } catch (error) {
        console.error(error);
    }
})();