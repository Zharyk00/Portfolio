echo "Switch to master branch"
git checkout master

echo "Building our project"
npm run build

echo "Sending files to the server"
scp -r ./build/* root@159.65.123.228:/var/www/zharyk.me

echo "Everything is seccusfuly sended"