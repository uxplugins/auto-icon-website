"use strict";(self.webpackChunkauto_icon=self.webpackChunkauto_icon||[]).push([[979],{80990:function(e){function a(e){!function(e){var a=/\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;e.languages.protobuf=e.languages.extend("clike",{"class-name":{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/}),e.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:a}},builtin:a,"positional-class-name":{pattern:/(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[A-Za-z_]\w*(?=\s*=)/,lookbehind:!0}})}(e)}e.exports=a,a.displayName="protobuf",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_protobuf-c7413b98579a6f59a9e6.js.map