function gingeranalytics(e){if(console.log(e),console.log(getCookie("ginger-cookie")),"Y"==getCookie("ginger-cookie"))var t="ga('create', '"+e+"', 'auto'); ga('send', 'pageview');";else var t="ga('create', '"+e+"', 'auto'); ga('set', 'anonymizeIP', true); ga('send', 'pageview');";var n=document.createElement("script");n.type="text/javascript",n.innerHTML="(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');"+t,console.log(n),document.getElementsByTagName("head")[0].appendChild(n)}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}