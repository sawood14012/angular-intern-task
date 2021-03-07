import { writeFile } from 'fs';

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
   production: true,
   firebaseConfig: {
        apiKey: '${process.env.FIREBASE_API_KEY}',
        authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
        databaseURL: '${process.env.FIREBASE_DB_URL}',
        projectId: "go-ready-blockchain",
        storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
        messagingSenderId: "567732165027",
        appId: "1:567732165027:web:c1653a86f84b3f047d2216"
    },
    algolia: '${process.env.ALGOLIA_SEARCH_KEY}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});