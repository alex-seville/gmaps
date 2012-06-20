  _mapsLoaded = $.Deferred();

  {{body}}

  var deferConstructor = GMaps;
  GMaps = (function(){
    _mapsLoaded.done(function(){
      GMaps = deferConstructor;
    });
  })();
  

window.gmapsLoaded = function() {
    delete window.gmapsLoaded;
    _mapsLoaded.resolve();
};

require(['{{googleapi}}']);






