## How to use

1. Install package
```
npm i
```

2. Create .env file as follow
```
HOST=${HOST}
PORT=${PORT}
NUMBER_OF_DEVICES=${NUMBER_OF_DEVICES}
ACCESS_TOKEN=${TB_ACCESS_TOKEN}
```

3. Run script
Create `output` folder in root directory. un add device script. When script finish, you can see `deviceList.json` in `output` folder
```
npm run init
```


Run delete all device script:
```
npm run remove
```

