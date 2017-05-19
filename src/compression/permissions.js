Meteor.users.allow({
  update(userId) {
    return userId;
  },
  remove() {
    return true;
  },
});
Ratings.allow({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  },
});
Posts.allow({
  insert(userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.author === userId);
  },
  update(userId) {
    // can only change your own documents
    return userId;
  },
  remove(userId, doc) {
    // can only remove your own documents
    return true;  //  doc.author === userId;
  },
  fetch: ['author'],
});
Posts.deny({
  update(userId, docs, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'owner');
  },
});
/*
Replies.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.author === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.author === userId;
  },
  fetch: ['author']
});

Replies.deny({
  update: function (userId, docs, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'owner');
  }
});
*/
Talksho.allow({
  insert(userId) {
    return Roles.userIsInRole(userId, ['admin', 'producer']);
  },
  update(userId) {
    return Roles.userIsInRole(userId, ['admin', 'producer']);
  },
  remove(userId) {
    return Roles.userIsInRole(userId, ['admin', 'producer']);
  },
});
Conversations.allow({
  insert(userId) {
    return userId;
  },
  update(userId) {
    return Roles.userIsInRole(userId, ['admin', 'producer']);
  },
  remove(userId) {
    // can only remove your own documents
    return Roles.userIsInRole(userId, ['admin', 'producer']);
  },
});
Threads.allow({
  insert(userId) {
    return userId;
  },
  update(userId) {
    return Roles.userIsInRole(userId, ['admin', 'producer']);
  },
  remove(userId) {
    return Roles.userIsInRole(userId, ['admin', 'producer']);
  },
});
/*
Videos.allow({
  download : function(){
    return true;
  },
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Audios.allow({
  download : function(){
    return true;
  },
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Stackposts.allow({
  insert: function (userId) {
    return userId;
  }
});

talkshos.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.author === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.author === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.author === userId;
  },
  fetch: ['author']
});

talkshos.deny({
  update: function (userId, docs, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'owner');
  }
});
*/
