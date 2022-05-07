#crowdscript #substr
function substring(s:string, l:int, r:int) -> string{
    let substr = "";
    for (let i = l; i <= r; i += 1){
        substr += s[i];
    }
    return substr;
}
