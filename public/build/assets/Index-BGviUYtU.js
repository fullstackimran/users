import{T as g,o,f as n,b as e,t as a,g as r,u as l,k as m,d as h,e as _}from"./app-BVd5RMbi.js";const f={class:"container m-auto"},p=e("h1",{class:"my-10 text-3xl capitalize"},"Upload file",-1),y=e("hr",null,null,-1),b={class:"mt-5"},x={key:0,class:"text-green-500"},v={key:1,class:"text-red-500"},k={class:"my-5"},S=e("div",{class:"my-5"},[e("button",{type:"submit",class:"bg-blue-500 px-5 py-2 text-white rounded-lg"},"Upload")],-1),w={key:0,class:"w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700"},B=e("span",{class:"text-sm text-gray-500"},"uploading file ...",-1),C={class:"text-sm text-green-500"},z={__name:"Index",props:{msg:String,err:String},setup(s){const t=g({myfile:null});function c(i){t.myfile=i.target.files[0]}function u(){console.log("submit"),t.post("/file")}return(i,N)=>{var d;return o(),n("div",f,[p,y,e("div",b,[s.msg?(o(),n("div",x,a(s.msg),1)):r("",!0),s.err?(o(),n("div",v,a(s.err),1)):r("",!0)]),e("form",{onSubmit:_(u,["prevent"])},[e("div",k,[e("input",{type:"file",class:"border rounded-lg",onChange:c},null,32)]),S,l(t).progress?(o(),n("div",w,[e("div",{class:"bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 transition-all ease-in duration-200",style:m(l(t).progress?"width: "+l(t).progress.percentage+"%":"width: 0%")},null,4),B,h(),e("span",C,a((d=l(t).progress)==null?void 0:d.percentage)+"%",1)])):r("",!0)],32)])}}};export{z as default};