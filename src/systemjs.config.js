/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',    
    'rxjs':                       'node_modules/rxjs',
    '@angular2-material':         'node_modules/@angular2-material'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  var materialPkgs = [];
  // put the names of any of your Material components here
  const materialPkgsNames= [
    'core',
    'list',
    'button'    
  ];
   
  function packMaterialIndex(pkgName) {
     materialPkgs[`@angular2-material/${pkg}`] ={ main: 'index.js', defaultExtension: 'js' };
  }
 
  function packMaterialUmd(pkgName) {
    materialPkgs['@angular2-material/'+pkgName] = { main: '/' + pkgName + '.js', defaultExtension: 'js', format:"cjs"};
  }



  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  var setPackageMaterialConfig = System.packageWithIndex ? packMaterialIndex : packMaterialUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  materialPkgsNames.forEach(setPackageMaterialConfig);


  for (var attrname in materialPkgs) { 
    packages[attrname] = materialPkgs[attrname]; 
  }

  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
