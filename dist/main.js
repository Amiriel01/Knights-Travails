(()=>{"use strict";let e=new Map,t=(l,s)=>{let r,o=l,c=s,a=[[1,2],[1,-2],[2,1],[2,-1],[-1,2],[-1,-2],[-2,1],[-2,-1]],n=()=>r,d=e=>{r=r||e},i=()=>`${l}, ${s}`,h=()=>a.map((e=>p(e[0],e[1]))).filter((e=>void 0!==e)),p=(e,l)=>{let[r,a]=[o+e,c+l];if(0<=r&&r<8&&0<=a&&s<8)return t(r,a)};if(e.has(i()))return e.get(i());{let t={name:i,getPredecessor:n,setPredecessor:d,possibleKnightMoves:h};return e.set(i(),t),t}};(()=>{let e=[0,0],t=[],l=document.createElement("table");l.setAttribute("class","center");for(let e=0;e<8;e++){let s=document.createElement("tr"),r=Math.abs(e-7);s.textContent=r;for(let l=0;l<8;l++){let o=document.createElement("td"),c=l;o.textContent=c,(e+l)%2==0?(o.setAttribute("class","cell whitecell"),s.appendChild(o),t.push(r),t.push(c),o.dataset.coordArray=t,t.splice(0,2)):(o.setAttribute("class","cell blackcell"),s.appendChild(o),t.push(r),t.push(c),o.dataset.coordArray=t,t.splice(0,2))}l.appendChild(s)}l.querySelectorAll("td").forEach((t=>{if(e.toString()===t.dataset.coordArray){let e=document.createElement("img");e.src="knight.svg",t.appendChild(e)}})),document.body.appendChild(l)})(),((l,s)=>{e.clear();let r=t(3,3),o=t(4,3),c=[r];for(;!c.includes(o);){let e=c.shift(),t=e.possibleKnightMoves();t.forEach((t=>t.setPredecessor(e))),c.push(...t)}let a=[o];for(;!a.includes(r);){let e=a[0].getPredecessor();a.unshift(e)}console.log(`the shortest path was ${a.length-1} moves!`),console.log("The moves were:"),a.forEach((e=>console.log(e.name())))})()})();