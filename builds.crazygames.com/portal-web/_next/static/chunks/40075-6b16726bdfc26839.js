try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="327dfc0d-7371-4e49-8875-9cae9d8f919c",e._sentryDebugIdIdentifier="sentry-dbid-327dfc0d-7371-4e49-8875-9cae9d8f919c")}catch(e){}{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=Object.assign({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:crazygames-portal":!0})}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40075],{57515:(e,t,r)=>{r.d(t,{A:()=>R});var n=r(98587),a=r(58168),o=r(96540),i=r(34164),s=r(17437),l=r(75659),u=r(24279),c=r(3552),d=r(6637),h=r(38413),f=r(31609);function y(e){return(0,f.Ay)("MuiSkeleton",e)}(0,h.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p=r(74848);let b=["animation","className","component","height","style","variant","width"],g=e=>e,v,m,w,C,k=e=>{let{classes:t,variant:r,animation:n,hasChildren:a,width:o,height:i}=e;return(0,l.A)({root:["root",r,n,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]},y,t)},_=(0,s.i7)(v||(v=g`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),A=(0,s.i7)(m||(m=g`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),P=(0,c.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(e=>{let{theme:t,ownerState:r}=e,n=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",o=parseFloat(t.shape.borderRadius);return(0,a.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,u.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===r.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===r.variant&&{borderRadius:"50%"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},r.hasChildren&&{"& > *":{visibility:"hidden"}},r.hasChildren&&!r.width&&{maxWidth:"fit-content"},r.hasChildren&&!r.height&&{height:"auto"})},e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,s.AH)(w||(w=g`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),_)},e=>{let{ownerState:t,theme:r}=e;return"wave"===t.animation&&(0,s.AH)(C||(C=g`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),A,(r.vars||r).palette.action.hover)}),R=o.forwardRef(function(e,t){let r=(0,d.A)({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:s,component:l="span",height:u,style:c,variant:h="text",width:f}=r,y=(0,n.A)(r,b),g=(0,a.A)({},r,{animation:o,component:l,variant:h,hasChildren:!!y.children}),v=k(g);return(0,p.jsx)(P,(0,a.A)({as:l,ref:t,className:(0,i.A)(v.root,s),ownerState:g},y,{style:(0,a.A)({width:f,height:u},c)}))})},18081:(e,t,r)=>{r.d(t,{_:()=>b});var n,a=r(31635),o=r(27243),i=r(60144),s=r(68195),l=r(54269),u=r(19794),c=r(67235),d=r(15737);function h(){}var f=["refetch","reobserve","fetchMore","updateQuery","startPolling","stopPolling","subscribeToMore"],y=["initialFetchPolicy","onCompleted","onError","defaultOptions","partialRefetch","canonizeResults"],p=["query","ssr","client","fetchPolicy","nextFetchPolicy","refetchWritePolicy","errorPolicy","pollInterval","notifyOnNetworkStatusChange","returnPartialData","skipPollAttempt"];function b(e,t){if(!1!==globalThis.__DEV__){var r,b=t||{};(0,u.h)(b,"canonizeResults","useLazyQuery"),(0,u.h)(b,"variables","useLazyQuery","Pass all `variables` to the returned `execute` function instead."),(0,u.h)(b,"context","useLazyQuery","Pass `context` to the returned `execute` function instead."),(0,u.h)(b,"onCompleted","useLazyQuery","If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."),(0,u.h)(b,"onError","useLazyQuery","If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."),(0,u.h)(b,"defaultOptions","useLazyQuery","Pass the options directly to the hook instead."),(0,u.h)(b,"initialFetchPolicy","useLazyQuery","Use the `fetchPolicy` option instead."),(0,u.h)(b,"partialRefetch","useLazyQuery")}var g=o.useRef(void 0),v=o.useRef(void 0),m=o.useRef(void 0),w=(0,i.l)(t,g.current||{}),C=null!==(r=null==w?void 0:w.query)&&void 0!==r?r:e;v.current=t,m.current=C;var k=(0,a.Cl)((0,a.Cl)({},w),{skip:!g.current}),_=(0,s.SX)(C,k),A=_.obsQueryFields,P=_.result,R=_.client,x=_.resultData,E=_.observable,M=_.onQueryExecuted,z=E.options.initialFetchPolicy||(0,s.kk)(k.defaultOptions,R.defaultOptions),Q=o.useReducer(function(e){return e+1},0)[1],D=o.useMemo(function(){for(var e={},t=function(t){var r=A[t];e[t]=function(){return!1!==globalThis.__DEV__&&"reobserve"===t&&!1!==globalThis.__DEV__&&c.V1.warn(80),g.current||(g.current=Object.create(null),Q()),r.apply(this,arguments)}},r=0;r<f.length;r++)t(f[r]);return e},[Q,A]),L=!!g.current,S=o.useMemo(function(){return(0,a.Cl)((0,a.Cl)((0,a.Cl)({},P),D),{called:L})},[P,D,L]),T=(n||(n=o.createContext(null)),o.useCallback(function(){var e=console.error;try{return console.error=h,o.useContext(n),!0}catch(e){return!1}finally{console.error=e}},[])),O=o.useRef(new Set),$=o.useCallback(function(e){if(!1!==globalThis.__DEV__){T()&&!1!==globalThis.__DEV__&&c.V1.warn(81);for(var t,r,n,o,l=0;l<y.length;l++){var u=y[l];O.current.has(u)||((0,d.cc)(e||{},u,"useLazyQuery.execute"),O.current.add(u))}for(var h=0;h<p.length;h++){var f=p[h];O.current.has(f)||((0,d.cc)(e||{},f,"useLazyQuery.execute","Please pass the option to the `useLazyQuery` hook instead."),O.current.add(f))}}g.current=e?(0,a.Cl)((0,a.Cl)({},e),{fetchPolicy:e.fetchPolicy||z}):{fetchPolicy:z};var b=(0,i.l)(v.current,(0,a.Cl)({query:m.current},g.current)),w=(r=(t=(0,a.Cl)((0,a.Cl)({},b),{skip:!1})).query||C,n=(0,s.Er)(R,r,t,!1)(E),o=E.reobserveAsConcast((0,s.t_)(E,R,t,n)),M(n),new Promise(function(e){var t;o.subscribe({next:function(e){t=e},error:function(){e((0,s.$X)(E.getCurrentResult(),x.previousData,E,R))},complete:function(){e((0,s.$X)(E.maskResult(t),x.previousData,E,R))}})})).then(function(e){return Object.assign(e,D)});return w.catch(function(){}),w},[T,R,C,D,z,E,x,M]),I=o.useRef($);return(0,l.E)(function(){I.current=$}),[o.useCallback(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return I.current.apply(I,e)},[]),S]}}}]);