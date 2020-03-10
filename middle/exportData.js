"use strict";

const xl = require('excel4node');

async function getReport() {
    var wbook = new xl.Workbook({logLevel: 1});

    const styleHead = {
        alignment: {
            vertical: ['center'],
            horizontal: ['left'],
            wrapText: true
        },
        font: {
            bold: true,
            color: '333399',
            name: 'Arial',
            size: 9
        },
        border: {
            bottom: {
                style: 'thin',
                color: '000000'
            },
            right: {
                style: 'thin',
                color: '000000'
            },
            left: {
                style: 'thin',
                color: '000000'
            },
            top: {
                style: 'thin',
                color: '000000'
            }
        },
        fill: {
            type: 'pattern',
            patternType: 'solid',
            bgColor: 'C0C0C0',
            fgColor: 'C0C0C0'
        }
    };
    const styleCell = {
        alignment: {
            vertical: ['center'],
            horizontal: ['left']
        },
        font: {
            color: '000000',
            name: 'Arial',
            size: 9
        },
        border: {
            bottom: {
                style: 'thin',
                color: '000000'
            },
            right: {
                style: 'thin',
                color: '000000'
            },
            left: {
                style: 'thin',
                color: '000000'
            },
            top: {
                style: 'thin',
                color: '000000'
            }
        }
    };

    var wsOrd = wbook.addWorksheet('Test', {
        disableRowsheetpansOptimization: true
    });

    const dataOrd = [{
        version: 'x.1.3',
        author: 'Test',
        comment: 'Comment',
        number: '366'
    }];
    const colNameOrd = ['Version', 'Author', 'Comment', 'Number'];

    for (let i = 0; i < colNameOrd.length; i++) {
        wsOrd.cell(2, i + 2).string(colNameOrd[i]).style(styleHead);
    }

    let startRow = 3;
    if (dataOrd.length) {
        dataOrd.forEach((item, i) => {
                const currentRow = i + startRow;
                wsOrd.cell(currentRow, 2).string(item.version).style(styleCell);
                wsOrd.cell(currentRow, 3).string(item.author).style(styleCell);
                wsOrd.cell(currentRow, 4).string(item.comment).style(styleCell);
                wsOrd.cell(currentRow, 5).string(item.number).style(styleCell);
            }
        );
    }

    return {
        filename: `data.xlsx`,
        excel: wbook
    };
}

module.exports = {
    getReport: getReport
};