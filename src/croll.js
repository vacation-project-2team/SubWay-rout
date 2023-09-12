const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeWebsite() {
    try {
        const response = await axios.get('https://example.com');
        const $ = cheerio.load(response.data);

        // 원하는 데이터 추출
        const title = $('title').text();

        // JSON 객체 생성 및 데이터 추가
        const data = {
            pageTitle: title,
            timestamp: new Date().toISOString(),
        };

        // JSON 파일에 쓰기
        const outputPath = 'public/data.json'; // public 폴더에 저장
        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
        console.log('데이터를 JSON 파일에 저장했습니다:', outputPath);

    } catch (error) {
        console.error('크롤링 오류:', error);
    }
}

scrapeWebsite();

