function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function renderShipApiDetailModal(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (ship) {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Perustiedot\u003C\u002Fh4\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Nimi: ";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.name) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Rakennusnumero: ";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.buildNumber) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Rakennusvuosi: ";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.buildYear) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Varustamo: ";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.shipyard) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Runko\u003C\u002Fh4\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Pituus: ";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.frame.length) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Materiaali: ";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.frame.material) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Syväys: ";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.frame.draft) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Moottori\u003C\u002Fh4\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Tyyppi ";
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.engine.type) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "RPM ";
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.engine.RPM) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Hyörynpaine ";
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.engine.steamPressure) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "Liitteet\u003C\u002Fh4\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
// iterate ship.attachments
;(function(){
  var $$obj = ship.attachments;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var attachment = $$obj[pug_index0];
;pug_debug_line = 23;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Ca" + (" target=\"blank\""+pug_attr("href", 'https://api.laiva-api.pw/attachments/'+attachment.fileName, true, false)) + "\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attachment.displayName) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var attachment = $$obj[pug_index0];
;pug_debug_line = 23;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + "\u003Ca" + (" target=\"blank\""+pug_attr("href", 'https://api.laiva-api.pw/attachments/'+attachment.fileName, true, false)) + "\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FdetailModal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attachment.displayName) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"ship" in locals_for_with?locals_for_with.ship:typeof ship!=="undefined"?ship:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function renderShipApiSearchControls(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-8\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-11 search-input-container\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cinput class=\"main-search-input form-control input-lg\" type=\"text\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-1\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cbutton class=\"main-search-btn btn btn-primary btn-lg\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "Hae\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"main-search-results\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cdiv class=\"well\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002FsearchControls.pug";
pug_html = pug_html + "Aikaisemmat haut\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function renderShipApiSearchresults(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (offset, ships, size, total) {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctable class=\"table table-hover\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "Nimi\u003C\u002Fth\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "Varustamo\u003C\u002Fth\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "Rakennus nro.\u003C\u002Fth\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "Rakennus vuosi\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
// iterate ships
;(function(){
  var $$obj = ships;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var ship = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctr" + (" class=\"searchresult\""+pug_attr("data-ship-name", ship.generalInformation.name, true, false)+pug_attr("data-ship-id", ship._id, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.shipyard) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.buildNumber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.buildYear) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var ship = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctr" + (" class=\"searchresult\""+pug_attr("data-ship-name", ship.generalInformation.name, true, false)+pug_attr("data-ship-id", ship._id, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.shipyard) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.buildNumber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ship.generalInformation.buildYear) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cnav class=\"text-center\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cul class=\"pagination\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
if (offset == 0) {
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cli class=\"disabled\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ca href=\"#\" aria-label=\"Previous\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "«\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 22;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ca class=\"prev-page\" href=\"#\" aria-label=\"Previous\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "«\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
;pug_debug_line = 25;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
for(var i = 0, count = 1; i < total; i+=size, count++)
{
;pug_debug_line = 26;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
if ((i == offset)) {
;pug_debug_line = 27;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cli class=\"active\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = count) ? "" : pug_interp));
;pug_debug_line = 30;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cspan class=\"sr-only\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "(current)\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 32;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"goto-page\""+pug_attr("data-offset", i, true, false)+" href=\"#\"") + "\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = count) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
}
;pug_debug_line = 34;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
if ((offset + size > total)) {
;pug_debug_line = 35;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cli class=\"disabled\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ca href=\"#\" aria-label=\"Next\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "»\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 39;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Ca class=\"next-page\" href=\"#\" aria-label=\"Next\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002Fhome\u002Fbelvain\u002FDocuments\u002Fnodejs\u002Fship-api-front\u002Fthemes\u002Fship-api-bootstrap\u002Ftemplates\u002Fsearchresults.pug";
pug_html = pug_html + "»\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fnav\u003E";}.call(this,"offset" in locals_for_with?locals_for_with.offset:typeof offset!=="undefined"?offset:undefined,"ships" in locals_for_with?locals_for_with.ships:typeof ships!=="undefined"?ships:undefined,"size" in locals_for_with?locals_for_with.size:typeof size!=="undefined"?size:undefined,"total" in locals_for_with?locals_for_with.total:typeof total!=="undefined"?total:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}