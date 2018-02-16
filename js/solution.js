(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        let count = 0;
        let countIsland = 0;
        let num = [];
        for(let i = 0; i < map.length; i++){
            num[i] = [];
            for(let j = 0; j < map[i].length; j++){
               // console.log(map[i][j]);
                if (map[i][j] === 1){
                  num[i].push(j);  
                }
                if(map[i][j] === 1 && map[i][j] !== map[i][j+1]) {
                   count++;   
                }
            }
        }
        console.log('Count: ' + count);
        console.log(num);

        for(let i = 1; i < map.length; i++) {
            for(let j = 0; j < map[i].length; j++) {
                if(map[i][j] === 1) {
                    getCount(j, i);
                }
            }
        }

        function getCount(indexNum, indexRow) {  
          if(!num[indexRow-1].includes(indexNum)) {
            countIsland++;
          }
        }
        console.log('CountIsland: ' + countIsland);

        return countIsland;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
