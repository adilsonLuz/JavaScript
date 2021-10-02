function fatRecursivo(n){
    if(n == 1){
        return 1
    } else {
        return n * fatRecursivo(n-1)
    }
}

console.log(fatRecursivo(55))