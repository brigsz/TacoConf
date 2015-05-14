(function() {(window["JST"] = window["JST"] || {})["blog-card.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<article class="card card-blog-entry">\n  <header class="card-header">\n    <div class="card-media">\n      ';
 if (media.card.url) { ;
__p += '\n      <a href="' +
__e( url ) +
'" title="View more"><img alt="Card image" width="672" height="336" src="' +
__e( media.card.url ) +
'" /></a>\n      ';
 } ;
__p += '\n    </div>\n    <p class="card-suptitle">\n\n    ';
 var avatar = author.media.avatar.url || DSO.baseUrl + '/images/team/avatar-placeholder.png' ;
__p += '\n\n    ';
 if (author.hidden) { ;
__p += '\n    <span class="by">By <span class="avatar"><img alt="Author" width="256" height="256" src="' +
__e( avatar ) +
'" /></span>' +
__e( author.name ) +
'</span> <span class="when">on <time datetime="' +
__e( date ) +
'" pubdate>' +
__e( dateFormatted ) +
'</time></span></p>\n\n    ';
 } else { ;
__p += '\n    <span class="by">By <a href="' +
__e( author.url ) +
'" title="View more about the author"><span class="avatar"><img alt="Author" width="256" height="256" src="' +
__e( avatar ) +
'" /></span>' +
__e( author.name ) +
'</a></span> <span class="when">on <time datetime="' +
__e( date ) +
'" pubdate>' +
__e( dateFormatted ) +
'</time></span></p>\n    ';
 } ;
__p += '\n\n    <h1 class="card-title"><a href="' +
__e( url ) +
'" title="View more">' +
((__t = ( DSO.widont(title) )) == null ? '' : __t) +
'</a></h1>\n  </header>\n  ';
 if (introduction) { ;
__p += '\n  <div class="card-body">\n    <div class="card-prose">\n      <p>' +
((__t = ( DSO.widont(introduction) )) == null ? '' : __t) +
'</p>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</article>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["card-list.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="page-body"> \n  <div class="row outer-row">\n    ';
 if (loading) { ;
__p += '\n      <p class="loading revealed" data-loading-indicator>Loading</p>\n    ';
 } else { ;
__p += '\n    <ul class="grid-list">\n      ';
 _.each(posts, function(post) { ;
__p += '\n      <li class="card-wrapper">\n        ';
 if (post.type == 'blog') { ;
__p += '\n        ' +
((__t = ( partial('blog-card', post) )) == null ? '' : __t) +
'\n\n        ';
 } else if (post.type == 'project') { ;
__p += '\n        ' +
((__t = ( partial('project-card', post) )) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n      </li>\n      ';
 }); ;
__p += '\n    </ul>\n    ';
 } ;
__p += '\n  </div>\n</div>\n\n<footer class="page-footer">\n  <div class="row outer-row">\n    <p class="summary">Showing ' +
__e( count.showing ) +
' of ' +
__e( count.total ) +
' ';
 if (type == 'blog') { ;
__p += ' posts ';
 } else if (type == 'project') { ;
__p += ' projects ';
 } ;
__p += '</p>\n    <p class="load-more-wrapper">\n      <a href="#" class="bttn-load-more ' +
((__t = ( !more || loading ? 'disabled' : '' )) == null ? '' : __t) +
'" data-load-more>Load more</a>\n    </p>\n  </div>\n</footer>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["map-popup.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<article class="popover">\n  <header class="popover-header">\n    ';
 if (client.name) { ;
__p += '\n    <p class="popover-suptitle">\n\n      ';
 if (client.name == 'Development Seed') { ;
__p += '\n        ';
 if (client.url) { ;
__p += '\n          A <a href="' +
__e( client.url ) +
'" title="View more">labs</a> project\n          ';
 } else { ;
__p += '\n            A labs project\n          ';
 } ;
__p += '\n      ';
 } else if (client.url) { ;
__p += '\n        With <a href="' +
__e( client.url ) +
'" title="View more">' +
__e( client.name ) +
'</a>\n      ';
 } else { ;
__p += '\n        With ' +
__e( client.name ) +
'\n      ';
 } ;
__p += '\n\n    </p>\n    ';
 } ;
__p += '\n\n    <h1 class="popover-title"><a href="' +
__e( url ) +
'" title="View more">' +
((__t = ( DSO.widont(title) )) == null ? '' : __t) +
'</a></h1>\n  </header>\n</article>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["project-card.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<article class="card card-projects-entry">\n  <header class="card-header">\n    <div class="card-media">\n      ';
 if (media.card.url) { ;
__p += '\n      <a href="' +
__e( url ) +
'" title="View more"><img alt="Card image" width="672" height="336" src="' +
__e( media.card.url ) +
'" /></a>\n      ';
 } ;
__p += '\n    </div>\n\n    ';
 if (client.name) { ;
__p += '\n    <p class="card-suptitle">\n\n      ';
 if (client.name == 'Development Seed') { ;
__p += '\n        ';
 if (client.url) { ;
__p += '\n          A <a href="' +
__e( client.url ) +
'" title="View more">labs</a> project\n          ';
 } else { ;
__p += '\n            A labs project\n          ';
 } ;
__p += '\n      ';
 } else if (client.url) { ;
__p += '\n        With <a href="' +
__e( client.url ) +
'" title="View more">' +
__e( client.name ) +
'</a>\n      ';
 } else { ;
__p += '\n        With ' +
__e( client.name ) +
'\n      ';
 } ;
__p += '\n\n    </p>\n    ';
 } ;
__p += '\n\n    <h1 class="card-title"><a href="' +
__e( url ) +
'" title="View more">' +
((__t = ( DSO.widont(title) )) == null ? '' : __t) +
'</a></h1>\n  </header>\n  ';
 if (introduction) { ;
__p += '\n  <div class="card-body">\n    <div class="card-prose">\n      <p>' +
((__t = ( DSO.widont(introduction) )) == null ? '' : __t) +
'</p>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</article>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["search-results.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (term === null) { ;
__p += '\n  <div class="search-null">\n    <p>What are you looking for today?</p>\n  </div>\n';
 } else if(results.length === 0) { ;
__p += '\n  <div class="search-null">\n    <p>No results available for <i>' +
__e( term ) +
'</i>. Please refine your search.</p>\n  </div>\n';
 } else { ;
__p += '\n<ul class="search-results-list">\n  ';
 _.forEach(results, function(r) { ;
__p += '\n  <li class="search-result-wrapper">\n    <article class="search-result">\n      <a href="' +
((__t = ( r.url )) == null ? '' : __t) +
'" title="View">\n        <p class="search-result-suptile">' +
__e( r.type ) +
'</p>\n        <h1 class="search-result-title">' +
((__t = ( highlight(r.title) )) == null ? '' : __t) +
'</h1>\n        <div class="search-result-prose">' +
((__t = ( highlight(r.introduction) )) == null ? '' : __t) +
'</div>\n      </a>\n    </article>\n  </li>\n  ';
 }); ;
__p += '\n</ul>\n';
 } ;
__p += '\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["search.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="search-header">\n  <div class="search-header-inner">\n    <h1>Search</h1>\n    <form name="search-form" class="search-form">\n      <input type="text" class="search-input" placeholder="Search" data-search-query />\n    </form>\n  </div>\n</header>\n<div class="search-body">\n  <div class="search-body-inner" data-search-results><!-- Template: search-results.ejs --></div>\n</div>\n<p class="search-dismiss-wrapper"><a href="#" class="search-dismiss" data-search-close><span>Close</span></a></p>';

}
return __p
}})();