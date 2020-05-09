// Goto https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt

var g = {
  init:function(){var t=this;t.a=document.querySelector`pre`.innerText.split`\n`,t.w=t.a[Math.random()*t.a.length|0],console.log(`Length: ${t.w.length}`),t.h=new Set,t.n=0},
  test:function(n){var h=[],i=0;for(;this.init(),this.auto(),h.push([this.w,this.n]),++i<n;);console.table(h)},
  auto:function(){for(;this.play(),this.w.split``.some(c=>!this.h.has(c)););},
  play:function(){this.guess(this.mode())},
  guess:function(c){var t=this;t.h.add(c),console.log(`Turn ${++t.n}: ${t.w.split``.map(c=>t.h.has(c)?c:"*").join``} (${c})`)},
  mode:function(){var t=this,n={},x="split",f="includes";"abcdefghijklmnopqrstuvwxyz"[x]``.map(c=>n[c]=0),t.a.filter(w=>(w.length==t.w.length&&t.w[x]``.every((c,i)=>(t.h.has(c)&&w[i]==c||!t.h.has(c)))&&[...t.h].every((c,i)=>(t.w[f](c)||!t.w[f](c)&&!w[f](c))))).join``[x]``.map(c=>n[c]++),n=Object.entries(n).filter(c=>!t.h.has(c[0])).sort((a,b)=>b[1]-a[1]),console.log(n[0][0],+(n[0][1]/n.reduce((a,c)=>a+c[1],0)*100).toFixed(2)+"%");return n[0][0]},
  answer:function(){console.log(this.w)}
}
