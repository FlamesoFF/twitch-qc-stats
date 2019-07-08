const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const Stream = require('stream').Transform;

const app = express();
const port = 3000;

app.use(express.static(__dirname));

// Icons
class Downloader {
    static async startDownloads() {
        // await this.downloadInfo();

        const info = require(path.resolve(__dirname, 'info.json'));

        await this.download(`https://stats.quake.com/icons/`, info.profileIconId);
        await this.download(`https://stats.quake.com/nameplates/`, info.namePlateId);

        process.exit(1);
        // await this.download(`https://stats.quake.com/icons/`, 'profile_icon_');
    }

    static mergeArrays(arr1, arr2) {
        let set1 = new Set(arr1);
        let set2 = new Set(arr2);

        return Array.from(new Set([...set1, ...set2]));
    }

    static async downloadInfo() {
        const contentType = 'application/json';
        let counter = 0;
        const step = 100;
        const players = 2874;

        const formatData = (responseData) => {
            const info = require(path.resolve(__dirname, 'info.json'));

            console.log(info);

            let data = JSON.parse(responseData);
            let entries = data.entries;


            let profileIconIds = entries.map(entry => {
                return entry.profileIconId;
            });
            let namePlateIds = entries.map(entry => {
                return entry.namePlateId;
            });;

            const mergedIcons = this.mergeArrays(info.profileIconId, profileIconIds);
            const mergedNamePlates = this.mergeArrays(info.namePlateId, namePlateIds);

            info.profileIconId = mergedIcons;
            info.namePlateId = mergedNamePlates;

            return info;
        }

        return new Promise((resolve, reject) => {
            (function loop() {

                const request = https.get(
                    `https://stats.quake.com/api/v2/Leaderboard?from=${counter}&board=duel&season=current`,
                    (response) => {
                        const fileName = path.join(__dirname, `info.json`);
                        var data = '';

                        response.on('data', function (chunk) {
                            data += chunk;
                        });

                        response.on('end', () => {
                            if (response.headers['content-type'] === contentType) {
                                const info = formatData(data);

                                // console.log(info);

                                fs.writeFileSync(path.resolve(__dirname, 'info.json'), JSON.stringify(info));

                                console.log(counter);
                                counter += step;

                                if (counter < players) {
                                    loop();
                                }
                                else {
                                    request.abort();
                                    resolve();
                                }
                            } else {
                                request.abort();
                                resolve();
                            }
                        })

                    });
            })()
        });
    }

    static async download(urlBase, postfixArray) {
        let index = 0;

        return new Promise((resolve, reject) => {

            (function loop() {
                let postfix = postfixArray[index];

                const request = https.get(`${urlBase}${postfix}.png`, (response) => {
                // const request = https.get(`https://stats.quake.com/icons/profile_icon_country_usa.png`, (response) => {
                    const fileName = path.join(__dirname, `downloads/${postfix}.png`);
                    var file = fs.createWriteStream(fileName);

                    var data = new Stream();

                    response.pipe(file);

                    response.on('error', () => {
                    });

                    response.on('data', function (chunk) {
                        data.push(chunk);
                    });

                    response.on('end', () => {
                        console.log(`Downloaded ${fileName}`);

                        if (data.read()) {
                            // fs.writeFileSync(fileName, data.read());
                            file.close();

                            index++;
                        }

                        if (index < postfixArray.length){
                            loop();
                        }
                        else{
                            resolve();
                        }
                    })

                });
            })()
        });
    }
}

Downloader.startDownloads();

// Profile images
