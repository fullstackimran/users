import k from"./Links-CwZbkN7L.js";import{T as M,k as C,E as B,M as g,G as j,o as s,f as r,a as h,b as e,F as c,H as p,t as a,w as m,d as D,u as x,j as f,c as z,n as E}from"./app-ClNcgru5.js";const $={class:"text-center mt-5 mb-20"},L=e("h1",{class:"text-3xl"},"Users List",-1),N={class:"relative overflow-x-auto container md:container m-auto mt-5"},I={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},T=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," id "),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Email "),e("th",{scope:"col",class:"px-6 py-3"}," Edit "),e("th",{scope:"col",class:"px-6 py-3"}," Delete ")])],-1),U={class:"px-6 py-4 w-10"},V={class:"px-6 py-4"},F={class:"px-6 py-4"},H={class:"px-6 py-4 w-16"},O={class:"px-6 py-4 w-16"},S=["onClick"],A={class:"mt-10"},G={class:"mb-5"},K=["innerHTML"],P=e("button",{type:"button",class:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"popup-modal"},[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})]),e("span",{class:"sr-only"},"Close modal")],-1),Y=e("svg",{class:"mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})],-1),Z=e("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"},"Are you sure you want to delete this user?",-1),q={id:"popup-modal-deleted",tabindex:"-1",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},J={class:"relative p-4 w-full max-w-md max-h-full"},Q={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},R=e("button",{type:"button",class:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"popup-modal"},[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})]),e("span",{class:"sr-only"},"Close modal")],-1),W={class:"p-4 md:p-5 text-center"},X={xmlns:"http://www.w3.org/2000/svg",style:{width:"50px",height:"50px",fill:"green"},class:"m-auto mb-5 rounded-full p-2 border-green-500 border-4",viewBox:"0 0 448 512"},ee=e("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1),te=[ee],oe=e("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"},"User is deleted successfullt",-1),de={__name:"Index",props:{users:Object,msg:String},setup(b){const l=b,d=M({id:0});function y(){d.delete("/users/"+d.id)}let n=null,i=null;C(()=>{B(),n=new g(document.getElementById("popup-modal")),i=new g(document.getElementById("popup-modal-deleted"))});function w(o){d.id=o,n.show()}function u(){n.hide()}function _(o){i.show()}function v(o){i.hide()}return j(()=>{console.log(l.msg),l.msg==="Deleted"&&(u(),_())}),(o,se)=>(s(),r(c,null,[h(k),e("div",$,[L,e("div",N,[e("table",I,[T,e("tbody",null,[(s(!0),r(c,null,p(l.users.data,t=>(s(),r("tr",{key:t.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[e("td",U,a(t.id),1),e("td",V,a(t.name),1),e("td",F,a(t.email),1),e("td",H,[h(x(f),{href:o.route("users.edit",t.id),class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"},{default:m(()=>[D(" edit")]),_:2},1032,["href"])]),e("td",O,[e("button",{onClick:re=>w(t.id),class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center"},"Delete",8,S)])]))),128))])])]),e("div",null,[e("div",A,[e("div",G," Displaying Page "+a(o.$props.users.current_page)+" of "+a(Math.ceil(o.$props.users.total/o.$props.users.per_page)),1),(s(!0),r(c,null,p(o.$page.props.users.links,t=>(s(),z(x(f),{key:t,href:t.url?t.url:"",class:E(["px-3 mx-1 py-2 rounded-lg text-white",t.active?"bg-red-500":"bg-blue-500",t.url==null?"opacity-90 cursor-default bg-blue-400":""])},{default:m(()=>[e("span",{innerHTML:t.label},null,8,K)]),_:2},1032,["href","class"]))),128))])]),e("div",{id:"popup-modal",tabindex:"-1",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},[e("div",{class:"relative p-4 w-full max-w-md max-h-full"},[e("div",{class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},[P,e("div",{class:"p-4 md:p-5 text-center"},[Y,Z,e("button",{type:"button",onClick:y,class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"}," Yes, I'm sure "),e("button",{onClick:u,type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"No, cancel")])])])]),e("div",q,[e("div",J,[e("div",Q,[R,e("div",W,[(s(),r("svg",X,te)),oe,e("button",{onClick:v,type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}," OK")])])])])])],64))}};export{de as default};
