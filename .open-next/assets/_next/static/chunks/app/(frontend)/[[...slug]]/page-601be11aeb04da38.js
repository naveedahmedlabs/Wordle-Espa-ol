(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{5613:(ie,te,C)=>{"use strict";C.d(te,{default:()=>cn});var e=C(5155),t=C(2115),Q=C(3321);let H={daily:"Diario",unlimited:"Ilimitado",hints:"Pistas",giveUp:"Rendirse"};function V({onHelp:d,onSettings:a,onStats:n,onGiveUp:s,onChallenge:r,gameState:i,guessesCount:w,gameMode:p,onModeChange:m,onViewChange:g,onFeedback:k,currentView:c,language:h="es"}){return(0,Q.useRouter)(),(0,e.jsxs)("header",{className:"top-header-wrapper",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"var(--color-bg)"},children:[(0,e.jsx)("div",{className:"header",id:"header",style:{padding:"10px 0"},children:(0,e.jsx)("div",{className:"container",children:(0,e.jsxs)("div",{className:"header__wrapper",style:{display:"flex",justifyContent:"center",gap:"8px"},children:[(0,e.jsxs)("button",{onClick:()=>m("daily"),className:`header__btn btn ${p==="daily"||c==="hints"?"header__btn--active":""}`,style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 16px",background:p==="daily"||c==="hints"?"var(--color-surface)":"var(--color-tab-bg)",borderRadius:"999px",border:"none",cursor:"pointer",color:p==="daily"||c==="hints"?"var(--color-text-dark)":"var(--color-text-secondary)",fontWeight:"600",fontSize:"14px"},children:[(0,e.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M4 13c.325 2.532 1.881 4.781 4 6"}),(0,e.jsx)("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2"}),(0,e.jsx)("path",{d:"M4 5v4h4"}),(0,e.jsx)("path",{d:"M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}),(0,e.jsx)("path",{d:"M18 15v2a1 1 0 0 0 1 1h1"}),(0,e.jsx)("path",{d:"M21 15v6"})]}),(0,e.jsx)("span",{children:H.daily})]}),(0,e.jsxs)("button",{onClick:()=>m("unlimited"),className:`header__btn btn ${p==="unlimited"&&c!=="hints"?"header__btn--active":""}`,style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 16px",background:p==="unlimited"&&c!=="hints"?"var(--color-surface)":"var(--color-tab-bg)",borderRadius:"999px",border:"none",cursor:"pointer",color:p==="unlimited"&&c!=="hints"?"var(--color-text-dark)":"var(--color-text-secondary)",fontWeight:"600",fontSize:"14px"},children:[(0,e.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"48",d:"M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32"})}),(0,e.jsx)("span",{children:H.unlimited})]})]})})}),(0,e.jsx)("div",{className:"header-actions",style:{paddingTop:"5px"},children:(0,e.jsxs)("div",{className:"cont flex",style:{position:"relative"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",padding:"4px 8px",marginRight:"4px",borderRight:"1px solid var(--color-border)"},children:(0,e.jsx)("img",{src:"https://flagcdn.com/w40/es.png",alt:"Espa\xF1ol",width:"24",height:"18",style:{display:"block",borderRadius:"2px"}})}),(0,e.jsx)("button",{type:"button",className:"generator",style:{display:"flex",background:"none",border:"none",cursor:"pointer"},onClick:r,children:(0,e.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,e.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),(0,e.jsx)("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}),(0,e.jsxs)("button",{type:"button",className:`hints-btn ${c==="hints"?"active":""}`,onClick:()=>g(c==="hints"?"game":"hints"),style:{display:"flex",alignItems:"center",gap:"4px",background:c==="hints"?"var(--color-surface)":"none",border:"none",cursor:"pointer",color:c==="hints"?"var(--color-text-dark)":"var(--color-text-secondary)",padding:"4px 8px",borderRadius:"8px",transition:"all 0.2s"},children:[(0,e.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),(0,e.jsx)("line",{x1:"9",y1:"9",x2:"15",y2:"9"}),(0,e.jsx)("line",{x1:"9",y1:"13",x2:"15",y2:"13"})]}),(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"700"},children:H.hints})]}),(0,e.jsxs)("button",{type:"button",className:`archive-header-btn ${c==="archive"?"active":""}`,onClick:()=>g(c==="archive"?"game":"archive"),style:{display:"flex",alignItems:"center",gap:"4px",background:c==="archive"?"var(--color-surface)":"none",border:"none",cursor:"pointer",color:c==="archive"?"var(--color-text-dark)":"var(--color-text-secondary)",padding:"4px 8px",borderRadius:"8px",transition:"all 0.2s"},title:"Archivo de puzles anteriores",children:[(0,e.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,e.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,e.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,e.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"700"},children:"Archivo"})]}),(0,e.jsx)("button",{type:"button",title:h==="es"?"Sugerir funci\xF3n":"Request Feature",onClick:k,style:{display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer",color:"var(--color-text-secondary)",padding:"4px 8px",borderRadius:"8px",transition:"all 0.2s"},children:(0,e.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M9.663 17h4.674"}),(0,e.jsx)("path",{d:"M10 20h4"}),(0,e.jsx)("path",{d:"M12 3a7 7 0 0 0-7 7c0 1.5.7 3 2 4.3V17c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2.7c1.3-1.3 2-2.8 2-4.3a7 7 0 0 0-7-7z"})]})})]}),(0,e.jsx)("button",{type:"button",className:"give_up",onClick:s,style:{display:i==="playing"&&w>0?"block":"none",background:"#e9ecef",border:"1px solid #dee2e6",color:"#495057",padding:"8px 24px",borderRadius:"8px",fontWeight:"700",fontSize:"15px",cursor:"pointer",transition:"all 0.2s",margin:"0 10px",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"},children:H.giveUp}),(0,e.jsxs)("div",{className:"buttons flex",children:[(0,e.jsx)("button",{type:"button",className:"button mini_modal_link",onClick:n,children:(0,e.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("rect",{x:"4",y:"14",width:"4",height:"7",rx:"1"}),(0,e.jsx)("rect",{x:"10",y:"9",width:"4",height:"12",rx:"1"}),(0,e.jsx)("rect",{x:"16",y:"4",width:"4",height:"17",rx:"1"})]})}),(0,e.jsx)("button",{type:"button",className:"button mini_modal_link",onClick:a,children:(0,e.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,e.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1V15a2 2 0 0 1-2-2 2 2 0 0 1 2-2v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),(0,e.jsx)("button",{type:"button",className:"button mini_modal_link",onClick:d,children:(0,e.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,e.jsx)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,e.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})})]})]})})]})}function X({letter:d,state:a,delay:n,shouldFlip:s,shouldBounce:r}){let i=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(s&&i.current){let p=i.current;p.style.animationDelay=`${n}ms`,p.classList.add("tile--flip");let m=setTimeout(()=>{p.classList.remove("tile--filled"),a==="correct"?p.classList.add("tile--correct"):a==="present"?p.classList.add("tile--present"):a==="absent"&&p.classList.add("tile--absent")},n+250),g=setTimeout(()=>{p.classList.remove("tile--flip"),p.style.animationDelay=""},n+600);return()=>{clearTimeout(m),clearTimeout(g)}}},[s,a,n]),(0,t.useEffect)(()=>{if(r&&i.current){let p=i.current;p.style.animationDelay=`${n}ms`,p.classList.add("tile--bounce");let m=setTimeout(()=>{p.classList.remove("tile--bounce"),p.style.animationDelay=""},n+1100);return()=>clearTimeout(m)}},[r,n]);let w="tile";return d&&!s&&a==="tbd"&&(w+=" tile--filled"),s||a!=="correct"||(w+=" tile--correct"),s||a!=="present"||(w+=" tile--present"),s||a!=="absent"||(w+=" tile--absent"),(0,e.jsx)("div",{ref:i,className:w,children:d})}function fe({guesses:d,currentGuess:a,currentRow:n,shakeRow:s,flipRow:r,bounceRow:i,wordLength:w=5}){let p=[];for(let m=0;m<6;m++){let g=[];if(m<d.length)for(let c=0;c<w;c++)g.push((0,e.jsx)(X,{letter:d[m].letters[c],state:d[m].states[c],delay:300*c,shouldFlip:r===m,shouldBounce:i===m},c));else if(m===n)for(let c=0;c<w;c++)g.push((0,e.jsx)(X,{letter:a[c]||"",state:"tbd",delay:0,shouldFlip:!1,shouldBounce:!1},c));else for(let c=0;c<w;c++)g.push((0,e.jsx)(X,{letter:"",state:"empty",delay:0,shouldFlip:!1,shouldBounce:!1},c));let k=`grid__row${s===m?" grid__row--shake":""}`;p.push((0,e.jsx)("div",{className:k,style:{gridTemplateColumns:`repeat(${w}, 1fr)`},children:g},m))}return(0,e.jsx)("div",{className:"grid",id:"game-grid",style:{maxWidth:`${Math.min(55*w,550)}px`,width:"95%",margin:"0 auto",gap:w>8?"4px":"5px"},children:p})}let Ae=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["BACK","Z","X","C","V","B","N","M","ENTER"]];function re({onKey:d,keyStates:a}){let n=r=>{let i="key";(r==="ENTER"||r==="BACK")&&(i+=" key--wide");let w=a[r.toLowerCase()];return w==="correct"?i+=" key--correct":w==="present"?i+=" key--present":w==="absent"&&(i+=" key--absent"),i},s=r=>r==="BACK"?(0,e.jsx)("button",{className:n(r),onClick:()=>d("Backspace"),"aria-label":"Backspace",id:"key-back",children:(0,e.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,e.jsx)("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})})},r):(0,e.jsx)("button",{className:n(r),onClick:()=>d(r==="ENTER"?"Enter":r),id:`key-${r.toLowerCase()}`,children:r==="ENTER"?"Enter":r},r);return(0,e.jsx)("div",{className:"keyboard",id:"keyboard",children:Ae.map((r,i)=>(0,e.jsx)("div",{className:"keyboard__row",children:r.map(s)},i))})}var D=C(8380),ze=C(2201),ve=C.n(ze);let Fe={title:"C\xF3mo Jugar",line1:"Adivina la palabra oculta en 6 intentos.",line2:"Cada intento debe ser una palabra v\xE1lida de 5 letras.",line3:"El color de las casillas cambiar\xE1 para mostrarte qu\xE9 tan cerca est\xE1s de acertar."},Ue={title:"Ajustes",dark:"Modo Oscuro",hard:"Modo Dif\xEDcil"},Be={title:"Estad\xEDsticas",played:"Jugadas",won:"Victorias",newGame:"Nueva Partida"},_e={title:"Desafiar a un Amigo",prompt:"Introduce una palabra para generar el enlace del desaf\xEDo:",placeholder:"ESCRIBE UNA PALABRA",btn:"Generar y Copiar",validating:"Comprobando...",copied:"\xA1Enlace copiado al portapapeles!",btnAnother:"Crear Otro",errorLength:"La palabra debe tener entre 4 y 11 letras",errorBanned:"Palabra no permitida",errorInvalid:"Palabra no v\xE1lida en el diccionario"},qe={won:"\xA1Has Ganado!",lost:"\xA1Has Perdido!",answer:"La palabra era:",meaning:"\xBFQu\xE9 significa esta palabra?",newGame:"Nueva Partida",enterAgain:"o pulsa Enter para jugar de nuevo",copyLink:"Copiar enlace a esta palabra",downloadImg:"Descargar imagen del resultado",linkCopied:"\xA1Enlace copiado al portapapeles!",dailyFinished:"\xA1Ya has completado el Wordle de hoy!",nextWord:"Siguiente palabra en:",tryUnlimited:"Probar Wordle Ilimitado"};function le({isOpen:d,onClose:a,children:n}){return d?(0,e.jsx)("div",{className:"modal-overlay",onClick:a,id:"modal-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},children:(0,e.jsx)("div",{className:"modal",onClick:s=>s.stopPropagation(),style:{background:"white",borderRadius:"12px",width:"100%",maxWidth:"450px",position:"relative",overflow:"hidden",boxShadow:"0 10px 40px rgba(0,0,0,0.2)"},children:n})}):null}function we({title:d,onClose:a}){return(0,e.jsxs)("div",{style:{background:"#e8f5e9",padding:"12px 20px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",borderBottom:"1px solid #e0e0e0"},children:[(0,e.jsx)("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:"800",color:"#1a1a1b"},children:d}),(0,e.jsx)("button",{onClick:a,style:{position:"absolute",right:"15px",background:"none",border:"none",fontSize:"24px",color:"#86888a",cursor:"pointer",lineHeight:1},children:"\xD7"})]})}function $({onClose:d,language:a="es"}){let n=Fe;return(0,e.jsxs)("div",{children:[(0,e.jsx)(we,{title:n.title,onClose:d}),(0,e.jsxs)("div",{style:{padding:"24px",color:"#1a1a1b"},children:[(0,e.jsx)("p",{style:{marginBottom:"15px",fontWeight:"600"},children:n.line1}),(0,e.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("li",{children:["\u2022 ",n.line2]}),(0,e.jsxs)("li",{children:["\u2022 ",n.line3]})]})]})]})}function ae({onClose:d,darkMode:a,onDarkMode:n,hardMode:s,onHardMode:r,colorBlind:i,onColorBlind:w,language:p="es"}){let m=Ue;return(0,e.jsxs)("div",{children:[(0,e.jsx)(we,{title:m.title,onClose:d}),(0,e.jsxs)("div",{style:{padding:"24px",display:"flex",flexDirection:"column",gap:"20px",color:"#1a1a1b"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontWeight:"600"},children:m.dark}),(0,e.jsx)("input",{type:"checkbox",checked:a,onChange:n,style:{cursor:"pointer"}})]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontWeight:"600"},children:m.hard}),(0,e.jsx)("input",{type:"checkbox",checked:s,onChange:r,style:{cursor:"pointer"}})]})]})]})}function ce({stats:d,onNewGame:a,gameState:n,onClose:s,language:r="es"}){let i=Be;return(0,e.jsxs)("div",{children:[(0,e.jsx)(we,{title:i.title,onClose:s}),(0,e.jsxs)("div",{style:{padding:"24px",textAlign:"center",color:"#1a1a1b"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginBottom:"30px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"2.5rem",fontWeight:"800"},children:d.gamesPlayed}),(0,e.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#818384"},children:i.played})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"2.5rem",fontWeight:"800"},children:d.gamesWon}),(0,e.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#818384"},children:i.won})]})]}),(0,e.jsx)("button",{onClick:()=>{s(),a()},style:{background:"#6aaa64",color:"white",border:"none",padding:"14px 40px",borderRadius:"8px",fontSize:"1.1rem",fontWeight:"800",cursor:"pointer",boxShadow:"0 4px 0 #53844e"},children:i.newGame})]})]})}function be({onClose:d,language:a="es"}){let n=_e,[s,r]=(0,t.useState)(""),[i,w]=(0,t.useState)(!1),[p,m]=(0,t.useState)(""),[g,k]=(0,t.useState)(!1),[c,h]=(0,t.useState)(""),x=async E=>{if(E.preventDefault(),s.length<4||s.length>11)return void m(n.errorLength);k(!0),m("");let S=await(0,D.validateWordOnline)(s,a);if(k(!1),!S.valid){w(!0),m(S.reason==="banned"?n.errorBanned:n.errorInvalid),setTimeout(()=>w(!1),600);return}let T=`${window.location.origin}${window.location.pathname}?challenge=wu_${btoa(s.toLowerCase())}`;h(T),navigator.clipboard.writeText(T)};return(0,e.jsxs)("div",{children:[(0,e.jsx)(we,{title:n.title,onClose:d}),(0,e.jsx)("div",{style:{padding:"24px"},children:c?(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)("p",{style:{color:"#6aaa64",fontWeight:"700",marginBottom:"15px"},children:n.copied}),(0,e.jsx)("input",{type:"text",readOnly:!0,value:c,style:{width:"100%",padding:"12px",background:"#f8f9fa",border:"1px solid #dee2e6",borderRadius:"6px",marginBottom:"15px",color:"#1a1a1b",fontSize:"14px"}}),(0,e.jsx)("button",{onClick:()=>h(""),style:{background:"#6aaa64",color:"white",border:"none",padding:"10px 20px",borderRadius:"6px",fontWeight:"700",cursor:"pointer"},children:n.btnAnother})]}):(0,e.jsxs)("form",{onSubmit:x,style:{textAlign:"center"},children:[(0,e.jsx)("p",{style:{marginBottom:"20px",fontSize:"15px",color:"#3a3a3c",fontWeight:"500"},children:n.prompt}),(0,e.jsx)("input",{type:"text",value:s,onChange:E=>r(E.target.value.toUpperCase()),className:i?"grid__row--shake":"",placeholder:n.placeholder,maxLength:11,style:{width:"100%",padding:"14px",textAlign:"center",fontSize:"1.6rem",fontWeight:"800",letterSpacing:"2px",border:"2px solid #dee2e6",borderRadius:"8px",marginBottom:"10px",color:"#1a1a1b"}}),p&&(0,e.jsx)("p",{style:{color:"#e91e63",fontSize:"14px",fontWeight:"600",marginBottom:"15px"},children:p}),(0,e.jsx)("button",{type:"submit",disabled:g,style:{width:"100%",background:"#6aaa64",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"1.1rem",fontWeight:"800",cursor:"pointer",boxShadow:"0 4px 0 #53844e"},children:g?n.validating:n.btn})]})})]})}function We({isWin:d,answer:a,onNewGame:n,onClose:s,language:r="es",gameMode:i="unlimited",onSwitchMode:w}){let p=qe,m=`${window.location.origin}${window.location.pathname}?challenge=wu_${btoa(a.toLowerCase())}`,[g,k]=(0,t.useState)("");return(0,t.useEffect)(()=>{if(i!=="daily")return;let c=setInterval(()=>{let h=new Date,x=new Date(h);x.setDate(x.getDate()+1),x.setHours(0,0,0,0);let E=x-h,S=Math.floor(E/36e5),T=Math.floor(E%36e5/6e4),L=Math.floor(E%6e4/1e3);k(`${String(S).padStart(2,"0")}:${String(T).padStart(2,"0")}:${String(L).padStart(2,"0")}`)},1e3);return()=>clearInterval(c)},[i]),(0,e.jsxs)("div",{className:"modal_finish",style:{color:"#1a1a1b"},children:[(0,e.jsx)(we,{title:d?p.won:p.lost,onClose:s}),(0,e.jsxs)("div",{style:{padding:"24px 30px",textAlign:"center"},children:[(0,e.jsx)("p",{style:{margin:"0 0 12px 0",fontSize:"0.95rem",fontWeight:"600",color:"#3a3a3c"},children:p.answer}),(0,e.jsx)("div",{style:{display:"inline-block",padding:"12px 30px",background:"#f4f6f7",border:"2px dashed #bfc1c3",borderRadius:"8px",marginBottom:"12px"},children:(0,e.jsx)("span",{style:{fontSize:"1.75rem",fontWeight:"800",letterSpacing:"4px",textTransform:"uppercase"},children:a})}),(0,e.jsx)("div",{style:{marginBottom:"24px"},children:(0,e.jsx)("a",{href:`https://dle.rae.es/${a.toLowerCase()}`,target:"_blank",rel:"noopener noreferrer",style:{color:"#4486f4",textDecoration:"none",fontSize:"0.9rem",fontWeight:"600"},children:p.meaning})}),i==="daily"?(0,e.jsxs)("div",{style:{marginBottom:"24px",padding:"15px",background:"#f8f9fa",borderRadius:"12px"},children:[(0,e.jsx)("p",{style:{margin:"0 0 10px 0",fontSize:"1rem",fontWeight:"700",color:"#1a1a1b"},children:p.dailyFinished}),(0,e.jsxs)("p",{style:{margin:"0 0 15px 0",fontSize:"0.9rem",color:"#6c757d"},children:[p.nextWord," ",(0,e.jsx)("span",{style:{fontFamily:"monospace",fontWeight:"800",fontSize:"1.1rem",color:"#1a1a1b"},children:g})]}),(0,e.jsx)("button",{onClick:()=>{w("unlimited"),s()},style:{background:"#6aaa64",color:"white",border:"none",padding:"12px 20px",borderRadius:"8px",fontSize:"1rem",fontWeight:"700",cursor:"pointer",width:"100%"},children:p.tryUnlimited})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{onClick:n,style:{background:"#6aaa64",color:"white",border:"none",padding:"14px 0",width:"100%",maxWidth:"240px",borderRadius:"8px",fontSize:"1.1rem",fontWeight:"800",textTransform:"uppercase",cursor:"pointer",boxShadow:"0 4px 0 #53844e",transition:"transform 0.1s",marginBottom:"10px"},onMouseDown:c=>c.currentTarget.style.transform="translateY(2px)",onMouseUp:c=>c.currentTarget.style.transform="translateY(0)",children:p.newGame}),(0,e.jsx)("p",{style:{margin:"0 0 24px 0",fontSize:"0.85rem",color:"#818384",fontWeight:"500"},children:p.enterAgain})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(m),alert(p.linkCopied)},style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",width:"100%",padding:"12px",background:"#f8f9fa",border:"1px solid #dee2e6",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",color:"#3a3a3c",cursor:"pointer"},children:[(0,e.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),(0,e.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),p.copyLink]}),(0,e.jsxs)("button",{onClick:()=>{let c=document.getElementById("wordle-grid");c&&ve()(c,{backgroundColor:"#ffffff"}).then(h=>{let x=document.createElement("a");x.download=`wordle-result-${new Date().getTime()}.png`,x.href=h.toDataURL(),x.click()})},style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",width:"100%",padding:"12px",background:"#f8f9fa",border:"1px solid #dee2e6",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",color:"#3a3a3c",cursor:"pointer"},children:[(0,e.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,e.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,e.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),p.downloadImg]})]}),(0,e.jsx)("div",{style:{marginTop:"20px",fontSize:"0.75rem",color:"#b5b7b9",textTransform:"uppercase",letterSpacing:"1px"},children:"Sponsored"})]})]})}let oe={heading:"C\xF3mo Jugar a Wordle",steps:[{num:1,title:"Haz un Intento",desc:"Escribe cualquier palabra v\xE1lida de 5 letras y presiona Enter para enviar tu intento.",img:"/img/howto-1.webp"},{num:2,title:"Interpreta los Colores",desc:`El juego te dar\xE1 pistas con tres colores:
\u{1F7E9} Verde: Letra correcta en la posici\xF3n exacta.
\u{1F7E8} Amarillo: Letra correcta pero en la posici\xF3n equivocada.
\u2B1C Gris: La letra no forma parte de la palabra.`,img:"/img/howto-2.webp"},{num:3,title:"Realiza Nuevos Intentos",desc:"Cada nuevo intento debe ser una palabra v\xE1lida de 5 letras. Tienes un m\xE1ximo de 6 intentos para resolver el puzle.",img:"/img/howto-3.webp"},{num:4,title:"Victoria o Derrota",desc:"Adivina la palabra en 6 intentos o menos para ganar, o el juego te revelar\xE1 la soluci\xF3n al finalizar.",img:"/img/howto-4.webp"}]};function He({language:d="es"}){return(0,e.jsxs)("section",{className:"howto",id:"how-to-play",children:[(0,e.jsx)("div",{className:"section-heading",children:(0,e.jsx)("h2",{className:"section-heading__title",children:oe.heading})}),(0,e.jsx)("ul",{className:"howto__list",children:oe.steps.map((a,n)=>(0,e.jsxs)("li",{className:`howto__item ${n%2==1?"howto__item--alt":""}`,children:[(0,e.jsx)("div",{className:"howto__content-side",children:(0,e.jsx)("h3",{className:"howto__title",children:a.title})}),(0,e.jsxs)("div",{className:"howto__num-col",children:[(0,e.jsx)("span",{className:"howto__num",children:a.num}),n<oe.steps.length-1&&(0,e.jsx)("div",{className:"howto__line"})]}),(0,e.jsx)("div",{className:"howto__card-side",children:(0,e.jsxs)("div",{className:"howto__card",children:[(0,e.jsx)("p",{className:"howto__desc",children:a.desc.split(`
`).map((s,r)=>(0,e.jsxs)("span",{children:[s,r<a.desc.split(`
`).length-1&&(0,e.jsx)("br",{})]},r))}),(0,e.jsx)("img",{className:"howto__img",src:a.img,alt:a.title,loading:"lazy"})]})})]},a.num))})]})}let ke={heading:"Consejos y Estrategias para Wordle",tips:[{title:"1. Elige una Palabra Inicial \xD3ptima",desc:'Aumenta tus probabilidades abriendo con palabras ricas en vocales y consonantes comunes en espa\xF1ol como "A", "E", "O", "R", "S" y "T" (por ejemplo: "AUDIO", "CANTO" o "SERIO").'},{title:"2. Analiza la Posici\xF3n de las Pistas",desc:"Si una letra sale en amarillo, col\xF3cala en una posici\xF3n diferente y habitual en palabras en espa\xF1ol para tu siguiente intento."},{title:"3. No Reutilices Letras Descartadas",desc:"Presta atenci\xF3n a las casillas grises. Si una letra se muestra gris, no pertenece a la palabra; desc\xE1rtala de tus siguientes intentos para reducir posibilidades r\xE1pidamente."},{title:"4. Aprovecha Patrones y Terminaciones Comunes",desc:'El vocabulario en espa\xF1ol sigue estructuras predecibles. F\xEDjate en prefijos habituales (como "RE-", "DES-") y terminaciones frecuentes (como "-AR", "-ER", "-IR", "-ON", "-AS", "-OS").'},{title:"5. Juega en Modo Ilimitado para Entrenar",desc:"A diferencia de la restricci\xF3n de una sola partida diaria, el modo ilimitado te permite practicar cuantas veces quieras para mejorar tu agilidad mental y vocabulario."},{title:"6. Usa una Palabra de Descarte si te Bloqueas",desc:"Si tienes muchas opciones posibles y te quedan pocos intentos, prueba una palabra compuesta totalmente por letras nuevas para despejar dudas r\xE1pidamente."},{title:"7. T\xF3mate tu Tiempo",desc:"En Wordle no hay l\xEDmite de tiempo ni reloj en contra. Reflexiona con calma sobre cada combinaci\xF3n de letras antes de confirmar tu jugada."},{title:"8. Atenci\xF3n a las Letras Repetidas",desc:'Recuerda que una palabra puede contener letras repetidas (ej. "CASAS", "PERRO", "LLAVE"). Si no encuentras letras que encajen, considera repetir una letra ya descubierta.'}]};function Le({language:d="es"}){return(0,e.jsxs)("section",{className:"tips",id:"wordle-tips",children:[(0,e.jsx)("div",{className:"section-heading",children:(0,e.jsx)("h2",{className:"section-heading__title",children:ke.heading})}),(0,e.jsx)("div",{className:"tips__content",children:ke.tips.map((a,n)=>(0,e.jsxs)("div",{className:"tips__item",children:[(0,e.jsx)("h3",{className:"tips__title",children:a.title}),(0,e.jsx)("p",{className:"tips__desc",children:a.desc})]},n))})]})}let ra={heading:"Ventajas Principales",advantages:[{icon:"\u{1F4D6}",title:"Ampl\xEDa tu Vocabulario",desc:"Jugar con regularidad te expone a diversas palabras de 5 letras en espa\xF1ol, enriqueciendo tu l\xE9xico y ortograf\xEDa de forma amena."},{icon:"\u{1F3AE}",title:"100% Gratis y Sin Descargas",desc:"Juega al instante desde cualquier navegador web moderno sin pagos ocultos, suscripciones ni instalaciones molestas."},{icon:"\u{1F9E0}",title:"Estimula tu Mente",desc:"Deducir la palabra correcta mediante pistas de color ejercita la l\xF3gica, la concentraci\xF3n y el reconocimiento de patrones."},{icon:"\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",title:"Gimnasia Cerebral Diaria",desc:"Tanto en el reto de la palabra del d\xEDa como en el modo ilimitado, es el ejercicio mental perfecto para tus pausas cotidianas."},{icon:"\u23F3",title:"Partidas Sin Estr\xE9s",desc:"Sin cron\xF3metros ni prisas: t\xF3mate todo el tiempo que necesites para pensar detenidamente cada uno de tus intentos."},{icon:"\u{1F310}",title:"Comparte con tus Amigos",desc:"Copia la cuadr\xEDcula de colores con un solo clic y comparte tus resultados en redes sociales sin revelar la palabra secreta."}]};function Oa({language:d="es"}){return(0,e.jsxs)("section",{className:"advantages",id:"advantages",children:[(0,e.jsx)("div",{className:"section-heading",children:(0,e.jsx)("h2",{className:"section-heading__title",children:ra.heading})}),(0,e.jsx)("div",{className:"advantages__grid",children:ra.advantages.map((a,n)=>(0,e.jsxs)("div",{className:"advantages__card",children:[(0,e.jsx)("div",{className:"advantages__icon",children:a.icon}),(0,e.jsx)("h3",{className:"advantages__title",children:a.title}),(0,e.jsx)("p",{className:"advantages__desc",children:a.desc})]},n))})]})}let oa={heading:"Preguntas Frecuentes",faqs:[{q:"\xBFPor qu\xE9 mi intento fue rechazado como 'No est\xE1 en la lista'?",a:"Wordle en Espa\xF1ol utiliza un diccionario verificado de palabras v\xE1lidas de 5 letras en espa\xF1ol. Si tu palabra no es aceptada, puede ser un nombre propio o una palabra no reconocida en el diccionario est\xE1ndar."},{q:"\xBFSe admiten acentos y tildes en el juego?",a:"Para facilitar la jugabilidad y la introducci\xF3n de letras, el juego procesa las palabras en may\xFAsculas sin distinguir tildes gr\xE1ficas."},{q:"\xBFQu\xE9 ocurre con mis estad\xEDsticas si borro la memoria del navegador?",a:"Tus estad\xEDsticas (partidas jugadas, victorias y rachas) se guardan localmente en el almacenamiento de tu navegador. Si limpias los datos o juegas en modo inc\xF3gnito, el historial se reiniciar\xE1."},{q:"\xBFPuedo transferir mis estad\xEDsticas a otro m\xF3vil o PC?",a:"Actualmente todos los datos se conservan \xFAnicamente en el dispositivo y navegador que utilizas. No se requiere registro de cuentas para jugar."},{q:"\xBFC\xF3mo activo el Modo Dif\xEDcil?",a:"Puedes activar el Modo Dif\xEDcil haciendo clic en el icono de engranaje (Ajustes) en la esquina superior derecha antes de ingresar tu primer intento."},{q:"\xBFEn qu\xE9 consiste el Modo Dif\xEDcil?",a:"En el Modo Dif\xEDcil, cualquier pista revelada (letras verdes o amarillas) debe ser utilizada obligatoriamente en todos los intentos posteriores."},{q:"\xBFA qu\xE9 hora se actualiza la Palabra del D\xEDa?",a:"El desaf\xEDo diario se renueva cada d\xEDa a medianoche seg\xFAn la hora local. Si no ves la nueva palabra, prueba refrescar la p\xE1gina."},{q:"\xBFPuedo jugar partidas anteriores de d\xEDas pasados?",a:"El reto 'Palabra del D\xEDa' est\xE1 fijado a la fecha actual. No obstante, puedes jugar todas las partidas que desees en el modo 'Ilimitado'."},{q:"\xBFSe necesita conexi\xF3n a internet para jugar?",a:"Necesitas conexi\xF3n para cargar la p\xE1gina inicialmente. Una vez cargada, puedes completar tu partida sin interrupciones."}]};function ka({language:d="es"}){let[a,n]=(0,t.useState)(0);return(0,e.jsxs)("section",{className:"faq",id:"faq",children:[(0,e.jsx)("div",{className:"section-heading",children:(0,e.jsx)("h2",{className:"section-heading__title",children:oa.heading})}),(0,e.jsx)("div",{className:"faq__list",children:oa.faqs.map((s,r)=>{let i=a===r;return(0,e.jsxs)("div",{className:`faq__item ${i?"is-open":""}`,children:[(0,e.jsxs)("button",{className:"faq__trigger",onClick:()=>{n(a===r?-1:r)},"aria-expanded":i,children:[s.q,(0,e.jsx)("svg",{className:"faq__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,e.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,e.jsx)("div",{className:"faq__content-wrap",style:{display:i?"block":"none"},children:(0,e.jsx)("div",{className:"faq__content",children:s.a})})]},r)})})]})}let sa={heading:"Juega a Otros Juegos",games:[{name:"Strands",desc:"Descubre palabras para encontrar el tema",icon:"/images/games/strands-icon.png",url:"https://gamestrands.com/",accentColor:"#4A90D9",bgColor:"#EBF4FF"},{name:"Connections",desc:"Agrupa palabras que compartan una tem\xE1tica com\xFAn",icon:"/images/games/connections-icon.webp",url:"https://unlimitedconnections.net/",accentColor:"#9B8FD9",bgColor:"#F0EEFF"}]};function Da({language:d="es"}){return(0,e.jsxs)("section",{className:"game-cards",id:"play-other-games",children:[(0,e.jsx)("div",{className:"game-cards__heading",children:(0,e.jsx)("h2",{className:"game-cards__heading-text",children:sa.heading})}),(0,e.jsx)("div",{className:"game-cards__grid game-cards__grid--4col",children:sa.games.map(a=>(0,e.jsxs)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"game-card game-card--enhanced",id:`card-${a.name.toLowerCase().replace(/\s/g,"-")}`,style:{"--card-accent":a.accentColor},children:[(0,e.jsx)("div",{className:"game-card__icon-wrap",style:{background:a.bgColor},children:(0,e.jsx)("img",{src:a.icon,alt:`${a.name} game icon`,width:48,height:48,className:"game-card__img"})}),(0,e.jsxs)("div",{className:"game-card__info",children:[(0,e.jsx)("h3",{className:"game-card__name",children:a.name}),(0,e.jsx)("p",{className:"game-card__desc",children:a.desc})]}),(0,e.jsx)("span",{className:"game-card__arrow",children:"\u2192"})]},a.name))})]})}var _a=C(8500),de=C.n(_a);let la={links:[{label:"Wordle Espa\xF1ol",href:"/"},{label:"Palabra del D\xEDa",href:"/palabra-del-dia/"},{label:"Wordle Respuesta Hoy",href:"/wordle-respuesta-hoy/"},{label:"Archivo de Puzles",href:"/archive/"},{label:"C\xF3mo Jugar",href:"#how-to-play"},{label:"Preguntas Frecuentes",href:"#faq"},{label:"Pol\xEDtica de Privacidad",href:"/privacy/"}]};function La({language:d="es"}){return(0,e.jsxs)("footer",{className:"footer",id:"footer",children:[(0,e.jsxs)("div",{className:"footer__logo",children:[(0,e.jsx)("span",{className:"footer__logo-icon",children:"W"}),(0,e.jsx)("span",{className:"footer__logo-text",children:"Wordle Unlimited"})]}),(0,e.jsx)("nav",{className:"footer__links",children:la.links.map((a,n)=>(0,e.jsxs)(t.Fragment,{children:[a.href.startsWith("/")?(0,e.jsx)(de(),{href:a.href,className:"footer__link",children:a.label}):(0,e.jsx)("a",{href:a.href,className:"footer__link",children:a.label}),n<la.links.length-1&&(0,e.jsx)("span",{className:"footer__dot",children:"\xB7"})]},n))}),(0,e.jsxs)("div",{className:"footer__info",children:[(0,e.jsxs)("p",{className:"footer__copy",children:["\xA9 ",new Date().getFullYear()," Wordle Unlimited"]}),(0,e.jsx)("span",{className:"footer__version",children:"Version 1.2.4"})]})]})}function ca({items:d,language:a="en"}){let n=(0,Q.useRouter)();return(0,e.jsx)("nav",{"aria-label":"Breadcrumb",style:{marginBottom:"20px",fontSize:"14px"},children:(0,e.jsxs)("ol",{style:{display:"flex",listStyle:"none",padding:0,margin:0,gap:"8px",color:"var(--color-text-secondary)"},children:[(0,e.jsxs)("li",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,e.jsx)("span",{onClick:()=>n.push("/"),style:{cursor:"pointer",fontWeight:"600",color:"var(--color-text-dark)"},children:"Home"}),(0,e.jsx)("span",{children:"/"})]}),d.map((s,r)=>(0,e.jsx)("li",{style:{display:"flex",alignItems:"center",gap:"8px"},children:r===d.length-1?(0,e.jsx)("span",{style:{fontWeight:"500"},children:s.name}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{onClick:()=>{let i;return i=s.path,n.push(i)},style:{cursor:"pointer",fontWeight:"600",color:"var(--color-text-dark)"},children:s.name}),(0,e.jsx)("span",{children:"/"})]})},r))]})})}var F=C(8580);let da=(d="es",a)=>{let n,s,r,i=(0,D.getDailyWord)(d,a);return{puzzle_date:(n=a.getFullYear(),s=String(a.getMonth()+1).padStart(2,"0"),r=String(a.getDate()).padStart(2,"0"),`${n}-${s}-${r}`),language:d,word:(i.word||"").toUpperCase(),day_number:i.dayNumber??null,difficulty:i.difficulty??null,category:i.category??null,definition:i.definition??null,usage:i.usage??null,hints:Array.isArray(i.hints)?i.hints:null}};async function Ia(d="es",a=(0,F.E)()){return da(d,a)}async function Pa(d="es",a,n=14){let s=[];for(let r=1;r<=n;r++){let i=new Date(a);i.setDate(i.getDate()-r),s.push(da(d,i))}return s}let U={title:"Pistas Wordle de Hoy",titleWithDate:d=>`Pistas Wordle de Hoy \u2013 Pistas y Soluci\xF3n para ${d}`,intro:"Descubre pistas guiadas paso a paso y sin spoilers para la Palabra del D\xEDa: categor\xEDa gramatical, conteo de vocales, letra inicial, letra final y la respuesta de hoy. Actualizado diariamente.",difficulty:"Dificultad de Hoy",unlockNext:"Desbloquear siguiente pista",unlockAll:"Desbloquear todas las pistas",hideAll:"Ocultar todas las pistas",hideAnswer:"Ocultar Respuesta",revealAnswer:"Revelar Respuesta de Hoy",copyAnswer:"Copiar Palabra",copiedSuccess:"\xA1Palabra copiada al portapapeles!",playToday:"Jugar Palabra del D\xEDa",pastAnswers:"Historial de Palabras Anteriores",yesterdayTitle:"Palabra de Ayer",puzzleNumber:"Wordle",structuredHintsTitle:"Pistas Progresivas (Sin Spoilers)",meaningTitle:"Significado y An\xE1lisis de la Palabra",bestStartersTitle:"Mejores Palabras para Empezar",tipsTitle:"Estrategias y Consejos de Expertos",relatedGamesTitle:"Otros Juegos y Modos",historyTitle:"Sobre el Desaf\xEDo Diario de Wordle",faqTitle:"Preguntas Frecuentes",hintLabels:{category:"Tipo de palabra",vowels:"Vocales y Consonantes",start:"Primera Letra",end:"\xDAltima Letra",repeat:"Letras Repetidas",length:"Significado y Contexto"}},Ma=[{word:"AIRES",why:"Cubre 4 vocales distintas (A, I, E) y la consonante de alt\xEDsima frecuencia R."},{word:"CASOS",why:"Prueba consonantes muy repetidas en espa\xF1ol como C y S."},{word:"OREAS",why:"Gran cobertura de vocales abiertas (O, E, A) m\xE1s la letra R y S."},{word:"TENIA",why:"Excelente equilibrio entre consonantes dentales (T, N) y tres vocales."},{word:"PARLO",why:"Ideal para segundo intento si el primero no revel\xF3 suficientes consonantes."}],Fa=[{icon:"\u{1F3AF}",title:"1. Abre con 3 o 4 vocales distintas",desc:"Palabras como AIRES, TENIA o OREAS te permiten descubrir r\xE1pidamente la estructura vocal de la palabra secreta."},{icon:"\u{1F504}",title:"2. Reubica inmediatamente las pistas amarillas",desc:'Si una letra sale en amarillo, c\xE1mbiala a una posici\xF3n donde sea com\xFAn en espa\xF1ol (ej. la "R" o "L" al medio, "S" al final).'},{icon:"\u{1F6AB}",title:"3. No reutilices letras descartadas",desc:"Las letras grises ya no aportan valor. Mant\xE9n tu teclado limpio y enf\xF3cate en el abanico de letras restantes."},{icon:"\u{1F501}",title:"4. Sospecha de letras repetidas",desc:"Muchas palabras en espa\xF1ol contienen letras dobles (ej. CASAS, PERRO, LLAVE, BEB\xC9). Si las letras no encajan, prueba duplicar."},{icon:"\u{1F9E0}",title:"5. Aprovecha patrones y sufijos comunes",desc:"Las terminaciones en -AR, -ER, -IR, -ON, -AS, -OS son las m\xE1s habituales en vocablos espa\xF1oles de 5 letras."}],Ua=[{name:"Palabra del D\xEDa",to:"/palabra-del-dia/",desc:"Juega al reto diario oficial en espa\xF1ol."},{name:"Wordle Ilimitado",to:"/",desc:"Partidas infinitas sin esperas de 24 horas."},{name:"Wordle Respuesta Hoy",to:"/wordle-respuesta-hoy/",desc:"Gu\xEDa y soluci\xF3n paso a paso del puzle diario."}],Ba=[{q:"\xBFC\xF3mo funcionan las pistas progresivas sin spoilers?",a:"Cada tarjeta revela una caracter\xEDstica estructural aislada (como el tipo de palabra, n\xFAmero de vocales o letra inicial) para que puedas deducir la palabra t\xFA mismo sin arruinar la diversi\xF3n."},{q:"\xBFA qu\xE9 hora se renueva la Palabra del D\xEDa?",a:"El reto diario se actualiza autom\xE1ticamente cada medianoche (00:00) seg\xFAn tu hora local. Esta p\xE1gina de pistas se sincroniza en tiempo real."},{q:"\xBFCu\xE1l es la diferencia entre el modo Diario e Ilimitado?",a:"En el modo Diario todos los jugadores resuelven la misma palabra \xFAnica cada 24 horas. En el modo Ilimitado puedes jugar tantas partidas aleatorias como quieras para entrenar."},{q:"\xBFQu\xE9 hago si me quedo atascado en el 5\xBA intento?",a:'Abre la Pista 4 (Letra Final) y la Pista 6 (Significado). Si aun as\xED tienes dudas, pulsa el bot\xF3n "Revelar Respuesta de Hoy" para mantener tu racha.'},{q:"\xBFD\xF3nde puedo consultar palabras de d\xEDas pasados?",a:'En la secci\xF3n "Palabra de Ayer" y en la lista de "Historial de Palabras Anteriores" encontrar\xE1s los retos de los \xFAltimos 14 d\xEDas.'}],pa=new Set(["A","E","I","O","U"]);function Ve(d){let a=(d||"").toUpperCase(),n=a.split(""),s=n.filter(m=>pa.has(m)),r=n.filter(m=>!pa.has(m)),i=n.reduce((m,g)=>(m[g]=(m[g]||0)+1,m),{}),w=Object.keys(i).filter(m=>i[m]>1),p=w.length>0;return{upper:a,letters:n,first:n[0]||"",last:n[n.length-1]||"",vowelCount:s.length,consonantCount:r.length,vowelList:[...new Set(s)],consonantList:[...new Set(r)],repeated:p,repeatedLetters:w,length:n.length}}function ma(d){return d.toLocaleDateString("es-ES",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function qa({language:d="es",onBack:a}){let[n,s]=(0,t.useState)(null),[r,i]=(0,t.useState)(()=>new Set([0])),[w,p]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[k,c]=(0,t.useState)([]),[h,x]=(0,t.useState)(null),[E,S]=(0,t.useState)(()=>(0,F.E)()),[T,L]=(0,t.useState)(null),[Z,Ne]=(0,t.useState)({partOfSpeech:"",definition:"",example:""});(0,t.useEffect)(()=>{let u=new URLSearchParams(window.location.search).get("seed"),b=(0,F.E)();u&&/^\d{8}$/.test(u)&&(b=new Date(u.substring(0,4),u.substring(4,6)-1,u.substring(6,8))),S(b),s((0,D.getDailyWord)("es",b)),Ia("es",b),Pa("es",b,14).then(y=>{c(y),x(y[0]||null)})},[d]);let J=(0,t.useMemo)(()=>{var u,b;let y,P,W;return n?(u=n.word,b=U.hintLabels,y=Ve(u),P={noun:"sustantivo (nombre)",verb:"verbo (acci\xF3n)",adjective:"adjetivo (cualidad)"}[Z?.partOfSpeech]||"sustantivo / verbo com\xFAn",W=Z?.definition||"Palabra com\xFAn de 5 letras presente en el vocabulario general del espa\xF1ol.",[{id:"cat",num:1,icon:"\u{1F3F7}\uFE0F",title:b.category,badge:"Gram\xE1tica",text:`La palabra de hoy funciona principalmente como un ${P}.`,detail:"Identificar si es un objeto, verbo o adjetivo te ayudar\xE1 a filtrar opciones gramaticales."},{id:"vow",num:2,icon:"\u{1F524}",title:b.vowels,badge:`${y.vowelCount} vocales`,text:`Tiene ${y.vowelCount} vocal${y.vowelCount===1?"":"es"} (${y.vowelList.join(", ")||"ninguna"}) y ${y.consonantCount} consonante${y.consonantCount===1?"":"s"}.`,detail:y.vowelCount>=3?"\xA1Palabra con alto contenido voc\xE1lico!":"Palabra con mayor presencia de consonantes."},{id:"start",num:3,icon:"\u{1F7E2}",title:b.start,badge:`Empieza por "${y.first}"`,text:`La palabra comienza con la letra "${y.first}".`,detail:`Letra inicial: ${y.first}`,visualPattern:[y.first,"\xB7","\xB7","\xB7","\xB7"]},{id:"end",num:4,icon:"\u{1F3AF}",title:b.end,badge:`Termina en "${y.last}"`,text:`La \xFAltima letra de la palabra es "${y.last}".`,detail:`Letra final: ${y.last}`,visualPattern:["\xB7","\xB7","\xB7","\xB7",y.last]},{id:"rep",num:5,icon:"\u{1F501}",title:b.repeat,badge:y.repeated?"Letras repetidas":"Todas \xFAnicas",text:y.repeated?`S\xED \u2014 la palabra contiene letras repetidas (ej. letra "${y.repeatedLetters.join(", ")}").`:"No \u2014 todas las 5 letras de la palabra son completamente diferentes.",detail:y.repeated?"Ten cuidado con descartar letras ya acertadas.":"Cada casilla contiene una letra distinta."},{id:"len",num:6,icon:"\u{1F4D6}",title:b.length,badge:"Definici\xF3n",text:`Significado: ${W}`,detail:"Pista contextual basada en el diccionario."}]):[]},[n,U.hintLabels,Z]),A=(0,t.useMemo)(()=>ma(E),[E]);if(!n)return null;let R=u=>{switch(u){case"Easy":return"#63AF4E";case"Medium":return"#D4A843";case"Hard":return"#E05D52";case"Ultra-Hard":return"#9B51E0";default:return"#7A8199"}},I=u=>{switch(u){case"Easy":return"F\xE1cil";case"Medium":return"Media";case"Hard":return"Dif\xEDcil";case"Ultra-Hard":return"Extrema";default:return u}},q=(0,F.d)(E),pe=u=>{if(!u)return{diff:"Medium",reason:""};let b=u.toUpperCase(),y=["Q","J","Z","X","V","K","W"],P=0,W=!1,Ee={};for(let ne of b)y.includes(ne)&&P++,Ee[ne]=(Ee[ne]||0)+1,Ee[ne]>1&&(W=!0);let je=(b.match(/[AEIOU]/g)||[]).length;return P>0&&W?{diff:"Ultra-Hard",score:4,reason:`Contiene la letra poco com\xFAn "${b.split("").find(ne=>y.includes(ne))}" y tiene letras repetidas.`}:P>0?{diff:"Hard",score:3,reason:`Contiene la consonante poco frecuente "${b.split("").find(ne=>y.includes(ne))}".`}:W?{diff:"Medium",score:2,reason:"Tiene al menos una letra repetida en el vocablo."}:je>=3?{diff:"Easy",score:1,reason:"Contiene m\xFAltiples vocales comunes que facilitan descartes r\xE1pidos."}:{diff:"Medium",score:2,reason:"Palabra equilibrada con consonantes est\xE1ndar y vocales habituales."}},K=pe(n.word),me={Easy:"2.8 / 6",Medium:"3.6 / 6",Hard:"4.5 / 6","Ultra-Hard":"5.2 / 6"}[K.diff]||"3.8 / 6",ye={Easy:"3.4",Medium:"4.1",Hard:"4.8","Ultra-Hard":"5.3"}[K.diff]||"4.0";return(0,e.jsxs)("div",{className:"hints-container",children:[(0,e.jsx)("div",{className:"hints-breadcrumbs-wrap",children:(0,e.jsx)(ca,{language:"es",items:[{name:"Wordle Espa\xF1ol",path:"/"},{name:"Palabra del D\xEDa",path:"/palabra-del-dia/"},{name:"Pistas de Hoy"}]})}),(0,e.jsxs)("div",{className:"hints-hero",children:[(0,e.jsxs)("div",{className:"hints-hero__badge-row",children:[(0,e.jsxs)("span",{className:"hints-hero__badge hints-hero__badge--puzzle",children:["\u{1F9E9} ",U.puzzleNumber," #",q]}),(0,e.jsxs)("span",{className:"hints-hero__badge hints-hero__badge--diff",style:{background:R(K.diff)},children:[(0,e.jsx)("span",{className:"diff-dot"}),"Dificultad: ",I(K.diff)," (",me,")"]}),(0,e.jsxs)("span",{className:"hints-hero__badge hints-hero__badge--avg",children:["\u{1F4CA} Promedio: ",ye," intentos"]})]}),(0,e.jsx)("h1",{className:"hints-hero__title",children:U.titleWithDate(A)}),(0,e.jsx)("p",{className:"hints-hero__desc",children:U.intro}),(0,e.jsxs)("div",{className:"hints-hero__cta-row",children:[a?(0,e.jsxs)("button",{onClick:a,className:"hints-hero__play-btn",children:[(0,e.jsx)("span",{children:"\u{1F3AE}"})," ",U.playToday]}):(0,e.jsxs)(de(),{href:"/palabra-del-dia/",className:"hints-hero__play-btn",children:[(0,e.jsx)("span",{children:"\u{1F3AE}"})," ",U.playToday]}),(0,e.jsx)("a",{href:"#answer",className:"hints-hero__jump-btn",children:"\u{1F441}\uFE0F Ir a la Soluci\xF3n"})]})]}),(0,e.jsxs)("nav",{"aria-label":"Navegaci\xF3n de secciones",className:"hints-nav-bar",children:[(0,e.jsx)("span",{className:"hints-nav-bar__label",children:"Saltar a:"}),(0,e.jsxs)("div",{className:"hints-nav-bar__chips",children:[(0,e.jsxs)("a",{href:"#hints",className:"hints-chip",children:["\u{1F4A1} Pistas (",r.size,"/",J.length,")"]}),(0,e.jsx)("a",{href:"#answer",className:"hints-chip",children:"\u{1F513} Soluci\xF3n"}),(0,e.jsx)("a",{href:"#meaning",className:"hints-chip",children:"\u{1F4D6} Significado"}),(0,e.jsx)("a",{href:"#yesterday",className:"hints-chip",children:"\u23EE\uFE0F Ayer"}),(0,e.jsx)("a",{href:"#past",className:"hints-chip",children:"\u{1F4DA} Historial"}),(0,e.jsx)("a",{href:"#starters",className:"hints-chip",children:"\u{1F680} Aperturas"}),(0,e.jsx)("a",{href:"#tips",className:"hints-chip",children:"\u26A1 Consejos"}),(0,e.jsx)("a",{href:"#faq",className:"hints-chip",children:"\u2753 Preguntas"})]})]}),(0,e.jsxs)("section",{id:"hints",className:"hints-card hints-card--highlight",children:[(0,e.jsxs)("div",{className:"hints-card__header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Desbloqueo Inteligente"}),(0,e.jsx)("h2",{className:"hints-card__title",children:U.structuredHintsTitle})]}),(0,e.jsxs)("div",{className:"hints-progress-pill",children:[(0,e.jsxs)("span",{className:"hints-progress-pill__count",children:[r.size," de ",J.length]}),(0,e.jsx)("span",{className:"hints-progress-pill__text",children:"desbloqueadas"})]})]}),(0,e.jsx)("div",{className:"hints-meter",children:(0,e.jsx)("div",{className:"hints-meter__fill",style:{width:`${r.size/J.length*100}%`}})}),(0,e.jsxs)("div",{className:"hints-actions-bar",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{for(let u=0;u<J.length;u++)if(!r.has(u)){i(b=>new Set([...b,u]));break}},disabled:r.size===J.length,className:"hints-btn hints-btn--primary",children:[(0,e.jsx)("span",{children:"\u{1F513}"})," ",U.unlockNext]}),r.size<J.length?(0,e.jsx)("button",{type:"button",onClick:()=>{i(new Set(J.map((u,b)=>b)))},className:"hints-btn hints-btn--secondary",children:U.unlockAll}):(0,e.jsx)("button",{type:"button",onClick:()=>{i(new Set)},className:"hints-btn hints-btn--secondary",children:U.hideAll})]}),(0,e.jsx)("div",{className:"hints-grid",children:J.map((u,b)=>{let y=r.has(b);return(0,e.jsxs)("div",{className:`hint-item ${y?"hint-item--unlocked":"hint-item--locked"}`,onClick:()=>{i(P=>{let W=new Set(P);return W.has(b)?W.delete(b):W.add(b),W})},children:[(0,e.jsxs)("div",{className:"hint-item__top",children:[(0,e.jsxs)("div",{className:"hint-item__badge-box",children:[(0,e.jsxs)("span",{className:"hint-item__num",children:["Pista #",u.num]}),(0,e.jsx)("span",{className:"hint-item__icon",children:u.icon})]}),(0,e.jsx)("div",{className:"hint-item__status",children:y?(0,e.jsx)("span",{className:"status-tag status-tag--open",children:"Revelada \u2713"}):(0,e.jsx)("span",{className:"status-tag status-tag--locked",children:"\u{1F512} Toca para ver"})})]}),(0,e.jsx)("div",{className:"hint-item__title",children:u.title}),y?(0,e.jsxs)("div",{className:"hint-item__content",children:[(0,e.jsx)("p",{className:"hint-item__text",children:u.text}),u.visualPattern&&(0,e.jsx)("div",{className:"hint-tiles-preview",children:u.visualPattern.map((P,W)=>(0,e.jsx)("div",{className:`hint-tile ${P!=="\xB7"?"hint-tile--correct":"hint-tile--empty"}`,children:P!=="\xB7"?P:""},W))}),(0,e.jsx)("div",{className:"hint-item__detail",children:u.detail})]}):(0,e.jsxs)("div",{className:"hint-item__placeholder",children:[(0,e.jsx)("div",{className:"hint-placeholder-bar"}),(0,e.jsx)("div",{className:"hint-placeholder-bar hint-placeholder-bar--short"})]})]},u.id)})}),Array.isArray(n.hints)&&n.hints.length>0&&(0,e.jsxs)("div",{className:"hints-extra",children:[(0,e.jsx)("h3",{className:"hints-extra__title",children:"\u{1F4A1} Pistas Adicionales de la Comunidad:"}),(0,e.jsx)("ul",{className:"hints-extra__list",children:n.hints.map((u,b)=>(0,e.jsx)("li",{className:"hints-extra__item",children:u},b))})]})]}),(0,e.jsxs)("section",{id:"answer",className:"hints-card hints-card--spoiler",children:[(0,e.jsxs)("div",{className:"spoiler-box",children:[(0,e.jsx)("div",{className:"spoiler-box__icon",children:"\u{1F6E1}\uFE0F"}),(0,e.jsxs)("div",{className:"spoiler-box__info",children:[(0,e.jsx)("h2",{className:"spoiler-box__title",children:"Respuesta del Wordle de Hoy"}),(0,e.jsx)("p",{className:"spoiler-box__desc",children:"Zona protegida contra spoilers. Pulsa el bot\xF3n \xFAnicamente si deseas ver la palabra resuelta directamente."})]}),(0,e.jsx)("button",{type:"button",onClick:()=>p(!w),className:`spoiler-toggle-btn ${w?"spoiler-toggle-btn--active":""}`,children:w?"\u{1F648} Ocultar Respuesta":"\u{1F441}\uFE0F Mostrar Respuesta de Hoy"})]}),w&&(0,e.jsxs)("div",{className:"spoiler-reveal-area","data-nosnippet":!0,children:[(0,e.jsx)("div",{className:"spoiler-tiles-row",children:n.word.toUpperCase().split("").map((u,b)=>(0,e.jsx)("div",{className:"spoiler-tile",style:{animationDelay:`${.08*b}s`},children:u},b))}),(0,e.jsxs)("div",{className:"spoiler-actions",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{n?.word&&(navigator.clipboard.writeText(n.word.toUpperCase()),g(!0),setTimeout(()=>g(!1),2500))},className:"spoiler-btn spoiler-btn--copy",children:m?"\u2713 \xA1Copiada!":"\u{1F4CB} Copiar Palabra"}),a?(0,e.jsx)("button",{onClick:a,className:"spoiler-btn spoiler-btn--play",children:"\u{1F3AE} Resolver en el Tablero"}):(0,e.jsx)(de(),{href:"/palabra-del-dia/",className:"spoiler-btn spoiler-btn--play",children:"\u{1F3AE} Resolver en el Tablero"})]})]})]}),(0,e.jsxs)("section",{id:"meaning",className:"hints-card",children:[(0,e.jsxs)("div",{className:"hints-card__header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Ling\xFC\xEDstica y Contexto"}),(0,e.jsx)("h2",{className:"hints-card__title",children:U.meaningTitle})]}),(0,e.jsx)("span",{className:"diff-badge",style:{background:R(K.diff)},children:I(K.diff)})]}),(0,e.jsxs)("div",{className:"word-analysis-box",children:[(0,e.jsxs)("div",{className:"word-analysis-grid",children:[(0,e.jsxs)("div",{className:"analysis-card",children:[(0,e.jsx)("div",{className:"analysis-card__label",children:"Longitud"}),(0,e.jsx)("div",{className:"analysis-card__val",children:"5 Letras"})]}),(0,e.jsxs)("div",{className:"analysis-card",children:[(0,e.jsx)("div",{className:"analysis-card__label",children:"Vocales"}),(0,e.jsxs)("div",{className:"analysis-card__val",children:[Ve(n.word).vowelCount," de 5"]})]}),(0,e.jsxs)("div",{className:"analysis-card",children:[(0,e.jsx)("div",{className:"analysis-card__label",children:"Letras Repetidas"}),(0,e.jsx)("div",{className:"analysis-card__val",children:Ve(n.word).repeated?"S\xED":"Ninguna"})]}),(0,e.jsxs)("div",{className:"analysis-card",children:[(0,e.jsx)("div",{className:"analysis-card__label",children:"Dificultad Estimada"}),(0,e.jsx)("div",{className:"analysis-card__val",children:me})]})]}),(0,e.jsxs)("div",{className:"analysis-explanation",children:[(0,e.jsx)("h3",{className:"analysis-explanation__title",children:"\xBFPor qu\xE9 este nivel de dificultad?"}),(0,e.jsx)("p",{className:"analysis-explanation__text",children:K.reason})]}),n.definition&&(0,e.jsxs)("div",{className:"analysis-definition",children:[(0,e.jsx)("h3",{className:"analysis-definition__title",children:"Definici\xF3n General:"}),(0,e.jsxs)("p",{className:"analysis-definition__text",children:['"',n.definition,'"']})]})]})]}),(0,e.jsxs)("section",{id:"yesterday",className:"hints-card hints-card--yesterday",children:[(0,e.jsxs)("div",{className:"hints-card__header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Edici\xF3n Anterior"}),(0,e.jsx)("h2",{className:"hints-card__title",children:U.yesterdayTitle})]}),(0,e.jsx)("span",{className:"yesterday-date",children:h?.puzzle_date?new Date(h.puzzle_date).toLocaleDateString("es-ES",{month:"short",day:"numeric"}):"Ayer"})]}),h?(0,e.jsxs)("div",{className:"yesterday-box",children:[(0,e.jsx)("div",{className:"yesterday-tiles-wrap",children:(h.word||"").toUpperCase().split("").map((u,b)=>(0,e.jsx)("div",{className:"yesterday-tile",children:u},b))}),(0,e.jsxs)("div",{className:"yesterday-meta",children:[(0,e.jsxs)("span",{className:"yesterday-badge",children:["Dificultad: ",I(pe(h.word).diff)]}),(0,e.jsxs)("span",{className:"yesterday-sub",children:[U.puzzleNumber," #",(0,F.d)(new Date(h.puzzle_date||E))]})]})]}):(0,e.jsx)("p",{className:"loading-text",children:"Cargando datos de ayer..."})]}),(0,e.jsxs)("section",{id:"past",className:"hints-card",children:[(0,e.jsx)("div",{className:"hints-card__header",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Archivo Hist\xF3rico"}),(0,e.jsxs)("h2",{className:"hints-card__title",children:[U.pastAnswers," (\xDAltimos 14 D\xEDas)"]})]})}),(0,e.jsx)("div",{className:"history-list",children:k.map((u,b)=>{let y,P=u.puzzle_date?new Date(u.puzzle_date):((y=new Date(E)).setDate(y.getDate()-(b+1)),y),W=pe(u.word).diff;return(0,e.jsxs)("div",{className:"history-row",children:[(0,e.jsxs)("div",{className:"history-row__left",children:[(0,e.jsxs)("span",{className:"history-row__num",children:["#",(0,F.d)(P)]}),(0,e.jsx)("span",{className:"history-row__date",children:ma(P)})]}),(0,e.jsxs)("div",{className:"history-row__right",children:[(0,e.jsx)("span",{className:"history-row__diff",style:{color:R(W)},children:I(W)}),(0,e.jsx)("span",{className:"history-row__word",children:(u.word||"").toUpperCase()})]})]},(u.puzzle_date||b)+"-"+(u.word||b))})})]}),(0,e.jsxs)("section",{id:"starters",className:"hints-card",children:[(0,e.jsx)("div",{className:"hints-card__header",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Optimiza tus Partidas"}),(0,e.jsx)("h2",{className:"hints-card__title",children:U.bestStartersTitle})]})}),(0,e.jsx)("p",{className:"starters-intro",children:"Una palabra inicial \xF3ptima debe contener consonantes frecuentes (R, S, T, C, L) y al menos 3 vocales distintas:"}),(0,e.jsx)("div",{className:"starters-grid",children:Ma.map(u=>(0,e.jsxs)("div",{className:"starter-card",children:[(0,e.jsx)("div",{className:"starter-tiles",children:u.word.split("").map((b,y)=>(0,e.jsx)("span",{className:"starter-mini-tile",children:b},y))}),(0,e.jsx)("p",{className:"starter-why",children:u.why})]},u.word))})]}),(0,e.jsxs)("section",{id:"tips",className:"hints-card",children:[(0,e.jsx)("div",{className:"hints-card__header",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Gu\xEDa T\xE1ctica"}),(0,e.jsx)("h2",{className:"hints-card__title",children:U.tipsTitle})]})}),(0,e.jsx)("div",{className:"tips-grid",children:Fa.map((u,b)=>(0,e.jsxs)("div",{className:"tip-card",children:[(0,e.jsx)("div",{className:"tip-card__icon",children:u.icon}),(0,e.jsxs)("div",{className:"tip-card__body",children:[(0,e.jsx)("h3",{className:"tip-card__title",children:u.title}),(0,e.jsx)("p",{className:"tip-card__desc",children:u.desc})]})]},b))})]}),(0,e.jsxs)("section",{id:"related",className:"hints-card",children:[(0,e.jsx)("div",{className:"hints-card__header",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Modos Disponibles"}),(0,e.jsx)("h2",{className:"hints-card__title",children:U.relatedGamesTitle})]})}),(0,e.jsx)("div",{className:"related-grid",children:Ua.map(u=>(0,e.jsxs)(de(),{href:u.to,className:"related-card",children:[(0,e.jsxs)("div",{className:"related-card__name",children:[u.name," \u2192"]}),(0,e.jsx)("div",{className:"related-card__desc",children:u.desc})]},u.to))})]}),(0,e.jsxs)("section",{id:"faq",className:"hints-card",children:[(0,e.jsx)("div",{className:"hints-card__header",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"hints-card__subtitle",children:"Dudas Comunes"}),(0,e.jsx)("h2",{className:"hints-card__title",children:U.faqTitle})]})}),(0,e.jsx)("div",{className:"faq-accordion",children:Ba.map((u,b)=>{let y=T===b;return(0,e.jsxs)("div",{className:`faq-item ${y?"faq-item--open":""}`,children:[(0,e.jsxs)("button",{type:"button",className:"faq-trigger",onClick:()=>L(y?null:b),"aria-expanded":y,children:[(0,e.jsx)("span",{className:"faq-question",children:u.q}),(0,e.jsx)("span",{className:"faq-chevron",children:y?"\u2212":"+"})]}),y&&(0,e.jsx)("div",{className:"faq-answer",children:(0,e.jsx)("p",{children:u.a})})]},b)})})]}),m&&(0,e.jsxs)("div",{className:"hints-toast",children:["\u2713 ",U.copiedSuccess]}),(0,e.jsx)("style",{children:`
        .hints-container {
          max-width: 880px;
          margin: 0 auto;
          padding: 10px 16px 80px;
          font-family: inherit;
          color: var(--color-text-dark, #252A34);
          line-height: 1.6;
          position: relative;
        }

        .hints-breadcrumbs-wrap {
          margin-bottom: 16px;
        }

        /* Hero Header */
        .hints-hero {
          position: relative;
          background: rgba(99, 175, 78, 0.08);
          border: 1px solid rgba(99, 175, 78, 0.3);
          border-radius: 14px;
          padding: 24px 20px;
          margin-bottom: 20px;
          box-shadow: none;
        }

        .hints-hero__badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }

        .hints-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          box-shadow: none;
        }

        .hints-hero__badge--diff {
          color: #ffffff;
          border: none;
        }

        .diff-dot {
          width: 7px;
          height: 7px;
          background: #ffffff;
          border-radius: 50%;
          display: inline-block;
        }

        .hints-hero__title {
          font-size: clamp(1.5rem, 3.5vw, 1.9rem);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 10px 0;
          color: var(--color-text-dark, #252A34);
        }

        .hints-hero__desc {
          font-size: 1rem;
          color: var(--color-text-secondary, #7A8199);
          margin: 0 0 18px 0;
          max-width: 720px;
        }

        .hints-hero__cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hints-hero__play-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff !important;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-correct, #63AF4E);
          cursor: pointer;
          transition: background 0.15s ease, opacity 0.15s ease;
          box-shadow: none;
        }

        .hints-hero__play-btn:hover {
          background: #549a41;
          opacity: 0.95;
          box-shadow: none;
        }

        .hints-hero__jump-btn {
          display: inline-flex;
          align-items: center;
          background: var(--color-surface, #ffffff);
          color: var(--color-text-dark, #252A34) !important;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-border, #DCE1ED);
          transition: background 0.15s ease;
          box-shadow: none;
        }

        .hints-hero__jump-btn:hover {
          background: var(--color-tab-bg, #EBEDF3);
          box-shadow: none;
        }

        /* Nav Quick Chips */
        .hints-nav-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          padding: 6px 0;
          margin-bottom: 20px;
          scrollbar-width: none;
        }

        .hints-nav-bar::-webkit-scrollbar {
          display: none;
        }

        .hints-nav-bar__label {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-secondary, #7A8199);
          white-space: nowrap;
        }

        .hints-nav-bar__chips {
          display: flex;
          gap: 6px;
        }

        .hints-chip {
          display: inline-block;
          padding: 5px 12px;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text, #414A5E) !important;
          text-decoration: none !important;
          white-space: nowrap;
          transition: border-color 0.15s ease, color 0.15s ease;
          box-shadow: none;
        }

        .hints-chip:hover {
          border-color: var(--color-correct, #63AF4E);
          color: var(--color-correct, #63AF4E) !important;
          box-shadow: none;
        }

        /* Common Card Style */
        .hints-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 14px;
          padding: 22px 20px;
          margin-bottom: 20px;
          box-shadow: none;
        }

        .hints-card--highlight {
          border-color: rgba(99, 175, 78, 0.45);
        }

        .hints-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .hints-card__subtitle {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-correct, #63AF4E);
          margin-bottom: 2px;
        }

        .hints-card__title {
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0;
          color: var(--color-text-dark, #252A34);
        }

        /* Progress Pill */
        .hints-progress-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(99, 175, 78, 0.12);
          border: 1px solid rgba(99, 175, 78, 0.3);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          box-shadow: none;
        }

        .hints-progress-pill__count {
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
        }

        .hints-progress-pill__text {
          font-weight: 600;
          color: var(--color-text-secondary, #7A8199);
        }

        /* Meter */
        .hints-meter {
          width: 100%;
          height: 6px;
          background: var(--color-tab-bg, #EBEDF3);
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 16px;
          box-shadow: none;
        }

        .hints-meter__fill {
          height: 100%;
          background: var(--color-correct, #63AF4E);
          transition: width 0.3s ease;
        }

        /* Actions Bar */
        .hints-actions-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .hints-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease, opacity 0.15s ease;
          border: none;
          box-shadow: none;
        }

        .hints-btn--primary {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border: 1px solid var(--color-correct, #63AF4E);
        }

        .hints-btn--primary:hover:not(:disabled) {
          background: #549a41;
          box-shadow: none;
        }

        .hints-btn--primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .hints-btn--secondary {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34);
          border: 1px solid var(--color-border, #DCE1ED);
        }

        .hints-btn--secondary:hover {
          background: #dfe2ea;
          box-shadow: none;
        }

        /* Clues Grid */
        .hints-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }

        .hint-item {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 10px;
          padding: 14px;
          cursor: pointer;
          transition: border-color 0.15s ease;
          display: flex;
          flex-direction: column;
          box-shadow: none;
        }

        .hint-item:hover {
          border-color: var(--color-correct, #63AF4E);
          box-shadow: none;
        }

        .hint-item--unlocked {
          background: var(--color-surface, #ffffff);
          border-color: rgba(99, 175, 78, 0.45);
        }

        .hint-item__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .hint-item__badge-box {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hint-item__num {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--color-correct, #63AF4E);
          background: rgba(99, 175, 78, 0.12);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .hint-item__icon {
          font-size: 15px;
        }

        .status-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          box-shadow: none;
        }

        .status-tag--open {
          background: #dcfce7;
          color: #15803d;
        }

        .status-tag--locked {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-secondary, #7A8199);
        }

        .hint-item__title {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
          margin-bottom: 6px;
        }

        .hint-item__content {
          animation: fadeIn 0.25s ease-out;
        }

        .hint-item__text {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text, #414A5E);
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .hint-item__detail {
          font-size: 12px;
          color: var(--color-text-secondary, #7A8199);
        }

        .hint-tiles-preview {
          display: flex;
          gap: 4px;
          margin-bottom: 8px;
        }

        .hint-tile {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 800;
          text-transform: uppercase;
          box-shadow: none;
        }

        .hint-tile--correct {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
        }

        .hint-tile--empty {
          background: var(--color-tab-bg, #EBEDF3);
          border: 1px dashed var(--color-border, #DCE1ED);
        }

        .hint-item__placeholder {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding-top: 4px;
        }

        .hint-placeholder-bar {
          height: 10px;
          background: var(--color-tab-bg, #EBEDF3);
          border-radius: 4px;
          width: 100%;
        }

        .hint-placeholder-bar--short {
          width: 60%;
        }

        .hints-extra {
          margin-top: 20px;
          padding: 14px;
          background: var(--color-bg, #F5F5F4);
          border-radius: 8px;
          border-left: 4px solid var(--color-correct, #63AF4E);
          box-shadow: none;
        }

        .hints-extra__title {
          font-size: 13px;
          font-weight: 700;
          margin: 0 0 6px 0;
        }

        .hints-extra__list {
          margin: 0;
          padding-left: 18px;
          font-size: 13px;
          color: var(--color-text, #414A5E);
        }

        .hints-extra__item {
          margin-bottom: 3px;
        }

        /* Spoiler Section */
        .hints-card--spoiler {
          border: 1px dashed rgba(224, 93, 82, 0.4);
          background: rgba(224, 93, 82, 0.03);
          box-shadow: none;
        }

        .spoiler-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .spoiler-box__icon {
          font-size: 2rem;
        }

        .spoiler-box__info {
          flex: 1;
          min-width: 220px;
        }

        .spoiler-box__title {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0 0 3px 0;
          color: var(--color-text-dark, #252A34);
        }

        .spoiler-box__desc {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
          margin: 0;
        }

        .spoiler-toggle-btn {
          background: #E05D52;
          color: #ffffff;
          border: 1px solid #E05D52;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease;
          box-shadow: none;
        }

        .spoiler-toggle-btn:hover {
          background: #cc493e;
          box-shadow: none;
        }

        .spoiler-toggle-btn--active {
          background: var(--color-text-secondary, #7A8199);
          border-color: var(--color-text-secondary, #7A8199);
        }

        .spoiler-reveal-area {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border, #DCE1ED);
          text-align: center;
          animation: slideDown 0.25s ease-out;
        }

        .spoiler-tiles-row {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .spoiler-tile {
          width: 52px;
          height: 52px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 800;
          box-shadow: none;
          animation: flipTile 0.4s ease-out both;
        }

        .spoiler-actions {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .spoiler-btn {
          padding: 9px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease;
          text-decoration: none !important;
          box-shadow: none;
        }

        .spoiler-btn--copy {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34);
          border: 1px solid var(--color-border, #DCE1ED);
        }

        .spoiler-btn--copy:hover {
          background: #dfe2ea;
          box-shadow: none;
        }

        .spoiler-btn--play {
          background: var(--color-correct, #63AF4E);
          color: #ffffff !important;
          border: 1px solid var(--color-correct, #63AF4E);
        }

        .spoiler-btn--play:hover {
          background: #549a41;
          box-shadow: none;
        }

        /* Word Analysis Grid */
        .word-analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
          margin-bottom: 16px;
        }

        .analysis-card {
          background: var(--color-bg, #F5F5F4);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid var(--color-border, #DCE1ED);
          text-align: center;
          box-shadow: none;
        }

        .analysis-card__label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-secondary, #7A8199);
          margin-bottom: 2px;
        }

        .analysis-card__val {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-text-dark, #252A34);
        }

        .analysis-explanation,
        .analysis-definition {
          background: var(--color-bg, #F5F5F4);
          padding: 14px;
          border-radius: 8px;
          border-left: 4px solid var(--color-correct, #63AF4E);
          margin-top: 10px;
          box-shadow: none;
        }

        .analysis-explanation__title,
        .analysis-definition__title {
          font-size: 13px;
          font-weight: 800;
          margin: 0 0 3px 0;
        }

        .analysis-explanation__text,
        .analysis-definition__text {
          font-size: 13px;
          color: var(--color-text, #414A5E);
          margin: 0;
        }

        .diff-badge {
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          box-shadow: none;
        }

        /* Yesterday's Card */
        .yesterday-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          padding: 14px;
          background: rgba(99, 175, 78, 0.08);
          border: 1px solid rgba(99, 175, 78, 0.25);
          border-radius: 10px;
          box-shadow: none;
        }

        .yesterday-tiles-wrap {
          display: flex;
          gap: 5px;
        }

        .yesterday-tile {
          width: 40px;
          height: 40px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          box-shadow: none;
        }

        .yesterday-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
        }

        .yesterday-badge {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          box-shadow: none;
        }

        .yesterday-sub {
          font-size: 11px;
          color: var(--color-text-secondary, #7A8199);
          font-weight: 600;
        }

        /* History List */
        .history-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .history-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .history-row:hover {
          border-color: var(--color-correct, #63AF4E);
          background: var(--color-surface, #ffffff);
          box-shadow: none;
        }

        .history-row__left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .history-row__num {
          font-size: 11px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          background: rgba(99, 175, 78, 0.12);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .history-row__date {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-text, #414A5E);
        }

        .history-row__right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .history-row__diff {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .history-row__word {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--color-text-dark, #252A34);
        }

        /* Best Starters */
        .starters-intro {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
          margin-bottom: 12px;
        }

        .starters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
        }

        .starter-card {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          padding: 12px;
          box-shadow: none;
        }

        .starter-tiles {
          display: flex;
          gap: 4px;
          margin-bottom: 6px;
        }

        .starter-mini-tile {
          width: 26px;
          height: 26px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          box-shadow: none;
        }

        .starter-why {
          font-size: 12px;
          color: var(--color-text, #414A5E);
          margin: 0;
          line-height: 1.4;
        }

        /* Tips */
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 10px;
        }

        .tip-card {
          display: flex;
          gap: 10px;
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          padding: 12px;
          box-shadow: none;
        }

        .tip-card__icon {
          font-size: 1.6rem;
        }

        .tip-card__title {
          font-size: 13px;
          font-weight: 800;
          margin: 0 0 3px 0;
          color: var(--color-text-dark, #252A34);
        }

        .tip-card__desc {
          font-size: 12px;
          color: var(--color-text-secondary, #7A8199);
          margin: 0;
          line-height: 1.4;
        }

        /* Related Grid */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
        }

        .related-card {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 10px;
          padding: 14px;
          text-decoration: none !important;
          color: inherit !important;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .related-card:hover {
          border-color: var(--color-correct, #63AF4E);
          box-shadow: none;
        }

        .related-card__name {
          font-size: 14px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          margin-bottom: 3px;
        }

        .related-card__desc {
          font-size: 12px;
          color: var(--color-text-secondary, #7A8199);
        }

        /* FAQ */
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .faq-item--open {
          border-color: var(--color-correct, #63AF4E);
          background: var(--color-surface, #ffffff);
          box-shadow: none;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px;
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
          cursor: pointer;
        }

        .faq-chevron {
          font-size: 16px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          margin-left: 10px;
        }

        .faq-answer {
          padding: 0 14px 14px;
          font-size: 13px;
          color: var(--color-text, #414A5E);
          line-height: 1.5;
        }

        .faq-answer p {
          margin: 0;
        }

        /* Toast */
        .hints-toast {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: #252A34;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: none;
          z-index: 9999;
          animation: toastIn 0.25s ease-out;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flipTile {
          0% { transform: rotateX(-90deg); opacity: 0; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @media (max-width: 600px) {
          .hints-hero {
            padding: 18px 14px;
          }
          .hints-card {
            padding: 16px 12px;
          }
          .spoiler-tile {
            width: 44px;
            height: 44px;
            font-size: 1.5rem;
          }
        }
      `})]})}function Wa({language:d="es",mode:a="unlimited"}){let n=a==="daily"?{title:"Palabra del D\xEDa - Juega al Wordle de Hoy en Espa\xF1ol",description:"Juega a la Palabra del D\xEDa en espa\xF1ol y resuelve el desaf\xEDo diario de palabras. Un nuevo reto de Wordle en espa\xF1ol disponible cada 24 horas."}:{title:"Wordle Espa\xF1ol Ilimitado - Juega Online Gratis",description:"Juega a Wordle en espa\xF1ol online gratis e ilimitado. Disfruta de puzles infinitos de palabras en espa\xF1ol y pon a prueba tu vocabulario."};return(0,e.jsx)("section",{className:"wordle-intro",id:"about",children:(0,e.jsx)("div",{className:"container",children:(0,e.jsxs)("div",{className:"wordle-intro__card",children:[(0,e.jsx)("div",{className:"wordle-intro__icon",children:(0,e.jsx)("div",{className:"wordle-intro__logo",children:(0,e.jsx)("span",{children:"W"})})}),(0,e.jsxs)("div",{className:"wordle-intro__content",children:[(0,e.jsx)("h2",{className:"wordle-intro__title",children:n.title}),(0,e.jsx)("p",{className:"wordle-intro__desc",children:n.description}),(0,e.jsx)("nav",{className:"wordle-intro__links",children:[{label:"C\xF3mo jugar",href:"#how-to-play"},{label:"Consejos",href:"#wordle-tips"},{label:"Preguntas Frecuentes",href:"#faq"}].map((s,r)=>(0,e.jsxs)(t.Fragment,{children:[r>0&&(0,e.jsx)("span",{className:"wordle-intro__divider",children:"|"}),(0,e.jsx)("a",{href:s.href,className:"wordle-intro__link",children:s.label})]},s.href))}),(0,e.jsx)("nav",{className:"wordle-intro__links",style:{marginTop:"8px"},children:[{label:"Palabra del D\xEDa",to:"/palabra-del-dia/"},{label:"Wordle Respuesta Hoy",to:"/wordle-respuesta-hoy/"}].map((s,r)=>(0,e.jsxs)(t.Fragment,{children:[r>0&&(0,e.jsx)("span",{className:"wordle-intro__divider",children:"|"}),(0,e.jsx)(de(),{href:s.to,className:"wordle-intro__link",children:s.label})]},s.to))})]})]})})})}let ha=()=>{let d=document.createElement("canvas"),a=d.getContext("2d"),n="WordleUnlimitedFingerprint";a.textBaseline="top",a.font="14px 'Arial'",a.textBaseline="alphabetic",a.fillStyle="#f60",a.fillRect(125,1,62,20),a.fillStyle="#069",a.fillText(n,2,15),a.fillStyle="rgba(102, 204, 0, 0.7)",a.fillText(n,4,17);let s=d.toDataURL(),r=0;if(s.length===0)return"unknown";for(let i=0;i<s.length;i++)r=(r<<5)-r+s.charCodeAt(i),r&=r;return r.toString()};function Ha({language:d="es"}){let a={es:{title:"Valora el Juego",thanks:"\xA1Gracias por calificar!",votes:"votos",voteCount:"3.690"},uk:{title:"Rate this Game",thanks:"Thanks for Rating!",votes:"votes",voteCount:"3,690"},en:{title:"Rate this Game",thanks:"Thanks for Rating!",votes:"votes",voteCount:"3,690"}},[n,s]=(0,t.useState)(!1),[r,i]=(0,t.useState)(0),[w,p]=(0,t.useState)(3690),[m,g]=(0,t.useState)(!0);(0,t.useEffect)(()=>{(async function(){try{ha();let h=localStorage.getItem("wordle-game-rated");h&&(s(!0),i(parseInt(h)))}catch(h){console.error("Supabase sync failed:",h)}finally{g(!1)}})()},[]);let k=async h=>{if(!n&&!m){s(!0),i(h),p(x=>x+1),localStorage.setItem("wordle-game-rated",h);try{let x=await fetch("https://ipwho.is/").catch(()=>null);x&&await x.json(),ha()}catch(x){console.error("Failed to save rating to Supabase:",x)}}},c=a[d]||a.es||a.uk;return(0,e.jsxs)("section",{className:"rating section-indent",id:"rating",children:[(0,e.jsxs)("div",{className:"container",children:[(0,e.jsx)("div",{className:"section-heading",style:{background:"#f3eed3"},children:(0,e.jsx)("h2",{className:"section-heading__title",children:n?c.thanks:c.title})}),(0,e.jsxs)("div",{className:"rating__wrapper",children:[(0,e.jsx)("div",{className:`rating-select rating__select starability-basic ${n?"rated":""}`,"data-section":"index",children:[5,4,3,2,1].map(h=>(0,e.jsxs)(t.Fragment,{children:[(0,e.jsx)("input",{type:"radio",id:`star${h}`,name:"rating",value:h,className:"rating-select__input",autoComplete:"off",checked:r===h,onChange:()=>k(h),disabled:n}),(0,e.jsx)("label",{htmlFor:`star${h}`,title:["Awful","Poor","Average","Good","Excellent"][h-1],className:"rating-select__label"})]},h))}),(0,e.jsxs)("div",{className:"rating__group",children:[(0,e.jsx)("span",{className:"rating__value",children:"4.3"}),(0,e.jsxs)("span",{className:"rating__help",children:[(0,e.jsx)("span",{children:w.toLocaleString()})," ",c.votes]})]})]})]}),(0,e.jsx)("style",{children:`
        .rating {
          padding: 40px 0;
          text-align: center;
        }
        .rating .section-heading {
          padding: 8px 30px;
          border-radius: 50px;
        }
        .rating__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .rating__group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rating__value {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1a1a1b;
        }
        .rating__help {
          font-size: 1rem;
          color: rgba(0,0,0,0.5);
          font-weight: 600;
        }

        /* Starability Basic Logic */
        .starability-basic {
          display: block;
          position: relative;
          width: 150px;
          min-height: 30px;
          padding: 0;
          border: none;
        }
        .rating-select__input {
          position: absolute;
          visibility: hidden;
        }
        .rating-select__label {
          position: relative;
          float: right;
          width: 30px;
          height: 30px;
          color: #1a1a1b;
          cursor: pointer;
        }
        .rating-select__label:before {
          content: '\u2605';
          font-size: 30px;
          line-height: 30px;
          transition: all 0.2s;
        }
        
        .rating-select__input:checked ~ .rating-select__label,
        .rating-select__label:hover,
        .rating-select__label:hover ~ .rating-select__label {
          color: #f3bc01;
        }

        .starability-basic.rated .rating-select__label {
          cursor: default;
        }
        
        .starability-basic.rated .rating-select__label:hover {
          color: #1a1a1b;
        }
        .starability-basic.rated .rating-select__input:checked ~ .rating-select__label {
          color: #f3bc01;
        }

        .rating-select__input:checked + .rating-select__label {
          color: #f3bc01;
        }
        
        @media screen and (max-width: 767px) {
          .section-indent {
            margin-top: 25px;
            padding-top: 25px;
          }
        }
      `})]})}let Va={padding:"100px 20px 60px",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",color:"var(--color-text-dark)"},Ga={fontSize:"2.5rem",fontWeight:"900",marginBottom:"8px"},$a={fontSize:"1.4rem",fontWeight:"800",marginTop:"36px",marginBottom:"14px"},Ge={marginBottom:"16px",fontSize:"1rem"},Ja={paddingLeft:"24px",marginBottom:"16px"},Ya={marginBottom:"8px"},Qa={fontSize:"0.9rem",color:"var(--color-text-secondary)",marginBottom:"28px"},Ie={title:"Pol\xEDtica de Privacidad",updated:"\xDAltima actualizaci\xF3n: 12 de mayo de 2026",intro:'Bienvenido a La Palabra del D\xEDa ("nosotros", "nuestro"), accesible en lapalabradeldia.co. Tu privacidad es fundamental para nosotros. Esta Pol\xEDtica de Privacidad describe qu\xE9 informaci\xF3n tratamos, c\xF3mo la utilizamos y tus derechos.',sections:[{heading:"Informaci\xF3n que Recopilamos",content:"No requerimos registro de usuario ni datos personales para jugar. No obstante, recopilamos datos t\xE9cnicos m\xEDnimos de forma autom\xE1tica:",list:["Estad\xEDsticas y preferencias de juego \u2014 guardadas exclusivamente de forma local en tu dispositivo mediante localStorage del navegador. Estos datos nunca salen de tu equipo.","Datos an\xF3nimos de uso \u2014 empleamos anal\xEDtica an\xF3nima y respetuosa con la privacidad para entender c\xF3mo interact\xFAan los usuarios con el sitio (ej. p\xE1ginas vistas, pa\xEDs). No recopilamos informaci\xF3n de identificaci\xF3n personal.","Huella an\xF3nima de dispositivo para valoraciones \u2014 cuando calificas el juego, se genera un identificador an\xF3nimo local para evitar votos duplicados sin vincularlo a tu identidad."]},{heading:"Cookies y Almacenamiento Local",content:"Utilizamos el almacenamiento local (localStorage) del navegador para recordar tu progreso, estad\xEDsticas y preferencias (como el modo oscuro). No usamos cookies de seguimiento publicitario. Servicios de infraestructura como Cloudflare pueden aplicar cookies t\xE9cnicas de seguridad y rendimiento."},{heading:"Servicios de Terceros",content:"Utilizamos los siguientes servicios de terceros:",list:["Cloudflare \u2014 para entrega de contenido, seguridad y protecci\xF3n contra bots (Turnstile).","Supabase \u2014 para almacenar valoraciones an\xF3nimas y comentarios voluntarios.","Hostinger \u2014 para alojamiento web."],after:"Dichos servicios cuentan con sus propias pol\xEDticas de privacidad independientes."},{heading:"Conservaci\xF3n de Datos",content:"Tus datos de juego se almacenan \xFAnicamente en tu navegador y puedes eliminarlos en cualquier momento borrando los datos de navegaci\xF3n."},{heading:"Privacidad de Menores",content:"Nuestro juego es apto para todas las edades. No recopilamos conscientemente datos de menores de 13 a\xF1os."},{heading:"Tus Derechos de Privacidad",content:"Conforme a la normativa general de protecci\xF3n de datos (RGPD), tienes derecho de acceso, rectificaci\xF3n y supresi\xF3n. Al no almacenar datos personales vinculados a identidades individuales, no mantenemos perfiles nominativos."},{heading:"Modificaciones",content:"Podemos actualizar esta pol\xEDtica peri\xF3dicamente. Cualquier cambio se publicar\xE1 en esta p\xE1gina con la fecha de revisi\xF3n actualizada."},{heading:"Contacto",content:"Si tienes alguna duda sobre esta Pol\xEDtica de Privacidad, puedes escribirnos a: privacy@lapalabradeldia.co"}]};function Za({language:d="es"}){return(0,e.jsxs)("div",{style:Va,children:[(0,e.jsx)("h1",{style:Ga,children:Ie.title}),(0,e.jsx)("p",{style:Qa,children:Ie.updated}),(0,e.jsx)("p",{style:Ge,children:Ie.intro}),Ie.sections.map((a,n)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:$a,children:a.heading}),(0,e.jsx)("p",{style:Ge,children:a.content}),a.list&&(0,e.jsx)("ul",{style:Ja,children:a.list.map((s,r)=>(0,e.jsx)("li",{style:Ya,children:s},r))}),a.after&&(0,e.jsx)("p",{style:Ge,children:a.after})]},n))]})}function Ka({language:d="es",onHome:a}){let n={es:{title:"404",subtitle:"Palabra no encontrada",message:"La p\xE1gina que buscas no existe. Es como una palabra de 5 letras que no est\xE1 en nuestro diccionario.",back:"Volver al Inicio"},uk:{title:"404",subtitle:"Word Not Found",message:"The page you're looking for doesn't exist. It's like a 5-letter word that isn't in our dictionary.",back:"Back to Home"},en:{title:"404",subtitle:"Word Not Found",message:"The page you're looking for doesn't exist. It's like a 5-letter word that isn't in our dictionary.",back:"Back to Home"}},s=n[d]||n.es||n.uk;return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"70vh",textAlign:"center",padding:"20px",color:"var(--color-text-dark)"},children:[(0,e.jsx)("div",{style:{display:"flex",gap:"8px",marginBottom:"30px"},children:["4","0","4"].map((r,i)=>(0,e.jsx)("div",{style:{width:"60px",height:"60px",display:"flex",alignItems:"center",justifyContent:"center",background:i===1?"#c2272d":"#6aaa64",color:"white",fontSize:"2rem",fontWeight:"900",borderRadius:"4px",animation:`flipIn 0.5s ease-out ${.1*i}s both`},children:r},i))}),(0,e.jsx)("h1",{style:{fontSize:"2.5rem",fontWeight:"900",margin:"0 0 10px"},children:s.subtitle}),(0,e.jsx)("p",{style:{fontSize:"1.1rem",color:"var(--color-text-secondary)",maxWidth:"400px",lineHeight:"1.6",marginBottom:"40px"},children:s.message}),(0,e.jsx)("button",{onClick:a,style:{background:"#6aaa64",color:"white",border:"none",padding:"14px 32px",borderRadius:"30px",fontSize:"1rem",fontWeight:"700",cursor:"pointer",transition:"transform 0.2s",boxShadow:"0 4px 12px rgba(106, 170, 100, 0.3)"},onMouseEnter:r=>r.currentTarget.style.transform="scale(1.05)",onMouseLeave:r=>r.currentTarget.style.transform="scale(1)",children:s.back}),(0,e.jsx)("style",{children:`
        @keyframes flipIn {
          from { transform: rotateX(-90deg); opacity: 0; }
          to { transform: rotateX(0); opacity: 1; }
        }
      `})]})}function Xa({language:d="es",onClose:a}){let[n,s]=(0,t.useState)("feedback"),[r,i]=(0,t.useState)(""),[w,p]=(0,t.useState)(null),[m,g]=(0,t.useState)(!1),[k,c]=(0,t.useState)(!1);return(0,t.useRef)(null),k?(0,e.jsxs)("div",{style:{textAlign:"center",padding:"20px"},children:[(0,e.jsx)("div",{style:{fontSize:"3rem",marginBottom:"10px"},children:"\u2705"}),(0,e.jsx)("h2",{style:{fontSize:"1.5rem",fontWeight:"800",marginBottom:"20px"},children:"\xA1Muchas gracias por tus comentarios!"}),(0,e.jsx)("button",{onClick:a,style:{background:"#1a1a1b",color:"white",border:"none",padding:"10px 30px",borderRadius:"8px",fontWeight:"700",cursor:"pointer"},children:"Cerrar"})]}):(0,e.jsxs)("div",{className:"feedback-modal",style:{padding:"10px"},children:[(0,e.jsx)("h2",{style:{fontSize:"1.5rem",fontWeight:"800",marginBottom:"20px",color:"#1a1a1b"},children:"Enviar Comentarios"}),(0,e.jsxs)("form",{onSubmit:h=>{if(h.preventDefault(),!m&&r.trim()){g(!0);try{let x=encodeURIComponent(`Wordle Feedback: ${n==="feature"?"Feature Request":"General"}`),E=encodeURIComponent(r);window.location.href=`mailto:contact@lapalabradeldia.co?subject=${x}&body=${E}`,c(!0)}catch(x){console.error("Feedback failed:",x)}finally{g(!1)}}},style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,e.jsx)("label",{style:{fontSize:"14px",fontWeight:"700",color:"#495057"},children:"Tipo de Mensaje"}),(0,e.jsxs)("select",{value:n,onChange:h=>s(h.target.value),style:{padding:"12px",borderRadius:"8px",border:"2px solid #dee2e6",fontSize:"16px",fontWeight:"600"},children:[(0,e.jsx)("option",{value:"feedback",children:"Comentario General"}),(0,e.jsx)("option",{value:"feature",children:"Sugerir Funci\xF3n"})]})]}),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:(0,e.jsx)("textarea",{placeholder:"Cu\xE9ntanos tu opini\xF3n o sugerencia...",value:r,onChange:h=>i(h.target.value),required:!0,style:{padding:"12px",borderRadius:"8px",border:"2px solid #dee2e6",fontSize:"16px",minHeight:"120px",resize:"vertical"}})}),(0,e.jsx)("button",{type:"submit",disabled:m||!r.trim(),style:{background:m||!r.trim()?"#ced4da":"#6aaa64",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"800",cursor:m||!r.trim()?"default":"pointer",transition:"all 0.2s"},children:m?"...":"Enviar"})]})]})}function en(){return null}let O="https://lapalabradeldia.co",an={unlimited:{es:"/","es-ES":"/"},today:{es:"/palabra-del-dia/","es-ES":"/palabra-del-dia/"},hints:{es:"/wordle-respuesta-hoy/","es-ES":"/wordle-respuesta-hoy/"},archive:{es:"/archive/","es-ES":"/archive/"},privacy:{es:"/privacy/","es-ES":"/privacy/"}},ua={"/":{title:"Wordle Espa\xF1ol - Juego de Palabras Ilimitado Gratis Online",description:"Juega a Wordle en espa\xF1ol gratis \u2014 adivina palabras ilimitadas de 5 letras en espa\xF1ol sin descargas ni registros. \xA1Resuelve el desaf\xEDo en 6 intentos!",isoLang:"es-ES",group:"unlimited"},"/palabra-del-dia/":{title:"Palabra del D\xEDa - Juega al Wordle de Hoy en Espa\xF1ol",description:"Juega a la Palabra del D\xEDa en espa\xF1ol y resuelve el puzle diario. Un nuevo reto de Wordle en espa\xF1ol disponible cada d\xEDa.",isoLang:"es-ES",group:"today"},"/wordle-respuesta-hoy/":{title:"Wordle Respuesta Hoy - Soluci\xF3n y Pistas de la Palabra del D\xEDa",description:"Descubre la respuesta y pistas sin spoilers del Wordle en espa\xF1ol de hoy. Soluci\xF3n diaria, n\xFAmero de vocales, letra inicial y m\xE1s.",isoLang:"es-ES",group:"hints"},"/archive/":{title:"Archivo Wordle Espa\xF1ol - Juega Puzles y D\xEDas Anteriores",description:"Explora el archivo completo de Wordle en espa\xF1ol. Juega cualquier reto del pasado por fecha o n\xFAmero de puzle sin l\xEDmites.",isoLang:"es-ES",group:"archive"},"/wordle-archive/":{title:"Archivo Wordle Espa\xF1ol - Juega Puzles y D\xEDas Anteriores",description:"Explora el archivo completo de Wordle en espa\xF1ol. Juega cualquier reto del pasado por fecha o n\xFAmero de puzle sin l\xEDmites.",isoLang:"es-ES",group:"archive"},"/privacy/":{title:"Pol\xEDtica de Privacidad - La Palabra del D\xEDa",description:"Consulta la pol\xEDtica de privacidad de La Palabra del D\xEDa. Conoce c\xF3mo gestionamos los datos locales y tus derechos de privacidad.",isoLang:"es-ES",group:"privacy"}};function nn({guesses:d,currentGuess:a,currentRow:n,onToggleState:s,wordLength:r=5}){let i=[];for(let w=0;w<6;w++){let p=[];if(w<d.length)for(let m=0;m<r;m++)p.push((0,e.jsx)("div",{onClick:()=>s(w,m),style:{cursor:"pointer",userSelect:"none"},title:"Click to change colour",children:(0,e.jsx)(X,{letter:d[w].letters[m],state:d[w].states[m],delay:0,shouldFlip:!1,shouldBounce:!1})},m));else if(w===n)for(let m=0;m<r;m++)p.push((0,e.jsx)(X,{letter:a[m]||"",state:"tbd",delay:0,shouldFlip:!1,shouldBounce:!1},m));else for(let m=0;m<r;m++)p.push((0,e.jsx)(X,{letter:"",state:"empty",delay:0,shouldFlip:!1,shouldBounce:!1},m));i.push((0,e.jsx)("div",{className:"grid__row",style:{gridTemplateColumns:`repeat(${r}, 1fr)`},children:p},w))}return(0,e.jsx)("div",{className:"grid",id:"solver-grid",style:{maxWidth:`${Math.min(55*r,550)}px`,width:"95%",margin:"0 auto",gap:r>8?"4px":"5px"},children:i})}function tn({language:d="uk"}){let[a,n]=(0,t.useState)([]),[s,r]=(0,t.useState)(""),[i,w]=(0,t.useState)(""),p=(0,t.useMemo)(()=>(0,D.getAllWords)(d),[d]),m=(0,t.useMemo)(()=>{if(a.length===0)return[];let c=p;c=c.filter(x=>{for(let E of a){let S=x;for(let T=0;T<5;T++)if(E.states[T]==="correct"){if(x[T]!==E.letters[T])return!1;S=S.substring(0,T)+"_"+S.substring(T+1)}for(let T=0;T<5;T++)if(E.states[T]==="present"){if(x[T]===E.letters[T])return!1;let L=S.indexOf(E.letters[T]);if(L===-1)return!1;S=S.substring(0,L)+"_"+S.substring(L+1)}for(let T=0;T<5;T++)if(E.states[T]==="absent"&&S.includes(E.letters[T]))return!1}return!0});let h={};for(let x of c)for(let E of new Set(x))h[E]=(h[E]||0)+1;return c.sort((x,E)=>{let S=[...new Set(x)].reduce((L,Z)=>L+h[Z],0),T=[...new Set(E)].reduce((L,Z)=>L+h[Z],0);return S!==T?T-S:x.localeCompare(E)})},[a,p]),g=(0,t.useCallback)(c=>{if(w(""),c==="Enter"){if(s.length<5)return void w("Not enough letters");a.length<6&&(n([...a,{letters:s.split(""),states:[,,,,,].fill("absent")}]),r(""))}else c==="Backspace"?r(h=>h.slice(0,-1)):/^[a-zA-Z]$/.test(c)&&s.length<5&&a.length<6&&r(h=>h+c.toLowerCase())},[s,a]),k=(0,t.useMemo)(()=>{let c={};return a.forEach(h=>{h.letters.forEach((x,E)=>{let S=h.states[E];c[x]&&S!=="correct"&&(S!=="present"||c[x]==="correct")||(c[x]=S)})}),c},[a]);return(0,t.useEffect)(()=>{let c=h=>{!h.ctrlKey&&!h.metaKey&&!h.altKey&&(h.key==="Enter"||h.key==="Backspace"||/^[a-zA-Z]$/.test(h.key))&&g(h.key)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[g]),(0,e.jsxs)("div",{className:"solver-container",style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 10px",minHeight:"80vh",maxWidth:"800px",margin:"0 auto",gap:"20px"},children:[(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)("h1",{style:{fontSize:"2rem",marginBottom:"10px",color:"#1a1a1b"},children:"Solucionador de Wordle en Espa\xF1ol"}),(0,e.jsx)("p",{style:{color:"#6c757d",marginBottom:"0",fontSize:"1.1rem"},children:"Escribe tu palabra y presiona Enter. Haz clic en las casillas para hacer coincidir los colores de tu partida."})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"100%",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(nn,{guesses:a,currentGuess:s,currentRow:a.length,onToggleState:(c,h)=>{n(x=>{let E=[...x],S={...E[c],states:[...E[c].states]},T=S.states[h],L="absent";return T==="absent"?L="present":T==="present"&&(L="correct"),S.states[h]=L,E[c]=S,E})}}),i&&(0,e.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(255, 255, 255, 0.95)",padding:"10px 20px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",fontWeight:"bold",zIndex:10},children:i})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"15px"},children:[(0,e.jsx)("button",{onClick:()=>{a.length>0&&(n(c=>c.slice(0,-1)),r(""))},disabled:a.length===0,style:{padding:"10px 20px",borderRadius:"8px",border:"none",background:a.length===0?"#e9ecef":"#6c757d",color:a.length===0?"#adb5bd":"white",cursor:a.length===0?"not-allowed":"pointer",fontWeight:"bold",fontSize:"1rem",transition:"background 0.2s"},children:"Undo Guess"}),(0,e.jsx)("button",{onClick:()=>{window.confirm("Are you sure you want to reset the solver?")&&(n([]),r(""))},disabled:a.length===0,style:{padding:"10px 20px",borderRadius:"8px",border:"none",background:a.length===0?"#e9ecef":"#dc3545",color:a.length===0?"#adb5bd":"white",cursor:a.length===0?"not-allowed":"pointer",fontWeight:"bold",fontSize:"1rem",transition:"background 0.2s"},children:"Reset All"})]}),(0,e.jsxs)("div",{style:{width:"100%",maxWidth:"500px",background:"#f8f9fa",borderRadius:"12px",padding:"20px",border:"1px solid #dee2e6",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},children:[(0,e.jsxs)("h3",{style:{margin:"0 0 15px 0",fontSize:"1.2rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{children:"Suggested Guesses"}),a.length>0&&(0,e.jsxs)("span",{style:{color:"#6aaa64",fontSize:"1rem",background:"#e2f0e1",padding:"4px 10px",borderRadius:"20px"},children:[m.length," possible"]})]}),a.length===0?(0,e.jsxs)("p",{style:{margin:0,color:"#495057",lineHeight:"1.5"},children:["Enter your first guess to see suggestions. Mathematically optimal starting words include ",(0,e.jsx)("strong",{children:"ROAST"}),", ",(0,e.jsx)("strong",{children:"CRANE"}),", and ",(0,e.jsx)("strong",{children:"SLATE"}),"."]}):m.length===0?(0,e.jsx)("p",{style:{margin:0,color:"#dc3545",fontWeight:"bold"},children:"No words match these clues. Please double-check your colours!"}):(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxHeight:"250px",overflowY:"auto",paddingRight:"5px"},children:[m.slice(0,100).map(c=>(0,e.jsx)("span",{style:{padding:"8px 12px",background:"white",border:"1px solid #ced4da",borderRadius:"6px",fontSize:"1.1rem",fontWeight:"600",textTransform:"uppercase",letterSpacing:"1px",color:"#1a1a1b"},children:c},c)),m.length>100&&(0,e.jsxs)("span",{style:{padding:"8px 12px",color:"#6c757d",fontSize:"0.95rem",display:"flex",alignItems:"center",fontStyle:"italic"},children:["+ ",m.length-100," more"]})]})]}),(0,e.jsx)("div",{style:{width:"100%",maxWidth:"500px",margin:"10px 0 30px"},children:(0,e.jsx)(re,{onKey:g,keyStates:k})})]})]})}function rn({length:d,language:a}){return(0,e.jsxs)("div",{className:"container",style:{padding:"60px 20px",minHeight:"60vh",maxWidth:"800px",margin:"0 auto",textAlign:"center"},children:[(0,e.jsxs)("h1",{style:{fontSize:"2.5rem",marginBottom:"20px",color:"#1a1a1b"},children:["Palabras de ",d," Letras para Wordle Espa\xF1ol"]}),(0,e.jsxs)("p",{style:{fontSize:"1.2rem",color:"#495057",marginBottom:"40px"},children:["Explora la lista completa de palabras de ",d," letras en espa\xF1ol. Ideal para variantes de Wordle y mejorar tu vocabulario."]}),(0,e.jsxs)("div",{className:"variants-tool",style:{padding:"40px 20px",background:"#f8f9fa",borderRadius:"16px",border:"1px solid #dee2e6",boxShadow:"0 8px 30px rgba(0,0,0,0.05)"},children:[(0,e.jsx)("div",{style:{fontSize:"3rem",marginBottom:"10px"},children:"\u{1F4DA}"}),(0,e.jsx)("h2",{style:{fontSize:"1.5rem",marginBottom:"10px",color:"#1a1a1b"},children:"Lista de Palabras Pr\xF3ximamente"}),(0,e.jsx)("p",{style:{color:"#6c757d",fontWeight:"500"},children:"Estamos recopilando el diccionario en espa\xF1ol para esta variante."})]})]})}var on=C(9489);let ga=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function $e(d){let a=d.getFullYear(),n=String(d.getMonth()+1).padStart(2,"0"),s=String(d.getDate()).padStart(2,"0");return`${a}-${n}-${s}`}let sn=[{q:"\xBFQu\xE9 es el Archivo de Wordle en Espa\xF1ol?",a:"El Archivo de Wordle es una biblioteca completa que recopila todos los retos diarios pasados de Wordle en espa\xF1ol desde el inicio oficial (1 de enero de 2024). Te permite jugar y revivir cualquier partida que te hayas perdido o simplemente entrenar con desaf\xEDos anteriores."},{q:"\xBFC\xF3mo puedo jugar un puzle de una fecha espec\xEDfica?",a:"Puedes hacer clic en cualquier tarjeta del calendario de esta p\xE1gina o navegar directamente a la URL con el formato: domin.com/?date=AAAA-MM-DD (por ejemplo: /?date=2026-08-20). El tablero cargar\xE1 autom\xE1ticamente la palabra secreta de ese d\xEDa."},{q:"\xBFJugar puzles del archivo afecta a mi racha actual?",a:"No. Las partidas jugadas a trav\xE9s del archivo de fechas pasadas se guardan de forma aislada y no interrumpen ni penalizan tu racha activa del Wordle de Hoy."},{q:"\xBFCon qu\xE9 frecuencia se a\xF1aden nuevos puzles al archivo?",a:"El archivo se actualiza autom\xE1ticamente cada d\xEDa a las 00:00 (medianoche) hora local con la nueva Palabra del D\xEDa."},{q:"\xBFPuedo ver las pistas de un puzle del archivo si me quedo atascado?",a:"\xA1S\xED! Cada reto archivado incluye un enlace directo a su soluci\xF3n y pistas sin spoilers (/wordle-respuesta-hoy/?seed=AAAAMMDD) para ayudarte a deducir la palabra paso a paso."}];function ln({language:d="es",onBack:a}){let n=(0,t.useMemo)(()=>(0,F.E)(),[]),s=n.getFullYear(),r=n.getMonth(),[i,w]=(0,t.useState)(s),[p,m]=(0,t.useState)(r),[g,k]=(0,t.useState)("ALL"),[c,h]=(0,t.useState)(""),[x,E]=(0,t.useState)(""),[S,T]=(0,t.useState)(null),L=(0,t.useMemo)(()=>{let A=[];for(let R=s;R>=2024;R--)A.push(R);return A},[s]),Z=(0,t.useMemo)(()=>{let A=new Date(i,p+1,0).getDate(),R=[];for(let I=A;I>=1;I--){let q=new Date(i,p,I);if(q>n)continue;let pe=(0,on.ot)(q),K=(0,F.d)(q),me=$e(q),ye=(function(u){let b=u.getFullYear(),y=String(u.getMonth()+1).padStart(2,"0"),P=String(u.getDate()).padStart(2,"0");return`${b}${y}${P}`})(q);R.push({date:q,isoDate:me,seed:ye,puzzleNum:K,difficulty:pe.difficulty,word:pe.word})}return R},[i,p,n]),Ne=(0,t.useMemo)(()=>Z.filter(A=>{if(g!=="ALL"&&A.difficulty!==g)return!1;if(c.trim()){let R=c.trim().replace("#",""),I=String(A.puzzleNum).includes(R),q=A.isoDate.includes(R);if(!I&&!q)return!1}return!0}),[Z,g,c]),J=(0,t.useMemo)(()=>Math.max(1,Math.floor((n-new Date(2024,0,1))/864e5)+1),[n]);return(0,e.jsxs)("div",{className:"archive-container",children:[(0,e.jsx)("div",{className:"archive-breadcrumbs-wrap",children:(0,e.jsx)(ca,{language:"es",items:[{name:"Wordle Espa\xF1ol",path:"/"},{name:"Archivo de Puzles"}]})}),(0,e.jsxs)("section",{className:"archive-hero",children:[(0,e.jsxs)("div",{className:"archive-hero__badge-row",children:[(0,e.jsx)("span",{className:"archive-hero__badge",children:"\u{1F4DA} Archivo Hist\xF3rico"}),(0,e.jsxs)("span",{className:"archive-hero__badge archive-hero__badge--highlight",children:[J," Puzles Disponibles"]}),(0,e.jsx)("span",{className:"archive-hero__badge",children:"Desde 1 Ene 2024"})]}),(0,e.jsx)("h1",{className:"archive-hero__title",children:"Archivo de Wordle en Espa\xF1ol \u2014 Juega Puzles Anteriores"}),(0,e.jsx)("p",{className:"archive-hero__desc",children:"Explora la colecci\xF3n completa de retos diarios de Wordle en espa\xF1ol. Selecciona cualquier d\xEDa del calendario o introduce una fecha espec\xEDfica para jugar el desaf\xEDo oficial de ese d\xEDa."}),(0,e.jsxs)("form",{onSubmit:A=>{A.preventDefault(),x&&(window.location.href=`/?date=${x}`)},className:"archive-quick-jump",children:[(0,e.jsx)("label",{htmlFor:"custom-date-input",className:"archive-quick-jump__label",children:"\u{1F5D3}\uFE0F Ir directo a una fecha:"}),(0,e.jsxs)("div",{className:"archive-quick-jump__controls",children:[(0,e.jsx)("input",{id:"custom-date-input",type:"date",min:"2024-01-01",max:$e(n),value:x,onChange:A=>E(A.target.value),className:"archive-date-input"}),(0,e.jsx)("button",{type:"submit",className:"archive-btn archive-btn--primary",disabled:!x,children:"Jugar Esta Fecha \u2192"})]})]})]}),(0,e.jsxs)("section",{className:"archive-controls-card",children:[(0,e.jsxs)("div",{className:"archive-filter-row",children:[(0,e.jsxs)("div",{className:"archive-control-group",children:[(0,e.jsx)("label",{className:"archive-control-label",children:"A\xF1o:"}),(0,e.jsx)("div",{className:"archive-pill-group",children:L.map(A=>(0,e.jsx)("button",{type:"button",onClick:()=>w(A),className:`archive-pill ${i===A?"archive-pill--active":""}`,children:A},A))})]}),(0,e.jsxs)("div",{className:"archive-control-group",children:[(0,e.jsx)("label",{className:"archive-control-label",children:"Dificultad:"}),(0,e.jsxs)("select",{value:g,onChange:A=>k(A.target.value),className:"archive-select",children:[(0,e.jsx)("option",{value:"ALL",children:"Todas las dificultades"}),(0,e.jsx)("option",{value:"Easy",children:"F\xE1cil"}),(0,e.jsx)("option",{value:"Medium",children:"Media"}),(0,e.jsx)("option",{value:"Hard",children:"Dif\xEDcil"}),(0,e.jsx)("option",{value:"Ultra-Hard",children:"Extrema"})]})]}),(0,e.jsxs)("div",{className:"archive-control-group",children:[(0,e.jsx)("label",{className:"archive-control-label",children:"Buscar # o fecha:"}),(0,e.jsx)("input",{type:"text",placeholder:"Ej. 1894 o 2026-08",value:c,onChange:A=>h(A.target.value),className:"archive-text-input"})]})]}),(0,e.jsx)("div",{className:"archive-months-scroll",children:ga.map((A,R)=>{if(i===s&&R>r)return null;let I=p===R;return(0,e.jsx)("button",{type:"button",onClick:()=>m(R),className:`archive-month-tab ${I?"archive-month-tab--active":""}`,children:A},R)})})]}),(0,e.jsxs)("section",{className:"archive-grid-section",children:[(0,e.jsxs)("div",{className:"archive-grid-header",children:[(0,e.jsxs)("h2",{className:"archive-grid-title",children:["Retos de ",ga[p]," ",i," (",Ne.length," puzles)"]}),(0,e.jsxs)("span",{className:"archive-grid-subtitle",children:['Haz clic en "Jugar" para abrir la partida con URL directa: ',(0,e.jsx)("code",{children:"/?date=AAAA-MM-DD"})]})]}),Ne.length===0?(0,e.jsxs)("div",{className:"archive-empty",children:[(0,e.jsx)("p",{children:"No se encontraron puzles que coincidan con los filtros seleccionados."}),(0,e.jsx)("button",{type:"button",onClick:()=>{k("ALL"),h("")},className:"archive-btn archive-btn--secondary",children:"Restablecer Filtros"})]}):(0,e.jsx)("div",{className:"archive-cards-grid",children:Ne.map(A=>{let R=(function(q){switch(q){case"Easy":return"#63AF4E";case"Medium":return"#D4A843";case"Hard":return"#E05D52";case"Ultra-Hard":return"#9B51E0";default:return"#7A8199"}})(A.difficulty),I=A.isoDate===$e(n);return(0,e.jsxs)("div",{className:`puzzle-card ${I?"puzzle-card--today":""}`,children:[(0,e.jsxs)("div",{className:"puzzle-card__top",children:[(0,e.jsxs)("span",{className:"puzzle-card__num",children:["Wordle #",A.puzzleNum]}),(0,e.jsxs)("span",{className:"puzzle-card__diff",style:{background:R},children:[(0,e.jsx)("span",{className:"puzzle-card__dot"}),(function(q){switch(q){case"Easy":return"F\xE1cil";case"Medium":return"Media";case"Hard":return"Dif\xEDcil";case"Ultra-Hard":return"Extrema";default:return q||"Normal"}})(A.difficulty)]})]}),(0,e.jsx)("div",{className:"puzzle-card__date",children:A.date.toLocaleDateString("es-ES",{weekday:"short",day:"numeric",month:"short",year:"numeric"})}),(0,e.jsx)("div",{className:"puzzle-card__url-preview",children:(0,e.jsxs)("code",{children:["/?date=",A.isoDate]})}),(0,e.jsxs)("div",{className:"puzzle-card__actions",children:[(0,e.jsx)(de(),{href:`/?date=${A.isoDate}`,className:"puzzle-card__play-btn",children:"\u{1F3AE} Jugar Puzle"}),(0,e.jsx)(de(),{href:`/wordle-respuesta-hoy/?seed=${A.seed}`,className:"puzzle-card__hint-btn",title:"Ver pistas y soluci\xF3n sin spoilers",children:"\u{1F4A1} Pistas"})]})]},A.isoDate)})})]}),(0,e.jsxs)("section",{className:"archive-content-section",children:[(0,e.jsxs)("article",{className:"archive-article",children:[(0,e.jsx)("h2",{children:"\xBFQu\xE9 es y c\xF3mo funciona el Archivo de Wordle en Espa\xF1ol?"}),(0,e.jsxs)("p",{children:["El ",(0,e.jsx)("strong",{children:"Archivo de Wordle en Espa\xF1ol"})," es una herramienta pensada para entusiastas de los juegos de palabras que desean practicar, recuperar d\xEDas perdidos o simplemente entrenar su vocabulario sin esperar 24 horas entre cada desaf\xEDo oficial."]}),(0,e.jsxs)("p",{children:["A diferencia del modo Ilimitado \u2014que genera palabras aleatorias\u2014, el archivo contiene el ",(0,e.jsx)("strong",{children:"historial cronol\xF3gico exacto"})," de todas las palabras oficiales asignadas a cada d\xEDa del calendario desde el inicio de la plataforma. Cada jugador que abra la fecha ",(0,e.jsx)("code",{children:"/?date=2026-08-20"})," se enfrentar\xE1 a la misma palabra exacta con id\xE9ntica dificultad."]}),(0,e.jsx)("h2",{children:"C\xF3mo jugar cualquier puzle anterior usando la URL con fecha"}),(0,e.jsxs)("p",{children:["Hemos dise\xF1ado un sistema de enlaces directos para que puedas compartir cualquier reto del pasado con tus amigos o guardarlo en tus marcadores. Para jugar cualquier d\xEDa del historial, simplemente utiliza el par\xE1metro ",(0,e.jsx)("code",{children:"?date=AAAA-MM-DD"})," al final del dominio:"]}),(0,e.jsxs)("ul",{className:"archive-guide-list",children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Formato est\xE1ndar:"})," ",(0,e.jsx)("code",{children:"https://lapalabradeldia.co/?date=2026-08-15"})]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Acceso a soluci\xF3n y pistas:"})," ",(0,e.jsx)("code",{children:"https://lapalabradeldia.co/wordle-respuesta-hoy/?seed=20260815"})]})]}),(0,e.jsx)("h2",{children:"Beneficios de entrenar con el Archivo Hist\xF3rico"}),(0,e.jsxs)("div",{className:"archive-benefits-grid",children:[(0,e.jsxs)("div",{className:"benefit-card",children:[(0,e.jsx)("div",{className:"benefit-card__icon",children:"\u{1F4C8}"}),(0,e.jsx)("h3",{children:"Entrenamiento Progresivo"}),(0,e.jsx)("p",{children:"Filtra por dificultad (F\xE1cil, Media, Dif\xEDcil, Extrema) para acostumbrar tu mente a combinaciones de letras complejas."})]}),(0,e.jsxs)("div",{className:"benefit-card",children:[(0,e.jsx)("div",{className:"benefit-card__icon",children:"\u{1F501}"}),(0,e.jsx)("h3",{children:"Patrones de Letras Repetidas"}),(0,e.jsx)("p",{children:"Revisa puzles pasados de alta dificultad para aprender a detectar consonantes dobles y vocales duplicadas."})]}),(0,e.jsxs)("div",{className:"benefit-card",children:[(0,e.jsx)("div",{className:"benefit-card__icon",children:"\u{1F3C6}"}),(0,e.jsx)("h3",{children:"Retos con Amigos"}),(0,e.jsx)("p",{children:"Copia el enlace de un puzle antiguo y comp\xE1rtelo para ver qui\xE9n lo resuelve en menos intentos."})]})]}),(0,e.jsx)("h2",{children:"Consejos para Resolver Puzles Antiguos"}),(0,e.jsxs)("ol",{className:"archive-tips-list",children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Comienza con una palabra inicial rica en vocales:"})," Palabras como ",(0,e.jsx)("code",{children:"AIRES"}),", ",(0,e.jsx)("code",{children:"OREAS"})," o ",(0,e.jsx)("code",{children:"TENIA"})," te revelan r\xE1pidamente la estructura fon\xE9tica."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Reubica las pistas amarillas sin demora:"})," En espa\xF1ol, ciertas letras suelen concentrarse al final (-S, -N, -R, -L) o en la segunda posici\xF3n."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Usa las pistas progresivas si te bloqueas:"})," Si llegas al 5\xBA intento sin claridad, consulta la p\xE1gina de pistas de esa fecha para obtener indicios sin arruinar la soluci\xF3n."]})]})]}),(0,e.jsxs)("div",{className:"archive-faq-wrap",children:[(0,e.jsx)("h2",{className:"archive-faq-title",children:"Preguntas Frecuentes sobre el Archivo"}),(0,e.jsx)("div",{className:"archive-faq-list",children:sn.map((A,R)=>{let I=S===R;return(0,e.jsxs)("div",{className:`archive-faq-item ${I?"archive-faq-item--open":""}`,children:[(0,e.jsxs)("button",{type:"button",className:"archive-faq-trigger",onClick:()=>T(I?null:R),"aria-expanded":I,children:[(0,e.jsx)("span",{children:A.q}),(0,e.jsx)("span",{className:"archive-faq-chevron",children:I?"\u2212":"+"})]}),I&&(0,e.jsx)("div",{className:"archive-faq-answer",children:(0,e.jsx)("p",{children:A.a})})]},R)})})]})]}),(0,e.jsx)("style",{children:`
        .archive-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 10px 16px 80px;
          font-family: inherit;
          color: var(--color-text-dark, #252A34);
          line-height: 1.6;
          position: relative;
        }

        .archive-breadcrumbs-wrap {
          margin-bottom: 16px;
        }

        /* Hero */
        .archive-hero {
          position: relative;
          background: rgba(99, 175, 78, 0.08);
          border: 1px solid rgba(99, 175, 78, 0.3);
          border-radius: 14px;
          padding: 24px 20px;
          margin-bottom: 20px;
          box-shadow: none;
        }

        .archive-hero__badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }

        .archive-hero__badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          color: var(--color-text-dark, #252A34);
          box-shadow: none;
        }

        .archive-hero__badge--highlight {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-color: var(--color-correct, #63AF4E);
        }

        .archive-hero__title {
          font-size: clamp(1.5rem, 3.5vw, 1.9rem);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 10px 0;
          color: var(--color-text-dark, #252A34);
        }

        .archive-hero__desc {
          font-size: 1rem;
          color: var(--color-text-secondary, #7A8199);
          margin: 0 0 18px 0;
          max-width: 760px;
        }

        .archive-quick-jump {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          padding: 14px 16px;
          border-radius: 10px;
        }

        .archive-quick-jump__label {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
        }

        .archive-quick-jump__controls {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }

        .archive-date-input {
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid var(--color-border, #DCE1ED);
          font-family: inherit;
          font-size: 14px;
          color: var(--color-text-dark, #252A34);
          background: var(--color-bg, #F5F5F4);
          outline: none;
        }

        .archive-date-input:focus {
          border-color: var(--color-correct, #63AF4E);
        }

        /* Controls Card */
        .archive-controls-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 14px;
          padding: 18px;
          margin-bottom: 24px;
          box-shadow: none;
        }

        .archive-filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: flex-end;
          margin-bottom: 16px;
        }

        .archive-control-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .archive-control-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-secondary, #7A8199);
        }

        .archive-pill-group {
          display: flex;
          gap: 6px;
        }

        .archive-pill {
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-tab-bg, #EBEDF3);
          border: 1px solid var(--color-border, #DCE1ED);
          color: var(--color-text, #414A5E);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .archive-pill--active {
          background: var(--color-correct, #63AF4E);
          border-color: var(--color-correct, #63AF4E);
          color: #ffffff;
        }

        .archive-select,
        .archive-text-input {
          padding: 7px 12px;
          border-radius: 6px;
          border: 1px solid var(--color-border, #DCE1ED);
          font-family: inherit;
          font-size: 13px;
          color: var(--color-text-dark, #252A34);
          background: var(--color-bg, #F5F5F4);
          outline: none;
        }

        .archive-select:focus,
        .archive-text-input:focus {
          border-color: var(--color-correct, #63AF4E);
        }

        /* Month Tabs */
        .archive-months-scroll {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-top: 10px;
          border-top: 1px solid var(--color-border, #DCE1ED);
          scrollbar-width: none;
        }

        .archive-months-scroll::-webkit-scrollbar {
          display: none;
        }

        .archive-month-tab {
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          color: var(--color-text, #414A5E);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .archive-month-tab--active {
          background: var(--color-text-dark, #252A34);
          border-color: var(--color-text-dark, #252A34);
          color: #ffffff;
        }

        /* Grid Section */
        .archive-grid-section {
          margin-bottom: 36px;
        }

        .archive-grid-header {
          margin-bottom: 16px;
        }

        .archive-grid-title {
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0 0 4px 0;
          color: var(--color-text-dark, #252A34);
        }

        .archive-grid-subtitle {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
        }

        .archive-grid-subtitle code {
          background: var(--color-tab-bg, #EBEDF3);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--color-correct, #63AF4E);
          font-weight: 700;
        }

        .archive-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
        }

        /* Puzzle Card */
        .puzzle-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .puzzle-card:hover {
          border-color: var(--color-correct, #63AF4E);
        }

        .puzzle-card--today {
          border-color: var(--color-correct, #63AF4E);
          background: rgba(99, 175, 78, 0.04);
        }

        .puzzle-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .puzzle-card__num {
          font-size: 13px;
          font-weight: 800;
          color: var(--color-text-dark, #252A34);
        }

        .puzzle-card__diff {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
        }

        .puzzle-card__dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ffffff;
        }

        .puzzle-card__date {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text, #414A5E);
          text-transform: capitalize;
        }

        .puzzle-card__url-preview {
          font-size: 11px;
          color: var(--color-text-secondary, #7A8199);
        }

        .puzzle-card__url-preview code {
          background: var(--color-bg, #F5F5F4);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .puzzle-card__actions {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }

        .puzzle-card__play-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff !important;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-correct, #63AF4E);
          transition: background 0.15s ease;
        }

        .puzzle-card__play-btn:hover {
          background: #549a41;
        }

        .puzzle-card__hint-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34) !important;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-border, #DCE1ED);
          transition: background 0.15s ease;
        }

        .puzzle-card__hint-btn:hover {
          background: #dfe2ea;
        }

        /* Buttons */
        .archive-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: background 0.15s ease;
        }

        .archive-btn--primary {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border: 1px solid var(--color-correct, #63AF4E);
        }

        .archive-btn--primary:hover:not(:disabled) {
          background: #549a41;
        }

        .archive-btn--primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .archive-btn--secondary {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34);
          border: 1px solid var(--color-border, #DCE1ED);
        }

        .archive-empty {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
        }

        /* SEO Article */
        .archive-content-section {
          margin-top: 40px;
          border-top: 1px solid var(--color-border, #DCE1ED);
          padding-top: 30px;
        }

        .archive-article h2 {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 24px 0 10px 0;
          color: var(--color-text-dark, #252A34);
        }

        .archive-article p {
          font-size: 14px;
          color: var(--color-text, #414A5E);
          margin-bottom: 14px;
        }

        .archive-guide-list,
        .archive-tips-list {
          padding-left: 20px;
          margin-bottom: 20px;
          font-size: 14px;
          color: var(--color-text, #414A5E);
        }

        .archive-guide-list li,
        .archive-tips-list li {
          margin-bottom: 8px;
        }

        .archive-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
          margin: 20px 0 24px 0;
        }

        .benefit-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 10px;
          padding: 16px;
        }

        .benefit-card__icon {
          font-size: 1.8rem;
          margin-bottom: 6px;
        }

        .benefit-card h3 {
          font-size: 14px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: var(--color-text-dark, #252A34);
        }

        .benefit-card p {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
          margin: 0;
        }

        /* FAQ */
        .archive-faq-wrap {
          margin-top: 30px;
        }

        .archive-faq-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .archive-faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .archive-faq-item {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          overflow: hidden;
        }

        .archive-faq-item--open {
          border-color: var(--color-correct, #63AF4E);
        }

        .archive-faq-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
          cursor: pointer;
        }

        .archive-faq-chevron {
          font-size: 16px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          margin-left: 10px;
        }

        .archive-faq-answer {
          padding: 0 16px 14px;
          font-size: 13px;
          color: var(--color-text, #414A5E);
          line-height: 1.5;
        }

        .archive-faq-answer p {
          margin: 0;
        }

        @media (max-width: 600px) {
          .archive-hero {
            padding: 18px 14px;
          }
          .archive-controls-card {
            padding: 14px;
          }
          .archive-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Se(d){if(!d)return null;let a=d.get("date");if(a){let s=a.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(s)return new Date(parseInt(s[1],10),parseInt(s[2],10)-1,parseInt(s[3],10));if(/^\d{8}$/.test(a))return new Date(parseInt(a.substring(0,4),10),parseInt(a.substring(4,6),10)-1,parseInt(a.substring(6,8),10))}let n=d.get("seed");return n&&/^\d{8}$/.test(n)?new Date(parseInt(n.substring(0,4),10),parseInt(n.substring(4,6),10)-1,parseInt(n.substring(6,8),10)):null}function Pe(d,a){let n=Se(d);if(n){let s=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`wordle-state-daily-${a}-${s}-${r}-${i}`}return`wordle-state-daily-${a}`}let B={play:"Jugar",playHelp:"Presiona el bot\xF3n \xABJugar\xBB para comenzar",invalidTitle:"404",invalidSubtitle:"Desaf\xEDo no encontrado",invalidDesc:"El enlace del desaf\xEDo no es v\xE1lido o la palabra no existe.",playStandard:"Jugar a Wordle Est\xE1ndar",notEnough:"No hay suficientes letras",notInList:"No est\xE1 en la lista de palabras",winPrefix:"Wordle",winSuffix:"\xA1Has ganado! \u{1F3C6}",lostPrefix:"La palabra era: ",winMessages:["\xA1Genial!","\xA1Magn\xEDfico!","\xA1Impresionante!","\xA1Espl\xE9ndido!","\xA1Muy bien!","\xA1Por poco!"],guessFirst:"\xA1Adivina la primera palabra!",wordleGame:"Juego Wordle",wordleDesc:"\xA1Adivina la palabra oculta en 6 intentos!",dailyFinished:"\xA1Ya has completado el Wordle de hoy!",nextWord:"Siguiente palabra en:",tryUnlimited:"Probar Wordle Ilimitado"};function xa(d,a="unlimited"){localStorage.setItem(a==="daily"?"wordle-stats-daily":"wordle-stats",JSON.stringify(d))}function fa(d="unlimited"){try{let a=localStorage.getItem(d==="daily"?"wordle-stats-daily":"wordle-stats");if(a)return JSON.parse(a)}catch{}return{gamesPlayed:0,gamesWon:0,currentStreak:0,maxStreak:0,distribution:[0,0,0,0,0,0]}}function cn(){let d=(0,Q.usePathname)()||"/",a=(0,Q.useSearchParams)(),n={pathname:d,search:a?"?"+a.toString():""},s=(0,Q.useRouter)(),r=(o,l)=>{l?.replace?s.replace(o):s.push(o)},[i,w]=(0,t.useState)(()=>{let o=new URLSearchParams(window.location.search);if(o.get("challenge"))return"unlimited";if(o.get("date")||o.get("seed"))return"daily";let l=window.location.pathname;if(l.includes("palabra-del-dia")||l.includes("wordle-today"))return"daily";let v=l.endsWith("/")&&l.length>1?l.slice(0,-1):l;return v===""||v==="/"?"unlimited":localStorage.getItem("wordle-mode")||"unlimited"}),[p,m]=(0,t.useState)(()=>{let o=window.location.pathname,l=o.endsWith("/")&&o.length>1?o.slice(0,-1):o;if(l===""||l==="/")return"game";if(l.includes("/archive")||l.includes("/wordle-archive")||l.includes("/archivo"))return"archive";if(l.includes("wordle-respuesta-hoy")||l.includes("pistas-de-hoy")||l.includes("wordle-hints-today"))return"hints";if(l.includes("palabra-del-dia")||l.includes("wordle-today"))return"game";if(l.includes("/privacy")||l.includes("/privacidad"))return"privacy";if(l.includes("/wordle-solver"))return"solver";let v=l.match(/\/(\d+)-letter-words/);return v?`variants:${v[1]}`:"404"});(0,t.useEffect)(()=>{let o=n.pathname;if(o.startsWith("/es/")||o==="/es"){let f=o.replace(/^\/es(\/|$)/,"/")||"/",j=n.search||"";r(`${f}${j}`,{replace:!0});return}let l="game",v=o==="/",z=new URLSearchParams(n.search),N=z.get("date")||z.get("seed")||o.includes("palabra-del-dia")||o.includes("wordle-today")||o.includes("wordle-respuesta-hoy")||o.includes("pistas-de-hoy")||o.includes("wordle-hints-today")||o.includes("/daily/")?"daily":"unlimited";o.includes("/archive")||o.includes("/wordle-archive")||o.includes("/archivo")?l="archive":o.includes("wordle-respuesta-hoy")||o.includes("pistas-de-hoy")||o.includes("wordle-hints-today")||o.includes("/hints/")?l="hints":o.includes("/privacy")||o.includes("/privacidad")?l="privacy":o.includes("/wordle-solver")?l="solver":o.match(/\/\d+-letter-words/)?l=`variants:${o.match(/\/(\d+)-letter-words/)[1]}`:v||["palabra-del-dia","wordle-today","wordle-respuesta-hoy","pistas-de-hoy","wordle-hints-today","archive","wordle-archive","archivo","privacy","privacidad","daily","hints","wordle-solver","-letter-words"].some(f=>o.includes(f))||(l="404"),N!==i&&w(N),l!==p&&m(l),setTimeout(()=>document.dispatchEvent(new Event("prerender-trigger")),1500)},[n.pathname,n.search]),(0,t.useMemo)(()=>{let o=(function(Me){let ia=(function(Y){if(!Y)return"/";let G=String(Y),Oe=G.search(/[?#]/);return Oe>=0&&(G=G.slice(0,Oe)),(G=G.toLowerCase().replace(/\/{2,}/g,"/"))===""||G==="/"?"/":(G.startsWith("/")||(G="/"+G),G.endsWith("/")||(G+="/"),G)})(Me),Ta=null,Aa=ia.match(/^\/(\d+)-letter-words\/$/);if(Aa){let Y=Aa[1];Ta={title:`Palabras de ${Y} Letras para Wordle Espa\xF1ol`,description:`Explora la lista completa de palabras en espa\xF1ol de ${Y} letras. Ideal para variantes de Wordle y enriquecer tu vocabulario.`,isoLang:"es-ES",group:"unlimited"}}let za=ua[ia]||Ta,ge=za?ia:"/",xe=za||ua["/"],Sa=an[xe.group]||{es:ge,"es-ES":ge},En=xe.group==="privacy"||ge.includes("privacy")||ge.includes("privacidad"),Na=xe.group==="hints",ja=!En,ta=null,Re=(0,F.E)();if(Na){let Y=new URLSearchParams(window.location.search).get("seed");Y&&/^\d{8}$/.test(Y)&&(Re=new Date(Y.substring(0,4),Y.substring(4,6)-1,Y.substring(6,8)))}if(ja){let Y=Re.getFullYear(),G=String(Re.getMonth()+1).padStart(2,"0"),Oe=String(Re.getDate()).padStart(2,"0");ta=`${Y}-${G}-${Oe}T04:05:00.000Z`}else ta="2026-05-15T04:05:00.000Z";let Ca=xe.title,Ra=xe.description;if(Na){let Y=(0,F.d)(Re),G=(function(Oe,Tn="es-ES"){return Oe.toLocaleDateString(Tn,{weekday:"long",month:"long",day:"numeric",year:"numeric"})})(Re,xe.isoLang);Ca=`Pistas Wordle de Hoy (#${Y}) \u2013 Claves y Soluci\xF3n para ${G}`,Ra=`Pistas sin spoilers para el Wordle #${Y} del ${G}: letra inicial, n\xFAmero de vocales, letras repetidas, dificultad y la respuesta de hoy.`}return{title:Ca,description:Ra,isoLang:xe.isoLang,group:xe.group,canonicalPath:ge,canonical:`${O}${ge}`,hreflang:{es:`${O}${Sa.es||ge}`,"es-ES":`${O}${Sa["es-ES"]||ge}`},modifiedDate:ta,isDaily:ja}})(n.pathname),l=i==="daily",v=p==="hints",z=p==="privacy",N=(0,F.E)(),f=new URLSearchParams(window.location.search).get("seed"),j=N,_=n.pathname.match(/\d{4}-\d{2}-\d{2}/);_?j=new Date(_[0]):f&&/^\d{8}$/.test(f)&&(j=new Date(f.substring(0,4),f.substring(4,6)-1,f.substring(6,8)));let ee=j.toISOString().split("T")[0],{title:ue,description:Ce,canonicalPath:M,isoLang:se}=o;return{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${O}/#organization`,name:"La Palabra del D\xEDa",url:O,logo:{"@type":"ImageObject","@id":`${O}/#logo`,url:`${O}/logo.png`,contentUrl:`${O}/logo.png`,width:512,height:512,caption:"La Palabra del D\xEDa"},image:{"@id":`${O}/#logo`}},{"@type":"WebSite","@id":`${O}/#website`,url:O,name:"La Palabra del D\xEDa",alternateName:"Wordle Espa\xF1ol Ilimitado",publisher:{"@id":`${O}/#organization`},inLanguage:se},{"@type":"WebPage","@id":`${O}${M}#webpage`,url:`${O}${M}`,name:ue,isPartOf:{"@id":`${O}/#website`},primaryImageOfPage:{"@id":`${O}${M}#primaryimage`},datePublished:l||v?`${ee}T00:05:00-04:00`:"2024-01-01T00:05:00-04:00",dateModified:o.modifiedDate||(l||v?`${ee}T00:05:00-04:00`:"2024-01-01T00:05:00-04:00"),description:Ce,inLanguage:se,potentialAction:[{"@type":"ReadAction",target:[`${O}${M}`]}]},...v?[]:[{"@type":"WebApplication","@id":`${O}/#webapp`,name:"Wordle Espa\xF1ol Ilimitado",url:`${O}${M}`,applicationCategory:"GameApplication",operatingSystem:"All",browserRequirements:"Requires JavaScript",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},author:{"@id":`${O}/#organization`},description:Ce,inLanguage:se,aggregateRating:{"@type":"AggregateRating",ratingValue:"4.8",bestRating:"5",worstRating:"1",ratingCount:"3690"}}],...z||v?[]:[{"@type":"FAQPage","@id":`${O}${M}#faq`,mainEntity:[{q:"\xBFQu\xE9 es Wordle en Espa\xF1ol?",a:"Wordle en Espa\xF1ol es una versi\xF3n libre y accesible del popular juego de palabras. Tu objetivo es descubrir una palabra oculta de 5 letras en un m\xE1ximo de seis intentos con la ayuda de pistas por colores."},{q:"\xBFC\xF3mo se juega exactamente?",a:"Escribe cualquier palabra v\xE1lida de 5 letras y pulsa Enter. Las casillas cambiar\xE1n de color: Verde indica letra correcta en la posici\xF3n exacta, Amarillo indica que la letra est\xE1 en la palabra pero en otra posici\xF3n, y Gris indica que no est\xE1 en la palabra."},{q:"\xBFSe puede jugar m\xE1s de una partida al d\xEDa?",a:"\xA1Por supuesto! Puedes jugar el reto diario (\xABPalabra del D\xEDa\xBB) una vez cada 24 horas, o disfrutar de partidas ilimitadas y consecutivas en el modo \xABIlimitado\xBB sin ning\xFAn l\xEDmite ni coste."},{q:"\xBFQu\xE9 ocurre si agoto los 6 intentos?",a:"Si no aciertas en 6 intentos, el juego te mostrar\xE1 la palabra correcta. Podr\xE1s pulsar 'Nueva Partida' para jugar de nuevo inmediatamente."},{q:"\xBFEs necesario descargar alguna aplicaci\xF3n?",a:"No, no necesitas descargar nada. Puedes jugar directamente desde el navegador de tu m\xF3vil, tablet o PC de forma r\xE1pida y gratuita."}].map(Me=>({"@type":"Question",name:Me.q,acceptedAnswer:{"@type":"Answer",text:Me.a}}))}],{"@type":"BreadcrumbList","@id":`${O}${M}#breadcrumb`,itemListElement:[{"@type":"ListItem",position:1,item:{"@type":"WebPage","@id":O,url:O,name:"Inicio"}},...l||v||z?[{"@type":"ListItem",position:2,item:{"@type":"WebPage","@id":`${O}${M}`,url:`${O}${M}`,name:ue}}]:[]]}]}},[i,p,"es",n.pathname,n.search]);let[g,k]=(0,t.useState)(()=>{let o=new URLSearchParams(window.location.search),l=o.get("challenge");if(l&&l.startsWith("wu_"))try{let _=l.replace("wu_",""),ee=atob(_).toLowerCase();if(ee.length>=4&&ee.length<=11)return ee}catch{}let v=Se(o),z=i==="daily"||!!v,N=Pe(o,"es"),f=localStorage.getItem(z?N:"wordle-state-es"),j=f?JSON.parse(f):null;if(z){let _=v||(0,F.E)();return(0,D.getDailyWord)("es",_).word.toLowerCase()}return j&&j.answer&&!l?j.answer:(0,D.getRandomWord)("es")}),[c,h]=(0,t.useState)(()=>{let o=new URLSearchParams(window.location.search),l=Se(o),v=i==="daily"||!!l,z=Pe(o,"es"),N=localStorage.getItem(v?z:"wordle-state-es");if(N){let f=JSON.parse(N);if(v){let j=l||(0,F.E)(),_=(0,D.getDailyWord)("es",j).word.toLowerCase();if(f.answer.toLowerCase()===_)return f.guesses}else if(!o.get("challenge"))return f.guesses}return[]}),[x,E]=(0,t.useState)(""),[S,T]=(0,t.useState)(()=>{let o=new URLSearchParams(window.location.search),l=Se(o),v=i==="daily"||!!l,z=Pe(o,"es"),N=localStorage.getItem(v?z:"wordle-state-es");if(N){let f=JSON.parse(N);if(v){let j=l||(0,F.E)(),_=(0,D.getDailyWord)("es",j).word.toLowerCase();if(f.answer.toLowerCase()===_)return f.gameState}else if(!o.get("challenge"))return f.gameState}return"playing"}),[L,Z]=(0,t.useState)(()=>{let o=new URLSearchParams(window.location.search),l=Se(o),v=i==="daily"||!!l,z=Pe(o,"es"),N=localStorage.getItem(v?z:"wordle-state-es");if(N){let f=JSON.parse(N);if(v){let j=l||(0,F.E)(),_=(0,D.getDailyWord)("es",j).word.toLowerCase();if(f.answer.toLowerCase()===_)return f.keyStates}else if(!o.get("challenge"))return f.keyStates}return{}}),[Ne,J]=(0,t.useState)(-1),[A,R]=(0,t.useState)(-1),[I,q]=(0,t.useState)(-1),[pe,K]=(0,t.useState)([]),[me,ye]=(0,t.useState)(!1),[u,b]=(0,t.useState)(!1),[y,P]=(0,t.useState)(!1),[W,Ee]=(0,t.useState)(()=>fa(i)),[je,ne]=(0,t.useState)(()=>localStorage.getItem("wordle-dark")==="true"),[dn,pn]=(0,t.useState)(!1),[mn,hn]=(0,t.useState)(!1),[un,gn]=(0,t.useState)(!0),[De,xn]=(0,t.useState)(()=>localStorage.getItem("wordle-preview-seen")!=="true"),[Je,Ye]=(0,t.useState)(!1),[fn,Qe]=(0,t.useState)(!1),[Ze,Te]=(0,t.useState)(!1),[va,vn]=(0,t.useState)(!1),[wa,ba]=(0,t.useState)(!0),wn=(0,t.useRef)(0),[bn,yn]=(0,t.useState)("");(0,t.useEffect)(()=>{if(i!=="daily")return;let o=()=>{let v=(0,F.E)(),z=new Date(v);z.setDate(z.getDate()+1),z.setHours(0,0,0,0);let N=z-v,f=Math.floor(N/36e5),j=Math.floor(N%36e5/6e4),_=Math.floor(N%6e4/1e3);yn(`${String(f).padStart(2,"0")}:${String(j).padStart(2,"0")}:${String(_).padStart(2,"0")}`)};o();let l=setInterval(o,1e3);return()=>clearInterval(l)},[i]);let he=(0,t.useCallback)((o,l=1500)=>{let v=++wn.current;K(z=>[...z,{id:v,message:o}]),setTimeout(()=>{K(z=>z.map(N=>N.id===v?{...N,fading:!0}:N)),setTimeout(()=>{K(z=>z.filter(N=>N.id!==v))},300)},l)},[]);(0,t.useEffect)(()=>{document.documentElement.setAttribute("data-theme",je?"dark":"light"),localStorage.setItem("wordle-dark",je)},[je]),(0,t.useEffect)(()=>{new URLSearchParams(window.location.search).get("challenge")&&(g==="INVALID"?T("invalid_challenge"):Promise.resolve().then(C.bind(C,8380)).then(({validateWordOnline:o})=>{o(g,"es").then(l=>{l.valid?(he("Challenge loaded!",3e3),vn(!0)):T("invalid_challenge")})}))},[he,g]);let ya=(0,t.useCallback)(o=>{Ee(l=>{let v={...l,gamesPlayed:l.gamesPlayed+1,gamesWon:l.gamesWon+1,currentStreak:l.currentStreak+1,maxStreak:Math.max(l.maxStreak,l.currentStreak+1),distribution:[...l.distribution]};return v.distribution[o-1]++,xa(v,i),v})},[i]),Ke=(0,t.useCallback)(()=>{Ee(o=>{let l={...o,gamesPlayed:o.gamesPlayed+1,currentStreak:0};return xa(l,i),l})},[i]),Xe=(0,t.useCallback)(o=>{if(S==="playing"&&(wa&&ba(!1),!(A>=0)&&!De)){if(o==="Enter"){if(x.length<g.length){he(B.notEnough),J(c.length),setTimeout(()=>J(-1),600);return}let l=()=>{let v=(function(N,f){let j=f.length,_=Array(j).fill("absent"),ee=f.split(""),ue=N.split(""),Ce=Array(j).fill(!1);for(let M=0;M<j;M++)ue[M]===ee[M]&&(_[M]="correct",Ce[M]=!0);for(let M=0;M<j;M++)if(_[M]!=="correct"){for(let se=0;se<j;se++)if(!Ce[se]&&ue[M]===ee[se]){_[M]="present",Ce[se]=!0;break}}return _})(x,g),z=[...c,{letters:x.split(""),states:v}];R(c.length),setTimeout(()=>{if(R(-1),Z(N=>{let f={...N};for(let j=0;j<g.length;j++){let _=x[j],ee=v[j],ue=f[_];ue&&ee!=="correct"&&(ee!=="present"||ue==="correct")||(f[_]=ee)}return f}),x===g){T("won"),q(z.length-1);let N=B.winMessages,f=i==="daily"?(0,D.getDailyWord)("es"):null;he(f?`${B.winPrefix} #${f.dayNumber} - ${B.winSuffix}`:`${B.winSuffix} ${N[Math.min(z.length-1,5)]}`,3e3),setTimeout(()=>q(-1),1500),ya(z.length),setTimeout(()=>Te(!0),2500)}else z.length>=6&&(T("lost"),he(`${B.lostPrefix}${g.toUpperCase()}`,5e3),Ke(),setTimeout(()=>Te(!0),2e3))},300*g.length+600),h(z),E("")};return(0,D.isValidWord)(x,"es")?void l():void Promise.resolve().then(C.bind(C,8380)).then(({validateWordOnline:v})=>{v(x,"es").then(z=>{z.valid?l():(he(B.notInList),J(c.length),setTimeout(()=>J(-1),600))})})}if(o==="Backspace")return void E(l=>l.slice(0,-1));if(/^[a-zA-Z]$/.test(o)){x.length<g.length&&E(l=>l+o.toLowerCase());return}}},[x,c,g,S,A,De,he,ya,Ke]);(0,t.useEffect)(()=>{let o=l=>{l.target.tagName==="INPUT"||l.target.tagName==="TEXTAREA"||me||u||y||De||Je||Ze||!l.ctrlKey&&!l.metaKey&&!l.altKey&&(l.key==="Enter"||l.key==="Backspace"||/^[a-zA-Z]$/.test(l.key))&&(l.preventDefault(),Xe(l.key))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[Xe,me,u,y,De,Je,Ze]);let Ea=(o=5)=>{k(i==="daily"?(0,D.getDailyWord)("es").word.toLowerCase():(0,D.getRandomWord)("es",o)),h([]),E(""),T("playing"),Z({}),J(-1),R(-1),q(-1),K([]),P(!1),Te(!1);let l=i==="daily"?"wordle-state-daily-es":"wordle-state-es";localStorage.removeItem(l)},ea=o=>{if(o===i&&p==="game")return;let l=i==="daily"?"wordle-state-daily-es":"wordle-state-es";localStorage.setItem(l,JSON.stringify({guesses:c,gameState:S,answer:g,keyStates:L})),localStorage.setItem("wordle-mode",o),w(o),Ee(fa(o));let v="/";if(o==="daily"){let f=(0,F.E)();v=`/palabra-del-dia/?seed=${f.getFullYear()+String(f.getMonth()+1).padStart(2,"0")+String(f.getDate()).padStart(2,"0")}`}r(v);let z=o==="daily"?"wordle-state-daily-es":"wordle-state-es",N=localStorage.getItem(z);if(N){let f=JSON.parse(N);k(f.answer),h(f.guesses),T(f.gameState),Z(f.keyStates)}else k(o==="daily"?(0,D.getDailyWord)("es").word.toLowerCase():(0,D.getRandomWord)("es")),h([]),T("playing"),Z({});E(""),Te(!1)};(0,t.useEffect)(()=>{},["es",i,p]),(0,t.useEffect)(()=>{let o=new URLSearchParams(n.search),l=o.get("challenge");if(l){let f=n.pathname;(f.endsWith("/")&&f.length>1?f.slice(0,-1):f)!=="/"&&r(`/?challenge=${l}`,{replace:!0});return}let v=n.pathname,z=v.includes("palabra-del-dia")||v.includes("wordle-today"),N=v.includes("wordle-respuesta-hoy")||v.includes("pistas-de-hoy")||v.includes("wordle-hints-today");if((z||N)&&!o.get("seed")&&!o.get("date")){let f=(0,F.E)(),j=f.getFullYear()+String(f.getMonth()+1).padStart(2,"0")+String(f.getDate()).padStart(2,"0");r(`/${N?"wordle-respuesta-hoy":"palabra-del-dia"}/?seed=${j}`,{replace:!0})}},["es",n.pathname,n.search]),(0,t.useEffect)(()=>{let o=i==="daily"?"wordle-state-daily-es":"wordle-state-es";localStorage.setItem(o,JSON.stringify({guesses:c,gameState:S,answer:g,keyStates:L}))},[c,S,g,L,i,"es"]);let aa=(0,t.useMemo)(()=>{let o=new URLSearchParams(n.search);return o.get("date")?Se(o):null},[n.search]),na=o=>{m(o);let l=(0,F.E)(),v=l.getFullYear()+String(l.getMonth()+1).padStart(2,"0")+String(l.getDate()).padStart(2,"0"),z="/";o==="hints"?z=`/wordle-respuesta-hoy/?seed=${v}`:o==="archive"?z="/archive/":i==="daily"&&(z=`/palabra-del-dia/?seed=${v}`),r(z)};return(0,t.useEffect)(()=>{},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(en,{}),(0,e.jsx)(V,{gameMode:i,currentView:p,onModeChange:ea,onViewChange:na,onFeedback:()=>Qe(!0),onHelp:()=>ye(!0),onSettings:()=>b(!0),onStats:()=>P(!0),onGiveUp:()=>{S==="playing"&&(T("lost"),Ke(),setTimeout(()=>Te(!0),500))},onChallenge:()=>Ye(!0),gameState:S,guessesCount:c.length,language:"es"}),(0,e.jsxs)("main",{style:{flex:1,marginTop:"110px",paddingTop:"10px"},children:[(0,e.jsx)("h1",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:0},children:"Wordle Espa\xF1ol - Juego de Palabras Gratis e Ilimitado Online"}),p==="hints"?(0,e.jsx)(qa,{language:"es",onBack:()=>na("game")}):p==="archive"?(0,e.jsx)(ln,{language:"es",onBack:()=>na("game")}):p==="privacy"?(0,e.jsx)(Za,{language:"es"}):p==="solver"?(0,e.jsx)(tn,{language:"es"}):p.startsWith("variants:")?(0,e.jsx)(rn,{length:p.split(":")[1],language:"es"}):p==="404"?(0,e.jsx)(Ka,{language:"es",onHome:()=>r("/")}):(0,e.jsxs)(e.Fragment,{children:[aa&&(0,e.jsxs)("div",{className:"archive-active-banner",style:{background:"rgba(99, 175, 78, 0.1)",border:"1px solid rgba(99, 175, 78, 0.3)",color:"var(--color-text-dark)",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"600",maxWidth:"560px",margin:"0 auto 12px auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px",flexWrap:"wrap"},children:[(0,e.jsxs)("span",{children:["\u{1F5D3}\uFE0F Jugando puzle del archivo: ",(0,e.jsx)("strong",{children:aa.toLocaleDateString("es-ES",{weekday:"short",day:"numeric",month:"short",year:"numeric"})})," (Wordle #",(0,F.d)(aa),")"]}),(0,e.jsx)(de(),{href:"/",style:{color:"var(--color-correct)",fontWeight:"700",textDecoration:"underline"},children:"Volver al Wordle de Hoy \u2192"})]}),va&&(0,e.jsxs)("div",{className:"challenge-banner",style:{background:"#e9ecef",color:"#495057",padding:"6px 16px",borderRadius:"20px",textAlign:"center",fontSize:"12px",fontWeight:"700",position:"fixed",top:"120px",left:"50%",transform:"translateX(-50%)",zIndex:90,display:"flex",justifyContent:"center",alignItems:"center",gap:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",border:"1px solid #dee2e6"},children:[(0,e.jsxs)("span",{children:["\u{1F3AE} Challenge Active (",g.length," letters)"]}),(0,e.jsx)("button",{onClick:()=>{let o=`${window.location.origin}/es?challenge=wu_${btoa(g.toLowerCase())}`;navigator.clipboard.writeText(o),he("Link copied!")},style:{background:"#6c757d",border:"none",color:"white",padding:"2px 10px",borderRadius:"12px",fontSize:"10px",fontWeight:"800",cursor:"pointer",textTransform:"uppercase"},children:"Copy"})]}),(0,e.jsx)("div",{className:"es-spelling-callout",style:{background:"#f8f9fa",color:"#495057",padding:"10px 16px",borderRadius:"8px",textAlign:"center",fontSize:"14px",fontWeight:"600",maxWidth:"500px",margin:"0 auto 16px auto",border:"1px solid #dee2e6"},children:"\u{1F1EA}\u{1F1F8} Diccionario en Espa\xF1ol \u2014 \xA1Palabras en espa\xF1ol aceptadas!"}),(0,e.jsxs)("div",{className:"game",id:"game",style:{marginTop:va?"60px":"0"},children:[(0,e.jsxs)("div",{className:"game__board-wrapper",style:{position:"relative"},children:[wa&&c.length===0&&(0,e.jsx)("div",{className:"start-prompt",onClick:()=>ba(!1),style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:50,background:"white",padding:"20px 40px",borderRadius:"12px",boxShadow:"0 8px 30px rgba(0,0,0,0.15)",whiteSpace:"nowrap",cursor:"pointer",animation:"pulse 2s infinite"},children:(0,e.jsx)("h2",{style:{color:"#1a1a1b",margin:0,fontSize:"1.5rem",fontWeight:"800"},children:B.guessFirst})}),De&&(0,e.jsxs)("div",{className:"game__preview start-preview",children:[(0,e.jsx)("h3",{className:"game__title",children:B.wordleGame}),(0,e.jsx)("p",{className:"game__desc",children:B.wordleDesc}),(0,e.jsx)("button",{className:"game__btn js-start-preview",onClick:()=>{xn(!1),localStorage.setItem("wordle-preview-seen","true")},children:B.play}),(0,e.jsx)("span",{className:"game__help",children:B.playHelp})]}),(0,e.jsx)(fe,{guesses:c,currentGuess:x,currentRow:c.length,shakeRow:Ne,flipRow:A,bounceRow:I,wordLength:g.length})]}),S==="invalid_challenge"&&(0,e.jsxs)("div",{className:"invalid-challenge-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",zIndex:2e3,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",textAlign:"center",color:"white"},children:[(0,e.jsx)("h1",{style:{fontSize:"4rem",marginBottom:"10px"},children:B.invalidTitle}),(0,e.jsx)("h2",{style:{fontSize:"1.5rem",marginBottom:"20px"},children:B.invalidSubtitle}),(0,e.jsx)("p",{style:{marginBottom:"30px",opacity:.8},children:B.invalidDesc}),(0,e.jsx)("button",{className:"new-game-btn",onClick:()=>{k((0,D.getRandomWord)("es")),T("playing")},children:B.playStandard})]}),i==="daily"&&S!=="playing"?(0,e.jsxs)("div",{style:{margin:"20px auto",padding:"24px",background:"#f8f9fa",borderRadius:"16px",maxWidth:"400px",width:"90%",textAlign:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",border:"1px solid #e9ecef"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"1.25rem",fontWeight:"800",color:"#1a1a1b"},children:B.dailyFinished}),(0,e.jsxs)("p",{style:{margin:"0 0 20px 0",fontSize:"1rem",color:"#6c757d",fontWeight:"500"},children:[B.nextWord," ",(0,e.jsx)("span",{style:{fontFamily:"monospace",fontWeight:"800",color:"#1a1a1b"},children:bn})]}),(0,e.jsx)("button",{onClick:()=>ea("unlimited"),style:{background:"#6aaa64",color:"white",border:"none",padding:"14px 28px",borderRadius:"12px",fontSize:"1.1rem",fontWeight:"800",cursor:"pointer",width:"100%",boxShadow:"0 4px 0 #53844e"},children:B.tryUnlimited})]}):(0,e.jsx)(re,{onKey:Xe,keyStates:L})]}),(0,e.jsxs)("div",{className:"content-sections",children:[(0,e.jsx)(Wa,{language:"es",mode:i}),i!=="daily"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(He,{language:"es"}),(0,e.jsx)(Le,{language:"es"}),(0,e.jsx)(Oa,{language:"es"}),(0,e.jsx)(ka,{language:"es"})]}),(0,e.jsx)(Ha,{language:"es"}),(0,e.jsx)(Da,{language:"es"})]})]})]}),(0,e.jsx)(La,{language:"es"}),(0,e.jsx)("div",{className:"toast-container",id:"toast-container",children:pe.map(o=>(0,e.jsx)("div",{className:`toast${o.fading?" fade-out":""}`,children:o.message},o.id))}),(0,e.jsx)(le,{isOpen:me,onClose:()=>ye(!1),children:(0,e.jsx)($,{onClose:()=>ye(!1),language:"es"})}),(0,e.jsx)(le,{isOpen:u,onClose:()=>b(!1),children:(0,e.jsx)(ae,{onClose:()=>b(!1),darkMode:je,onDarkMode:()=>ne(o=>!o),hardMode:dn,onHardMode:()=>pn(o=>!o),colorBlind:mn,onColorBlind:()=>hn(o=>!o),confetti:un,onConfetti:()=>gn(o=>!o),language:"es"})}),(0,e.jsx)(le,{isOpen:y,onClose:()=>P(!1),children:(0,e.jsx)(ce,{stats:W,onNewGame:Ea,gameState:S,onClose:()=>P(!1),language:"es"})}),(0,e.jsx)(le,{isOpen:Je,onClose:()=>Ye(!1),children:(0,e.jsx)(be,{onClose:()=>Ye(!1),language:"es"})}),(0,e.jsx)(le,{isOpen:fn,onClose:()=>Qe(!1),children:(0,e.jsx)(Xa,{language:"es",onClose:()=>Qe(!1)})}),(0,e.jsx)(le,{isOpen:Ze,onClose:()=>Te(!1),children:(0,e.jsx)(We,{isWin:S==="won",answer:g,onNewGame:()=>Ea(g.length),onClose:()=>Te(!1),language:"es",gameMode:i,onSwitchMode:ea})}),(0,e.jsx)("style",{children:`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `})]})}},8380:(ie,te,C)=>{"use strict";C.r(te),C.d(te,{TARGET_WORDS:()=>Ue,VALID_WORDS:()=>ve,getAllWords:()=>H,getDailyWord:()=>Q,getRandomWord:()=>Be,isValidWord:()=>qe,validateWordOnline:()=>we});var e=C(9489),t=C(8580);function Q($="es",ae=(0,t.E)()){return(0,e.ot)(ae)}function H($="es"){return e.t9}let V=["able","acid","also","area","army","away","baby","back","ball","band","bank","base","bath","bear","beat","been","beer","bell","belt","best","bill","bird","blow","blue","boat","body","bomb","bond","bone","book","boom","born","boss","both","bowl","bulk","burn","bush","busy","cake","call","calm","came","camp","card","care","case","cash","cast","cell","chat","chip","city","club","coal","coat","code","cold","come","cook","cool","copy","core","cost","crew","crop","dark","data","date","dawn","days","dead","deal","dean","dear","debt","deep","deny","desk","dial","diet","disc","dish","does","done","door","dose","down","draw","drew","drop","drug","drum","dual","duke","dust","duty","each","earn","ease","east","easy","edge","else","even","ever","exam","exit","face","fact","fail","fair","fall","farm","fast","fate","fear","feed","feel","feet","fell","felt","file","fill","film","find","fine","fire","firm","fish","five","flat","flow","food","foot","ford","form","fort","four","free","from","fuel","full","fund","gain","game","gate","gave","gear","gene","gift","girl","give","glad","goal","gold","gone","good","gray","grew","grey","grow","gulf","hair","half","hall","hand","hang","hard","harm","hate","have","head","hear","heat","held","hell","help","here","hero","high","hill","hire","hold","hole","holy","home","hope","host","hour","huge","hung","hunt","hurt","idea","inch","into","iron","item","jack","jane","jean","john","join","jump","jury","just","keen","keep","kent","kept","kick","kill","kind","king","knee","knew","know","lack","lady","laid","lake","land","lane","last","late","lead","left","less","life","lift","like","line","link","list","live","load","loan","lock","logo","long","look","lord","lose","loss","lost","love","luck","made","mail","main","make","male","many","mark","mass","matt","meal","mean","meat","meet","menu","mere","mike","mild","milk","mill","mind","mine","miss","mode","mood","moon","more","most","move","much","must","name","navy","near","neck","need","news","next","nice","nick","nine","none","nose","note","okay","once","only","onto","open","oral","over","pace","pack","page","paid","pain","pair","palm","park","part","pass","past","path","peak","pick","pile","pink","pipe","plan","play","plot","plug","plus","poll","pool","poor","port","post","pull","pure","push","race","rail","rain","rank","rare","rate","read","real","rear","rely","rent","rest","rice","rich","ride","ring","rise","risk","road","rock","role","roll","roof","room","root","rose","rule","rush","ruth","safe","said","sake","sale","salt","same","sand","save","seat","seed","seek","seem","seen","self","sell","send","sent","sept","ship","shop","shot","show","shut","sick","side","sign","site","size","skin","slip","slow","snow","soft","soil","sold","sole","some","song","soon","sort","soul","soup","spot","star","stay","step","stop","such","suit","sure","take","tale","talk","tall","tank","tape","task","team","tech","tell","tend","term","test","than","that","them","then","they","thin","this","thus","till","time","tiny","told","toll","tone","tony","took","tool","tour","town","tree","trip","true","tune","turn","twin","type","unit","upon","used","user","vary","very","vice","view","vote","wage","wait","wake","walk","wall","want","ward","warm","wash","wave","ways","weak","wear","week","well","went","were","west","what","when","whom","wide","wife","wild","will","wind","wine","wing","wire","wise","wish","with","wood","word","wore","work","yard","yeah","year","your","zero","zone"],X=["abroad","accept","access","across","acting","action","active","actual","advice","advise","affect","afford","afraid","agency","agenda","almost","always","amount","animal","annual","answer","anyone","anyway","appeal","appear","around","arrive","artist","aspect","assess","assist","assume","attack","attend","august","author","avenue","backed","barely","battle","beauty","became","become","before","behalf","behind","belief","belong","berlin","better","beyond","bishop","border","bottle","bottom","bought","branch","breath","bridge","bright","broken","budget","burden","bureau","button","camera","campus","cancel","cannot","carbon","career","castle","casual","caught","center","centre","chance","change","charge","choice","choose","chosen","church","circle","client","clinic","closed","closer","coffee","column","combat","comedy","coming","common","comply","copper","corner","costly","county","couple","course","covers","create","credit","crisis","custom","damage","danger","dealer","debate","decade","decide","defeat","defend","define","degree","demand","depend","deputy","desert","design","desire","detail","detect","device","differ","dinner","direct","doctor","dollar","domain","double","driven","driver","during","easily","eating","editor","effect","effort","eighth","either","eleven","emerge","empire","employ","enable","ending","energy","engage","engine","enough","ensure","entire","entity","equity","escape","estate","ethnic","europe","events","except","excess","expand","expect","expert","export","extend","extent","fabric","facing","factor","failed","fairly","fallen","family","famous","father","fellow","female","figure","filler","filing","finger","finish","fiscal","flight","flying","follow","forced","forest","forget","formal","format","former","foster","fought","fourth","french","friend","future","garden","gather","gender","german","global","golden","google","govern","grabbed","grades","groups","growth","guilty","guitar","handle","happen","hardly","health","height","hidden","holder","honest","impact","import","income","indeed","injury","inside","intent","invest","island","itself","jersey","joseph","junior","killed","labour","latest","latter","launch","lawyer","leader","league","leaves","legacy","length","lesson","letter","lights","likely","linked","liquid","listen","little","living","locate","london","lovely","luxury","mainly","making","manage","manner","manual","margin","marine","market","matter","mature","medium","member","memory","mental","merely","merger","method","middle","miller","mining","minute","mirror","mobile","modern","modify","module","moment","monday","monkey","months","mostly","mother","motion","moving","murder","museum","muscle","music","mutual","myself","narrow","nation","native","nature","nearby","nearly","nights","nobody","normal","notice","notion","number","object","obtain","office","offset","online","option","orange","orders","origin","output","oxford","packed","palace","parent","partly","patent","people","period","permit","person","phrase","picked","planet","player","please","plenty","pocket","police","policy","portal","posted","poster","prefix","pretty","prices","priest","prison","profit","prompt","proper","proven","public","pursue","raised","random","rarely","rather","rating","reader","really","reason","recall","recent","record","reduce","reform","regard","regime","region","relate","relief","remain","remote","remove","repair","repeat","replay","report","rescue","resort","result","retail","retain","return","reveal","review","reward","rhythm","rising","ritual","robust","rocket","rolled","roughy","routes","rubber","rugged","ruling","safety","salary","sample","saving","scared","scheme","school","screen","script","search","season","second","sector","secure","seeing","select","seller","senior","series","server","settle","severe","sexual","shadow","shaken","shared","sharply","sheets","shelve","shorts","should","showed","shrink","sights","signal","signed","silent","silver","simple","simply","single","sister","slight","smooth","social","solely","sought","source","soviet","speech","spirit","spoken","spread","spring","square","stable","stages","stance","static","status","steady","stolen","strain","stream","street","stress","strict","strike","string","strong","struck","studio","submit","sudden","suffer","summer","summit","sunset","supply","surely","survey","switch","symbol","system","tables","tackle","talent","target","taught","tenant","tender","tennis","thanks","theory","thirty","though","threat","thrown","ticket","timely","timing","titles","topics","toward","towns","trader","travel","treaty","trends","triple","trusts","trying","tunnel","twelve","twenty","unable","unique","united","unless","unlike","update","useful","valley","varied","vendor","versus","victim","vision","visual","voices","volume","walker","wanted","wealth","weekly","weight","wholly","window","winner","winter","within","wonder","worker","wright","writer","yellow","yields","younger"],fe=["ability","absence","academy","account","accused","achieve","acquire","address","advance","adverse","advised","adviser","against","airline","airport","alcohol","alleged","already","analyst","ancient","another","anxiety","anybody","applied","arrange","arrival","article","assault","assumed","assured","attempt","attract","auction","average","backing","balance","banking","barrier","battery","bearing","beating","because","bedroom","believe","beneath","benefit","besides","between","billion","binding","biology","blanket","blocked","booking","borrow","bracket","brother","brought","burning","cabinet","calling","capable","capital","captain","caption","capture","careful","carrier","caution","ceiling","central","certain","chamber","channel","chapter","charity","charlie","charter","checked","chicken","circuit","classes","classic","climate","closing","closure","clothes","collect","college","combine","comfort","command","comment","compact","company","compare","compete","complex","concept","concern","concert","conduct","confirm","connect","consent","consist","contact","contain","content","contest","context","control","convert","correct","council","counsel","counter","country","crucial","crystal","culture","current","cutting","database","dealing","decided","decline","default","defence","deficit","deliver","density","deposit","desktop","despite","destroy","details","develop","devised","diamond","digital","discuss","disease","display","dispute","distant","diverse","divided","drawing","driving","dynamic","economy","edition","effects","efforts","element","engaged","english","enhance","enjoyed","enquiry","entered","entitle","episode","equally","evening","exactly","examine","example","excited","exclude","exhibit","expense","explain","explore","express","extreme","factory","faculty","failing","failure","fashion","feature","federal","feeling","fiction","fifteen","filling","finance","finding","fishing","fitness","foreign","forever","formula","fortune","forward","founder","freedom","further","gallery","gateway","general","genetic","genuine","getting","granted","greater","greatly","growing","guiding","habitat","handing","heading","healthy","hearing","heavily","helpful","helping","history","holding","holiday","housing","however","hundred","husband","illegal","illness","imagine","imaging","impacts","improve","include","initial","inquiry","insight","install","instant","instead","intense","interim","invalid","inverse","invests","islands","itunes","january","journal","journey","justice","keeping","kitchen","knowing","labeled","landing","largely","lasting","leading","learned","leisure","letters","liberal","library","license","limited","listing","logical","loyalty","machine","managed","manager","mapping","margins","married","massive","masters","maximum","meaning","measure","medical","meeting","members","mention","message","methods","million","mineral","minimal","minimum","missing","mission","mistake","mixture","monitor","monthly","morning","musical","mystery","natural","neither","nervous","network","neutral","nothing","nowhere","nuclear","numbers","objects","obvious","offered","officer","ongoing","opening","operate","opinion","optical","options","organic","outcome","outdoor","outline","outside","overall","pacific","package","painted","parking","partial","partner","passage","passing","passion","passive","patient","pattern","payable","payment","penalty","pending","pension","perfect","perform","perhaps","phoenix","physics","picture","pioneer","plastic","players","playing","pleased","popular","portion","poverty","precise","predict","premier","prepare","present","prevent","pricing","primary","printer","privacy","private","problem","proceed","process","produce","product","profile","program","project","promise","promote","protect","protein","protest","provide","publish","purpose","pushing","quality","quarter","radical","railway","readily","reading","reality","realize","receipt","receive","recipes","records","reduced","reflect","regards","regular","related","release","remains","removal","removed","replace","reports","request","require","reserve","resolve","respect","respond","results","revenue","reverse","routine","running","satisfy","savings","science","section","sectors","secured","seeking","segment","selling","sending","serious","service","session","setting","seventh","several","shaping","sharply","shelter","shifted","shining","shipped","shipping","shorter","showing","signals","similar","sitting","sixteen","skilled","smoking","society","soldier","sources","speaker","special","species","specify","spending","spiller","sponsor","station","statute","staying","storage","strange","streams","streets","stretch","student","studies","subject","succeed","success","suggest","summary","support","suppose","supreme","surplus","survive","suspect","sustain","teacher","telling","tension","terrain","testing","theatre","therapy","thereby","thought","through","tickets","tonight","totally","towards","tourism","tourist","trading","traffic","trained","trainer","transit","treated","trouble","turning","typical","unaware","uniform","unknown","unusual","upgrade","upscale","utility","vaguely","valuable","variety","various","vehicle","venture","version","veteran","victory","viewing","village","virtual","visible","waiting","walking","wanting","warning","washing","watched","weather","wedding","weekend","welcome","welfare","western","whereas","whether","willing","windows","winning","without","witness","working","writing","written"],Ae=["absolute","academic","accepted","accident","accuracy","accurate","achieved","acquired","activity","actually","addition","adequate","adjacent","adjusted","advanced","advisory","advocate","affected","aircraft","alliance","allocate","although","analysis","announce","anything","anywhere","apparent","appendix","approach","approval","approved","archives","argument","arranged","arrested","articles","artistic","assembly","assessed","assigned","assisted","assuring","atlantic","attached","attitude","attorney","audience","authority","autonomy","aviation","backdoor","balanced","balloons","bankrupt","baseball","baseline","behavior","benefits","beverage","birthday","boundary","breaking","briefing","building","calendar","campaign","capacity","captured","carefully","carrying","category","cautious","cellular","centered","champion","changing","channels","chapters","charging","charitable","chemical","children","circular","citation","civilian","cleaning","clinical","clothing","cocktail","collapse","colonial","columbia","combined","comprise","computer","conclude","concrete","conflict","confront","congress","consider","constant","consumer","continue","contract","contrary","contrive","controls","conveyed","convince","corporal","corridor","costumes","couldest","counties","counting","coupling","coverage","creative","creature","criminal","critical","crossing","cultural","currency","customer","database","daughter","daylight","deadline","deciding","decision","declared","decrease","deferred","definite","delicate","delivery","demanded","departed","describe","deserved","designer","detailed","detected","detector","dialogue","diameter","directly","director","disabled","disaster","disclose","discount","discover","disorder","disposal","distance","distinct","district","dividend","division","doctrine","document","domestic","dominant","donation","download","dramatic","drinking","duration","dynamics","earnings","economic","educated","efficacy","eighteen","election","electric","elements","eligible","emerging","emphasis","employed","employee","employer","enabling","encoding","enduring","energies","engineer","enormous","entirely","entities","entrance","envelope","equality","equation","equipped","estimate","everyone","evidence","evolving","examined","examples","exchange","excluded","exciting","exercise","existing","expanded","expected","expended","expenses","explicit","exposure","extended","external","facility","families","favorite","features","february","feedback","feelings","festival","fighters","fighting","finished","firearms","flexible","floating","football","forecast","foremost","formerly","formulas","fraction","fragment","frequent","friendly","frontier","function","generate","generous","genetics","graduate","graphics","grateful","guardian","guidance","handling","hardware","heritage","historic","homepage","hospital","identity","ideology","ignorant","impacted","implicit","imported","improved","incident","included","indirect","infinite","informal","informed","inherent","initiate","innocent","inspired","instance","integral","intended","interact","interest","interior","internal","interval","intimate","involved","isolated","judgment","judicial","junction","keyboard","language","latitude","launched","learning","leverage","lifelong","lifetime","lighting","likewise","limiting","literacy","location","magnetic","mainland","maintain","majority","managing","marginal","marriage","material","maturity","measures","medicine","meetings","memorial","merchant","messages","military","minimize","minority","moderate","momentum","monetary","mountain","mounting","movement","multiple","national","negative","networks","normally","northern","notebook","notified","notional","november","numerous","objected","observed","obstacle","obtained","occupied","occurred","official","offshore","operator","opinions","opposite","optimism","optional","ordinary","organize","original","outcomes","outreach","overcome","overhead","overview","packages","parallel","parental","parliament","partners","patients","patterns","periodic","personal","persuade","petition","physical","pipeline","platform","pleasant","pleasure","politics","portable","portrait","position","positive","possible","possibly","postpaid","powerful","practice","precisely","preclude","predicts","presence","presents","preserve","prestige","prevents","previous","priority","probably","problems","proceeds","produced","producer","products","profiles","programs","progress","projects","promised","promoted","properly","property","proposal","proposed","protocol","provided","provider","province","publicly","purchase","purposes","pursuant","quantity","question","rational","reaction","readable","realized","receiver","recovery","regional","register","relation","relative","relevant","reliable","reliance","religion","remember","rendered","repeated","reported","republic","required","research","reserved","resident","resource","response","restored","retained","returned","revealed","revision","rhetoric","romantic","routines","sampling","scarcely","scenario","schedule","sciences","scotland","scrutiny","seasonal","secondly","sections","security","segments","selected","selector","sentence","separate","sequence","services","sessions","settings","shipping","shouting","shoulder","sideways","signaled","silently","simplify","situated","slightly","software","solution","somebody","somewhat","southern","speakers","specific","spectrum","spending","standard","standing","starting","statical","stations","statutes","steering","strategy","strength","striking","strongly","struggle","students","subjects","suburban","suitable","superior","supplied","supplier","supposed","surgical","survival","survivor","symbolic","sympathy","symptoms","syndrome","tactical","tailored","tangible","teachers","teaching","tempting","tendency","terminal","terrible","thinking","thorough","thousand","together","tomorrow","township","tracking","training","transfer","traveled","treasury","triangle","tropical","turnover","ultimate","umbrella","universe","unlikely","upcoming","updating","upgraded","variable","variance","variants","vehicles","velocity","vertical","victoria","violence","virtually","visiting","volatile","warnings","warranted","weakness","weighted","whatever","whenever","wherever","wildlife","withdrew","workshop","worldest","writings","yieldest"],re=["abilities","abandoned","academic","accessing","accessory","accidents","according","accounted","acquiring","addresses","adjoining","adjusting","admission","advantage","adventure","adversary","advocated","aesthetic","affection","affiliate","afternoon","aggregate","agreement","algorithm","alignment","allegedly","allocated","allowance","alternate","amplitude","analystic","ancestors","anonymous","answering","apartheid","apparatus","appealing","appearing","appellate","applicant","appointed","appraisal","arbitrary","architect","arguments","ascending","ascertain","aspectual","assembles","assertion","assistant","associate","assurance","astronomy","athletics","attendant","attention","attribute","audiences","authentic","authority","automated","automatic","available","awareness","backwards","ballistic","bandwidth","beautiful","beginning","behaviors","benchmark","benefited","biography","blueprint","bombarded","bookmarks","borrowing","bottleneck","broadcast","budgetary","buildings","butterfly","calculate","candidate","canonical","callbacks","capillary","captivate","carbonate","catalogue","cathedral","celebrate","celebrity","centering","certainly","challenge","character","chemistry","childhood","chocolate","christian","chronicle","cigarette","classical","classmate","clearance","clergyman","clipboard","clockwise","coalition","cognition","coherence","coincides","collapsed","collector","collision","colloidal","combating","commander","commented","commodity","companion","comparity","compassed","compelled","compiling","complaint","completed","compliant","component","composite","compounds","comprised","concerned","concluded","condition","conducted","conductor","confident","configure","confirmed","connected","consensus","consisted","consistent","consonant","construct","consulted","contained","container","contended","continual","continued","contracts","contrived","converted","conveying","convinced","corporate","correlate","corrosion","councilor","countries","criterion","criticism","customize","databases","daughters","deadlines","decisions","declaring","dedicated","defective","defending","deficient","delivered","democracy","dependent","depicting","deposited","described","deserving","designate","designing","desirable","detection","detective","determine","developed","diagnosis","differing","different","difficult","diffusion","digestive","dimension","directing","direction","directive","directory","disappear","disasters","discharge","disclosed","discounts","discovery","discussed","dismissed","displayed","distorted","districts","diversity","dividends","documents","dominance","donations","duplicate","durations","dynamical","economics","editorial","education","effective","efficient","elaborate","elections","electrical","electrons","elementary","elevation","eliminate","elsewhere","emergency","emotional","empirical","employees","employing","encounter","encourage","energetic","enforcing","engineers","enlarging","enlighten","enormous","enshrined","enterprise","entertain","equations","equilibra","equipment","equivocal","essential","establish","estimates","eternally","ethicsal","everybody","evolution","excellent","exception","excessive","exchanged","exclusion","exclusive","execution","executive","exercised","exhausted","exhibited","existence","expansion","expecting","expedited","expensive","expertise","explained","exploding","exploring","explosive","expressed","extension","extensive","extremity","fabricate","factoring","faculties","faithfully","fashioned","favorites","favorable","featuring","financial","finishing","fixations","flavoring","flexibles","flowering","following","foreigner","forgotten","formation","formulate","fortunate","frameworks","franchise","frequency","frequents","functions","furnished","furniture","gathering","generated","generated","generator","geometric","gladiators","graduated","graduates","grandkids","graphical","gravitate","grayscale","grievance","grounding","guarantee","guardians","guideline","hairdressy","headlines","healthier","heightens","heuristic","highlight","histogram","historian","hollywood","household","humanists","identical","ideologies","immediate","impliedly","important","impressed","improving","incidents","including","increased","increment","indicated","indicator","indonesia","induction","inflation","influence","informant","inherited","initially","initiated","injecting","injection","innerwear","innocence","insertion","inspector","instances","instantly","insurance","integrity","intellect","intensity","intensive","interface","interiors","intervals","interview","intrinsic","introduce","inventory","investing","investors","involving","irregular","isolation","iteration","itinerant","jerusalem","judgement","justified","knowledge","landscape","languages","librarian","lifestyle","lightness","listeners","literally","litigants","localhost","locations","logarithm","longitude","magnitude","maintains","mammalian","mandatory","manifested","manifolds","marketing","materials","mathematics","maximized","mechanism","memorable","mentality","mentioned","merchants","messenger","metabolic","milestone","migration","minimized","minimizer","moderated","molecular","mountains","movements","multiples","municipal","narrative","narrowing","necessary","neglected","neighbors","nightlife","northeast","northwest","notations","notebooks","nullified","nutrition","objective","obscurity","observing","obstacles","occurring","offenders","officials","operation","operators","organized","organisms","originals","otherwise","ourselves","outcomes","outlining","paragraph","parallels","parameter","partition","passenger","pathology","patience","patriotic","peculiar","penalties","perfectly","performed","periodity","perishing","permanent","permitted","personnel","pervasive","pipelines","placement","planetary","platforms","pleasures","portfolio","positions","potential","practical","precisely","precision","preceding","precluded","predicted","preferred","pregnancy","prejudice","premature","preparing","prescribed","presented","preserved","president","pressured","primarily","primitive","principal","principle","priorities","prisoners","privately","privilege","procedure","proceeded","processes","processed","processor","producing","producers","programme","progressed","prominent","promotion","prototype","providers","providing","proximity","published","publisher","punishing","purchased","qualified","qualities","questions","quotation","radiation","radiology","raspberry","reactions","realistic","rebellion","receivers","reception","recipient","recognize","recording","rectangle","recycling","reduction","referring","reflecting","reforming","regarding","registers","relations","religious","remaining","remembers","removals","rendering","replacing","reporters","requested","requiring","residuals","resolving","resonance","resources","responded","responses","restoring","retailing","retention","returning","revelance","revisions","rhetority","scenarios","scheduled","scheduler","selection","selective","semantics","sensitive","sentences","separated","sequences","severely","shattered","shouldest","signature","similarly","simulated","situating","skeptical","smartness","solutions","sometimes","southeast","southwest","sovereign","specialty","stability","standards","startling","statement","statistic","statusing","statutory","strategic","streaming","stretched","structure","substance","substrate","suburbans","succeeded","successor","suffering","suggested","summaries","suppliers","supported","surprised","surrender","survivors","suspicion","symbolism","symmetry","symposium","syndicate","synthetic","technical","technique","temporary","territory","testified","testimony","therefore","thickness","threshold","timetable","tolerated","toughness","tradition","trafficking","trainings","transfers","transform","transient","transport","traversed","treasurer","treatment","triangles","triggered","triumphant","turkeyest","turnovers","typically","ultimately","uncertain","uncovered","underline","undermine","universal","unlimited","upgrading","utilities","vacations","variables","variation","varieties","vegetable","vehicles","versatile","vibration","victories","virtually","vocalists","voluntary","warehouse","whereabouts","whichever","whispered","wholesale","wonderful","workplace","worldwide","yesterday"],D=["absolutely","accessible","accordance","accounting","accurately","activities","additional","adequately","adjustment","admissions","advantages","adventures","advertising","affiliated","afterwards","aggression","agreements","algorithms","alignments","allegiance","allocation","allowances","alternates","altogether","ambassador","analogical","analytical","animations","annotation","appearance","applicants","applicable","appointing","appreciate","approaches","arithmetic","artificial","assessment","assignment","assistance","associated","associates","assumption","atmosphere","attachment","attendance","attendants","attraction","attributes","auditorium","authorized","background","ballistics","basketball","battalion","benefiting","biological","blackboard","boundaries","brightness","calculated","candidates","capability","capacities","capitalist","categories","challenges","characters","charitable","chlorinity","cigarettes","classified","classrooms","clinicians","collection","collective","collectors","collisions","colloquium","combustion","comfortable","commanding","commercial","commission","commitment","commodities","comparison","compatible","compelling","competence","competency","completion","compliance","components","composites","comprising","compromise","compulsion","computable","conceivest","conception","concerning","concession","conclusion","conditions","conductors","conference","confidence","configured","confirming","conformity","congestion","connection","conscience","consequent","consisting","consistent","constitute","constraint","containers","contention","continuous","contribute","controlled","controller","convention","conversion","conviction","coordinate","corporates","correcting","correction","correlated","corruption","councilsal","counselors","counteract","creativity","critically","curriculum","customized","deadliness","debilitate","decoration","dedication","deficiency","definitions","deliberate","delivering","deliveries","democracies","dependence","dependency","depression","descending","descriptor","designated","detachment","determined","developing","dimensions","directions","directives","discipline","disclosure","discovered","discretion","discussion","disorderly","dispersion","disruption","dissipated","distancing","distinctly","distortion","distributed","distribute","disturbing","divergence","duplicates","efficiency","electrical","electronic","elementary","elevations","eliminated","emanating","emergences","employment","encounters","encouraged","enduringly","energetics","engineered","enormously","enterprise","enthusiasm","enumerated","equivalent","especially","essentials","estimating","evaluating","evaluation","everything","everywhere","excellence","exceptions","exclusions","executions","executives","exhibiting","exhibition","existences","expediting","experience","experiment","expiration","expression","extensions","extraction","facilities","faithfully","frequently","functional","generating","generation","generators","geographic","government","graduation","guarantees","guidelines","headlights","helicopter","highlights","historical","horizontal","households","hypotheses","hypothesis","identities","identified","illustrate","importance","impressive","increasing","increments","incubation","indicators","indigenous","individual","industrial","inequality","inevitable","infliction","influences","informally","ingredient","inhibiting","initiation","injections","innovation","innovative","inspectors","instrument","integrated","integrator","intellects","intensives","interfaces","interfered","interferon","investment","invitation","ironically","iterations","journalism","journalist","judgments","laboratory","landscapes","leadership","legitimacy","literature","logistical","maintainer","management","manuscript","mechanisms","memorandum","membership","metabolism","metaphoric","methodical","microscope","middleware","milestones","monitoring","motivation","narratives","negligible","neighborly","newspapers","nominating","objectives","obligation","occurrence","operations","opportunities","opposition","optimizing","originally","paragraphs","parameters","partitions","passengers","patienceest","percentage","perception","perfective","performing","peripheral","permission","persistent","personally","phenomenon","philosophy","physically","physicians","placements","playwright","population","portfolios","possession","potentials","practicing","precaution","precedence","precisely","prediction","preference","prejudiced","presidency","presidents","prevalence","preventing","prevention","previously","principals","principles","privileged","privileges","procedures","processing","processors","production","productive","profession","programing","progressed","projection","prominent","properties","proportion","provisions","psychology","publishing","punishment","quantities","quantizing","recovering","rectangular","reductions","referenced","references","reflection","reflective","regardless","registered","regulators","regulatory","reinstated","rejections","relatively","relaxation","relentless","remarkable","renditions","repertoire","repetition","repetitive","reproduced","reputation","resistance","resolution","resolutive","responsive","restraints","retirement","retrieving","revealings","revolution","sacredness","saturation","scientific","scheduling","screenplay","secretaria","selections","separating","separation","separative","sequencesal","signatures","similarity","simplicity","simulated","situations","skyscrapers","smartphone","solidarity","specialist","speciality","specialize","statistics","stationary","structural","structured","structures","subsequent","subsidiary","substitute","substrates","succession","successive","successors","suggestion","summarized","superposed","supporting","supportive","supposedly","suppressor","surprising","survivals","suspension","suspecting","systematic","tallestest","techniques","technology","television","themselves","throughout","timeliness","tolerances","tournament","traditions","transcript","transforms","transition","translated","translator","transverse","treatments","tremendous","ultimately","underlying","understand","university","upgradable","variations","vegetables","vibrations","vocabulary","wavelength","workplaces","worthwhile"],ze=["abandonment","accelerated","accessories","accommodate","accompanied","accomplish","accordance","accountable","achievement","acquisition","adaptations","additionally","adjustments","advertising","agriculture","alternative","ambiguities","anniversary","annotations","application","appointment","appropriate","approximate","arrangement","association","assumptions","attachments","attainment","attendanceest","attractions","backgrounds","benchmarked","beneficiary","calculation","calibration","capabilities","celebration","certificate","challenging","christopher","circulated","circulation","civilization","classifying","collections","combination","comfortable","comparative","competition","competitive","complacency","composition","compression","compromised","computation","concentrate","conclusions","conditional","conditioned","conferences","confidential","configuring","conjunction","connections","consecutive","consequence","constraints","constructed","consumption","contemplate","continental","contingency","continuance","continuous","contracting","contributor","controllers","conventions","convergence","coordinates","correlation","corresponds","credibility","definitions","delegation","deliverance","departments","description","descriptors","destination","destruction","development","differences","differently","dimensional","directories","discovering","discussions","discussions","displaced","distinction","distinguish","distributed","distribution","disturbances","documentary","educational","effectively","efficiencies","electronics","eliminating","encountered","engineering","enhancement","enlightened","environment","equilibrium","equivalents","established","evaluations","everywhereal","examination","exceptional","exhibitions","expectation","experiences","experiments","explanation","exploration","expressions","extensively","fabrication","facilities","familiarity","fascinating","feasibility","fluctuation","foundations","frequencies","functionary","generations","geographical","governments","grandfather","grandmother","headquarters","hospitality","identifying","ideological","illustrations","imagination","immediately","immigration","implication","improvement","incremental","independent","indications","individuals","information","inheritance","initiatives","innovation","innovations","installment","institution","instruction","instruments","integration","intelligent","interaction","interactive","interesting","interference","interrupted","introducing","inventories","investments","invitations","itineraries","legislation","legislative","limitation","maintaining","maintenance","malfunction","managemental","manufacture","marketplace","mathematics","measurement","metaphorical","microscopic","millennials","minimizing","necessarily","negotiating","negotiation","observation","operational","opportunity","originality","partnership","performance","permissions","perspective","photography","possibility","potentially","precautions","preferences","preliminary","preparation","probability","procedural","productions","projections","proprietary","publication","qualitative","quantifying","realization","recognition","recommended","regulations","reliability","remediation","replacement","replication","represented","requirement","reservation","residential","respiration","restaurants","restoration","restriction","retribution","scholarship","sensitivity","significant","simulations","situational","solidarityal","specialists","spreadsheet","statistical","strengthened","structuring","substantial","substituted","substitutes","suggestions","supervision","sustainable","technologies","temperature","theoretical","traditional","translation","transparent","triangulate","ultraviolet","uncertainty","underlining","undermining","understander","universally","unspecified","variability","wavelengths"],ve=[...V,"about","above","abuse","acted","acute","admit","adopt","agent","agree","ahead","alarm","album","alien","align","alike","alive","allow","alone","along","alter","among","angel","anger","angle","angry","ankle","apart","apple","apply","arena","argue","arise","aside","asset","avoid","awake","award","aware","badly","baker","basic","basis","beach","began","begin","being","belly","below","bench","berry","birth","black","blade","blame","bland","blank","blast","blaze","bleed","blend","bless","blind","block","blood","bloom","blown","board","bonus","booth","bound","brain","brand","brave","bread","break","breed","brick","bride","brief","bring","broad","broke","brown","brush","buddy","build","built","bunch","burst","buyer","cabin","cable","camel","candy","cargo","carry","catch","cause","cease","chain","chair","chaos","charm","chart","chase","cheap","check","cheek","cheer","chess","chest","chief","child","china","chunk","civic","civil","claim","clash","class","clean","clear","clerk","click","cliff","climb","cling","clock","clone","close","cloth","cloud","coach","coast","color","comet","comic","coral","count","court","cover","crack","craft","crane","crash","crazy","cream","creek","creep","crime","crisp","cross","crowd","crown","crude","crush","curve","cycle","daily","dance","death","debug","decay","delay","delta","dense","depth","derby","devil","dirty","doubt","draft","drain","drama","drank","drawn","dream","dress","dried","drift","drill","drink","drive","drone","drown","drunk","dryer","dying","eager","early","earth","eight","elder","elect","elite","email","empty","ended","enemy","enjoy","enter","entry","equal","error","essay","event","every","exact","exert","exile","exist","extra","faint","fairy","faith","false","fault","feast","fence","ferry","fever","fiber","field","fifty","fight","final","first","fixed","flame","flash","fleet","flesh","float","flood","floor","flour","fluid","flush","flute","focus","force","forge","forth","forum","fossil","found","frame","frank","fraud","fresh","front","frost","froze","fruit","fully","funny","ghost","giant","given","glass","globe","gloom","glory","glove","going","grace","grade","grain","grand","grant","grape","graph","grasp","grass","grave","great","green","greet","grief","grill","grind","grip","gross","group","grown","guard","guess","guest","guide","guild","guilt","habit","happy","harsh","haven","heart","heavy","hence","herbs","honor","horse","hotel","house","human","humor","hurt","ideal","image","imply","index","indie","inner","input","irony","issue","ivory","jewel","joint","joker","judge","juice","juicy","knack","kneel","knife","knock","known","label","labor","large","laser","later","laugh","layer","learn","lease","least","legal","lemon","level","light","limit","linen","liver","local","lodge","logic","login","loose","lover","lower","loyal","lucky","lunch","lying","magic","major","maker","manor","march","match","mayor","media","mercy","merit","metal","meter","might","minor","minus","model","money","month","moral","motor","mount","mouse","mouth","moved","movie","much","music","mutual","naive","nasty","naval","nerve","never","newly","night","noble","noise","north","noted","novel","nurse","occur","ocean","offer","often","olive","onset","opera","orbit","order","other","outer","owned","owner","oxide","ozone","paint","panel","panic","paper","party","pasta","patch","pause","peace","peach","pearl","penny","phase","phone","photo","piano","piece","pilot","pitch","pixel","pizza","place","plain","plane","plant","plate","plaza","plead","plumb","plume","plump","point","polar","posed","pound","power","press","price","pride","prime","print","prior","prize","probe","prone","proof","proud","prove","proxy","pulse","punch","pupil","purse","queen","query","quest","quick","quiet","quite","quota","quote","radar","radio","raise","rally","range","rapid","ratio","reach","react","ready","realm","rebel","refer","reign","relax","relay","renal","renew","reply","rider","ridge","rifle","right","rigid","rival","river","robot","rocky","roman","rough","round","route","royal","rugby","ruler","rural","saint","salad","sauce","scale","scare","scene","scent","scope","score","sense","serve","setup","seven","shade","shake","shall","shame","shape","share","shark","sharp","shave","sheep","sheer","sheet","shelf","shell","shift","shine","shirt","shock","shoot","shore","short","shout","sight","sigma","silly","since","sixth","sixty","sized","skill","skirt","skull","slash","slate","slave","sleep","slice","slide","slope","small","smart","smell","smile","smoke","snake","solar","solid","solve","sorry","sound","south","space","spare","spark","speak","speed","spend","spent","spice","spine","spite","split","spoke","spoon","sport","spray","squad","stack","staff","stage","stain","stake","stale","stall","stamp","stand","stare","stark","start","state","stays","steak","steal","steam","steel","steep","steer","stern","stick","stiff","still","stock","stole","stone","stood","store","storm","story","stove","strip","stuck","study","stuff","style","sugar","suite","sunny","super","surge","swamp","swear","sweep","sweet","swept","swift","swing","sword","swore","sworn","swung","table","taken","taste","teach","teeth","thank","theme","there","thick","thing","think","third","those","three","threw","throw","thumb","tiger","tight","tired","title","today","token","total","touch","tough","towel","tower","toxic","trace","track","trade","trail","train","trait","trash","treat","trend","trial","tribe","trick","tried","troop","truck","truly","trump","trunk","trust","truth","tumor","tuner","twice","twist","ultra","uncle","under","union","unite","unity","until","upper","upset","urban","usage","usual","utter","valid","value","valve","venue","verse","video","vigor","viral","virus","visit","vital","vivid","vocal","vodka","voice","voter","vowel","wage","waste","watch","water","weary","weave","wedge","weird","wheat","wheel","where","which","while","white","whole","whose","widow","width","wired","witch","woman","women","world","worry","worse","worst","worth","would","wound","wrath","write","wrong","wrote","yacht","yield","young","youth","zebra",...e.t9.map($=>$.toLowerCase()),...X,...fe,...Ae,...re,...D,...ze];ve=[...new Set(ve)];let Fe=new Set(["fuck","fucker","fucking","fucks","fuckhead","fuckwit","shitty","shat","shite","shits","pissed","pisses","pisser","cunts","cunted","niggers","faggots","fag","dykes","bitches","bitched","bitchy","whores","bastards","sluts","sluttish","rapes","raped","raping","pornography","anals","vaginas","penises","dicks","dickhead","assholes","ass","asses","cocks","cocky","pussies","tits","titties","jerking","dumbass","idiots","idiotic","retard","retarded","nigga","bollocks","wanker","tosser","arse","arsehole","bugger","clunge","muff","coon","spic","kike","chink","gook","paki","raghead","negro","tranny","shemale","pedophile","pedo","paedo","beastiality","bestiality","orgasm","cum","cumming","ejaculate","erection","masturbate","clitoris","scrotum","testicle","semen","sperm","fetish","bdsm","bondage","dominatrix","intercourse","lesbian","homosexual","gay","queer","fag","dyke","transsexual","prostitute","hooker","stripper","vibrator","dildo","condom","abortion","suicide","murder","kill","death","blood","bloody","gore","violent","nazi","hitler","racist","sexist","homophobic","terrorist","bomb","weapon","gun","knife","drug","heroin","cocaine","meth","marijuana","weed","alcohol","drunk","abuse","molest","incest","rape","torture","hate","scum","trash","worthless","loser","ugly","stupid","moron","imbecile","bastard","twat","bellend","knob","dick","prick","fudgepacker","motherfucker","douche","douchebag","scrote","choad","chode","skank","tramp","hoe","ho","skinner","spaz","mongoloid","windowlicker"]),Ue=ve;function Be($="es",ae=5){if($==="en"&&ae!==5){let be={4:V,6:X,7:fe,8:Ae,9:re,10:D,11:ze}[ae]||e.t9;return be[Math.floor(Math.random()*be.length)].toLowerCase()}let ce=(function(be="es"){return e.t9})($);return ce[Math.floor(Math.random()*ce.length)].toLowerCase()}let _e=new Set(e.t9.map($=>$.toUpperCase()));function qe($,ae="es"){return!!$&&_e.has($.toUpperCase())}let le={en:"en",uk:"en",es:"es"};async function we($,ae="es"){let ce=$.toLowerCase(),be=$.toUpperCase();if(Fe.has(ce))return{valid:!1,reason:"banned"};if(_e.has(be)||(ae==="en"||ae==="uk")&&ve.includes(ce))return{valid:!0,reason:"local"};let We=le[ae]||"en";try{let oe=new AbortController,He=setTimeout(()=>oe.abort(),5e3),ke=await fetch(`https://freedictionaryapi.com/api/v1/entries/${We}/${ce}`,{signal:oe.signal});if(clearTimeout(He),ke.ok){let Le=await ke.json();if(Le.entries&&Le.entries.length>0)return{valid:!0,reason:"api"}}}catch(oe){oe.name==="AbortError"?console.warn("Dictionary API lookup timed out"):console.error("Dictionary API Error:",oe)}return{valid:!1,reason:"invalid"}}},8580:(ie,te,C)=>{"use strict";function e(){let Q=new Intl.DateTimeFormat("en-CA",{timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date);return new Date(parseInt(Q.find(H=>H.type==="year").value,10),parseInt(Q.find(H=>H.type==="month").value,10)-1,parseInt(Q.find(H=>H.type==="day").value,10))}function t(Q=e()){let H=new Date(2021,5,19),V=new Date(Q);return V.setHours(0,0,0,0),H.setHours(0,0,0,0),Math.round((V-H)/864e5)}C.d(te,{E:()=>e,d:()=>t})},9489:(ie,te,C)=>{"use strict";C.d(te,{ot:()=>H,t9:()=>Q});var e=C(8580);let t={easy:[{word:"SOBRE",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"TODOS",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"TIENE",hints:["Tiene 3 vocales.","Empieza con la letra 'T'."]},{word:"ENTRE",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"PUEDE",hints:["Tiene 3 vocales.","Empieza con la letra 'P'."]},{word:"DESDE",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"HASTA",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"HACER",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"AHORA",hints:["Tiene 3 vocales.","Empieza con la letra 'A'."]},{word:"DONDE",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"PARTE",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"MEJOR",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"MUCHO",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"MISMO",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"TENGO",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"ESTAN",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"GENTE",hints:["Tiene 2 vocales.","Empieza con la letra 'G'."]},{word:"ESTOY",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"MUNDO",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"OTROS",hints:["Tiene 2 vocales.","Empieza con la letra 'O'."]},{word:"COSAS",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"MENOS",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"NUNCA",hints:["Tiene 2 vocales.","Empieza con la letra 'N'."]},{word:"TANTO",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"ANTES",hints:["Tiene 2 vocales.","Empieza con la letra 'A'."]},{word:"HABIA",hints:["Tiene 3 vocales.","Empieza con la letra 'H'."]},{word:"TENER",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"ELLOS",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"LUGAR",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"HECHO",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"DECIR",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"TODAS",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"ESTOS",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"FORMA",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"NUEVO",hints:["Tiene 3 vocales.","Empieza con la letra 'N'."]},{word:"ESTAS",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"ESTAR",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"QUIEN",hints:["Tiene 3 vocales.","Empieza con la letra 'Q'."]},{word:"BUENO",hints:["Tiene 3 vocales.","Empieza con la letra 'B'."]},{word:"LUEGO",hints:["Tiene 3 vocales.","Empieza con la letra 'L'."]},{word:"PODER",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"NADIE",hints:["Tiene 3 vocales.","Empieza con la letra 'N'."]},{word:"NUEVA",hints:["Tiene 3 vocales.","Empieza con la letra 'N'."]},{word:"OTRAS",hints:["Tiene 2 vocales.","Empieza con la letra 'O'."]},{word:"VECES",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"MAYOR",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"SEGUN",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"MEDIO",hints:["Tiene 3 vocales.","Empieza con la letra 'M'."]},{word:"FUERA",hints:["Tiene 3 vocales.","Empieza con la letra 'F'."]},{word:"HACIA",hints:["Tiene 3 vocales.","Empieza con la letra 'H'."]},{word:"GRUPO",hints:["Tiene 2 vocales.","Empieza con la letra 'G'."]},{word:"HABER",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"PUEDO",hints:["Tiene 3 vocales.","Empieza con la letra 'P'."]},{word:"BUENA",hints:["Tiene 3 vocales.","Empieza con la letra 'B'."]},{word:"MUJER",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"NOCHE",hints:["Tiene 2 vocales.","Empieza con la letra 'N'."]},{word:"MISMA",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"TENIA",hints:["Tiene 3 vocales.","Empieza con la letra 'T'."]},{word:"FINAL",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"PUNTO",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"SABER",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"VAMOS",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"FAVOR",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"GUSTA",hints:["Tiene 2 vocales.","Empieza con la letra 'G'."]},{word:"CLARO",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"HORAS",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"IGUAL",hints:["Tiene 3 vocales.","Empieza con la letra 'I'."]},{word:"MADRE",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"SENOR",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"FALTA",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"TARDE",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"MESES",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"ALGUN",hints:["Tiene 2 vocales.","Empieza con la letra 'A'."]},{word:"DICHO",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"NIVEL",hints:["Tiene 2 vocales.","Empieza con la letra 'N'."]},{word:"NINOS",hints:["Tiene 2 vocales.","Empieza con la letra 'N'."]},{word:"SERIA",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"HACEN",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"HEMOS",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"JUEGO",hints:["Tiene 3 vocales.","Empieza con la letra 'J'."]},{word:"SIGUE",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"SOMOS",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"CERCA",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"RAZON",hints:["Tiene 2 vocales.","Empieza con la letra 'R'."]},{word:"AMIGO",hints:["Tiene 3 vocales.","Empieza con la letra 'A'."]},{word:"PADRE",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"SALIR",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"VISTO",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"UNICO",hints:["Tiene 3 vocales.","Empieza con la letra 'U'."]},{word:"PASAR",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"AYUDA",hints:["Tiene 3 vocales.","Empieza con la letra 'A'."]},{word:"LIBRO",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"DATOS",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"DEJAR",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"CINCO",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"CLASE",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"HIJOS",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"USTED",hints:["Tiene 2 vocales.","Empieza con la letra 'U'."]},{word:"LARGO",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"ORDEN",hints:["Tiene 2 vocales.","Empieza con la letra 'O'."]},{word:"DEMAS",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"DICEN",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"JUNTO",hints:["Tiene 2 vocales.","Empieza con la letra 'J'."]},{word:"LISTA",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"TOTAL",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"TRATA",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"VIDEO",hints:["Tiene 3 vocales.","Empieza con la letra 'V'."]},{word:"VIENE",hints:["Tiene 3 vocales.","Empieza con la letra 'V'."]},{word:"QUEDA",hints:["Tiene 3 vocales.","Empieza con la letra 'Q'."]},{word:"SALUD",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"SITIO",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"TOMAR",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"CALLE",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"LINEA",hints:["Tiene 3 vocales.","Empieza con la letra 'L'."]},{word:"JULIO",hints:["Tiene 3 vocales.","Empieza con la letra 'J'."]},{word:"PUEDA",hints:["Tiene 3 vocales.","Empieza con la letra 'P'."]},{word:"VIVIR",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"CASOS",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"LIBRE",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"SABES",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"FOTOS",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"FACIL",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"HABLA",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"MIEDO",hints:["Tiene 3 vocales.","Empieza con la letra 'M'."]},{word:"PONER",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"APOYO",hints:["Tiene 3 vocales.","Empieza con la letra 'A'."]},{word:"MANOS",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"MUCHA",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"CHILE",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"DEBEN",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"MARZO",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"SERIE",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"PESAR",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"NORTE",hints:["Tiene 2 vocales.","Empieza con la letra 'N'."]},{word:"VISTA",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"AMBOS",hints:["Tiene 2 vocales.","Empieza con la letra 'A'."]},{word:"MEDIA",hints:["Tiene 3 vocales.","Empieza con la letra 'M'."]},{word:"ABRIL",hints:["Tiene 2 vocales.","Empieza con la letra 'A'."]},{word:"CAMPO",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"JOVEN",hints:["Tiene 2 vocales.","Empieza con la letra 'J'."]},{word:"JUNIO",hints:["Tiene 3 vocales.","Empieza con la letra 'J'."]},{word:"LLEVA",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"RESTO",hints:["Tiene 2 vocales.","Empieza con la letra 'R'."]},{word:"PAPEL",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"UNICA",hints:["Tiene 3 vocales.","Empieza con la letra 'U'."]},{word:"CARGO",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"ELLAS",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"ENERO",hints:["Tiene 3 vocales.","Empieza con la letra 'E'."]},{word:"LLAMA",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"SIGLO",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"COMUN",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"SANTA",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"TENGA",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"PLAZA",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"VALOR",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"CAUSA",hints:["Tiene 3 vocales.","Empieza con la letra 'C'."]},{word:"FECHA",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"FELIZ",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"OBRAS",hints:["Tiene 2 vocales.","Empieza con la letra 'O'."]},{word:"CIVIL",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"LOCAL",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"VIAJE",hints:["Tiene 3 vocales.","Empieza con la letra 'V'."]},{word:"LLEGO",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"NEGRO",hints:["Tiene 2 vocales.","Empieza con la letra 'N'."]},{word:"COMER",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"GANAR",hints:["Tiene 2 vocales.","Empieza con la letra 'G'."]},{word:"LUCHA",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"SABEN",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"JUSTO",hints:["Tiene 2 vocales.","Empieza con la letra 'J'."]},{word:"PODIA",hints:["Tiene 3 vocales.","Empieza con la letra 'P'."]},{word:"TEMAS",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"EXITO",hints:["Tiene 3 vocales.","Empieza con la letra 'E'."]},{word:"AUTOR",hints:["Tiene 3 vocales.","Empieza con la letra 'A'."]},{word:"LEJOS",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"MARIA",hints:["Tiene 3 vocales.","Empieza con la letra 'M'."]},{word:"PLATA",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"COLOR",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"FONDO",hints:["Tiene 2 vocales.","Empieza con la letra 'F'."]},{word:"IDEAS",hints:["Tiene 3 vocales.","Empieza con la letra 'I'."]},{word:"LLEGA",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"MENOR",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"POCOS",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"ARMAS",hints:["Tiene 2 vocales.","Empieza con la letra 'A'."]},{word:"BUSCA",hints:["Tiene 2 vocales.","Empieza con la letra 'B'."]},{word:"JUGAR",hints:["Tiene 2 vocales.","Empieza con la letra 'J'."]},{word:"EPOCA",hints:["Tiene 3 vocales.","Empieza con la letra 'E'."]},{word:"BANCO",hints:["Tiene 2 vocales.","Empieza con la letra 'B'."]},{word:"CORTE",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"MITAD",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"SERIO",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"CREAR",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"HACES",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"RADIO",hints:["Tiene 3 vocales.","Empieza con la letra 'R'."]},{word:"VIEJO",hints:["Tiene 3 vocales.","Empieza con la letra 'V'."]},{word:"COSTA",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"CULPA",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"FUEGO",hints:["Tiene 3 vocales.","Empieza con la letra 'F'."]},{word:"HABRA",hints:["Tiene 2 vocales.","Empieza con la letra 'H'."]},{word:"CREER",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"CARTA",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"CHINA",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"LEYES",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"AIRES",hints:["Tiene 3 vocales.","Empieza con la letra 'A'."]},{word:"BANDA",hints:["Tiene 2 vocales.","Empieza con la letra 'B'."]},{word:"PAGAR",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"UNION",hints:["Tiene 3 vocales.","Empieza con la letra 'U'."]},{word:"ABAJO",hints:["Tiene 3 vocales.","Empieza con la letra 'A'."]},{word:"ATRAS",hints:["Tiene 2 vocales.","Empieza con la letra 'A'."]},{word:"CAPAZ",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"DARLE",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"ERROR",hints:["Tiene 2 vocales.","Empieza con la letra 'E'."]},{word:"GUSTO",hints:["Tiene 2 vocales.","Empieza con la letra 'G'."]},{word:"REDES",hints:["Tiene 2 vocales.","Empieza con la letra 'R'."]},{word:"SIETE",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"TEXTO",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"CHICA",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"DOLOR",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"MENTE",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"SERAN",hints:["Tiene 2 vocales.","Empieza con la letra 'S'."]},{word:"CIELO",hints:["Tiene 3 vocales.","Empieza con la letra 'C'."]},{word:"CANAL",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"DANDO",hints:["Tiene 2 vocales.","Empieza con la letra 'D'."]},{word:"JAMAS",hints:["Tiene 2 vocales.","Empieza con la letra 'J'."]},{word:"MILES",hints:["Tiene 2 vocales.","Empieza con la letra 'M'."]},{word:"POBRE",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"VOTOS",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"TIPOS",hints:["Tiene 2 vocales.","Empieza con la letra 'T'."]},{word:"CURSO",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"GANAS",hints:["Tiene 2 vocales.","Empieza con la letra 'G'."]},{word:"SUELO",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"CASAS",hints:["Tiene 2 vocales.","Empieza con la letra 'C'."]},{word:"SUENO",hints:["Tiene 3 vocales.","Empieza con la letra 'S'."]},{word:"ZONAS",hints:["Tiene 2 vocales.","Empieza con la letra 'Z'."]},{word:"DESEO",hints:["Tiene 3 vocales.","Empieza con la letra 'D'."]},{word:"QUEDO",hints:["Tiene 3 vocales.","Empieza con la letra 'Q'."]},{word:"VENTA",hints:["Tiene 2 vocales.","Empieza con la letra 'V'."]},{word:"LEGAL",hints:["Tiene 2 vocales.","Empieza con la letra 'L'."]},{word:"PEDIR",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"PERRO",hints:["Tiene 2 vocales.","Empieza con la letra 'P'."]},{word:"DECIA",hints:["Tiene 3 vocales.","Empieza con la letra 'D'."]}],medium:[{word:"DOBLE",hints:["Empieza con la letra 'D'.","Termina con la letra 'E'."]},{word:"MARCA",hints:["Empieza con la letra 'M'.","Termina con la letra 'A'."]},{word:"PESOS",hints:["Empieza con la letra 'P'.","Termina con la letra 'S'."]},{word:"REINO",hints:["Empieza con la letra 'R'.","Termina con la letra 'O'."]},{word:"SACAR",hints:["Empieza con la letra 'S'.","Termina con la letra 'R'."]},{word:"MURIO",hints:["Empieza con la letra 'M'.","Termina con la letra 'O'."]},{word:"SABIA",hints:["Empieza con la letra 'S'.","Termina con la letra 'A'."]},{word:"VIEJA",hints:["Empieza con la letra 'V'.","Termina con la letra 'A'."]},{word:"AQUEL",hints:["Empieza con la letra 'A'.","Termina con la letra 'L'."]},{word:"LARGA",hints:["Empieza con la letra 'L'.","Termina con la letra 'A'."]},{word:"LLEVO",hints:["Empieza con la letra 'L'.","Termina con la letra 'O'."]},{word:"PLAZO",hints:["Empieza con la letra 'P'.","Termina con la letra 'O'."]},{word:"SALIO",hints:["Empieza con la letra 'S'.","Termina con la letra 'O'."]},{word:"SANTO",hints:["Empieza con la letra 'S'.","Termina con la letra 'O'."]},{word:"VERDE",hints:["Empieza con la letra 'V'.","Termina con la letra 'E'."]},{word:"LIDER",hints:["Empieza con la letra 'L'.","Termina con la letra 'R'."]},{word:"PODRA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"TALES",hints:["Empieza con la letra 'T'.","Termina con la letra 'S'."]},{word:"ACABA",hints:["Empieza con la letra 'A'.","Termina con la letra 'A'."]},{word:"CHICO",hints:["Empieza con la letra 'C'.","Termina con la letra 'O'."]},{word:"CREEN",hints:["Empieza con la letra 'C'.","Termina con la letra 'N'."]},{word:"HONOR",hints:["Empieza con la letra 'H'.","Termina con la letra 'R'."]},{word:"MORIR",hints:["Empieza con la letra 'M'.","Termina con la letra 'R'."]},{word:"TANTA",hints:["Empieza con la letra 'T'.","Termina con la letra 'A'."]},{word:"HOGAR",hints:["Empieza con la letra 'H'.","Termina con la letra 'R'."]},{word:"MANDO",hints:["Empieza con la letra 'M'.","Termina con la letra 'O'."]},{word:"VEMOS",hints:["Empieza con la letra 'V'.","Termina con la letra 'S'."]},{word:"AMBAS",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"CARNE",hints:["Empieza con la letra 'C'.","Termina con la letra 'E'."]},{word:"DICES",hints:["Empieza con la letra 'D'.","Termina con la letra 'S'."]},{word:"MARCO",hints:["Empieza con la letra 'M'.","Termina con la letra 'O'."]},{word:"FINES",hints:["Empieza con la letra 'F'.","Termina con la letra 'S'."]},{word:"GOLPE",hints:["Empieza con la letra 'G'.","Termina con la letra 'E'."]},{word:"GRADO",hints:["Empieza con la letra 'G'.","Termina con la letra 'O'."]},{word:"LLENO",hints:["Empieza con la letra 'L'.","Termina con la letra 'O'."]},{word:"VENIR",hints:["Empieza con la letra 'V'.","Termina con la letra 'R'."]},{word:"AMIGA",hints:["Empieza con la letra 'A'.","Termina con la letra 'A'."]},{word:"LUNES",hints:["Empieza con la letra 'L'.","Termina con la letra 'S'."]},{word:"NOVIA",hints:["Empieza con la letra 'N'.","Termina con la letra 'A'."]},{word:"SIRVE",hints:["Empieza con la letra 'S'.","Termina con la letra 'E'."]},{word:"DICHA",hints:["Empieza con la letra 'D'.","Termina con la letra 'A'."]},{word:"HOTEL",hints:["Empieza con la letra 'H'.","Termina con la letra 'L'."]},{word:"MATAR",hints:["Empieza con la letra 'M'.","Termina con la letra 'R'."]},{word:"POCAS",hints:["Empieza con la letra 'P'.","Termina con la letra 'S'."]},{word:"CLAVE",hints:["Empieza con la letra 'C'.","Termina con la letra 'E'."]},{word:"HAGAN",hints:["Empieza con la letra 'H'.","Termina con la letra 'N'."]},{word:"QUIZA",hints:["Empieza con la letra 'Q'.","Termina con la letra 'A'."]},{word:"REINA",hints:["Empieza con la letra 'R'.","Termina con la letra 'A'."]},{word:"SALVO",hints:["Empieza con la letra 'S'.","Termina con la letra 'O'."]},{word:"AREAS",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"CREES",hints:["Empieza con la letra 'C'.","Termina con la letra 'S'."]},{word:"ESTEN",hints:["Empieza con la letra 'E'.","Termina con la letra 'N'."]},{word:"HAYAN",hints:["Empieza con la letra 'H'.","Termina con la letra 'N'."]},{word:"SUENA",hints:["Empieza con la letra 'S'.","Termina con la letra 'A'."]},{word:"ABRIR",hints:["Empieza con la letra 'A'.","Termina con la letra 'R'."]},{word:"ACABO",hints:["Empieza con la letra 'A'.","Termina con la letra 'O'."]},{word:"BASTA",hints:["Empieza con la letra 'B'.","Termina con la letra 'A'."]},{word:"CARGA",hints:["Empieza con la letra 'C'.","Termina con la letra 'A'."]},{word:"ENTRA",hints:["Empieza con la letra 'E'.","Termina con la letra 'A'."]},{word:"NUEVE",hints:["Empieza con la letra 'N'.","Termina con la letra 'E'."]},{word:"VILLA",hints:["Empieza con la letra 'V'.","Termina con la letra 'A'."]},{word:"ACTOS",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"CALOR",hints:["Empieza con la letra 'C'.","Termina con la letra 'R'."]},{word:"DEBES",hints:["Empieza con la letra 'D'.","Termina con la letra 'S'."]},{word:"JUNTA",hints:["Empieza con la letra 'J'.","Termina con la letra 'A'."]},{word:"LISTO",hints:["Empieza con la letra 'L'.","Termina con la letra 'O'."]},{word:"PENSE",hints:["Empieza con la letra 'P'.","Termina con la letra 'E'."]},{word:"CLARA",hints:["Empieza con la letra 'C'.","Termina con la letra 'A'."]},{word:"COCHE",hints:["Empieza con la letra 'C'.","Termina con la letra 'E'."]},{word:"CORTO",hints:["Empieza con la letra 'C'.","Termina con la letra 'O'."]},{word:"DUDAS",hints:["Empieza con la letra 'D'.","Termina con la letra 'S'."]},{word:"LECHE",hints:["Empieza con la letra 'L'.","Termina con la letra 'E'."]},{word:"MIRAR",hints:["Empieza con la letra 'M'.","Termina con la letra 'R'."]},{word:"SUPER",hints:["Empieza con la letra 'S'.","Termina con la letra 'R'."]},{word:"UNIDO",hints:["Empieza con la letra 'U'.","Termina con la letra 'O'."]},{word:"VIDAS",hints:["Empieza con la letra 'V'.","Termina con la letra 'S'."]},{word:"OJALA",hints:["Empieza con la letra 'O'.","Termina con la letra 'A'."]},{word:"TAREA",hints:["Empieza con la letra 'T'.","Termina con la letra 'A'."]},{word:"GRAVE",hints:["Empieza con la letra 'G'.","Termina con la letra 'E'."]},{word:"HABLO",hints:["Empieza con la letra 'H'.","Termina con la letra 'O'."]},{word:"LLENA",hints:["Empieza con la letra 'L'.","Termina con la letra 'A'."]},{word:"PLAYA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"VIVEN",hints:["Empieza con la letra 'V'.","Termina con la letra 'N'."]},{word:"VOTAR",hints:["Empieza con la letra 'V'.","Termina con la letra 'R'."]},{word:"DULCE",hints:["Empieza con la letra 'D'.","Termina con la letra 'E'."]},{word:"NEGRA",hints:["Empieza con la letra 'N'.","Termina con la letra 'A'."]},{word:"PASAN",hints:["Empieza con la letra 'P'.","Termina con la letra 'N'."]},{word:"SUBIR",hints:["Empieza con la letra 'S'.","Termina con la letra 'R'."]},{word:"AGUAS",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"ALTOS",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"DEJAN",hints:["Empieza con la letra 'D'.","Termina con la letra 'N'."]},{word:"INDIA",hints:["Empieza con la letra 'I'.","Termina con la letra 'A'."]},{word:"PENAL",hints:["Empieza con la letra 'P'.","Termina con la letra 'L'."]},{word:"PONEN",hints:["Empieza con la letra 'P'.","Termina con la letra 'N'."]},{word:"AVION",hints:["Empieza con la letra 'A'.","Termina con la letra 'N'."]},{word:"COSTO",hints:["Empieza con la letra 'C'.","Termina con la letra 'O'."]},{word:"DISCO",hints:["Empieza con la letra 'D'.","Termina con la letra 'O'."]},{word:"ETAPA",hints:["Empieza con la letra 'E'.","Termina con la letra 'A'."]},{word:"SUELE",hints:["Empieza con la letra 'S'.","Termina con la letra 'E'."]},{word:"ACASO",hints:["Empieza con la letra 'A'.","Termina con la letra 'O'."]},{word:"BASES",hints:["Empieza con la letra 'B'.","Termina con la letra 'S'."]},{word:"FRASE",hints:["Empieza con la letra 'F'.","Termina con la letra 'E'."]},{word:"MOVIL",hints:["Empieza con la letra 'M'.","Termina con la letra 'L'."]},{word:"TRATO",hints:["Empieza con la letra 'T'.","Termina con la letra 'O'."]},{word:"VENGA",hints:["Empieza con la letra 'V'.","Termina con la letra 'A'."]},{word:"DEUDA",hints:["Empieza con la letra 'D'.","Termina con la letra 'A'."]},{word:"HUMOR",hints:["Empieza con la letra 'H'.","Termina con la letra 'R'."]},{word:"LINDO",hints:["Empieza con la letra 'L'.","Termina con la letra 'O'."]},{word:"MORAL",hints:["Empieza con la letra 'M'.","Termina con la letra 'L'."]},{word:"MUSEO",hints:["Empieza con la letra 'M'.","Termina con la letra 'O'."]},{word:"NOTAS",hints:["Empieza con la letra 'N'.","Termina con la letra 'S'."]},{word:"PIDIO",hints:["Empieza con la letra 'P'.","Termina con la letra 'O'."]},{word:"BREVE",hints:["Empieza con la letra 'B'.","Termina con la letra 'E'."]},{word:"FIRMA",hints:["Empieza con la letra 'F'.","Termina con la letra 'A'."]},{word:"METRO",hints:["Empieza con la letra 'M'.","Termina con la letra 'O'."]},{word:"SENAL",hints:["Empieza con la letra 'S'.","Termina con la letra 'L'."]},{word:"VALLE",hints:["Empieza con la letra 'V'.","Termina con la letra 'E'."]},{word:"LADOS",hints:["Empieza con la letra 'L'.","Termina con la letra 'S'."]},{word:"PASOS",hints:["Empieza con la letra 'P'.","Termina con la letra 'S'."]},{word:"QUEDE",hints:["Empieza con la letra 'Q'.","Termina con la letra 'E'."]},{word:"BOLSA",hints:["Empieza con la letra 'B'.","Termina con la letra 'A'."]},{word:"CLIMA",hints:["Empieza con la letra 'C'.","Termina con la letra 'A'."]},{word:"CORTA",hints:["Empieza con la letra 'C'.","Termina con la letra 'A'."]},{word:"DEBIA",hints:["Empieza con la letra 'D'.","Termina con la letra 'A'."]},{word:"BAJAR",hints:["Empieza con la letra 'B'.","Termina con la letra 'R'."]},{word:"EUROS",hints:["Empieza con la letra 'E'.","Termina con la letra 'S'."]},{word:"JUEGA",hints:["Empieza con la letra 'J'.","Termina con la letra 'A'."]},{word:"LLAMO",hints:["Empieza con la letra 'L'.","Termina con la letra 'O'."]},{word:"MALAS",hints:["Empieza con la letra 'M'.","Termina con la letra 'S'."]},{word:"NOVIO",hints:["Empieza con la letra 'N'.","Termina con la letra 'O'."]},{word:"VAYAN",hints:["Empieza con la letra 'V'.","Termina con la letra 'N'."]},{word:"VERLO",hints:["Empieza con la letra 'V'.","Termina con la letra 'O'."]},{word:"VERTE",hints:["Empieza con la letra 'V'.","Termina con la letra 'E'."]},{word:"VUELO",hints:["Empieza con la letra 'V'.","Termina con la letra 'O'."]},{word:"ANUAL",hints:["Empieza con la letra 'A'.","Termina con la letra 'L'."]},{word:"NINAS",hints:["Empieza con la letra 'N'.","Termina con la letra 'S'."]},{word:"REYES",hints:["Empieza con la letra 'R'.","Termina con la letra 'S'."]},{word:"TORNO",hints:["Empieza con la letra 'T'.","Termina con la letra 'O'."]},{word:"CAIDA",hints:["Empieza con la letra 'C'.","Termina con la letra 'A'."]},{word:"DUENO",hints:["Empieza con la letra 'D'.","Termina con la letra 'O'."]},{word:"HAGAS",hints:["Empieza con la letra 'H'.","Termina con la letra 'S'."]},{word:"LABOR",hints:["Empieza con la letra 'L'.","Termina con la letra 'R'."]},{word:"LETRA",hints:["Empieza con la letra 'L'.","Termina con la letra 'A'."]},{word:"MALOS",hints:["Empieza con la letra 'M'.","Termina con la letra 'S'."]},{word:"OESTE",hints:["Empieza con la letra 'O'.","Termina con la letra 'E'."]},{word:"SERES",hints:["Empieza con la letra 'S'.","Termina con la letra 'S'."]},{word:"TENES",hints:["Empieza con la letra 'T'.","Termina con la letra 'S'."]},{word:"TOCAR",hints:["Empieza con la letra 'T'.","Termina con la letra 'R'."]},{word:"USADO",hints:["Empieza con la letra 'U'.","Termina con la letra 'O'."]},{word:"DIRIA",hints:["Empieza con la letra 'D'.","Termina con la letra 'A'."]},{word:"FUESE",hints:["Empieza con la letra 'F'.","Termina con la letra 'E'."]},{word:"HARIA",hints:["Empieza con la letra 'H'.","Termina con la letra 'A'."]},{word:"MOTOR",hints:["Empieza con la letra 'M'.","Termina con la letra 'R'."]},{word:"NACIO",hints:["Empieza con la letra 'N'.","Termina con la letra 'O'."]},{word:"PUNTA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"SALGA",hints:["Empieza con la letra 'S'.","Termina con la letra 'A'."]},{word:"ANGEL",hints:["Empieza con la letra 'A'.","Termina con la letra 'L'."]},{word:"CHINO",hints:["Empieza con la letra 'C'.","Termina con la letra 'O'."]},{word:"PECHO",hints:["Empieza con la letra 'P'.","Termina con la letra 'O'."]},{word:"PELEA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"SALEN",hints:["Empieza con la letra 'S'.","Termina con la letra 'N'."]},{word:"TOQUE",hints:["Empieza con la letra 'T'.","Termina con la letra 'E'."]},{word:"ARTES",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"LINDA",hints:["Empieza con la letra 'L'.","Termina con la letra 'A'."]},{word:"PARAR",hints:["Empieza con la letra 'P'.","Termina con la letra 'R'."]},{word:"SALON",hints:["Empieza con la letra 'S'.","Termina con la letra 'N'."]},{word:"ARBOL",hints:["Empieza con la letra 'A'.","Termina con la letra 'L'."]},{word:"AUTOS",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"DEJEN",hints:["Empieza con la letra 'D'.","Termina con la letra 'N'."]},{word:"IDEAL",hints:["Empieza con la letra 'I'.","Termina con la letra 'L'."]},{word:"ISLAS",hints:["Empieza con la letra 'I'.","Termina con la letra 'S'."]},{word:"RUIDO",hints:["Empieza con la letra 'R'.","Termina con la letra 'O'."]},{word:"ALTAS",hints:["Empieza con la letra 'A'.","Termina con la letra 'S'."]},{word:"FIRME",hints:["Empieza con la letra 'F'.","Termina con la letra 'E'."]},{word:"HECHA",hints:["Empieza con la letra 'H'.","Termina con la letra 'A'."]},{word:"MINAS",hints:["Empieza con la letra 'M'.","Termina con la letra 'S'."]},{word:"QUISO",hints:["Empieza con la letra 'Q'.","Termina con la letra 'O'."]},{word:"ARENA",hints:["Empieza con la letra 'A'.","Termina con la letra 'A'."]},{word:"BAJOS",hints:["Empieza con la letra 'B'.","Termina con la letra 'S'."]},{word:"DANOS",hints:["Empieza con la letra 'D'.","Termina con la letra 'S'."]},{word:"PIEZA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"PISTA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"RITMO",hints:["Empieza con la letra 'R'.","Termina con la letra 'O'."]},{word:"GOLES",hints:["Empieza con la letra 'G'.","Termina con la letra 'S'."]},{word:"LOGRO",hints:["Empieza con la letra 'L'.","Termina con la letra 'O'."]},{word:"MUERE",hints:["Empieza con la letra 'M'.","Termina con la letra 'E'."]},{word:"OBVIO",hints:["Empieza con la letra 'O'.","Termina con la letra 'O'."]},{word:"PLANO",hints:["Empieza con la letra 'P'.","Termina con la letra 'O'."]},{word:"PONGO",hints:["Empieza con la letra 'P'.","Termina con la letra 'O'."]},{word:"RURAL",hints:["Empieza con la letra 'R'.","Termina con la letra 'L'."]},{word:"ANIMO",hints:["Empieza con la letra 'A'.","Termina con la letra 'O'."]},{word:"ACTOR",hints:["Empieza con la letra 'A'.","Termina con la letra 'R'."]},{word:"ANDAR",hints:["Empieza con la letra 'A'.","Termina con la letra 'R'."]},{word:"BRAZO",hints:["Empieza con la letra 'B'.","Termina con la letra 'O'."]},{word:"ENTRO",hints:["Empieza con la letra 'E'.","Termina con la letra 'O'."]},{word:"HOJAS",hints:["Empieza con la letra 'H'.","Termina con la letra 'S'."]},{word:"POETA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"VISTE",hints:["Empieza con la letra 'V'.","Termina con la letra 'E'."]},{word:"VOCES",hints:["Empieza con la letra 'V'.","Termina con la letra 'S'."]},{word:"BARCO",hints:["Empieza con la letra 'B'.","Termina con la letra 'O'."]},{word:"BOMBA",hints:["Empieza con la letra 'B'.","Termina con la letra 'A'."]},{word:"DEDOS",hints:["Empieza con la letra 'D'.","Termina con la letra 'S'."]},{word:"TORRE",hints:["Empieza con la letra 'T'.","Termina con la letra 'E'."]},{word:"TRAER",hints:["Empieza con la letra 'T'.","Termina con la letra 'R'."]},{word:"AVISO",hints:["Empieza con la letra 'A'.","Termina con la letra 'O'."]},{word:"CONTO",hints:["Empieza con la letra 'C'.","Termina con la letra 'O'."]},{word:"DARSE",hints:["Empieza con la letra 'D'.","Termina con la letra 'E'."]},{word:"ECHAR",hints:["Empieza con la letra 'E'.","Termina con la letra 'R'."]},{word:"LEIDO",hints:["Empieza con la letra 'L'.","Termina con la letra 'O'."]},{word:"PIDEN",hints:["Empieza con la letra 'P'.","Termina con la letra 'N'."]},{word:"REGLA",hints:["Empieza con la letra 'R'.","Termina con la letra 'A'."]},{word:"RENTA",hints:["Empieza con la letra 'R'.","Termina con la letra 'A'."]},{word:"RICOS",hints:["Empieza con la letra 'R'.","Termina con la letra 'S'."]},{word:"BAILE",hints:["Empieza con la letra 'B'.","Termina con la letra 'E'."]},{word:"DESEA",hints:["Empieza con la letra 'D'.","Termina con la letra 'A'."]},{word:"ESTES",hints:["Empieza con la letra 'E'.","Termina con la letra 'S'."]},{word:"GUSTE",hints:["Empieza con la letra 'G'.","Termina con la letra 'E'."]},{word:"HUEVO",hints:["Empieza con la letra 'H'.","Termina con la letra 'O'."]},{word:"PARED",hints:["Empieza con la letra 'P'.","Termina con la letra 'D'."]},{word:"BELLA",hints:["Empieza con la letra 'B'.","Termina con la letra 'A'."]},{word:"DARTE",hints:["Empieza con la letra 'D'.","Termina con la letra 'E'."]},{word:"DEBIO",hints:["Empieza con la letra 'D'.","Termina con la letra 'O'."]},{word:"DIGAS",hints:["Empieza con la letra 'D'.","Termina con la letra 'S'."]},{word:"EXTRA",hints:["Empieza con la letra 'E'.","Termina con la letra 'A'."]},{word:"TURNO",hints:["Empieza con la letra 'T'.","Termina con la letra 'O'."]},{word:"VACIO",hints:["Empieza con la letra 'V'.","Termina con la letra 'O'."]},{word:"CICLO",hints:["Empieza con la letra 'C'.","Termina con la letra 'O'."]},{word:"CONDE",hints:["Empieza con la letra 'C'.","Termina con la letra 'E'."]},{word:"FALSO",hints:["Empieza con la letra 'F'.","Termina con la letra 'O'."]},{word:"MODOS",hints:["Empieza con la letra 'M'.","Termina con la letra 'S'."]},{word:"MONTE",hints:["Empieza con la letra 'M'.","Termina con la letra 'E'."]},{word:"NORMA",hints:["Empieza con la letra 'N'.","Termina con la letra 'A'."]},{word:"PLENO",hints:["Empieza con la letra 'P'.","Termina con la letra 'O'."]},{word:"PONGA",hints:["Empieza con la letra 'P'.","Termina con la letra 'A'."]},{word:"TABLA",hints:["Empieza con la letra 'T'.","Termina con la letra 'A'."]},{word:"COPIA",hints:["Empieza con la letra 'C'.","Termina con la letra 'A'."]},{word:"ENVIO",hints:["Empieza con la letra 'E'.","Termina con la letra 'O'."]},{word:"GASTO",hints:["Empieza con la letra 'G'.","Termina con la letra 'O'."]},{word:"PASEO",hints:["Empieza con la letra 'P'.","Termina con la letra 'O'."]},{word:"ROJAS",hints:["Empieza con la letra 'R'.","Termina con la letra 'S'."]}],hard:[{word:"TECHO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"AUDIO",hints:["Tiene 4 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"BROMA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"DUELE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"LUCES",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"POSEE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"VAYAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"VEASE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"DRAMA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"FALSA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"FERIA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"MAGIA",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"QUESO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"SABOR",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"VENGO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"VIRUS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"DIGAN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"MANDA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"METAL",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'L'."]},{word:"POLVO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"SOCIO",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"ADIOS",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"BAJAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"CABLE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"CORRE",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"CUYOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"DEJES",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"LOGRA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"OCUPA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"PLENA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"ROBAR",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'R'."]},{word:"SILLA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"SOLOS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"TOMAN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"ABRIO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"CARAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"DEBER",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'R'."]},{word:"HEROE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"METER",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'R'."]},{word:"PRIMO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"SIGAN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"YENDO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"HABLE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"HARAN",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'N'."]},{word:"HIELO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"RANGO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"RONDA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"RUMBO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"SOLAR",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"APOYA",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"CARRO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"CIFRA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"DARME",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"PATIO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"PRIMA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"ARROZ",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'Z'."]},{word:"GORDO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"LOCOS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"NIEVE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"PACTO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"QUISE",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"TONTO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"VENIA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"VERLA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"DAMOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"DROGA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"DEBIL",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'L'."]},{word:"FALLO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"LENTO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"LLEVE",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"MUEVE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"POLLO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"PONES",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"RELOJ",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'J'."]},{word:"SALTO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"SENTI",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'I'."]},{word:"TRAJE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"ABUSO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"DIETA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"LANZO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"NIETO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"PLATO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"QUITA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"RAMOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"RUEDA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"TEMOR",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"TIRAR",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'R'."]},{word:"VERSE",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"ALBUM",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'M'."]},{word:"ARABE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"ANCHO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"BORDE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"CANTO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"DUQUE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"GENIO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"HIJAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"JEFES",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"MANGA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"VENDE",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"BOLAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"CALMA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"CREIA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"DEJAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"EXIGE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"MIREN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"TESIS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"VIVOS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"CAJAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"CERRO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"COGER",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"DARIA",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"LANZA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"SUAVE",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"BELLO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"BRAVO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"CULTO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"FLUJO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"INDIO",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"METAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"QUITO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"VIVIA",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"PAGAN",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'N'."]},{word:"PAGOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"PESCA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"PINTA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"SALSA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"SALTA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"TASAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"ETICA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"ACERO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"BARRA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"BUSCO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"CINTA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"FALLA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"GATOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"PALMA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"POEMA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"QUEJA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"SUFRE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"ALDEA",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"BEBER",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'R'."]},{word:"CRECE",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"FUMAR",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"HAYAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"NARIZ",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'Z'."]},{word:"PENSO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"SALAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"SUIZA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"BANCA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"CENSO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"CREAN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"KILOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"MASAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"SERLO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"SIGNO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"AYUDO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"GRITO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"MOVER",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"OTONO",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"PLACA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"VOLAR",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"ACIDO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"CAIDO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"DOLAR",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"FRUTO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"JUSTA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"PASTA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"PRESO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"ROMPE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"TRAJO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"VITAL",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'L'."]},{word:"BORDO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"COBRE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"CRUEL",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'L'."]},{word:"CUYAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"DOSIS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"GESTO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"LLAVE",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"MULTA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"NIEGA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"NOBLE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"PECES",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"RABIA",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"RAYOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"VIMOS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"ANADE",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"ENVIA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"PENAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"PODES",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"ROSAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"RUSOS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"RUTAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"SELVA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"SUBIO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"CANTA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"CITAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"CUBRE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"NEGAR",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'R'."]},{word:"PERDI",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'I'."]},{word:"PIZZA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"RIVAL",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'L'."]},{word:"SELLO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"TUMBA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"VERAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"VIVIO",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"ACTUA",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"AEREA",hints:["Tiene 4 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"CUOTA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"LLAME",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"PONTE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"REVES",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"SURGE",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"TENIS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"TRATE",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'E'."]},{word:"BEBES",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"CIEGO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"DANZA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"PATAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"VIVES",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"AMADO",hints:["Tiene 3 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"AYUDE",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'E'."]},{word:"CASCO",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'O'."]},{word:"DIGNO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"GRASA",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'A'."]},{word:"MACHO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"PASEN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"PRESA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"SEPAN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"TOMEN",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'N'."]},{word:"ALMAS",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'S'."]},{word:"BOTON",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'N'."]},{word:"DUELO",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"FILAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"FLOTA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"FRUTA",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]},{word:"GANAN",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'N'."]},{word:"HIMNO",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'O'."]},{word:"MATAN",hints:["Tiene 2 vocales.","Repite una letra.","Termina con la letra 'N'."]},{word:"MIRAS",hints:["Tiene 2 vocales.","No repite ninguna letra.","Termina con la letra 'S'."]},{word:"SOLIA",hints:["Tiene 3 vocales.","No repite ninguna letra.","Termina con la letra 'A'."]}],ultraHard:[{word:"VASCO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'O'."]},{word:"BAHIA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'A'."]},{word:"ELIGE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'E' y termina con 'E'."]},{word:"NUBES",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'N' y termina con 'S'."]},{word:"PAPAS",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'P' y termina con 'S'."]},{word:"ROJOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'S'."]},{word:"CREMA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'A'."]},{word:"GOLFO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'G' y termina con 'O'."]},{word:"MONTO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'M' y termina con 'O'."]},{word:"SAQUE",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'E'."]},{word:"VOLVI",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'V' y termina con 'I'."]},{word:"ANIME",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'A' y termina con 'E'."]},{word:"CREAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'S'."]},{word:"HORNO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'H' y termina con 'O'."]},{word:"NOTAR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'N' y termina con 'R'."]},{word:"PIANO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'O'."]},{word:"RAMAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'S'."]},{word:"SALES",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'S'."]},{word:"SEPAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'S'."]},{word:"TIROS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'S'."]},{word:"TRAMA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'A'."]},{word:"USADA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'U' y termina con 'A'."]},{word:"BECAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'S'."]},{word:"CAPAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'S'."]},{word:"DABAN",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'D' y termina con 'N'."]},{word:"EVITA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'E' y termina con 'A'."]},{word:"HUESO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'H' y termina con 'O'."]},{word:"MEDIR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'R'."]},{word:"MUROS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'S'."]},{word:"PILAR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'R'."]},{word:"PISOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'P' y termina con 'S'."]},{word:"POSTA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'A'."]},{word:"SACAN",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'N'."]},{word:"SALGO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'O'."]},{word:"ACOSO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'O'."]},{word:"CAUSO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'O'."]},{word:"CIRCO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'O'."]},{word:"CUEVA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'A'."]},{word:"NACER",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'N' y termina con 'R'."]},{word:"NATAL",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'N' y termina con 'L'."]},{word:"PASAS",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'P' y termina con 'S'."]},{word:"RUBIO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'R' y termina con 'O'."]},{word:"SEXTO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'O'."]},{word:"SUYOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'S'."]},{word:"TRUCO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'O'."]},{word:"VAPOR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'R'."]},{word:"ANDAN",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'N'."]},{word:"BALAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'S'."]},{word:"BARBA",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'A'."]},{word:"BANOS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'S'."]},{word:"COSTE",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'E'."]},{word:"CUERO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'O'."]},{word:"DAMAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'D' y termina con 'S'."]},{word:"DIANA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'D' y termina con 'A'."]},{word:"DIERA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'A'."]},{word:"HARTO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'H' y termina con 'O'."]},{word:"METIO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'O'."]},{word:"SEXTA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'A'."]},{word:"SOBRA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'A'."]},{word:"SOLAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'S'."]},{word:"TIGRE",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'E'."]},{word:"UNIDA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'U' y termina con 'A'."]},{word:"ANDES",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'A' y termina con 'S'."]},{word:"MAPAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'M' y termina con 'S'."]},{word:"PARES",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'S'."]},{word:"PRISA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'A'."]},{word:"ROCAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'R' y termina con 'S'."]},{word:"SERAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'S'."]},{word:"TRONO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'O'."]},{word:"BESOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'S'."]},{word:"DUROS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'S'."]},{word:"GORDA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'G' y termina con 'A'."]},{word:"GUAPA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'G' y termina con 'A'."]},{word:"GUAPO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'G' y termina con 'O'."]},{word:"MUERA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'A'."]},{word:"NOMAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'N' y termina con 'S'."]},{word:"PARTO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'O'."]},{word:"POSTS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'P' y termina con 'S'."]},{word:"VALEN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'N'."]},{word:"VIGOR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'R'."]},{word:"ACABE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'E'."]},{word:"AEREO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'O'."]},{word:"BALON",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'N'."]},{word:"COPAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'S'."]},{word:"MESAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'M' y termina con 'S'."]},{word:"NAVES",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'N' y termina con 'S'."]},{word:"RARAS",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'S'."]},{word:"REUNE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'E'."]},{word:"TALLA",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'A'."]},{word:"TONTA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'A'."]},{word:"TRIBU",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'U'."]},{word:"CERDO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'O'."]},{word:"CRUCE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'E'."]},{word:"DARAN",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'D' y termina con 'N'."]},{word:"DUCHA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'A'."]},{word:"DURAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'S'."]},{word:"GLOBO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'G' y termina con 'O'."]},{word:"LENTA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'L' y termina con 'A'."]},{word:"LIMON",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'L' y termina con 'N'."]},{word:"MICRO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'O'."]},{word:"SABIO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'O'."]},{word:"SALIA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'A'."]},{word:"SUCIO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'O'."]},{word:"VIVAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'V' y termina con 'S'."]},{word:"ASUME",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'A' y termina con 'E'."]},{word:"CAIGA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'A'."]},{word:"COBRA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'A'."]},{word:"FICHA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'A'."]},{word:"FOROS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'F' y termina con 'S'."]},{word:"HUELE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'H' y termina con 'E'."]},{word:"MIRAN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'N'."]},{word:"OPERA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'O' y termina con 'A'."]},{word:"PALOS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'S'."]},{word:"RETOS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'R' y termina con 'S'."]},{word:"RODEA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'R' y termina con 'A'."]},{word:"SIRVA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'A'."]},{word:"TOROS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'S'."]},{word:"BONOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'S'."]},{word:"CENAR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'R'."]},{word:"COMEN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'N'."]},{word:"DIGNA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'A'."]},{word:"PONIA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'A'."]},{word:"SONAR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'R'."]},{word:"TRAEN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'N'."]},{word:"BOTAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'S'."]},{word:"FIBRA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'A'."]},{word:"GASES",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'G' y termina con 'S'."]},{word:"GRANO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'G' y termina con 'O'."]},{word:"MAFIA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'M' y termina con 'A'."]},{word:"OIDOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'O' y termina con 'S'."]},{word:"PLANA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'P' y termina con 'A'."]},{word:"QUEMA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'Q' y termina con 'A'."]},{word:"SALDO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'O'."]},{word:"VIAJA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'V' y termina con 'A'."]},{word:"VIUDA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'A'."]},{word:"BUQUE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'E'."]},{word:"BURLA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'A'."]},{word:"CUIDA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'A'."]},{word:"FATAL",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'F' y termina con 'L'."]},{word:"FIRMO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'O'."]},{word:"HALLA",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'H' y termina con 'A'."]},{word:"LAZOS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'L' y termina con 'S'."]},{word:"OPINA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'O' y termina con 'A'."]},{word:"PEGAR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'R'."]},{word:"PELOS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'S'."]},{word:"RATAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'S'."]},{word:"ROLLO",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'O'."]},{word:"TRAMO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'O'."]},{word:"TRECE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'E'."]},{word:"ABREN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'A' y termina con 'N'."]},{word:"BARRO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'O'."]},{word:"CURVA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'A'."]},{word:"LAVAR",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'L' y termina con 'R'."]},{word:"ROBOT",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'T'."]},{word:"RUBIA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'R' y termina con 'A'."]},{word:"SUCIA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'A'."]},{word:"TRIGO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'O'."]},{word:"TUITS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'S'."]},{word:"VELAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'S'."]},{word:"ALTAR",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'R'."]},{word:"ATACA",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'A'."]},{word:"BODAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'S'."]},{word:"DIOSA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'A'."]},{word:"DISTE",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'E'."]},{word:"FLACO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'O'."]},{word:"VEGAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'S'."]},{word:"VERAN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'N'."]},{word:"BANDO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'O'."]},{word:"FORMO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'F' y termina con 'O'."]},{word:"GAFAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'G' y termina con 'S'."]},{word:"MARTE",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'E'."]},{word:"RICAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'R' y termina con 'S'."]},{word:"RISAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'S'."]},{word:"SEGUI",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'I'."]},{word:"SUMAR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'R'."]},{word:"USABA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'U' y termina con 'A'."]},{word:"VERME",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'V' y termina con 'E'."]},{word:"ACUSA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'A'."]},{word:"AJENA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'A'."]},{word:"AJENO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'A' y termina con 'O'."]},{word:"HUECO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'H' y termina con 'O'."]},{word:"JOYAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'J' y termina con 'S'."]},{word:"PANEL",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'L'."]},{word:"ASILO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'A' y termina con 'O'."]},{word:"BOLSO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'B' y termina con 'O'."]},{word:"FAUNA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'F' y termina con 'A'."]},{word:"FUNDA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'A'."]},{word:"MUERO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'M' y termina con 'O'."]},{word:"SALVA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'S' y termina con 'A'."]},{word:"ULTRA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'U' y termina con 'A'."]},{word:"VACAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'V' y termina con 'S'."]},{word:"VACIA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'V' y termina con 'A'."]},{word:"BARES",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'S'."]},{word:"BRUTO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'B' y termina con 'O'."]},{word:"CANON",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'N'."]},{word:"CRUDO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'O'."]},{word:"DIMOS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'S'."]},{word:"FINCA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'A'."]},{word:"LATIN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'L' y termina con 'N'."]},{word:"LUCRO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'L' y termina con 'O'."]},{word:"PASES",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'P' y termina con 'S'."]},{word:"PILAS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'S'."]},{word:"RAZAS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'S'."]},{word:"RUMOR",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'R' y termina con 'R'."]},{word:"TUNEL",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'L'."]},{word:"VINOS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'V' y termina con 'S'."]},{word:"ELITE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'E' y termina con 'E'."]},{word:"COBRO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'O'."]},{word:"DECIS",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'S'."]},{word:"OREJA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'O' y termina con 'A'."]},{word:"PIBES",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'S'."]},{word:"TURCO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'T' y termina con 'O'."]},{word:"ANCHA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'A'."]},{word:"ATACO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'O'."]},{word:"ATRAE",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'E'."]},{word:"CHECA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'A'."]},{word:"CHUPA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'A'."]},{word:"CURAR",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'C' y termina con 'R'."]},{word:"DADOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'D' y termina con 'S'."]},{word:"DURAR",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'D' y termina con 'R'."]},{word:"FUNDO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'O'."]},{word:"GRITA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'G' y termina con 'A'."]},{word:"PLOMO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'P' y termina con 'O'."]},{word:"PODRE",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'E'."]},{word:"PRADO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'O'."]},{word:"SUBEN",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'S' y termina con 'N'."]},{word:"TINTA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'A'."]},{word:"CITAR",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'C' y termina con 'R'."]},{word:"DEBUT",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'D' y termina con 'T'."]},{word:"FASES",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'F' y termina con 'S'."]},{word:"FURIA",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'F' y termina con 'A'."]},{word:"GALLO",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'G' y termina con 'O'."]},{word:"GUION",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'G' y termina con 'N'."]},{word:"LICEO",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'L' y termina con 'O'."]},{word:"MEMES",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'M' y termina con 'S'."]},{word:"PAGUE",hints:["Contiene 5 letras \xFAnicas.","Todas sus letras son distintas.","Empieza con 'P' y termina con 'E'."]},{word:"TARDA",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'T' y termina con 'A'."]},{word:"VASOS",hints:["Contiene 4 letras \xFAnicas.","Repite una letra.","Empieza con 'V' y termina con 'S'."]},{word:"AMABA",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'A'."]},{word:"ARMAR",hints:["Contiene 3 letras \xFAnicas.","Repite una letra.","Empieza con 'A' y termina con 'R'."]}]},Q=[...t.easy.map(V=>V.word),...t.medium.map(V=>V.word),...t.hard.map(V=>V.word),...t.ultraHard.map(V=>V.word)];function H(V=(0,e.E)()){let X=Math.max(0,Math.floor((V-new Date(2024,0,1))/864e5)),fe=(X%4+4)%4,Ae=["Easy","Medium","Hard","Ultra-Hard"][fe],re=["easy","medium","hard","ultraHard"][fe],D=t[re]&&t[re].length>0?t[re]:t.easy,ze=Math.floor(X/4)%D.length;return{...D[ze]||D[0],difficulty:Ae,dayNumber:X+1}}},9796:(ie,te,C)=>{Promise.resolve().then(C.bind(C,5613))}},ie=>{ie.O(0,[316,756,441,794,358],()=>ie(ie.s=9796)),_N_E=ie.O()}]);
