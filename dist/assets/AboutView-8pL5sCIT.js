import{_ as i,a,o as s,c as o,F as d,r as u,b as e,d as x,t as n,e as r}from"./index-PZ8wjF5c.js";const p={data(){return{coments:null,clients:null}},mounted(){this.getcoments(),this.getclients()},methods:{getcoments(){a.get("https://jsonplaceholder.typicode.com/posts").then(t=>{this.coments=t.data})},getclients(){a.get("https://jsonplaceholder.typicode.com/users").then(t=>{this.clients=t.data})}}},f={class:"w-full xl:w-1/2 p-5 flex flex-col gap-y-5 overflow-y-scroll h-[900px] bg-blue-400"},m={class:"font-bold text-2xl"},g={class:"font-normal underline text-xl"},b={class:"text-lg"},y={class:"flex flex-col gap-y-0.5"},$=e("h2",{class:"font-bold text-2xl"},"texto:",-1),w={class:"text-xl"};function v(t,l,_,F,h,I){return s(),o("div",f,[(s(!0),o(d,null,u(h.coments,(c,q)=>(s(),o("div",{key:c.id,class:"w-full border-2 rounded border-black p-3 flex flex-col bg-white gap-y-3"},[e("h2",m,[x(" Asunto: "),e("span",g,n(c.title),1)]),e("h2",b," ID del usuario que realizó el comentario: "+n(c.userId),1),e("div",y,[$,e("h2",w,n(c.body),1)])]))),128))])}const k=i(p,[["render",v]]),V={},j={class:"w-full h-20 bg-blue-950 flex items-center justify-center"},B=e("div",null,[e("h1",{class:"text-white text-4xl"},"Comentarios")],-1),N=[B];function A(t,l){return s(),o("div",j,N)}const D=i(V,[["render",A]]),E={__name:"AboutView",setup(t){return(l,_)=>(s(),o(d,null,[r(D),r(k)],64))}};export{E as default};
