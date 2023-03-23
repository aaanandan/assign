let n=process.env.npm_config_n || 2;

let res =[]
function tower(n,s,t,d){
if(n>=1){
tower(n-1,s,d,t);
res.push(`${n}: ${s} to ${d}`);
tower(n-1,t,s,d);
}
return;
}

tower(n,'A','C','B');
console.log(res);