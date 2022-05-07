function solve(input: string) -> string {
    let lines = input.split("\n");
    let line = lines[0].split(" ");
    let n = int(line[0]);
    let m = int(line[1]);
    let k = int(line[2]);
    
    let a:string[][] = [];
    for (let i = 0; i < n; i += 1){
        a.push([]);
        for (let j = 0; j < m; j += 1){
       		a[i].push(lines[i + 1][j]);
        }
    }
    
    let f:int[][] = [];
    for (let i = 0; i < n; i += 1){
        f.push([]);
        for (let j = 0; j < m; j += 1){
        	f[i].push(0);
        }
    }
    
    let color = 0;
    let amount:int[] = [0];
    for (let i = 0; i < n; i += 1){
        for (let j = 0; j < m; j += 1){
            if (a[i][j] =="." && f[i][j] == 0){
                color += 1;
                amount.push(0);
            	let x:int[] = [];
                let y:int[] = [];
                let q1 = 0;
                f[i][j] = color;
                x.push(i);
                y.push(j);
                let fl = 0;
                while (q1 < x.length()){
                    let xx:int[] = [x[q1] + 1, x[q1] - 1, x[q1], x[q1]];
                    let yy:int[] = [y[q1], y[q1], y[q1] + 1, y[q1] - 1];
                    for (let ind = 0; ind < 4; ind +=1){
                        let x1 = xx[ind];
                        let y1 = yy[ind];
                        if (x1 < 0 || y1 < 0 || x1 == n || y1 == m){
                            continue;
                        }
                        if (a[x1][y1] == "*"){
                            amount[color] += 1;
                        }
                        if (a[x1][y1] == "." && f[x1][y1] == 0){
                            x.push(x1);
                            y.push(y1);
                            f[x1][y1] = color;
                        }
                    }
                    q1 += 1;
                }
            }
        }
    }
    
    let res = "";
    for (let t = 0; t < k; t += 1){
    	line = lines[n + 1 + t].split(" ");
        let x = int(line[0]);
        let y = int(line[1]);
        res += string(amount[f[x - 1][y - 1]]) + "\n";
    }
    
    return res;
}
