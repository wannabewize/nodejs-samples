//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1'});


class User extends Sequelize.Model {}
User.init({
    userId: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(100), allowNull: false }
}, {sequelize, timestamps: false});

class Profile extends Sequelize.Model {}
Profile.init({
    address: Sequelize.STRING,
    phone: Sequelize.STRING(13)
}, {sequelize, timestamps: false });


async function doOneway() {
    // 단방향
    User.hasOne(Profile);

    try {
        await User.sync({});
        await Profile.sync({});

        console.log('sync Scheme success');

        let user = await User.create({name:'btc'}, {logging: false});
        let profile = await Profile.create({address:'Korea', phone:'010-1234-5678'}, {logging: false});

        console.log('Create Success');

        await user.setProfile(profile);

        const ret = await User.findAll({include: [{model: Profile}]});
        const findUser = ret[0];

        console.log('find user :', findUser.name);
        
        const findProfile = findUser.Profile;
        console.log('Profile :', findProfile.address, findProfile.phone);
    }
    catch ( error ) {
        console.log('Error :', error);
    }
}

async function doByway() {
    // 쌍방향 쿼리 가능
    User.hasOne(Profile);
    Profile.belongsTo(User);

    try {
        await User.sync();
        await Profile.sync();

        console.log('sync Scheme success');

        let user = await User.create({name:'btc'});
        let profile = await Profile.create({address:'Korea', phone:'010-1234-5678'});
        await user.setProfile(profile);

        console.log('Create Success');

        const ret = await Profile.findAll({include: [{model: User}]});
        const findProfile = ret[0];
        console.log('address:', findProfile.address, 'phone:', findProfile.phone);

        const findUser = findProfile.User;
        console.log('use :', findUser.name);

    }
    catch ( error ) {
        console.log('Error :', error);
    }
}


doOneway();
// doByway();
