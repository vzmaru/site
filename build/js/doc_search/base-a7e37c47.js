(function(){var e;e=function(){function e(){this.init_events()}return e.prototype.minimum_length=3,e.prototype.results=$("#search-content"),e.prototype.form=$(".docs aside form"),e.prototype.init_events=function(){var e=this;return this.form.on("submit",function(){var t;return t=e.form.find("input"),t.data("val",t.val()),e.perform_search(t.val()),!1}),this.results.on("click","a",function(){return expandTreeWithPath($(this).attr("href"))}),this.form.find("input").keydown(function(t){var n,r,i,s,o;r=e.form.find("input"),i=t.keyCode,s=e.results.find("li"),o=s.filter(".selected");if(i===13&&o.length){if(r.val()!==r.data("val"))return;t.preventDefault(),expandTreeWithPath(o.find("a").attr("href"))}if(i!==40&&i!==38)return;return t.preventDefault(),n=void 0,s.removeClass("selected"),i===40?!o.length||o.is(":last-child")?n=s.eq(0):n=o.next():i===38&&(!o.length||o.is(":first-child")?n=s.last():n=o.prev()),n.addClass("selected")})},e.prototype.perform_search=function(e){var t=this;return e=$.trim(e.toLowerCase()),e.length>=this.minimum_length?(this.results.html("<li><span>Loading...</span></li>"),$.ajax({url:"https://api.swiftype.com/api/v1/public/engines/suggest.json",data:{q:e,engine_key:"9ss2uGXz9XP6kyd6y6CN"},dataType:"jsonp"}).done(function(e){var n,r,i,s,o,u,a;if(e.record_count<1)return t.results.html("<li><span>No results found. Please refine your search.</span></li>");t.results.html(""),u=e.records.page,a=[];for(s=0,o=u.length;s<o;s++)n=u[s],r=n.highlight.title?n.highlight.title:""+n.title+"<small>"+n.highlight.sections+"</small>",i=n.url.replace(window.location.origin,""),a.push(t.results.append("<li><a href='"+n.url+"'>"+r+"</a></li>"));return a})):this.results.html("<li><span>Should be "+this.minimum_length+" characters or more.</span></li>"),$(":not(#search-content)").one("click",function(){return t.results.fadeOut()}),this.results.fadeIn()},e}(),$(function(){return new e})}).call(this);