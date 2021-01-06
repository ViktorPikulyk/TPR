let x1 = [8, 7, 4, 11, 8];
let x2 = [3, 9, 7, 7, 4];
let x3 = [6, 5, 8, 10, 9];
let x4 = [11, 3, 3, 3, 7];
let x5 = [4, 10, 9, 6, 11];
let b = [1, 1, 1, 1, 1];
let b1 = [6, 7, 8, 9, 10];

let matrix = [[x1[0], x2[0], x3[0], x4[0], x5[0], 1, 0, 0, 0, 0, b[0]], 
              [x1[1], x2[1], x3[1], x4[1], x5[1], 0, 1, 0, 0, 0, b[1]],
              [x1[2], x2[2], x3[2], x4[2], x5[2], 0, 0, 1, 0, 0, b[2]],
              [x1[3], x2[3], x3[3], x4[3], x5[3], 0, 0, 0, 1, 0, b[3]],
              [x1[4], x2[4], x3[4], x4[4], x5[4], 0, 0, 0, 0, 1, b[4]],
              [-1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0]];

let iter = 0;
function simplex (matrix) {
    let minusCheck = 0;
    for (let i = 0; i < matrix[5].length; i++) {
        if(matrix[5][i] < 0) minusCheck++;
    }

    if(minusCheck > 0){
        iter++;
        if(iter > 7) return matrix;
        document.getElementById(`console`).innerHTML += `\n\nIteration ${iter}\n`;
        let minx = matrix[5].lastIndexOf(Math.min(...matrix[5]));
        let minb = 0;

        for(let i = 0; i < 5; i++){
            if(matrix[minb][10]/matrix[minb][minx] < 0) minb++;
            if(matrix[i][10]/matrix[i][minx] < matrix[minb][10]/matrix[minb][minx] && matrix[i][10]/matrix[i][minx] >= 0) minb = i;
            console.log(matrix[i][10]/matrix[i][minx]);
        }

        document.getElementById(`console`).innerHTML += `\nmin(${minx};${minb})\n`;

        b1[minb] = minx + 1;

        switch(minb){
            case 0:{
                console.log(0);
                simplex(matrixUpdate([0, 1, 2, 3, 4, 5], minx, matrix));
                return matrix;
            }
            case 1:{
                console.log(1);
                simplex(matrixUpdate([1, 0, 2, 3, 4, 5], minx, matrix));
                return matrix;
            }
            case 2:{
                console.log(2);
                simplex(matrixUpdate([2, 0, 1, 3, 4, 5], minx, matrix));
                return matrix;
            }
            case 3:{
                console.log(3);
                simplex(matrixUpdate([3, 0, 1, 2, 4, 5], minx, matrix));
                return matrix;
            }
            case 4:{
                console.log(4);
                simplex(matrixUpdate([4, 0, 1, 2, 3, 5], minx, matrix));
                return matrix;
            }
        }
    }else {
        return matrix;
    }
}

function matrixUpdate(x, minx, matrix){
    let k1 = matrix[x[1]][minx]/matrix[x[0]][minx];
    for(let i = 0; i < 11; i++){
        matrix[x[1]][i] = matrix[x[1]][i] - matrix[x[0]][i] * k1;
    }
    let k2 = matrix[x[2]][minx]/matrix[x[0]][minx];
    for(let i = 0; i < 11; i++){
        matrix[x[2]][i] = matrix[x[2]][i] - matrix[x[0]][i] * k2;
    }
    let k3 = matrix[x[3]][minx]/matrix[x[0]][minx];
    for(let i = 0; i < 11; i++){
        matrix[x[3]][i] = matrix[x[3]][i] - matrix[x[0]][i] * k3;
    }
    let k4 = matrix[x[4]][minx]/matrix[x[0]][minx];
    for(let i = 0; i < 11; i++){
        matrix[x[4]][i] = matrix[x[4]][i] - matrix[x[0]][i] * k4;
    }
    let k5 = matrix[x[5]][minx]/matrix[x[0]][minx];
    for(let i = 0; i < 11; i++){
        matrix[x[5]][i] = matrix[x[5]][i] - matrix[x[0]][i] * k5;
    }
    let k6 = matrix[x[0]][minx];
    for(let i = 0; i < 11; i++){
        matrix[x[0]][i] = matrix[x[0]][i]/k6;
    }
    printer(matrix);
    return matrix;
}

