window.Rainbow&&(window.Rainbow.linecount=function(e){e.onHighlight(function(e){var t=$(e),n=t.clone().empty(),i=$("<table />",{"class":"rainbow"}).appendTo(n),r=$("<tr />",{"class":"rainbow-header"}).appendTo(i);$("<th />").appendTo(r),$("<th />",{"class":"rainbow-language"}).text(t.data("language")).appendTo(r);var a=t.html().trim().split("\n");$.each(a,function(e,t){e++;var n=$("<tr />",{"class":"rainbow-line rainbow-line-"+e});$("<td />",{"class":"rainbow-line-number","data-number":e}).appendTo(n),$("<td />",{"class":"rainbow-line-code"}).html(t).appendTo(n),i.append(n)}),t.replaceWith(i)})}(window.Rainbow));