let lines = input.split("\n");
let values = [from x in lines[0].split(" ") select int(x)];


# чтение t тестовых случаев в которых даны 2 числа, а затем массив чисел
let lines = input.split("\n");
let test = int(lines[0]);
for (let t = 0; t < test; t += 1){
	let line = lines[t * 2 + 1].split(" ");
    let n = int(line[0]);
    let T = int(line[1]);
    let a = [from x in lines[(t + 1) * 2].split(" ") select int(x)];
    
}
