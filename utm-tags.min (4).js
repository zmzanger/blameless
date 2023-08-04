(()=>{var w=({customFormFields:e={}})=>{let r={rl_utm_source:e?.source||"rl_utm_source",rl_utm_medium:e?.medium||"rl_utm_medium",rl_utm_campaign:e?.campaign||"rl_utm_campaign",rl_utm_content:e?.content||"rl_utm_content",rl_utm_term:e?.term||"rl_utm_term"},o=Object.values(r),m={[r.rl_utm_source]:t.utm_source,[r.rl_utm_medium]:t.utm_medium,[r.rl_utm_campaign]:t.utm_campaign,[r.rl_utm_content]:t.utm_content,[r.rl_utm_term]:t.utm_term};return{FORM_FIELD_IDS_MAP:r,FORM_FIELD_IDS_LIST:o,FORM_FIELD_IDS_TO_UTM_MAP:m}},t={utm_source:"utm_source",utm_medium:"utm_medium",utm_campaign:"utm_campaign",utm_term:"utm_term",utm_content:"utm_content"},E=Object.values(t),S=["www.google.com","google.com","www.bing.com","bing.com","www.yahoo.com","yahoo.com"],f=["www.facebook.com","facebook.com","www.twitter.com","twitter.com","www.linkedin.com","linkedin.com"],T=[...S,...f],l="session",_={[t.utm_source]:"Direct",[t.utm_medium]:"Direct",[t.utm_campaign]:"Not Provided",[t.utm_term]:"",[t.utm_content]:""},a={[t.utm_source]:"Web Referral",[t.utm_medium]:"",[t.utm_campaign]:"Not Provided",[t.utm_term]:"",[t.utm_content]:""};function g(e){return{[t.utm_source]:e.get(t.utm_source),[t.utm_medium]:e.get(t.utm_medium),[t.utm_campaign]:e.get(t.utm_campaign),[t.utm_term]:e.get(t.utm_term),[t.utm_content]:e.get(t.utm_content)}}function R(e){let r=g(e);return E.some(o=>r[o])}function U(){let e=window.location.host,r=document.referrer?new URL(document.referrer).host:"";return!document.referrer||location.href.includes(document.referrer)||e===r?!1:(console.log("Referrer",document.referrer),!0)}function A(e){return{[t.utm_source]:e.get(t.utm_source)||_[t.utm_source],[t.utm_medium]:e.get(t.utm_medium)||_[t.utm_medium],[t.utm_campaign]:e.get(t.utm_campaign)||_[t.utm_campaign],[t.utm_term]:e.get(t.utm_term)||_[t.utm_term],[t.utm_content]:e.get(t.utm_content)||_[t.utm_content]}}function h(){let e=JSON.parse(localStorage.getItem(l));if(console.log({session:e}),!e)return!0;let r=e.expirationDate;return new Date().getTime()>r}function D(){let e=JSON.parse(localStorage.getItem(l));return e?e.utm:{}}function I({sessionExpirationTime:e}){let r=new URLSearchParams(window.location.search);R(r)?(console.info("Found UTM params: Creating session with UTM params"),F({params:r,sessionExpirationTime:e})):U()?(console.info("Found know referrer: Creating new session with referrer"),M({sessionExpirationTime:e})):h()&&(console.info("Session Expired: Creating new session with default values"),d({utmParams:A(r),sessionExpirationTime:e}))}function d({utmParams:e,sessionExpirationTime:r}){let o=new Date().getTime()+r*6e4,m={utm:e,expirationDate:o};localStorage.setItem(l,JSON.stringify(m))}function F({params:e,sessionExpirationTime:r}){let o=g(e);d({utmParams:o,sessionExpirationTime:r})}function M({referrer:e="",sessionExpirationTime:r}){let o=window.location.host,m=e||new URL(document.referrer).host,n=o===m?"Direct":m,i,c,s,u;T.includes(n)?(f.includes(n)?i="Organic Social":S.includes(n)&&(i="Organic Search"),n=n.replace(".com","").replace("www.","")):i="Web Referral";let x={[t.utm_source]:n||a[t.utm_source],[t.utm_medium]:i||a[t.utm_medium],[t.utm_campaign]:c||a[t.utm_campaign],[t.utm_term]:s||a[t.utm_term],[t.utm_content]:u||a[t.utm_content]};d({utmParams:x,sessionExpirationTime:r})}function p({container:e,inputSelectType:r="name",customFormFields:o={}}){let{FORM_FIELD_IDS_LIST:m,FORM_FIELD_IDS_TO_UTM_MAP:n}=w({customFormFields:o}),i=D();m.forEach(c=>{let s,u=e||"";r==="className"?u+=` input.${c}`:r==="name"?u+=` input[name='${c}']`:r==="id"&&(u+=` input#${c}`),s=document.querySelector(u.trim()),console.log({field:s,selector:u.trim(),container:e}),s&&(s.value=i[n[c]]||"")})}var O=(()=>{let e={sessionExpirationTime:30,inputSelectType:"name",container:"",customFormFields:{}},r=!1;async function o(m){e={...e,...m};let{sessionExpirationTime:n,inputSelectType:i,customFormFields:c,container:s}=e;I({sessionExpirationTime:n});let u={inputSelectType:i,customFormFields:c,container:s};r?p(u):(r=!0,window.addEventListener("load",()=>p(u)))}return{init:o,customInit:m=>{if(!m?.container)throw new Error("container param is required");o(m||e)}}})();window.UtmTags||(window.UtmTags=O);})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2dldC1jb25zdGFudHMuanMiLCAiLi4vc3JjL2hlbHBlcnMuanMiLCAiLi4vc3JjL3Nlc3Npb24uanMiLCAiLi4vc3JjL2NoZWNrLWZpZWxkcy5qcyIsICIuLi9zcmMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBnZXRGb3JtRmllbGRzID0gKHsgY3VzdG9tRm9ybUZpZWxkcyA9IHt9IH0pID0+IHtcbiAgY29uc3QgRk9STV9GSUVMRF9JRFNfTUFQID0ge1xuICAgIHJsX3V0bV9zb3VyY2U6IGN1c3RvbUZvcm1GaWVsZHM/LnNvdXJjZSB8fCAncmxfdXRtX3NvdXJjZScsXG4gICAgcmxfdXRtX21lZGl1bTogY3VzdG9tRm9ybUZpZWxkcz8ubWVkaXVtIHx8ICdybF91dG1fbWVkaXVtJyxcbiAgICBybF91dG1fY2FtcGFpZ246IGN1c3RvbUZvcm1GaWVsZHM/LmNhbXBhaWduIHx8ICdybF91dG1fY2FtcGFpZ24nLFxuICAgIHJsX3V0bV9jb250ZW50OiBjdXN0b21Gb3JtRmllbGRzPy5jb250ZW50IHx8ICdybF91dG1fY29udGVudCcsXG4gICAgcmxfdXRtX3Rlcm06IGN1c3RvbUZvcm1GaWVsZHM/LnRlcm0gfHwgJ3JsX3V0bV90ZXJtJyxcbiAgfTtcbiAgY29uc3QgRk9STV9GSUVMRF9JRFNfTElTVCA9IE9iamVjdC52YWx1ZXMoRk9STV9GSUVMRF9JRFNfTUFQKTtcbiAgY29uc3QgRk9STV9GSUVMRF9JRFNfVE9fVVRNX01BUCA9IHtcbiAgICBbRk9STV9GSUVMRF9JRFNfTUFQLnJsX3V0bV9zb3VyY2VdOiBVVE1fVEFHU19NQVAudXRtX3NvdXJjZSxcbiAgICBbRk9STV9GSUVMRF9JRFNfTUFQLnJsX3V0bV9tZWRpdW1dOiBVVE1fVEFHU19NQVAudXRtX21lZGl1bSxcbiAgICBbRk9STV9GSUVMRF9JRFNfTUFQLnJsX3V0bV9jYW1wYWlnbl06IFVUTV9UQUdTX01BUC51dG1fY2FtcGFpZ24sXG4gICAgW0ZPUk1fRklFTERfSURTX01BUC5ybF91dG1fY29udGVudF06IFVUTV9UQUdTX01BUC51dG1fY29udGVudCxcbiAgICBbRk9STV9GSUVMRF9JRFNfTUFQLnJsX3V0bV90ZXJtXTogVVRNX1RBR1NfTUFQLnV0bV90ZXJtLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgRk9STV9GSUVMRF9JRFNfTUFQLFxuICAgIEZPUk1fRklFTERfSURTX0xJU1QsXG4gICAgRk9STV9GSUVMRF9JRFNfVE9fVVRNX01BUCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBVVE1fVEFHU19NQVAgPSB7XG4gIHV0bV9zb3VyY2U6ICd1dG1fc291cmNlJyxcbiAgdXRtX21lZGl1bTogJ3V0bV9tZWRpdW0nLFxuICB1dG1fY2FtcGFpZ246ICd1dG1fY2FtcGFpZ24nLFxuICB1dG1fdGVybTogJ3V0bV90ZXJtJyxcbiAgdXRtX2NvbnRlbnQ6ICd1dG1fY29udGVudCcsXG59O1xuXG5leHBvcnQgY29uc3QgVVRNX1RBR1NfTElTVCA9IE9iamVjdC52YWx1ZXMoVVRNX1RBR1NfTUFQKTtcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9FTkdJTkVfSE9TVFMgPSBbXG4gICd3d3cuZ29vZ2xlLmNvbScsXG4gICdnb29nbGUuY29tJyxcbiAgJ3d3dy5iaW5nLmNvbScsXG4gICdiaW5nLmNvbScsXG4gICd3d3cueWFob28uY29tJyxcbiAgJ3lhaG9vLmNvbScsXG5dO1xuZXhwb3J0IGNvbnN0IFNPQ0lBTF9NRURJQV9IT1NUUyA9IFtcbiAgJ3d3dy5mYWNlYm9vay5jb20nLFxuICAnZmFjZWJvb2suY29tJyxcbiAgJ3d3dy50d2l0dGVyLmNvbScsXG4gICd0d2l0dGVyLmNvbScsXG4gICd3d3cubGlua2VkaW4uY29tJyxcbiAgJ2xpbmtlZGluLmNvbScsXG5dO1xuXG5leHBvcnQgY29uc3QgUkVGRVJSRVJfSE9TVFMgPSBbLi4uU0VBUkNIX0VOR0lORV9IT1NUUywgLi4uU09DSUFMX01FRElBX0hPU1RTXTtcblxuZXhwb3J0IGNvbnN0IFNFU1NJT05fS0VZID0gJ3Nlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgVVRNX1RBR1NfREVGQVVMVF9WQUxVRVMgPSB7XG4gIFtVVE1fVEFHU19NQVAudXRtX3NvdXJjZV06ICdEaXJlY3QnLFxuICBbVVRNX1RBR1NfTUFQLnV0bV9tZWRpdW1dOiAnRGlyZWN0JyxcbiAgW1VUTV9UQUdTX01BUC51dG1fY2FtcGFpZ25dOiAnTm90IFByb3ZpZGVkJyxcbiAgW1VUTV9UQUdTX01BUC51dG1fdGVybV06ICcnLFxuICBbVVRNX1RBR1NfTUFQLnV0bV9jb250ZW50XTogJycsXG59O1xuXG5leHBvcnQgY29uc3QgVVRNX1RBR1NfUkVGRVJSRVJfREVGQVVMVF9WQUxVRVMgPSB7XG4gIFtVVE1fVEFHU19NQVAudXRtX3NvdXJjZV06ICdXZWIgUmVmZXJyYWwnLFxuICBbVVRNX1RBR1NfTUFQLnV0bV9tZWRpdW1dOiAnJyxcbiAgW1VUTV9UQUdTX01BUC51dG1fY2FtcGFpZ25dOiAnTm90IFByb3ZpZGVkJyxcbiAgW1VUTV9UQUdTX01BUC51dG1fdGVybV06ICcnLFxuICBbVVRNX1RBR1NfTUFQLnV0bV9jb250ZW50XTogJycsXG59O1xuIiwgImltcG9ydCB7XG4gIFJFRkVSUkVSX0hPU1RTLFxuICBTRVNTSU9OX0tFWSxcbiAgVVRNX1RBR1NfREVGQVVMVF9WQUxVRVMsXG4gIFVUTV9UQUdTX0xJU1QsXG4gIFVUTV9UQUdTX01BUCxcbn0gZnJvbSAnLi9nZXQtY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFV0bVBhcmFtcyhwYXJhbXMpIHtcbiAgcmV0dXJuIHtcbiAgICBbVVRNX1RBR1NfTUFQLnV0bV9zb3VyY2VdOiBwYXJhbXMuZ2V0KFVUTV9UQUdTX01BUC51dG1fc291cmNlKSxcbiAgICBbVVRNX1RBR1NfTUFQLnV0bV9tZWRpdW1dOiBwYXJhbXMuZ2V0KFVUTV9UQUdTX01BUC51dG1fbWVkaXVtKSxcbiAgICBbVVRNX1RBR1NfTUFQLnV0bV9jYW1wYWlnbl06IHBhcmFtcy5nZXQoVVRNX1RBR1NfTUFQLnV0bV9jYW1wYWlnbiksXG4gICAgW1VUTV9UQUdTX01BUC51dG1fdGVybV06IHBhcmFtcy5nZXQoVVRNX1RBR1NfTUFQLnV0bV90ZXJtKSxcbiAgICBbVVRNX1RBR1NfTUFQLnV0bV9jb250ZW50XTogcGFyYW1zLmdldChVVE1fVEFHU19NQVAudXRtX2NvbnRlbnQpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQW55VXRtUGFyYW1zKHBhcmFtcykge1xuICBjb25zdCB1dG1QcmFtcyA9IGdldFV0bVBhcmFtcyhwYXJhbXMpO1xuXG4gIHJldHVybiBVVE1fVEFHU19MSVNULnNvbWUodGFnID0+IHV0bVByYW1zW3RhZ10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzUmVmZXJyZXIoKSB7XG4gIGNvbnN0IGN1cnJlbnRIb3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gIGNvbnN0IGN1cnJlbnRSZWZlcnJlckhvc3QgPSBkb2N1bWVudC5yZWZlcnJlciA/IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLmhvc3QgOiAnJztcblxuICBpZiAoIWRvY3VtZW50LnJlZmVycmVyIHx8IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoZG9jdW1lbnQucmVmZXJyZXIpIHx8IGN1cnJlbnRIb3N0ID09PSBjdXJyZW50UmVmZXJyZXJIb3N0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ1JlZmVycmVyJywgZG9jdW1lbnQucmVmZXJyZXIpO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXRtUGFyYW1zV2l0aERlZmF1bHQocGFyYW1zKSB7XG4gIHJldHVybiB7XG4gICAgW1VUTV9UQUdTX01BUC51dG1fc291cmNlXTpcbiAgICAgIHBhcmFtcy5nZXQoVVRNX1RBR1NfTUFQLnV0bV9zb3VyY2UpIHx8XG4gICAgICBVVE1fVEFHU19ERUZBVUxUX1ZBTFVFU1tVVE1fVEFHU19NQVAudXRtX3NvdXJjZV0sXG4gICAgW1VUTV9UQUdTX01BUC51dG1fbWVkaXVtXTpcbiAgICAgIHBhcmFtcy5nZXQoVVRNX1RBR1NfTUFQLnV0bV9tZWRpdW0pIHx8XG4gICAgICBVVE1fVEFHU19ERUZBVUxUX1ZBTFVFU1tVVE1fVEFHU19NQVAudXRtX21lZGl1bV0sXG4gICAgW1VUTV9UQUdTX01BUC51dG1fY2FtcGFpZ25dOlxuICAgICAgcGFyYW1zLmdldChVVE1fVEFHU19NQVAudXRtX2NhbXBhaWduKSB8fFxuICAgICAgVVRNX1RBR1NfREVGQVVMVF9WQUxVRVNbVVRNX1RBR1NfTUFQLnV0bV9jYW1wYWlnbl0sXG4gICAgW1VUTV9UQUdTX01BUC51dG1fdGVybV06XG4gICAgICBwYXJhbXMuZ2V0KFVUTV9UQUdTX01BUC51dG1fdGVybSkgfHxcbiAgICAgIFVUTV9UQUdTX0RFRkFVTFRfVkFMVUVTW1VUTV9UQUdTX01BUC51dG1fdGVybV0sXG4gICAgW1VUTV9UQUdTX01BUC51dG1fY29udGVudF06XG4gICAgICBwYXJhbXMuZ2V0KFVUTV9UQUdTX01BUC51dG1fY29udGVudCkgfHxcbiAgICAgIFVUTV9UQUdTX0RFRkFVTFRfVkFMVUVTW1VUTV9UQUdTX01BUC51dG1fY29udGVudF0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXNzaW9uRXhwaXJlZENoZWNrZXIoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fS0VZKSk7XG5cbiAgY29uc29sZS5sb2coeyBzZXNzaW9uIH0pO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBzZXNzaW9uLmV4cGlyYXRpb25EYXRlO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZSA+IGV4cGlyYXRpb25EYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXRtUGFyYW1zRnJvbVNlc3Npb24oKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fS0VZKSk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcmV0dXJuIHNlc3Npb24udXRtO1xufVxuIiwgImltcG9ydCB7XG4gIFJFRkVSUkVSX0hPU1RTLFxuICBTRUFSQ0hfRU5HSU5FX0hPU1RTLFxuICBTRVNTSU9OX0tFWSxcbiAgU09DSUFMX01FRElBX0hPU1RTLFxuICBVVE1fVEFHU19NQVAsXG4gIFVUTV9UQUdTX1JFRkVSUkVSX0RFRkFVTFRfVkFMVUVTLFxufSBmcm9tICcuL2dldC1jb25zdGFudHMuanMnO1xuaW1wb3J0IHtcbiAgZ2V0VXRtUGFyYW1zLFxuICBnZXRVdG1QYXJhbXNXaXRoRGVmYXVsdCxcbiAgaGFzQW55VXRtUGFyYW1zLFxuICBoYXNSZWZlcnJlcixcbiAgc2Vzc2lvbkV4cGlyZWRDaGVja2VyLFxufSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVNlc3Npb24oeyBzZXNzaW9uRXhwaXJhdGlvblRpbWUgfSkge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gIGlmIChoYXNBbnlVdG1QYXJhbXMocGFyYW1zKSkge1xuICAgIGNvbnNvbGUuaW5mbygnRm91bmQgVVRNIHBhcmFtczogQ3JlYXRpbmcgc2Vzc2lvbiB3aXRoIFVUTSBwYXJhbXMnKTtcbiAgICBjcmVhdGVTZXNzaW9uV2l0aFV0bVBhcmFtcyh7IHBhcmFtcywgc2Vzc2lvbkV4cGlyYXRpb25UaW1lIH0pO1xuICB9IGVsc2UgaWYgKGhhc1JlZmVycmVyKCkpIHtcbiAgICBjb25zb2xlLmluZm8oJ0ZvdW5kIGtub3cgcmVmZXJyZXI6IENyZWF0aW5nIG5ldyBzZXNzaW9uIHdpdGggcmVmZXJyZXInKTtcbiAgICBjcmVhdGVTZXNzaW9uV2l0aFJlZmVycmFsKHsgc2Vzc2lvbkV4cGlyYXRpb25UaW1lIH0pO1xuICB9IGVsc2UgaWYgKHNlc3Npb25FeHBpcmVkQ2hlY2tlcigpKSB7XG4gICAgY29uc29sZS5pbmZvKCdTZXNzaW9uIEV4cGlyZWQ6IENyZWF0aW5nIG5ldyBzZXNzaW9uIHdpdGggZGVmYXVsdCB2YWx1ZXMnKTtcbiAgICBjcmVhdGVTZXNzaW9uKHtcbiAgICAgIHV0bVBhcmFtczogZ2V0VXRtUGFyYW1zV2l0aERlZmF1bHQocGFyYW1zKSxcbiAgICAgIHNlc3Npb25FeHBpcmF0aW9uVGltZSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbih7IHV0bVBhcmFtcywgc2Vzc2lvbkV4cGlyYXRpb25UaW1lIH0pIHtcbiAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHNlc3Npb25FeHBpcmF0aW9uVGltZSAqIDYwMDAwOyAvLyBtdWx0aXBseSBieSA2MDAwMCB0byBnZXQgdGltZSBpbiBtaWxsaXNlY29uZHNcblxuICBjb25zdCBzZXNzaW9uID0ge1xuICAgIHV0bTogdXRtUGFyYW1zLFxuICAgIGV4cGlyYXRpb25EYXRlLFxuICB9O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFU1NJT05fS0VZLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uV2l0aFV0bVBhcmFtcyh7IHBhcmFtcywgc2Vzc2lvbkV4cGlyYXRpb25UaW1lIH0pIHtcbiAgY29uc3QgdXRtUGFyYW1zID0gZ2V0VXRtUGFyYW1zKHBhcmFtcyk7XG4gIGNyZWF0ZVNlc3Npb24oeyB1dG1QYXJhbXMsIHNlc3Npb25FeHBpcmF0aW9uVGltZSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlc3Npb25XaXRoUmVmZXJyYWwoe1xuICByZWZlcnJlciA9ICcnLFxuICBzZXNzaW9uRXhwaXJhdGlvblRpbWUsXG59KSB7XG4gIGNvbnN0IGN1cnJlbnRIb3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gIGNvbnN0IGN1cnJlbnRSZWZlcnJlckhvc3QgPSByZWZlcnJlciB8fCBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5ob3N0O1xuICBsZXQgdXRtX3NvdXJjZSA9IGN1cnJlbnRIb3N0ID09PSBjdXJyZW50UmVmZXJyZXJIb3N0ID8gJ0RpcmVjdCcgOiBjdXJyZW50UmVmZXJyZXJIb3N0O1xuICBsZXQgdXRtX21lZGl1bSwgdXRtX2NhbXBhaWduLCB1dG1fdGVybSwgdXRtX2NvbnRlbnQ7XG5cbiAgaWYgKFJFRkVSUkVSX0hPU1RTLmluY2x1ZGVzKHV0bV9zb3VyY2UpKSB7XG4gICAgaWYgKFNPQ0lBTF9NRURJQV9IT1NUUy5pbmNsdWRlcyh1dG1fc291cmNlKSkge1xuICAgICAgdXRtX21lZGl1bSA9ICdPcmdhbmljIFNvY2lhbCc7XG4gICAgfSBlbHNlIGlmIChTRUFSQ0hfRU5HSU5FX0hPU1RTLmluY2x1ZGVzKHV0bV9zb3VyY2UpKSB7XG4gICAgICB1dG1fbWVkaXVtID0gJ09yZ2FuaWMgU2VhcmNoJztcbiAgICB9XG5cbiAgICB1dG1fc291cmNlID0gdXRtX3NvdXJjZS5yZXBsYWNlKCcuY29tJywgJycpLnJlcGxhY2UoJ3d3dy4nLCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgdXRtX21lZGl1bSA9ICdXZWIgUmVmZXJyYWwnO1xuICB9XG5cbiAgY29uc3QgdXRtUGFyYW1zID0ge1xuICAgIFtVVE1fVEFHU19NQVAudXRtX3NvdXJjZV06XG4gICAgICB1dG1fc291cmNlIHx8IFVUTV9UQUdTX1JFRkVSUkVSX0RFRkFVTFRfVkFMVUVTW1VUTV9UQUdTX01BUC51dG1fc291cmNlXSxcbiAgICBbVVRNX1RBR1NfTUFQLnV0bV9tZWRpdW1dOlxuICAgICAgdXRtX21lZGl1bSB8fCBVVE1fVEFHU19SRUZFUlJFUl9ERUZBVUxUX1ZBTFVFU1tVVE1fVEFHU19NQVAudXRtX21lZGl1bV0sXG4gICAgW1VUTV9UQUdTX01BUC51dG1fY2FtcGFpZ25dOlxuICAgICAgdXRtX2NhbXBhaWduIHx8XG4gICAgICBVVE1fVEFHU19SRUZFUlJFUl9ERUZBVUxUX1ZBTFVFU1tVVE1fVEFHU19NQVAudXRtX2NhbXBhaWduXSxcbiAgICBbVVRNX1RBR1NfTUFQLnV0bV90ZXJtXTpcbiAgICAgIHV0bV90ZXJtIHx8IFVUTV9UQUdTX1JFRkVSUkVSX0RFRkFVTFRfVkFMVUVTW1VUTV9UQUdTX01BUC51dG1fdGVybV0sXG4gICAgW1VUTV9UQUdTX01BUC51dG1fY29udGVudF06XG4gICAgICB1dG1fY29udGVudCB8fCBVVE1fVEFHU19SRUZFUlJFUl9ERUZBVUxUX1ZBTFVFU1tVVE1fVEFHU19NQVAudXRtX2NvbnRlbnRdLFxuICB9O1xuXG4gIGNyZWF0ZVNlc3Npb24oeyB1dG1QYXJhbXMsIHNlc3Npb25FeHBpcmF0aW9uVGltZSB9KTtcbn1cbiIsICJpbXBvcnQgeyBnZXRVdG1QYXJhbXNGcm9tU2Vzc2lvbiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzIH0gZnJvbSAnLi9nZXQtY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRmllbGRzKHtcbiAgY29udGFpbmVyLFxuICBpbnB1dFNlbGVjdFR5cGUgPSAnbmFtZScsXG4gIGN1c3RvbUZvcm1GaWVsZHMgPSB7fSxcbn0pIHtcbiAgY29uc3QgeyBGT1JNX0ZJRUxEX0lEU19MSVNULCBGT1JNX0ZJRUxEX0lEU19UT19VVE1fTUFQIH0gPSBnZXRGb3JtRmllbGRzKHtcbiAgICBjdXN0b21Gb3JtRmllbGRzLFxuICB9KTtcbiAgY29uc3QgdXRtUGFyYW1zID0gZ2V0VXRtUGFyYW1zRnJvbVNlc3Npb24oKTtcblxuICBGT1JNX0ZJRUxEX0lEU19MSVNULmZvckVhY2goaWQgPT4ge1xuICAgIGxldCBmaWVsZDtcbiAgICBsZXQgc2VsZWN0b3IgPSBjb250YWluZXIgfHwgJyc7XG5cbiAgICBpZiAoaW5wdXRTZWxlY3RUeXBlID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgc2VsZWN0b3IgKz0gYCBpbnB1dC4ke2lkfWA7XG4gICAgfSBlbHNlIGlmIChpbnB1dFNlbGVjdFR5cGUgPT09ICduYW1lJykge1xuICAgICAgc2VsZWN0b3IgKz0gYCBpbnB1dFtuYW1lPScke2lkfSddYDtcbiAgICB9IGVsc2UgaWYgKGlucHV0U2VsZWN0VHlwZSA9PT0gJ2lkJykge1xuICAgICAgc2VsZWN0b3IgKz0gYCBpbnB1dCMke2lkfWA7XG4gICAgfVxuXG4gICAgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yLnRyaW0oKSk7XG4gICAgY29uc29sZS5sb2coeyBmaWVsZCwgc2VsZWN0b3I6IHNlbGVjdG9yLnRyaW0oKSwgY29udGFpbmVyIH0pO1xuXG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBmaWVsZC52YWx1ZSA9IHV0bVBhcmFtc1tGT1JNX0ZJRUxEX0lEU19UT19VVE1fTUFQW2lkXV0gfHwgJyc7XG4gICAgfVxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBpbml0aWFsaXplU2Vzc2lvbiB9IGZyb20gJy4vc2Vzc2lvbi5qcyc7XG5pbXBvcnQgeyBjaGVja0ZpZWxkcyB9IGZyb20gJy4vY2hlY2stZmllbGRzLmpzJztcblxuY29uc3QgVXRtVGFncyA9ICgoKSA9PiB7XG4gIGxldCBpbml0UGFyYW1zID0ge1xuICAgIHNlc3Npb25FeHBpcmF0aW9uVGltZTogMzAsIC8vIDMwIG1pbnV0ZXNcbiAgICBpbnB1dFNlbGVjdFR5cGU6ICduYW1lJyxcbiAgICBjb250YWluZXI6ICcnLFxuICAgIGN1c3RvbUZvcm1GaWVsZHM6IHt9LFxuICB9O1xuICBsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvLyBOT1RFOiBSdW4gaW4gYXN5bmMgd2F5IHRvIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGJsb2NrIHRoZSBwYWdlIGxvYWRcbiAgYXN5bmMgZnVuY3Rpb24gaW5pdChjdXN0b21QYXJhbXMpIHtcbiAgICBpbml0UGFyYW1zID0geyAuLi5pbml0UGFyYW1zLCAuLi5jdXN0b21QYXJhbXMgfTtcbiAgICBjb25zdCB7XG4gICAgICBzZXNzaW9uRXhwaXJhdGlvblRpbWUsXG4gICAgICBpbnB1dFNlbGVjdFR5cGUsXG4gICAgICBjdXN0b21Gb3JtRmllbGRzLFxuICAgICAgY29udGFpbmVyLFxuICAgIH0gPSBpbml0UGFyYW1zO1xuXG4gICAgaW5pdGlhbGl6ZVNlc3Npb24oeyBzZXNzaW9uRXhwaXJhdGlvblRpbWUgfSk7XG4gICAgY29uc3QgY2hlY2tGaWVsZHNQYXJhbXMgPSB7XG4gICAgICBpbnB1dFNlbGVjdFR5cGUsXG4gICAgICBjdXN0b21Gb3JtRmllbGRzLFxuICAgICAgY29udGFpbmVyLFxuICAgIH07XG5cbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGNoZWNrRmllbGRzKGNoZWNrRmllbGRzUGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjaGVja0ZpZWxkcyhjaGVja0ZpZWxkc1BhcmFtcykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHV0bSBwYXJhbXMgcXVlcnkgZXhhbXBsZSA/dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWJyYW5kJnV0bV90ZXJtPWtleXdvcmQmdXRtX2NvbnRlbnQ9YWRcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGN1c3RvbUluaXQ6IGN1c3RvbVBhcmFtcyA9PiB7XG4gICAgICBpZiAoIWN1c3RvbVBhcmFtcz8uY29udGFpbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY29udGFpbmVyIHBhcmFtIGlzIHJlcXVpcmVkJyk7XG4gICAgICB9XG5cbiAgICAgIGluaXQoY3VzdG9tUGFyYW1zIHx8IGluaXRQYXJhbXMpO1xuICAgIH0sXG4gIH07XG59KSgpO1xuXG5pZiAoIXdpbmRv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QUFDQSxHQUFjLFVBQ2pCLE1BQU0sSUFBSSxNQUFNLDZCQUE2QixFQUcvQ0QsRUFBS0MsR0FBZ0JILENBQVUsQ0FDakMsQ0FDRixDQUNGLEdBQUcsRUFFRSxPQUFPLFVBQ1YsT0FBTyxRQUFVRCIsCiAgIm5hbWVzIjogWyJnZXRGb3JtRmllbGRzIiwgImN1c3RvbUZvcm1GaWVsZHMiLCAiRk9STV9GSUVMRF9JRFNfTUFQIiwgIkZPUk1fRklFTERfSURTX0xJU1QiLCAiRk9STV9GSUVMRF9JRFNfVE9fVVRNX01BUCIsICJVVE1fVEFHU19NQVAiLCAiVVRNX1RBR1NfTElTVCIsICJTRUFSQ0hfRU5HSU5FX0hPU1RTIiwgIlNPQ0lBTF9NRURJQV9IT1NUUyIsICJSRUZFUlJFUl9IT1NUUyIsICJTRVNTSU9OX0tFWSIsICJVVE1fVEFHU19ERUZBVUxUX1ZBTFVFUyIsICJVVE1fVEFHU19SRUZFUlJFUl9ERUZBVUxUX1ZBTFVFUyIsICJnZXRVdG1QYXJhbXMiLCAicGFyYW1zIiwgIlVUTV9UQUdTX01BUCIsICJoYXNBbnlVdG1QYXJhbXMiLCAidXRtUHJhbXMiLCAiVVRNX1RBR1NfTElTVCIsICJ0YWciLCAiaGFzUmVmZXJyZXIiLCAiY3VycmVudEhvc3QiLCAiY3VycmVudFJlZmVycmVySG9zdCIsICJnZXRVdG1QYXJhbXNXaXRoRGVmYXVsdCIsICJVVE1fVEFHU19ERUZBVUxUX1ZBTFVFUyIsICJzZXNzaW9uRXhwaXJlZENoZWNrZXIiLCAic2Vzc2lvbiIsICJTRVNTSU9OX0tFWSIsICJleHBpcmF0aW9uRGF0ZSIsICJnZXRVdG1QYXJhbXNGcm9tU2Vzc2lvbiIsICJpbml0aWFsaXplU2Vzc2lvbiIsICJzZXNzaW9uRXhwaXJhdGlvblRpbWUiLCAicGFyYW1zIiwgImhhc0FueVV0bVBhcmFtcyIsICJjcmVhdGVTZXNzaW9uV2l0aFV0bVBhcmFtcyIsICJoYXNSZWZlcnJlciIsICJjcmVhdGVTZXNzaW9uV2l0aFJlZmVycmFsIiwgInNlc3Npb25FeHBpcmVkQ2hlY2tlciIsICJjcmVhdGVTZXNzaW9uIiwgImdldFV0bVBhcmFtc1dpdGhEZWZhdWx0IiwgInV0bVBhcmFtcyIsICJleHBpcmF0aW9uRGF0ZSIsICJzZXNzaW9uIiwgIlNFU1NJT05fS0VZIiwgImdldFV0bVBhcmFtcyIsICJyZWZlcnJlciIsICJjdXJyZW50SG9zdCIsICJjdXJyZW50UmVmZXJyZXJIb3N0IiwgInV0bV9zb3VyY2UiLCAidXRtX21lZGl1bSIsICJ1dG1fY2FtcGFpZ24iLCAidXRtX3Rlcm0iLCAidXRtX2NvbnRlbnQiLCAiUkVGRVJSRVJfSE9TVFMiLCAiU09DSUFMX01FRElBX0hPU1RTIiwgIlNFQVJDSF9FTkdJTkVfSE9TVFMiLCAiVVRNX1RBR1NfTUFQIiwgIlVUTV9UQUdTX1JFRkVSUkVSX0RFRkFVTFRfVkFMVUVTIiwgImNoZWNrRmllbGRzIiwgImNvbnRhaW5lciIsICJpbnB1dFNlbGVjdFR5cGUiLCAiY3VzdG9tRm9ybUZpZWxkcyIsICJGT1JNX0ZJRUxEX0lEU19MSVNUIiwgIkZPUk1fRklFTERfSURTX1RPX1VUTV9NQVAiLCAiZ2V0Rm9ybUZpZWxkcyIsICJ1dG1QYXJhbXMiLCAiZ2V0VXRtUGFyYW1zRnJvbVNlc3Npb24iLCAiaWQiLCAiZmllbGQiLCAic2VsZWN0b3IiLCAiVXRtVGFncyIsICJpbml0UGFyYW1zIiwgImluaXRpYWxpemVkIiwgImluaXQiLCAiY3VzdG9tUGFyYW1zIiwgInNlc3Npb25FeHBpcmF0aW9uVGltZSIsICJpbnB1dFNlbGVjdFR5cGUiLCAiY3VzdG9tRm9ybUZpZWxkcyIsICJjb250YWluZXIiLCAiaW5pdGlhbGl6ZVNlc3Npb24iLCAiY2hlY2tGaWVsZHNQYXJhbXMiLCAiY2hlY2tGaWVsZHMiXQp9Cg==
