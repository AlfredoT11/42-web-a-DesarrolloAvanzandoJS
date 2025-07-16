function a(){
    console.log(`1. Inicio función a`);
    b();
    console.log(`2. Fin función a`);
}

function b(){
    console.log(`3. Inicio función b`);
    c();
    console.log(`4. Fin función b`);
}

function c(){
    console.log(`5. Inicio función c`);
    console.log(`6. Fin función c`);
}

a();
