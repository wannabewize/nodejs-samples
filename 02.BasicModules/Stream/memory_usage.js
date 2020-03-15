const os = require('os');
const fs = require('fs');

const file = 'worldmap.jpg';


function showFileOpenMemory() {
    const beforeMemory = os.freemem();
    
    // 전체 파일 읽기
    const content = fs.readFileSync(file);
   
    const freeMem = os.freemem();
    console.log('파일 전체 읽기 메모리 사용량 :', (beforeMemory - freeMem)/1000);
}

function showStreamMemory() {
    const beforeMemory = os.freemem();

    let maxUsage = 0;
    
    const is = fs.createReadStream(file);
    is.on('data', (data) => {
        const usage = (beforeMemory - os.freemem()) / 1000;
        if ( usage > maxUsage ) {
            console.log('스트림 방식 메모리 사용량 갱신 ', usage)
            maxUsage = usage;
        }
    });

    is.on('end', () => {
        console.log('끝');
    });
}

// showFileOpenMemory();
showStreamMemory();
