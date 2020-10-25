function laplas (matrix) {
    let lmatrix = [];
    for(let i = 0; i < matrix.length; i++){
        lmatrix.push(0);
        for(let j = 0; j < matrix[0].length; j++){
            lmatrix[i] += matrix[i][j]/matrix.length;
        }
    }
    return lmatrix;
}

function vald (matrix) {
    let vmatrix = [];
    for(let i = 0; i < matrix.length; i++){
        let min = matrix[i][0];
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] < min) min = matrix[i][j];
        }
        vmatrix.push(parseFloat(min));
    }
    return vmatrix;
}

function gurvic (matrix) {
    let y = 0.5;
    let minMatrix = [];
    let maxMatrix = [];
    let gmatrix = [];
    for(let i = 0; i < matrix.length; i++){
        let min = matrix[i][0];
        let max = matrix[i][0];
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] < min) min = matrix[i][j];
            if(matrix[i][j] > max) max = matrix[i][j];
        }
        minMatrix.push(min);
        maxMatrix.push(max);
    }
    for(let i = 0; i < minMatrix.length; i++){
        gmatrix.push(minMatrix[i]*y + maxMatrix[i]*(1-y));
    }
    return gmatrix;
}

function bejes (matrix) {
    let bmatrix = [];
    let p = [0.5, 0.35, 0.15];
    for(let i = 0; i < matrix.length; i++){
        bmatrix.push(matrix[i][0] * p[0] + matrix[i][1] * p[1] + matrix[i][2] * p[2]);
    }

    return bmatrix;
}


function readData () {
    let matrix = [[],[],[]]
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < 3; j++){
            matrix[i].push(parseFloat(document.getElementById(`${i}${j}input`).value));
        }
    }
    return matrix;
}

function max (arr) {
    let max = [0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[max[0]]){
            max = [];
            max.push(i);
        }
        else if(arr[i] == arr[max[0]]) max.push(i);
    }
    return max;
}

function starter () {
    for(let i = 0; i < 3; i++){
        document.getElementById(`l${i}`).innerHTML = Math.round((laplas(readData())[i] + Number.EPSILON) * 100) / 100;
        document.getElementById(`l${i}`).style.backgroundColor = "white";
        document.getElementById(`v${i}`).innerHTML = Math.round((vald(readData())[i] + Number.EPSILON) * 100) / 100;
        document.getElementById(`v${i}`).style.backgroundColor = "white";
        document.getElementById(`g${i}`).innerHTML = Math.round((gurvic(readData())[i] + Number.EPSILON) * 100) / 100;
        document.getElementById(`g${i}`).style.backgroundColor = "white";
        document.getElementById(`b${i}`).innerHTML = Math.round((bejes(readData())[i] + Number.EPSILON) * 100) / 100;
        document.getElementById(`b${i}`).style.backgroundColor = "white";
    }
    for(let i = 0; i < max(laplas(readData())).length; i++){
        document.getElementById(`l${max(laplas(readData()))[i]}`).style.backgroundColor = "red";
    }
    for(let i = 0; i < max(vald(readData())).length; i++){
        document.getElementById(`v${max(vald(readData()))[i]}`).style.backgroundColor = "red";
    }
    for(let i = 0; i < max(gurvic(readData())).length; i++){
        document.getElementById(`g${max(gurvic(readData()))[i]}`).style.backgroundColor = "red";
    }
    for(let i = 0; i < max(bejes(readData())).length; i++){
        document.getElementById(`b${max(bejes(readData()))[i]}`).style.backgroundColor = "red";  
    }
}
