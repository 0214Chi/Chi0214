+(function max( x,y){  
    2 +    console.log("the max is",x>y?x:y);  
    3 +}(2,3)); //the max is 3  
    4 +  
    5 +//可以没有函数名  
    6 +(function (x,y){   
    7 +    console.log("the min is",x<y?x:y);  
    8 +})(2,3); //the min is 2  
    9 +  
    10 +true && function(a,b){  
    11 +    return a>b?a:b;  
    12 +}(5,9); //9  
    13 +  
    14 +!function(x,y){  
    15 +    return x==y?true:false;  
    16 +}("5",5); //false  
    17 +  
    18 +//避免文件之间的全局污染，使用IIFE函数立即执行表达式  
    19 +  
    20 +function f(){  
    21 +    var getNumFuncs = [];  
    22 +    for(var i=0;i<10;i++){  
    23 +        getNumFuncs[i] = function(){  
    24 +            return i;  
    25 +        };  
    26 +    }  
    27 +    return getNumFuncs;  
    28 +}  
    29 +var tmp = f();  
    30 +tmp[3](); //10  
    31 +  
    32 +function f(){  
    33 +    var getNumFuncs = [];  
    34 +    for(var i=0;i<10;i++){  
    35 +        (function (j) {  
    36 +            getNumFuncs[j] = function(){return j;};  
    37 +        })(i);  
    38 +    }  
    39 +    return getNumFuncs;  
    40 +}  
    41 +var tmp = f();  
    42 +tmp[3](); //3  
    43 +//tmp[0]()...tmp[9]() //0...9  
    44 +  
    45 +for (var i = 0; i < 3; i++) {  
    46 +    (function(j) {  // j = i  
    47 +        setTimeout(function() {  
    48 +            console.log(new Date, j);  
    49 +        }, 1000*i);  
    50 +    })(i);  
    51 +}  
    52 +//Thu Apr 12 2018 22:19:43 GMT+0800 (中国标准时间) 0  
    53 +//Thu Apr 12 2018 22:19:44 GMT+0800 (中国标准时间) 1  
    54 +//Thu Apr 12 2018 22:19:45 GMT+0800 (中国标准时间) 2  

    
    