function reader() {
    let x1 = [];
    let x2 = [];
    let x3 = [];
    let x4 = [];
    let x5 = [];
    let b = [1, 1, 1, 1, 1];


    for (let i = 0; i < 5; i++) {
        x1.push(parseFloat(document.getElementById(`${i}${0}input`).value));
        x2.push(parseFloat(document.getElementById(`${i}${1}input`).value));
        x3.push(parseFloat(document.getElementById(`${i}${2}input`).value));
        x4.push(parseFloat(document.getElementById(`${i}${3}input`).value));
        x5.push(parseFloat(document.getElementById(`${i}${4}input`).value));
    }

    let matrix = [[x1[0], x2[0], x3[0], x4[0], x5[0], 1, 0, 0, 0, 0, b[0]], 
              [x1[1], x2[1], x3[1], x4[1], x5[1], 0, 1, 0, 0, 0, b[1]],
              [x1[2], x2[2], x3[2], x4[2], x5[2], 0, 0, 1, 0, 0, b[2]],
              [x1[3], x2[3], x3[3], x4[3], x5[3], 0, 0, 0, 1, 0, b[3]],
              [x1[4], x2[4], x3[4], x4[4], x5[4], 0, 0, 0, 0, 1, b[4]],
              [-1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0]];

    return matrix;
}

function start (){
    document.getElementById(`console`).innerHTML = "";
    iter = 0;
    let matrix = reader();

    let minA = [];
    let maxB = [];
    for (let i = 0; i < 5; i++) {
        minA.push(Math.min(matrix[i][0], matrix[i][1], matrix[i][2], matrix[i][3], matrix[i][4]));
        maxB.push(Math.max(matrix[0][i], matrix[1][i], matrix[2][i], matrix[3][i], matrix[4][i]));
    }

    document.getElementById(`console`).innerHTML += `Min A: ${minA}`;
    document.getElementById(`console`).innerHTML += `\nMax B: ${maxB}`;
    document.getElementById(`console`).innerHTML += `\n\nGame price: ${Math.max(...minA)} < x < ${Math.min(...maxB)}\n`;

    document.getElementById(`console`).innerHTML += "Basis matrix: \n";
    printer(matrix);
    matrix = simplex(matrix);

    document.getElementById(`console`).innerHTML += "\n\nResult: \n";
    let result1 = 0;
    for (let i = 0; i < 5; i++) {
        document.getElementById(`console`).innerHTML += `\nx${i+1} = ${matrix[5][5 + i]}`;
        result1 += matrix[5][5 + i];
    }
    document.getElementById(`console`).innerHTML += "\n";
    let result2 = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
        if(b1[i] <= 5){
            document.getElementById(`console`).innerHTML += `\ny${b1[i]} = ${matrix[i][10]}`;
            result2 += matrix[i][10];
        }
    }
    document.getElementById(`console`).innerHTML += `\n\nGame price: ${1 / result2}`;
}

function printer(matrix) {
    let arr = "";
    arr += `+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+`;
    for (let i = 0; i < matrix.length; i++) {
        arr += `\n|`;
        for (let j = 0; j < matrix[i].length; j++) {
            arr += `${Math.round((matrix[i][j] + Number.EPSILON) * 1000) / 1000}\t|`;
        }
    }
    arr += `\n+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+`;
    document.getElementById(`console`).innerHTML += arr;
}