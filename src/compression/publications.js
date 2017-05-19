Meteor.publish(null, function () {
  return Logs.find();
});
Meteor.publish(null, function () {
  return Talksho.find();
});
Meteor.publish(null, function () {
  return Conversations.find();
});
Meteor.publish(null, function () {
  return Ratings.find();
});
Meteor.publish(null, function () {
  return Threads.find();
});
Meteor.publish(null, function () {
  return Posts.find({}, {
    sort: {
      createdAt: -1
    }
  });
});
Meteor.publish(null, function () {
  return Meteor.users.find();
});
/*

Meteor.publish(null , function(){
  return Replies.find();
});


Meteor.publish(null , function(){
  return Videos.find();
});

Meteor.publish(null, function(){
  return Images.find();
});

Meteor.publish("user", function(id){
  return Meteor.users.find({_id: id});
});

Meteor.publish("speakers", function(){
  return Meteor.users.find({roles: "speaker"});
});


Meteor.publish("myposts", function(){
  return Posts.find({author: this.userId}, {sort: {createdAt : -1}});
});

Meteor.publish("stackpostsOfPosts" , function(slug){
  var post = Posts.findOne({slug : slug});
  if(post) {
    return Stackposts.find({parent: post._id});
  }
});


Meteor.publish("post", function(postId){
  return Posts.find({_id: postId});
});

Meteor.publish("talksho", function(id){
  return talkshos.find({_id: id});
});

Meteor.publish('images', function() {
  return Images.find();
});
*/
