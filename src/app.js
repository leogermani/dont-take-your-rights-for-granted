$(function() {

    
    var map = L.map('mapid', {
        zoomControl: false,
        center: [51.505, -0.09],
        zoom: 2
    });
    
    
    $('.close-thik').click(function() {
        $(this).parent().removeClass('on');
        if ($(this).parent().attr('id') == 'info')
            $('#info-button').show();
    });
    
    $('#info-button').click(function() {
        $(this).hide();
        $('#country-info .close-thik').click();
        $('#info').addClass('on');
    });
    
    
    // load geojson
    $.getJSON('countries.geo.json', function(countries) {
    
        var countries = countries;
        
        $.getJSON('info.json?asd', function(info) {
            
            
            //console.log(info);
            $.each(countries.features, function(c,v) {
        
                //console.log(v.id);
                //console.log(info);
                if (v.id in info) {
                    countries.features[c].properties.name = info[v.id].name;
                    countries.features[c].properties.scale = info[v.id].scale;
                    countries.features[c].properties.description = info[v.id].description;
                    countries.features[c].properties.list = info[v.id].list;
                    
                } else {
                    countries.features[c].properties.scale = 0;
                }
                
                
            });
            
            
            
            var cLayer = L.geoJSON(countries, {
            
                style: function(feature) {
                    
                    var colors = ['#a2a2a2','#91709d','#8a559d','#71218f','#7a1b9d','#73009d'];
                    
                    var s = {
                        weight: 1,
                        color: 'white',
                        fillColor: colors[feature.properties.scale],
                        fillOpacity: 1
                    }
                    
                    
                    
                    
                    return s;
                    
                
                },
                
                onEachFeature: function (feature, layer) {
                    
                    
                    
                    
                    
                    if (feature.properties.scale > 1) {
                    
                        var c = layer.getBounds().getCenter();
                        L.marker(c).addTo(map);
                        
                        layer.bindTooltip(feature.properties.name);
                        
                        layer.on({
                            'mousemove': function (e) {
                                layer.openTooltip();
                            }, 
                            'mouseout': function (e) {
                                layer.closeTooltip();
                            },
                            'click': function(e) {
                                $('#info .close-thik').click();
                                $('#country-info h1').html(feature.properties.name);
                                $('#country-info .content').html(feature.properties.description);
                                $('#country-info').addClass('on');
                            }
                        });
                        
                    }
                    
                    
                    
                }
            
            }).addTo(map);
                
                
                
                
                
            //cLayer.addData(countries);
            
        
        });
        
        
        
    });



});
