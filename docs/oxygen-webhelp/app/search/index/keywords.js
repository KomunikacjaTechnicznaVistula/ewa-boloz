define(function() {var keywords=[{w:"My",p:["p0","p1","p2","p3","p5"]},{w:"first",p:["p0","p1","p2","p5"]},{w:"Topic",p:["p0"]},{w:"reference",p:["p1"]},{w:"task",p:["p2","p3"]},{w:"second",p:["p3"]},{w:"Context",p:["p4"]},{w:"Sensitive",p:["p4"]},{w:"Help",p:["p4"]},{w:"map",p:["p5"]}];
var ph={};
ph["p0"]=[0, 1, 2];
ph["p1"]=[0, 1, 3];
ph["p2"]=[0, 1, 4];
ph["p3"]=[0, 5, 4];
ph["p4"]=[6, 7, 8];
ph["p5"]=[0, 1, 9];
     return {
         keywords: keywords,
         ph: ph
     }
});
