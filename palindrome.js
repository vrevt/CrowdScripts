function pal(s:string) -> bool {
	let ss = "";
    for (let i = s.length() - 1; i >= 0; i -= 1){
        ss += s[i];
    }
    if (s == ss) { return true; }
    return false;
}
