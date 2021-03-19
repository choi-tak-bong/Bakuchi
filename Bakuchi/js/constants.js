/**
 * 
 * @param {number} milisec 
 */
const WAIT = function (milisec) {
    let prev_time = new Date();
    let count = 0;

    while (true) {
        let cur_time = new Date();
        
        if (cur_time - prev_time >= 1) {
            count += 1;
            prev_time = cur_time;    
        }

        if (milisec === count) {
            break;
        }
    }
}
