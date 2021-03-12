var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_balt_hispanic_female_2019_1 = new ol.format.GeoJSON();
var features_balt_hispanic_female_2019_1 = format_balt_hispanic_female_2019_1.readFeatures(json_balt_hispanic_female_2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balt_hispanic_female_2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balt_hispanic_female_2019_1.addFeatures(features_balt_hispanic_female_2019_1);
var lyr_balt_hispanic_female_2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_balt_hispanic_female_2019_1, 
                style: style_balt_hispanic_female_2019_1,
                interactive: true,
    title: 'balt_hispanic_female_2019<br />\
    <img src="styles/legend/balt_hispanic_female_2019_1_0.png" /> 0 - 30<br />\
    <img src="styles/legend/balt_hispanic_female_2019_1_1.png" /> 30 - 69<br />\
    <img src="styles/legend/balt_hispanic_female_2019_1_2.png" /> 69 - 128<br />\
    <img src="styles/legend/balt_hispanic_female_2019_1_3.png" /> 128 - 246<br />\
    <img src="styles/legend/balt_hispanic_female_2019_1_4.png" /> 246 - 1866<br />'
        });

lyr_EsriDarkGray_0.setVisible(true);lyr_balt_hispanic_female_2019_1.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_balt_hispanic_female_2019_1];
lyr_balt_hispanic_female_2019_1.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'total_popE': 'total_popE', 'total_popM': 'total_popM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'pop_natiandczipgenderE': 'pop_natiandczipgenderE', 'pop_natiandczipgenderM': 'pop_natiandczipgenderM', });
lyr_balt_hispanic_female_2019_1.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'total_popE': 'TextEdit', 'total_popM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'pop_natiandczipgenderE': 'TextEdit', 'pop_natiandczipgenderM': 'TextEdit', });
lyr_balt_hispanic_female_2019_1.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'total_popE': 'no label', 'total_popM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'pop_natiandczipgenderE': 'no label', 'pop_natiandczipgenderM': 'no label', });
lyr_balt_hispanic_female_2019_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});