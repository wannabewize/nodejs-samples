//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1' });

const Team = sequelize.define('Team', {
   name: Sequelize.STRING(100)
}, { timestamps: false });

const Member = sequelize.define('Member', {
   name: Sequelize.STRING(100)
}, { timestamps: false });

async function doOneToMany1() {
   Team.hasMany(Member, { foreignKey: 'teamId' });
   // Memebers에 teamId FK 생성

   try {
      await Team.sync();
      await Member.sync();

      const team = await Team.create({ name: 'team1' });
      const member1 = await Member.create({ name: 'member1' });
      const member2 = await Member.create({ name: 'member2' });

      await team.addMember(member1);
      await team.addMember(member2);

      // include를 넣으면 자동으로 join 한다.
      const ret1 = await Team.findAll({
         include: [{model: Member}]});
      
      const findTeam1 = ret1[0];

      console.log('team name:', findTeam1.name);
      
      // 프로퍼티로 바로 접근
      const members = findTeam1.Members;

      for(item of members) {
         console.log('member name:', item.name);
      }
   }
   catch (error) {
      console.log('Error :', error);
   }
}

async function doOneToMany2() {
   Member.belongsTo(Team, { foreignKey: 'teamId' });
   // Memebers에 teamId FK 생성

   try {
      await Team.sync();
      await Member.sync();

      const team = await Team.create({ name: 'team1' });
      const member1 = await Member.create({ name: 'member1' });
      const member2 = await Member.create({ name: 'member2' });

      await member1.setTeam(team);
      await member2.setTeam(team);

      // include가 없으면 Join 하지 않은 결과만 전달
      const ret1 = await Member.findAll({});
      const findMember1 = ret1[0];
      console.log('member1 name:', findMember1.name);
      
      // include하지 않은 경우 get 함수를 사용한다. select 동작
      const findTeam1 = await findMember1.getTeam();
      console.log('member name:', findMember1.name, 'team name:', findTeam1.name);

      const findMember2 = ret1[1];
      console.log('member2 name:', findMember2.name);

      const findTeam2 = await findMember2.getTeam();
      console.log('member name:', findMember2.name, 'team name:', findTeam2.name);
   }
   catch (error) {
      console.log('Error :', error);
   }
}

(async () => {
   await doOneToMany1();
   // await doOneToMany2();
   sequelize.close();
})();
