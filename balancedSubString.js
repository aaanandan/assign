let str=process.env.npm_config_input || "abababa";
let balanced=[];

function getLongestBalancedSubString(){
for(let i=0; i<str.length; i++){
    let s = str.substring(0,i);
    for(let j=0; j<=s.length; j++){        
        let sub= s.substr(0,i);
        let size = new Set(sub).size;
        const isBalanced =  size === 2;
        const bl = (balanced[0] || '').length;
        if(isBalanced && sub.length >= bl){
            if(sub.length > bl) balanced=[];
            if(!balanced.includes(sub)) balanced.push(sub);
        }       
    };
}
console.log(balanced);
}


getLongestBalancedSubString();