function counter(){
    let count = 0;
    return function(){
        return count++;
    }
}
const add = counter();
add();
add();
add()

function Git_Albert(){
    console.log("Git_Albert is here");
    
}