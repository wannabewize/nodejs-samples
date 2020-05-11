//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1'});
const Op = Sequelize.Op;

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


async function doOneway1() {    
    try {
        // 단방향
        User.hasOne(Profile);
        await User.sync({logging: false});
        await Profile.sync({logging: false});

        let user = await User.create({name:'btc'}, {logging: false});
        let profile = await Profile.create({address:'Korea', phone:'010-1111-1111'}, {logging: false});

        console.log('Create Success');

        await user.setProfile(profile);

        const ret = await User.findAll({include: [{model: Profile}]}, {log: false});
        const findUser = ret[0];

        console.log('find user :', findUser.name);
        
        const findProfile = findUser.Profile;
        console.log('Profile :', findProfile.address, findProfile.phone);
    }
    catch ( error ) {
        console.log('Error :', error);
    }
}

async function doOneway2() {
    // 단방향
    Profile.belongsTo(User);

    try {
        await User.sync({});
        await Profile.sync({});

        let user = await User.create({name:'twice'}, {log: false});
        let profile = await Profile.create({address:'Korea', phone:'010-2222-2222'}, {log: false});
                        
        await profile.setUser(user);

        const ret = await Profile.findAll({include: [{model: User}]});
        const findProfile = ret[0];
        console.log('address:', findProfile.address, 'phone:', findProfile.phone);
        const findUser = findProfile.User;
        console.log('user :', findUser.name);
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

        let user = await User.create({name:'black pink'});
        let profile = await Profile.create({address:'Korea', phone:'010-3333-3333'});

        await user.setProfile(profile);
        await profile.setUser(user);

        console.log('== Profile find ==');
        const ret1 = await Profile.findAll({include: [{model: User}]});
        const findProfile1 = ret1[0];
        console.log('address:', findProfile1.address, 'phone:', findProfile1.phone);

        const findUser1 = findProfile1.User;
        console.log('name from profile :', findUser1.name);

        console.log('== User find ==');
        const ret2 = await User.findAll({include: [{model: Profile}]});
        const findUser2 = ret2[0];

        console.log('find user :', findUser2.name);
        
        const findProfile2 = findUser2.Profile;
        console.log('Profile :', findProfile2.address, findProfile2.phone);        

    }
    catch ( error ) {
        console.log('Error :', error);
    }
}

(async () => {
    doOneway1();
    // doOneway2();
    // doByway();
    sequelize.close();
})();
