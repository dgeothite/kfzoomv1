jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return-h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return-h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return-h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return-h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return-h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return-h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return-h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return-h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(l,j,r,k,h){var f=1.70158;var g=0;var e=k;if(j==0){return r}if((j/=h)==1){return r+k}if(!g){g=h*0.3}if(e<Math.abs(k)){e=k;var f=g/4}else{var f=g/(2*Math.PI)*Math.asin(k/e)}return-(e*Math.pow(2,10*(j-=1))*Math.sin((j*h-f)*(2*Math.PI)/g))+r},easeOutElastic:function(l,j,r,k,h){var f=1.70158;var g=0;var e=k;if(j==0){return r}if((j/=h)==1){return r+k}if(!g){g=h*0.3}if(e<Math.abs(k)){e=k;var f=g/4}else{var f=g/(2*Math.PI)*Math.asin(k/e)}return e*Math.pow(2,-10*j)*Math.sin((j*h-f)*(2*Math.PI)/g)+k+r},easeInOutElastic:function(l,j,r,k,h){var f=1.70158;var g=0;var e=k;if(j==0){return r}if((j/=h/2)==2){return r+k}if(!g){g=h*(0.3*1.5)}if(e<Math.abs(k)){e=k;var f=g/4}else{var f=g/(2*Math.PI)*Math.asin(k/e)}if(j<1){return-0.5*(e*Math.pow(2,10*(j-=1))*Math.sin((j*h-f)*(2*Math.PI)/g))+r}return e*Math.pow(2,-10*(j-=1))*Math.sin((j*h-f)*(2*Math.PI)/g)*0.5+k+r},easeInBack:function(e,f,a,n,h,g){if(g==undefined){g=1.70158}return n*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,n,h,g){if(g==undefined){g=1.70158}return n*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,n,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return n/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return n/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});(function(a){a.fn.hoverTimeout=function(d,j,b,e){return this.each(function(){var f=null,g=a(this);g.hover(function(){clearTimeout(f);f=setTimeout(function(){j.call(g)},d)},function(){clearTimeout(f);f=setTimeout(function(){e.call(g)},b)})})}})(jQuery);function createTicker(){var b=jQuery(".breaking-news ul").children();tickerItems=new Array();b.each(function(a){tickerItems.push(jQuery(this).html())});i=0;rotateTicker()}function rotateTicker(){if(i==tickerItems.length){i=0}tickerText=tickerItems[i];c=0;typetext();setTimeout("rotateTicker()",5000);i++}var isInTag=false;function typetext(){var b=tickerText.substr(c,1);if(b=="<"){isInTag=true}if(b==">"){isInTag=false}jQuery(".breaking-news ul").html(tickerText.substr(0,c++));if(c<tickerText.length+1){if(isInTag){typetext()}else{setTimeout("typetext()",28)}}else{c=1;tickerText=""}}function actinave(e){var h=window.location.href;e("#navi a").each(function(){if(this.href===h){var a=e(this).parents("li").children("a").addClass("current")}});e("#navi ul").removeClass("hidden");e("#navi li").hoverTimeout(100,function(){e(this).parent("ul").css("overflow","visible");e(this).children("ul").filter(":not(:animated)").slideDown()},500,function(){e(this).parent("ul").css("overflow","visible");e(this).children("ul").slideUp(800,"easeInExpo")});e("#mobilenav").click(function(){e("#navi").slideToggle();e(this).toggleClass("active");return false});e("#top_mobilenav").click(function(){e("#PageList1 ul").slideToggle();e(this).toggleClass("active");return false});function f(){if(e(window).width()>767){e("#navi").css("display","block").removeClass("suball")}else{if(e(window).width()<=767&&e("#mobilenav").attr("class")==="active"){e("#navi").css("display","block").addClass("suball")}else{if(e(window).width()<=767&&e("#mobilenav").attr("class")!=="active"){e("#navi").css("display","none").addClass("suball")}}}}function g(){if(e(window).width()>767){e("#PageList1 ul").css("display","block")}else{if(e(window).width()<=767&&e("#top_mobilenav").attr("class")==="active"){e("#PageList1 ul").css("display","block")}else{if(e(window).width()<=767&&e("#top_mobilenav").attr("class")!=="active"){e("#PageList1 ul").css("display","none")}}}}f();g();e(window).resize(f);e(window).resize(g)}function searching(a){(function(e){var l={blogURL:"",srcBlank:"",findText:"Search results for keyword",NotfindText:"No result!",Showthumb:true,LoadingText:"Searching...",scrthumbSize:50,summaryLength:100};l=e.extend({},l,a);var b=e("#ajax-search-form"),f=b.find(":text");b.append('<div id="search-result"></div>');var d=e("#search-result");b.on("submit",function(){var g=f.val();d.show().html('<div class="load">'+l.LoadingText+"</div>");e.get((l.blogURL===""?window.location.protocol+"//"+window.location.host:l.blogURL)+"/feeds/posts/summary?alt=json-in-script&q="+g+"&max-results=9999",function(p){var o=p.feed.entry,k,j,n,m,z="";if(o!==undefined){z="<h4>"+l.findText+" &quot;"+g+"&quot;</h4>";z+='<a class="close" href="/">&times;</a><ol>';for(var h=0;h<o.length;h++){var q=new RegExp(g,"ig"),n=o[h].title.$t.replace(q,"<mark>"+g+"</mark>");for(var A=0;A<o[h].link.length;A++){if(o[h].link[A].rel=="alternate"){m=o[h].link[A].href}}if(l.summaryLength>0){if("content"in o[h]){k=o[h].content.$t}else{if("summary"in o[h]){k=o[h].summary.$t}else{k=""}}k=k.replace(/<\S[^>]*>/g,"");if(k.length>l.summaryLength){k=k.substring(0,l.summaryLength)+"..."}k=k.replace(q,"<mark>"+g+"</mark>")}if(l.Showthumb===true){if("media$thumbnail"in o[h]){j=o[h].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+l.scrthumbSize+"-c")}else{j=l.srcBlank}}z+='<li><a href="'+m+'" >'+(l.Showthumb===true?'<img width="'+l.scrthumbSize+'" height="'+l.scrthumbSize+'" src="'+j+'"/>':"")+"<strong>"+n+"</strong></a>"+(l.summaryLength>0?"<p>"+k+"</p>":"")+"</li>"}z+="</ol>";d.html(z)}else{d.html('<a class="close" href="/">&times;</a><strong>'+l.NotfindText+"</strong>")}},"jsonp");return false});b.on("click",".close",function(){d.fadeOut();return false})})(jQuery)}function ShowPost1(a){(function(b){var g={blogURL:"",MaxPost:5,idcontaint:"",FirstImageSize:600,ImageSize:600,Summarylength:90,animated:false,loadingClass:"loadingz",pBlank:"",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};g=b.extend({},g,a);var d=b(g.idcontaint);d.html('<div class="box-content"><ul></ul></div>').addClass(g.loadingClass);b.get((g.blogURL===""?window.location.protocol+"//"+window.location.host:g.blogURL)+"/feeds/posts/summary"+(g.tagName===false?"":"/-/"+g.tagName)+"?max-results="+g.MaxPost+"&orderby=published&alt=json-in-script",function(t){var m,u,h,M,o,v,k,s,r,l,q,f,w="",p=t.feed.entry;for(var n=0;n<p.length;n++){for(var e=0;e<p[n].link.length;e++){if(p[n].link[e].rel=="alternate"){m=p[n].link[e].href;break}}for(var f=0;f<e;f++){if(p[n].link[f].rel=="replies"&&p[n].link[f].type=="text/html"){M=p[n].link[f].title.split(" ")[0];break}}if("media$thumbnail"in p[n]){o=p[n].media$thumbnail.url}else{o=g.pBlank}if("content"in p[n]){h=p[n].content.$t}else{if("summary"in p[n]){h=p[n].summary.$t}else{h=""}}h=h.replace(/<\S[^>]*>/g,"");if(h.length>g.Summarylength){h=h.substring(0,g.Summarylength)+"..."}if(p[n]===p[0]){o=o.replace(/\/s[0-9]+\-c/g,"/s"+g.FirstImageSize+"-p");if(o.indexOf("img.youtube.com/vi/")!=-1){o=o.replace("default","0")}k="<p>"+h+"</p>"}else{o=o.replace(/\/s[0-9]+\-c/g,"/s"+g.ImageSize+"-p");k=""}u=p[n].title.$t;f=p[n].published.$t.substring(0,10);s=f.substring(0,4);r=f.substring(5,7);l=f.substring(8,10);q=g.MonthNames[parseInt(r,10)-1];v='<div class="uj_thumb"><a title="'+u+'" class=" " href="'+m+'"><img src="'+o+'"/></a><div class="overlay"><a class="zoom" href="'+o+'"></a><a class="post-link" href="'+m+'"></a></div></div>';j='<a class="more-link" href="'+m+'"> Read More </a>';w+='<li><div class="inner-content" >'+v+'<h3><a href="'+m+'">'+u+'</a></h3><span class="post-meta"><span class="comt"><i class="icon-comments"></i>'+M+'</span> comment  <span class="dd"> <i class="icon-time"></i> '+l+'</span> <span class="dm">'+q+'</span> <span class="dy">'+s+"</span></span>"+k+" "+j+"</div></li>"}b("ul",d).append(w);if(g.animated){b("ul",d).addClass("scroll-item");b(g.idcontaint+" a.zoom").fancybox({centerOnScroll:true,hideOnContentClick:true});b(g.idcontaint+" .box-content").flexslider({animation:"slide",selector:".scroll-item > li",animationLoop:true,itemWidth:240,pauseOnHover:true,move:3,itemMargin:0,minItems:3,mousewheel:false,maxItems:4})}else{if(g.tagName!=false){d.append('<h2 class="my-box-title"><a href="/search/label/'+encodeURIComponent(g.tagName)+'?&max-results=7">'+g.tagName+"</a></h2>")}}d.removeClass(g.loadingClass)},"jsonp")})(jQuery)}function ShowPost2(a){(function(b){var g={blogURL:"",MaxPost:5,idcontaint:"",FirstImageSize:600,ImageSize:300,Summarylength:90,animated:false,loadingClass:"loadingz",pBlank:"",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};g=b.extend({},g,a);var d=b(g.idcontaint);d.html('<div class="box-content"><ul></ul></div>').addClass(g.loadingClass);b.get((g.blogURL===""?window.location.protocol+"//"+window.location.host:g.blogURL)+"/feeds/posts/summary"+(g.tagName===false?"":"/-/"+g.tagName)+"?max-results="+g.MaxPost+"&orderby=published&alt=json-in-script",function(t){var m,u,h,M,o,v,k,s,r,l,q,f,w="",p=t.feed.entry;for(var n=0;n<p.length;n++){for(var e=0;e<p[n].link.length;e++){if(p[n].link[e].rel=="alternate"){m=p[n].link[e].href;break}}if("media$thumbnail"in p[n]){o=p[n].media$thumbnail.url}else{o=g.pBlank}if("content"in p[n]){h=p[n].content.$t}else{if("summary"in p[n]){h=p[n].summary.$t}else{h=""}}h=h.replace(/<\S[^>]*>/g,"");if(h.length>g.Summarylength){h=h.substring(0,g.Summarylength)+"..."}if(p[n]===p[0]){o=o.replace(/\/s[0-9]+\-c/g,"/s"+g.FirstImageSize+"-p");if(o.indexOf("img.youtube.com/vi/")!=-1){o=o.replace("default","0")}k="<p>"+h+"</p>"}else{o=o.replace(/\/s[0-9]+\-c/g,"/s"+g.ImageSize+"-p");k=""}u=p[n].title.$t;f=p[n].published.$t.substring(0,10);s=f.substring(0,4);r=f.substring(5,7);l=f.substring(8,10);q=g.MonthNames[parseInt(r,10)-1];v='<div class="uj_thumb"><a title="'+u+'" class="thumblab" href="'+m+'"><img src="'+o+'"/></a></div>';w+='<li><div class="inner-content" >'+v+'<h3><a href="'+m+'">'+u+'</a></h3><span class="post-meta"><span class="dd">'+l+'</span> <span class="dm">'+q+'</span> <span class="dy">'+s+"</span></span>"+k+"</div></li>"}b("ul",d).append(w);if(g.animated){b("ul",d).addClass("scroll-item");b(g.idcontaint+" .box-content").flexslider({animation:"slide",selector:".scroll-item > li",animationLoop:true,itemWidth:240,pauseOnHover:true,move:3,itemMargin:0,minItems:3,mousewheel:false,maxItems:4})}else{if(g.tagName!=false){d.append('<h2 class="my-box-title"><a href="/search/label/'+encodeURIComponent(g.tagName)+'?&max-results=7">'+g.tagName+"</a></h2>")}}d.removeClass(g.loadingClass)},"jsonp")})(jQuery)}window.labelinc=(function(){var b=function(g){var f=g||{},h=f.url_blog||window.location.host,a=f.id_labelcontent||"#labelbar";$.get("http://"+h+"/feeds/posts/summary?max-results=0&alt=json-in-script",function(e){var l=e.feed.category,d="";if(l!==undefined){d="<span>+</span><ul class='sub2-item'>";for(var j=0;j<l.length;j++){d+='<li><a href="/search/label/'+encodeURIComponent(l[j].term)+'?&max-results=7">'+l[j].term+"</a></li>"}d+="</ul>";$(a).html(d)}else{$(a).html("<span>No Label!</span>")}},"jsonp");$(".item-1 .lines").click(function(){$("#labelbar").slideToggle("fast");$(this).toggleClass("active");return false})};return function(a){b(a)}})();function NewsTicker(a){(function(b){var e={blogURL:"",MaxPost:5,Speed:0.1,direction:"ltr",titleText:"Terbaru",displayType:"reveal",Container:".breaking-news",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};e=b.extend({},e,a);b(e.Container).addClass("loading");b.get((e.blogURL===""?window.location.protocol+"//"+window.location.host:e.blogURL)+"/feeds/posts/summary?max-results="+e.MaxPost+"&orderby=published&alt=json-in-script",function(k){var q,K,p,o,l,n,g,t,s,r,u,d="",f=k.feed.entry;if(f!==undefined){for(var m=0;m<f.length;m++){for(var h=0;h<f[m].link.length;h++){if(f[m].link[h].rel=="alternate"){q=f[m].link[h].href}}K=f[m].title.$t;r=f[m].published.$t.substring(0,10);p=r.substring(0,4);o=r.substring(5,7);l=r.substring(8,10);n=e.MonthNames[parseInt(o,10)-1];g=f[m].published.$t.substring(11,16);t=g.substring(0,2);s=g.substring(2,5);if(t<12){u="AM"}else{u="PM"}if(t===0){t=12}if(t>12){t=t-12}d+='<li><span title="'+n+" "+l+", "+p+'" class="date">'+t+""+s+" "+u+'</span> <a class="title" href="'+q+'">'+K+"</a></li>"}b(e.Container).html('<h4>terkini</h4><ul id="newstick">'+d+"</ul>").removeClass("loading");b("#newstick").ticker({speed:e.Speed,direction:e.direction,titleText:e.titleText,displayType:e.displayType})}else{b(e.Container).html("<span>No result!</span>").removeClass("loading")}},"jsonp")})(jQuery)}function RelatedPost(b){(function(q){var p={blogURL:"",maxPosts:4,maxTags:5,maxPostsPerTag:4,containerSelector:"#related_posts",tags:null,loadingText:"",loadingClass:"loadingz",relevantTip:"",rlt_summary:100,relatedTitle:"Artikel Berkaitan",readMoretext:"Baca selanjutnya &#187;",rlpBlank:"",rlt_thumb:70,recentTitle:"Related Post",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],postScoreClass:"",onLoad:false};p=q.extend({},p,b);var a=0,t=null,o=null;if(!p.containerSelector){document.write('<div id="related_posts"></div>');p.containerSelector="#related_posts"}var s=function(e,B){a++;if(e.feed.entry){for(var z=0;z<e.feed.entry.length;z++){var j=e.feed.entry[z];var u="";for(var D=0;D<j.link.length;D++){if(j.link[D].rel=="alternate"){u=j.link[D].href;break}}if("content"in j){var d=j.content.$t}else{if("summary"in j){var d=j.summary.$t}else{var d=""}}var d=d.replace(/<\S[^>]*>/g,"");if(d.length>p.rlt_summary){var d=d.substring(0,p.rlt_summary)+"..."}var k=j.title.$t;if("media$thumbnail"in j){var g=j.media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+p.rlt_thumb+"-c")}else{var g=p.rlpBlank}var A=j.published.$t.substring(0,10);var f=A.substring(0,4);var v=A.substring(5,7);var h=A.substring(8,10);var C=p.MonthNames[parseInt(v,10)-1];if(location.href.toLowerCase()!=u.toLowerCase()){m(u,k,g,d,f,h,C)}}}if(a>=p.tags.length){o.attr("class","");q("#related-posts-loadingtext",t).remove();if(p.maxPosts>0){q("li:gt("+(p.maxPosts-1)+")",o).remove()}}};var m=function(A,u,e,h,j,g,k){var z=q("li",o);for(var B=0;B<z.length;B++){var v=q("a",z.eq(B));var y=l(v);if(v.attr("href")==A){n(v,++y);for(var d=B-1;d>=0;d--){var f=q("a",z.eq(d));if(l(f)>y){if(B-d>1){z.eq(d).after(z.eq(B))}return}}if(B>0){z.eq(0).before(z.eq(B))}return}}o.append('<li><a class="" href="'+A+'" title="'+(p.relevantTip?p.relevantTip.replace("\d",1):"")+'"><span class="imgrp"><img style="width:'+p.rlt_thumb+"px;height:"+p.rlt_thumb+'px;display: block" alt="'+u+'" src="'+e+'"/></span><h3>'+u+"</h3></a><p>"+h+'<a  title="'+u+'" href="'+A+'">'+p.readMoretext+'</a></p><span class="date"><span class="dd">'+g+'</span><span class="dm">'+k+'</span><span class="dy">'+j+"</span></span></li>")};var l=function(e){var d=parseInt(e.attr("score"));return d>0?d:1};var n=function(e,d){e.attr("score",d);if(p.relevantTip){e.attr("title",p.relevantTip.replace("\d",d))}if(p.postScoreClass){e.attr("class",p.postScoreClass+d)}};var r=function(){if(p.containerSelector!="#related_posts"){var e=q(p.containerSelector);if(e.length!=1){return}t=q('<div id="related_posts"></div>').appendTo(e)}else{t=q(p.containerSelector)}if(!p.tags){p.tags=[];q('a[rel="tag"]:lt('+p.maxTags+")").each(function(){var f=q.trim(q(this).text().replace(/\n/g,""));if(q.inArray(f,p.tags)==-1){p.tags[p.tags.length]=f}})}if(p.tags.length==0&&!p.recentTitle){return}if(p.tags.length==0){q("<h4><span>"+p.recentTitle+"</span></h4>").appendTo(t)}else{if(p.relatedTitle){q("<h4><span>"+p.relatedTitle+"</span></h4>").appendTo(t)}}if(p.loadingText){q('<div id="related-posts-loadingtext">'+p.loadingText+"</div>").appendTo(t)}o=q("<ul "+(p.loadingClass?'class="'+p.loadingClass+'"':"")+"></ul>").appendTo(t);if(p.tags.length==0){q.get((p.blogURL===""?window.location.protocol+"//"+window.location.host:p.blogURL)+"/feeds/posts/summary?max-results="+p.maxPostsPerTag+"&orderby=published&alt=json-in-script",s,"jsonp")}else{for(var d=0;d<p.tags.length;d++){q.get((p.blogURL===""?window.location.protocol+"//"+window.location.host:p.blogURL)+"/feeds/posts/summary/-/"+p.tags[d]+"?max-results="+p.maxPostsPerTag+"&orderby=published&alt=json-in-script",s,"jsonp")}}};if(p.onLoad){q(window).load(r)}else{q(document).ready(r)}})(jQuery)}(function(a){a(window).scroll(function(){if(a(this).scrollTop()>250){a("#top").removeAttr("href");a("#top").stop().animate({height:50,opacity:1},{duration:500,queue:false})}else{a("#top").stop().animate({height:50,opacity:0},{duration:500,queue:false})}});a(function(){a("#top").click(function(){a("html, body").animate({scrollTop:0},"slow");return false})})})(jQuery);function PostSlide(b){(function(a){var f={blogURL:"",MaxPost:4,idcontaint:"",ImageSize:500,Summarylength:150,RandompostActive:true,loadingClass:"loadingz",pBlank:"",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};f=a.extend({},f,b);var g=a(f.idcontaint);g.html('<div class="my_slider_wrap"><ul class="slides"></ul></div>').addClass(f.loadingClass);var h=function(D){var z,B,x,e,F,C,G,j,E,y,A="",w=D.feed.entry;for(var H=0;H<w.length;H++){for(var d=0;d<w[H].link.length;d++){if(w[H].link[d].rel=="alternate"){z=w[H].link[d].href;break}}if("media$thumbnail"in w[H]){F=w[H].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+f.ImageSize);if(w[H].media$thumbnail.url.indexOf("img.youtube.com")!=-1){F=w[H].media$thumbnail.url.replace("default","0")}}else{F=f.pBlank.replace(/\/s[0-9]+\-c/g,"/s"+f.ImageSize)}if("content"in w[H]){x=w[H].content.$t}else{if("summary"in w[H]){x=w[H].summary.$t}else{x=""}}x=x.replace(/<\S[^>]*>/g,"");if(x.length>f.Summarylength){x=x.substring(0,f.Summarylength)+"..."}B=w[H].title.$t;y=w[H].published.$t.substring(0,10);C=y.substring(0,4);G=y.substring(5,7);j=y.substring(8,10);E=f.MonthNames[parseInt(G,10)-1];A+='<li class="my_slider_item"><a title="'+B+'" class="" href="'+z+'"><img src="'+F+'"/></a><div class="slider_caption"><h3><a href="'+z+'">'+B+'</a></h3></div><p class="caption"><span class="post-meta"><span class="dd">'+j+'</span> <span class="dm">'+E+'</span> <span class="dy">'+C+"</span></span>"+x+"</p></li>"}g.find("ul.slides").append(A);if(!f.RandompostActive){a(f.idcontaint+" .my_slider_wrap").flexslider({animation:"fade",selector:".slides > li",animationLoop:true,smoothHeight:true,pauseOnHover:true,mousewheel:false,before:function(){a(f.idcontaint).find(".slider_caption").stop().animate({left:100,opacity:0},2000);a(f.idcontaint).find(".caption").stop().animate({left:0,opacity:0},2000)},after:function(){a(f.idcontaint).find(".slider_caption").stop().animate({left:10,opacity:1},2000);a(f.idcontaint).find(".caption").stop().animate({left:50,opacity:1},2000)}});g.removeClass(f.loadingClass)}};a.get((f.blogURL===""?window.location.protocol+"//"+window.location.host:f.blogURL)+"/feeds/posts/summary"+(f.tagName===false?"":"/-/"+f.tagName)+"?max-results=0&orderby=published&alt=json-in-script",function(e){Total_Posts_Number=e.feed.openSearch$totalResults.$t;if(Total_Posts_Number<=f.MaxPost){f.MaxPost=Total_Posts_Number}var r=[];while(r.length<f.MaxPost){var p=Math.ceil(Math.random()*Total_Posts_Number);var d=false;for(var k=0;k<r.length;k++){if(r[k]==p){d=true;break}}if(!d){r[r.length]=p}}if(f.RandompostActive==true){var j;for(var o=0;o<f.MaxPost;o++){j=a.get((f.blogURL===""?window.location.protocol+"//"+window.location.host:f.blogURL)+"/feeds/posts/default"+(f.tagName===false?"":"/-/"+f.tagName)+"?start-index="+r[o]+"&max-results=1&orderby=published&alt=json-in-script",h,"jsonp")}a.when(j).done(function(){a(f.idcontaint+" .my_slider_wrap").flexslider({animation:"fade",selector:".slides > li",animationLoop:true,smoothHeight:true,pauseOnHover:true,mousewheel:false,initDelay:f.MaxPost*700,before:function(){a(f.idcontaint).find(".slider_caption").stop().animate({left:100,opacity:0},2000);a(f.idcontaint).find(".caption").stop().animate({left:0,opacity:0},2000)},after:function(){a(f.idcontaint).find(".slider_caption").stop().animate({left:10,opacity:1},2000);a(f.idcontaint).find(".caption").stop().animate({left:50,opacity:1},2000)}});g.removeClass(f.loadingClass)})}else{a.get((f.blogURL===""?window.location.protocol+"//"+window.location.host:f.blogURL)+"/feeds/posts/default"+(f.tagName===false?"":"/-/"+f.tagName)+"?max-results="+f.MaxPost+"&orderby=published&alt=json-in-script",h,"jsonp")}},"jsonp")})(jQuery)};
