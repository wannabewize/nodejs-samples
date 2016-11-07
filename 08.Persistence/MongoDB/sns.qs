> db.user.insert({_id:"sj", name:"수지"});
> db.user.insert({_id:"iu", name:"아이유"});
> db.user.insert({_id:"ty", name:"태연"});

> db.user.find();
{ "_id" : "iu", "name" : "아이유" }
{ "_id" : "ty", "name" : "태연" }
{ "_id" : "sj", "name" : "수지" }

// 글쓰기

> db.feed.insert({writer:"iu", message:"아이유가 쓴 글1"});
> db.feed.insert({writer:"iu", message:"아이유가 쓴 글2"});
> db.feed.insert({writer:"sj", message:"수지가 쓴 글1"});
> db.feed.insert({writer:"sj", message:"수지가 쓴 글2"});


> db.feed.find();
{ "_id" : ObjectId("5787c2ecd5e1591c6a92c664"), "writer" : "iu", "message" : "아이유가 쓴 글1" }
{ "_id" : ObjectId("5787c2efd5e1591c6a92c665"), "writer" : "iu", "message" : "아이유가 쓴 글2" }
{ "_id" : ObjectId("5787c2f3d5e1591c6a92c666"), "writer" : "sj", "message" : "수지가 쓴 글1" }
{ "_id" : ObjectId("5787c2f5d5e1591c6a92c667"), "writer" : "sj", "message" : "수지가 쓴 글2" }

// 친구 관계