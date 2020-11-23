let userSize = prompt("Choice field size", 3); //в начале пользователю необходимо ввести размер поля, не рекомендуется ставить большое значение чем 1000, ибо генерация таблицы будет долгая и будет занимать 90% оперативки
let table = document.getElementById('field'); //генерируется таблица указаная в айдишником в html 
let colors = ['red', 'green', 'blue']; //любые ячейки устанавливается по указаному цвету
let stepCount = 0; //начальное количество шагов

function getRandomInt(max) { //устанавливаются цветовые ячейки по размеру в рандомном порядке
        return Math.floor(Math.random() * (max + 1)); // если поставить другое число, то некоторые ячкейки будут бесцветные
}

function random(arr) {
        return arr[getRandomInt(arr.length - 1)]; // если поставить другое число, то некоторые ячкейки будут бесцветные
}

function createField(size) { // в целом выводитсч на экран ячейки...
        for (let tblRow = 0; tblRow < size; tblRow++) {
                let tr = document.createElement('tr');
                for (let tblColl = 0; tblColl < size; tblColl++) {
                        let td = document.createElement('td');
                        td.classList.add(random(colors))
                                console.log(random(colors))
                        td.addEventListener("click", step)
                        tr.appendChild(td);
                }
                table.appendChild(tr);
        }
}

function step() {
        stepCount += 1;
        let color = colors.indexOf(this.classList.item(0))
        if (color == colors.length - 1) this.classList.add(colors[0])
        else this.classList.add(colors[color + 1]) // без .add при нажатии покрасятся в красный только две синие ячейки, а зеленые не закрасятся в синий. если это коснтся и скобок, то некоторые будут бесцветные
        this.classList.remove(colors[color])
        if (isVictory(cells)) {
                alert("Победа, количество шагов: " + stepCount); // выдает сообщение о победе и количеству нажатий на ячейки (шагов)
        }
}

function isVictory(cells) { // в целом указываются требования для победы
        let cellsColor = [];
        for (let cell of cells) cellsColor.push(cell.classList.item(0));
        for (let i = 0; i < cellsColor.length; i++) {
                while (cellsColor[i] != cellsColor[0]) return false;
        }
        return true;
}
createField(userSize)//добавление таблицы на экран
let cells = document.querySelectorAll('td');