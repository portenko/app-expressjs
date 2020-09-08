#Install project modules
npm install

#Init migrations
sequelize db:migrate
#Insert default data into tables
sequelize db:seed

#For development mode
SET DEBUG=app-expressjs:* &  npm run devstart

#For production mode
npm run start"# app-expressjs" 
