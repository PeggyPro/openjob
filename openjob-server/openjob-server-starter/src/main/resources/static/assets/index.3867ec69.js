import{s as e,A as r}from"./request.c84c4c3e.js";function d(){return{getList:t=>e({url:r.list,method:"get",params:t}),add:t=>e({url:r.add,method:"post",data:t}),delete:t=>e({url:r.delete,method:"post",data:t}),update:t=>e({url:r.update,method:"post",data:t}),updateStatus:t=>e({url:r.updateStatus,method:"post",data:t})}}export{d as u};