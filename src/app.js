$(function() {

    
    var map = L.map('mapid').setView([51.505, -0.09], 2);
    
    
    
    
    // load geojson
    $.getJSON('countries.geo.json', function(countries) {
    
        var countries = countries;
        
        $.getJSON('info.json', function(info) {
            
            
            //console.log(info);
            $.each(countries.features, function(c,v) {
        
                //console.log(v.id);
                //console.log(info);
                if (v.id in info) {
                
                    countries.features[c].properties.name = info[v.id].name;
                    countries.features[c].properties.scale = info[v.id].scale;
                    countries.features[c].properties.description = info[v.id].description;
                    countries.features[c].properties.list = info[v.id].list;
                    
                }
                
                
            });
            
            
            
            var cLayer = L.geoJSON(countries, {
            
                style: function(feature) {
                    
                    var s = {
                        weight: 1
                    }
                    
                    
                    if (feature.properties.scale > 1) {
                    
                        s.color = 'red';
                        
                    }
                    
                    return s;
                    
                
                }
            
            }).addTo(map);
                
                
                
                
                
            //cLayer.addData(countries);
            
        
        });
        
        
        
    });



});
