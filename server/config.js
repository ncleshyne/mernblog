const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://ncleshyne:N1mOGnX6chWOVL6w@mernauth-shard-00-00-6sgve.mongodb.net:27017,mernauth-shard-00-01-6sgve.mongodb.net:27017,mernauth-shard-00-02-6sgve.mongodb.net:27017/test?ssl=true&replicaSet=MernAuth-shard-0&authSource=admin',
  port: process.env.PORT || 8000,
};

export default config;
