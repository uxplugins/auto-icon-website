"use strict";(self.webpackChunkauto_icon=self.webpackChunkauto_icon||[]).push([[3846,3047],{45480:function(e,n,a){var t=a(54326);function o(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=o,o.displayName="handlebars",o.aliases=[]},54326:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,r){if(a.language===t){var i=a.tokenStack=[];a.code=a.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,s=i.length;-1!==a.code.indexOf(o=n(t,s));)++s;return i[s]=e,o})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var o=0,r=Object.keys(a.tokenStack);!function i(s){for(var u=0;u<s.length&&!(o>=r.length);u++){var l=s[u];if("string"==typeof l||l.content&&"string"==typeof l.content){var c=r[o],p=a.tokenStack[c],g="string"==typeof l?l:l.content,f=n(t,c),d=g.indexOf(f);if(d>-1){++o;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,i([k])),m.push(b),h&&m.push.apply(m,i([h])),"string"==typeof l?s.splice.apply(s,[u,1].concat(m)):l.content=m}}else l.content&&i(l.content)}return s}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars-0c736a43325c4e7ab938.js.map