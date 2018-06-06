 
75 
 
76 
 
77 var Subject = function(){ 
78     var _observer = []; 
79     this.attach = function(observer){ 
80         _observer.push(observer); 
81     }; 
82     this.detach = function(){ 
83         _observer.pop(); 
84     }; 
85     this.notify = function(msg){ 
86         for(var i=0;i<_observer.length;i++){ 
87             _observer[i].update(msg); 
88         } 
89     }; 
90     this.print = function(){ 
91         console.log(_observer.length); 
92         console.log(_observer); 
93     }; 
94 }; 
95 var Observer = function(name){ 
96     this.update = function(msg){ 
97         console.log('i am '+name+',and i get the message: '+msg); 
98     }; 
99 }; 
100 var sub = new Subject() 
101 sub.attach(new Observer('a')); 
102 sub.attach(new Observer('b')); 
103 sub.notify('hello'); 
104 //sub.print(); 
105 
 
106 setTimeout(function(){ 
107     var c = new Observer('c'); 
108     sub.detach(); 
109     sub.attach(c); 
110     sub.notify('world'); 
111     //sub.print(); 
112 },5000); 
113 
 
114 
 
115 //XMLHttpRequest Get 请求 
116 //实例一 
117 var xhr = new XMLHttpRequest(); 
118 if (!xhr) { 
119      console.log("xhr 创建失败！！"); 
120  } 
121 xhr.onreadystatechange = function () { 
122     console.log(xhr.readyState,xhr.status); 
123     if (xhr.readyState == 4) { 
124         if (xhr.status == 200) { 
125             var message = xhr.responseText; 
126             console.log(message); 
127         } 
128     } 
129 }; 
130 xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true); 
131 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加 
132 xhr.send(); 
133 
 
134 
 
135 var http = require("http"); 
136 var url = require("url"); 
137 
 
138 http.createServer(function (req, res) { 
139     console.log(Object.keys(req),"___",Object.keys(res)); 
140     console.log("req.url：",req.url); 
141      var getDataObj = url.parse(req.url,true).query; 
142     var getDataStr = url.parse(req.url).query; 
143 
 
144     res.writeHead(200, { 
145         "Content-Type": "text/plain", 
146         "Access-Control-Allow-Origin":"*",  
147         "Access-Control-Allow-Methods": "GET, POST" 
148     }); 
149     setTimeout(function () { 
150         res.end("你好，我已收到你发的信息："+getDataStr); 
151     },20000*Math.random()); 
152 }).listen(8080,"127.0.0.1"); 
153 console.log("start server!"); 
