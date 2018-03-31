+function foo(){}
+console.log(foo);  //function foo()[]
+console.log(typeof foo);  //function
+console.log(foo instanceof Object);  //true 函数也是对象
+console.log(foo instanceof Function);  //true
+console.log(foo === window.foo);  //true
+
+console.log(typeof new Function());  //function
+console.log(typeof new Array());  //object
+console.log(typeof new Date());  //object
+
+console.log(Function instanceof Funtion); //true //Array Date
+console.log(Function instanceof Object); //true //Array Date
+
+console.log(Math instanceof Object); //true
+console.log(Math instanceof Function); //false
+console.log(JSON instanceof Function); //false
+console.log(JSON instanceof Object); //true
+
+var foo = function (a,b){
+    console.log(arguments); //[1,2,3,4]
+
+    console.log(foo.arguments.length); //4
+    console.log(arguments.length); //4
+    var args = Array.prototype.splice.call(arguments,0);
+    console.log(args); //[1,2,3,4]
+};
+foo(1,2,3,4);
+
+//没有调用的情况下test.caller为： null
+
+var func = function(n){
+    if (n <= 0)
+        return 1;
+    else
+        return n * func(n - 1); //return n * arguments.callee(n - 1);
+}
+console.log(func(4));  //24
+//callee 属性是 arguments 对象的一个成员，该属性仅当相关函数正在执行时才可用
+(function(n){
+    if (n <= 0)
+        return 1;
+    else
+        return n * arguments.callee(n - 1);
+}(4)); //24
+
+
+function swim(m,n){
+    console.log("i'm:"+this.name+" i can swim ___",m,n);
+}
+var bird = {
+    name:"polly",
+    fly:function(m,n){
+        console.log("i'm:"+this.name+" i can fly ___",m,n);
+    }
+};
+
+var me = {
+    name:"ABC"
+};
+swim(1,2);  //i'm: i can swim ___ 1 2
+swim.call(me,3,4);  //i'm:ABC i can swim ___ 3 4
+bird.fly(5,6);  //i'm:polly i can fly ___ 5 6
+bird.fly.call(me,7,8);  //i'm:ABC i can fly ___ 7 8
+bird.fly.apply(me,[7,8]);  //i'm:ABC i can fly ___ 7 8