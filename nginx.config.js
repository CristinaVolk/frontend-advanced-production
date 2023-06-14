// nginx
// /Users/kvolk/Homebrew/homebrew/etc/nginx
// server {
//  listen       80;
//  listen   [::]:80;
//  root   /var/www/frontend-advanced-production/html;
//
//  index  index.html index.htm index.nginx-debian.html;
//
//  server_name _;
//
//  location /  {
//        try_files $uri $uri/ =404;
//  }
// }
const matrix = ['XOOXX', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'];

function perimeter(matrix) {
    let per = 0;
    const temp = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < matrix.length; i++) {
        const size = matrix[i].length;
        console.log(matrix[i].split(''));
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < size; j++) {
            const field = matrix[i].split('')[j];
            if (field === 'X') {
                per += 4;
                if (temp[i]?.length) {
                    temp[i].push(j);
                } else {
                    temp[i] = [j];
                }
            }
        }
    }

    Object.values(temp).forEach((row, rowIndex) => {
        row.forEach((col, idx) => {
            if (col === row[idx + 1] - 1) {
                per -= 2;
            }

            if (temp[rowIndex + 1] && temp[rowIndex + 1][idx] !== undefined) {
                per -= 2;
            }
        });
    });

    return per;
}

console.log(perimeter(matrix));
