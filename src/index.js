module.exports =

    function check(str, bracketsConfig) {
        let sync = {
            open: {},
            close: {}
        };
        bracketsConfig.forEach(e => {
            sync.open[e[0]] = e[1];
            sync.close[e[1]] = e[0];
        });

        let arr = str.split('');
        arr.push('end');
        arr.unshift('end');

        return checker(arr, sync) || false;
    }

function checker(arr, bracketsConfig) {

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];

        let brLeft = bracketsConfig.close[element];

        if (brLeft) {
            if (arr[index - 1] == brLeft) {

                let newArr = arr.slice(0, index - 1).concat(arr.slice(index + 1));

                if (newArr.length == 2) {
                    return true;
                }

                return checker(newArr, bracketsConfig);

            }
        }
    }
}