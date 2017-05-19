const { AWSAccessKeyId, AWSSecretAccessKey } = Meteor.settings.private.aws;


Slingshot.createDirective('myFileUploads', Slingshot.S3Storage, {
  bucket: 'talksho',
  region: 'us-west-2',
  acl: 'public-read',
  AWSAccessKeyId,
  AWSSecretAccessKey,
  maxSize: 100 * 1024 * 1024,
  authorize() {
    return true;
  },
  key(file) {
    return file.name;
  },
});
Slingshot.createDirective('profilePicUpload', Slingshot.S3Storage, {
  bucket: 'talksho',
  region: 'us-west-2',
  acl: 'public-read',
  AWSAccessKeyId,
  AWSSecretAccessKey,
  maxSize: 10 * 1024 * 1024,
  authorize() {
    return true;
  },
  key(file) {
    return `profilePic/${file.name}`;
  },
});
