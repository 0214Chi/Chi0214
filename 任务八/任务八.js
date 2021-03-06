+//全局作用域  
 2 +var a = 10,          
 3 +    b = 20;  
 4 +//fn作用域  
 5 +function fn(){  
 6 +  var a = 100,  
 7 +      c = 200;  //c可以在fn和bar中被访问到  
 8 +  //bar作用域  
 9 +  function bar(){  
 10 +    var a = 500,  //bar中访问a时为500（覆盖性）  
 11 +        d = 600;  //bar中访问c时为600（链式关系）  
 12 +    console.log(a,b,c,d);  
 13 +  }  
 14 +  bar();  
 15 +}  
 16 +fn();  
 17 +// 500 20 200 600  
 18 +  
 19 +//(静态性)词法作用域不会被函数从哪里调用等因素影响，与调用形式无关  
 20 +var name = "Jack";  
 21 +function echo() {  
 22 +    console.log(name);  
 23 +}  
 24 +echo(); //Jack  
 25 +  
 26 +var name = "Jack";  
 27 +function echo() {  
 28 +    console.log(name);  
 29 +}  
 30 +function foo() {  
 31 +    var name = "Bill";  
 32 +    echo();  
 33 +}  
 34 +foo();  //Jack  
 35 +  
 36 +{  
 37 +    var a = 4;  
 38 +}  
 39 +console.log(a); //4 ES5无块作用域  
 40 +  
 41 +console.log("小明回家");  
 42 +var xx = ["书桌","书包","铅笔盒"];//小明家中  
 43 +console.log("在家-做作业中 1 ...全局上下文");  
 44 +function goToStore(){  
 45 +    var yy = ["文具店老板","出售的文具"];//文具商店中  
 46 +    console.log("在文具店-买文具中  ...函数1上下文");  
 47 +    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");  
 48 +    goToBank();  
 49 +    console.log("在文具店-买好文具  ...函数1上下文 返回家");  
 50 +}  
 51 +function goToBank(){  
 52 +    var zz = ["银行职员","柜员机"];//银行中  
 53 +    console.log("在银行-取钱 ...函数2上下文 返回文具店");  
 54 +}  
 55 +console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");  
 56 +goToStore();//笔没油了，去商店买笔  
 57 +console.log("在家-继续做作业...全局上下文");  
 58 +//小明回家  
 59 +//在家-做作业中 1 ...全局上下文  
 60 +//在家-做作业中 2 ...全局上下文 发现笔没油了  
 61 +//在文具店-买文具中  ...函数1上下文  
 62 +//在文具店-买文具中  ...函数1上下文 发现没带钱  
 63 +//在银行-取钱 ...函数2上下文 返回文具店  
 64 +//在文具店-买好文具  ...函数1上下文 返回家  
 65 +//在家-继续做作业...全局上下文  
