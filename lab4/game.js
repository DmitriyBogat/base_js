class game{
    constructor(){

    }
    run_game(items){
        for(let item of items){
            item.style.display = "flex";
        }

    }
    exit_game(items){
        for(let item of items){
            item.style.display = "none";
        } 
    }
    set_quastion(items,quastion){
        let i = 0;
        for(let item of items){
            if i==0 {
                item.innertext = quastion["answ"+i];
            }
            item.innertext = quastion["answ"+i];
            i++;
        } 
    }
}