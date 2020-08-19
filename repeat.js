function repeat(str, count){
    let result;
    result = '';
    for(let i = 0;i< count; i++){
        result += str;
    }
    return result;
}

document.write(repeat('SALE', 10));