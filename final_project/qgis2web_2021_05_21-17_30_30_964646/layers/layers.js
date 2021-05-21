var wms_layers = [];


        var lyr_EsriLightGray_0 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_HispanicGradSchool2019_1 = new ol.format.GeoJSON();
var features_HispanicGradSchool2019_1 = format_HispanicGradSchool2019_1.readFeatures(json_HispanicGradSchool2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicGradSchool2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicGradSchool2019_1.addFeatures(features_HispanicGradSchool2019_1);
var lyr_HispanicGradSchool2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HispanicGradSchool2019_1, 
                style: style_HispanicGradSchool2019_1,
                interactive: true,
                title: '<img src="styles/legend/HispanicGradSchool2019_1.png" /> Hispanic Grad School 2019'
            });
var format_HispanicUndergradSchool2019_2 = new ol.format.GeoJSON();
var features_HispanicUndergradSchool2019_2 = format_HispanicUndergradSchool2019_2.readFeatures(json_HispanicUndergradSchool2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicUndergradSchool2019_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicUndergradSchool2019_2.addFeatures(features_HispanicUndergradSchool2019_2);
var lyr_HispanicUndergradSchool2019_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HispanicUndergradSchool2019_2, 
                style: style_HispanicUndergradSchool2019_2,
                interactive: true,
                title: '<img src="styles/legend/HispanicUndergradSchool2019_2.png" /> Hispanic Undergrad School 2019'
            });
var format_NMHispanicPopulation2019_3 = new ol.format.GeoJSON();
var features_NMHispanicPopulation2019_3 = format_NMHispanicPopulation2019_3.readFeatures(json_NMHispanicPopulation2019_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMHispanicPopulation2019_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMHispanicPopulation2019_3.addFeatures(features_NMHispanicPopulation2019_3);
var lyr_NMHispanicPopulation2019_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMHispanicPopulation2019_3, 
                style: style_NMHispanicPopulation2019_3,
                interactive: true,
    title: 'NM Hispanic Population 2019<br />\
    <img src="styles/legend/NMHispanicPopulation2019_3_0.png" /> 3 - 1841<br />\
    <img src="styles/legend/NMHispanicPopulation2019_3_1.png" /> 1841 - 3679<br />\
    <img src="styles/legend/NMHispanicPopulation2019_3_2.png" /> 3679 - 5518<br />\
    <img src="styles/legend/NMHispanicPopulation2019_3_3.png" /> 5518 - 7356<br />\
    <img src="styles/legend/NMHispanicPopulation2019_3_4.png" /> 7356 - 9194<br />'
        });
var format_NMHispanicIncome2019_4 = new ol.format.GeoJSON();
var features_NMHispanicIncome2019_4 = format_NMHispanicIncome2019_4.readFeatures(json_NMHispanicIncome2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMHispanicIncome2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMHispanicIncome2019_4.addFeatures(features_NMHispanicIncome2019_4);
var lyr_NMHispanicIncome2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMHispanicIncome2019_4, 
                style: style_NMHispanicIncome2019_4,
                interactive: true,
    title: 'NM Hispanic Income 2019<br />\
    <img src="styles/legend/NMHispanicIncome2019_4_0.png" /> 15396 - 44413<br />\
    <img src="styles/legend/NMHispanicIncome2019_4_1.png" /> 44413 - 73430<br />\
    <img src="styles/legend/NMHispanicIncome2019_4_2.png" /> 73430 - 102447<br />\
    <img src="styles/legend/NMHispanicIncome2019_4_3.png" /> 102447 - 131464<br />\
    <img src="styles/legend/NMHispanicIncome2019_4_4.png" /> 131464 - 160481<br />'
        });
var format_HispanicGradSchool2014_5 = new ol.format.GeoJSON();
var features_HispanicGradSchool2014_5 = format_HispanicGradSchool2014_5.readFeatures(json_HispanicGradSchool2014_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicGradSchool2014_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicGradSchool2014_5.addFeatures(features_HispanicGradSchool2014_5);
var lyr_HispanicGradSchool2014_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HispanicGradSchool2014_5, 
                style: style_HispanicGradSchool2014_5,
                interactive: true,
                title: '<img src="styles/legend/HispanicGradSchool2014_5.png" /> Hispanic Grad School 2014'
            });
var format_HispanicUndergradSchool2014_6 = new ol.format.GeoJSON();
var features_HispanicUndergradSchool2014_6 = format_HispanicUndergradSchool2014_6.readFeatures(json_HispanicUndergradSchool2014_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicUndergradSchool2014_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicUndergradSchool2014_6.addFeatures(features_HispanicUndergradSchool2014_6);
var lyr_HispanicUndergradSchool2014_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HispanicUndergradSchool2014_6, 
                style: style_HispanicUndergradSchool2014_6,
                interactive: true,
                title: '<img src="styles/legend/HispanicUndergradSchool2014_6.png" /> Hispanic Undergrad School 2014'
            });
var format_NMHispanicPopulation2014_7 = new ol.format.GeoJSON();
var features_NMHispanicPopulation2014_7 = format_NMHispanicPopulation2014_7.readFeatures(json_NMHispanicPopulation2014_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMHispanicPopulation2014_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMHispanicPopulation2014_7.addFeatures(features_NMHispanicPopulation2014_7);
var lyr_NMHispanicPopulation2014_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMHispanicPopulation2014_7, 
                style: style_NMHispanicPopulation2014_7,
                interactive: true,
    title: 'NM Hispanic Population 2014<br />\
    <img src="styles/legend/NMHispanicPopulation2014_7_0.png" /> 4 - 1605<br />\
    <img src="styles/legend/NMHispanicPopulation2014_7_1.png" /> 1605 - 3206<br />\
    <img src="styles/legend/NMHispanicPopulation2014_7_2.png" /> 3206 - 4808<br />\
    <img src="styles/legend/NMHispanicPopulation2014_7_3.png" /> 4808 - 6409<br />\
    <img src="styles/legend/NMHispanicPopulation2014_7_4.png" /> 6409 - 8010<br />'
        });
var format_NMHispanicIncome2014_8 = new ol.format.GeoJSON();
var features_NMHispanicIncome2014_8 = format_NMHispanicIncome2014_8.readFeatures(json_NMHispanicIncome2014_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMHispanicIncome2014_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMHispanicIncome2014_8.addFeatures(features_NMHispanicIncome2014_8);
var lyr_NMHispanicIncome2014_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMHispanicIncome2014_8, 
                style: style_NMHispanicIncome2014_8,
                interactive: true,
    title: 'NM Hispanic Income 2014<br />\
    <img src="styles/legend/NMHispanicIncome2014_8_0.png" /> 11903 - 38554<br />\
    <img src="styles/legend/NMHispanicIncome2014_8_1.png" /> 38554 - 65204<br />\
    <img src="styles/legend/NMHispanicIncome2014_8_2.png" /> 65204 - 91855<br />\
    <img src="styles/legend/NMHispanicIncome2014_8_3.png" /> 91855 - 118505<br />\
    <img src="styles/legend/NMHispanicIncome2014_8_4.png" /> 118505 - 145156<br />'
        });

lyr_EsriLightGray_0.setVisible(true);lyr_HispanicGradSchool2019_1.setVisible(true);lyr_HispanicUndergradSchool2019_2.setVisible(true);lyr_NMHispanicPopulation2019_3.setVisible(true);lyr_NMHispanicIncome2019_4.setVisible(true);lyr_HispanicGradSchool2014_5.setVisible(true);lyr_HispanicUndergradSchool2014_6.setVisible(true);lyr_NMHispanicPopulation2014_7.setVisible(true);lyr_NMHispanicIncome2014_8.setVisible(true);
var layersList = [lyr_EsriLightGray_0,lyr_HispanicGradSchool2019_1,lyr_HispanicUndergradSchool2019_2,lyr_NMHispanicPopulation2019_3,lyr_NMHispanicIncome2019_4,lyr_HispanicGradSchool2014_5,lyr_HispanicUndergradSchool2014_6,lyr_NMHispanicPopulation2014_7,lyr_NMHispanicIncome2014_8];
lyr_HispanicGradSchool2019_1.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_HispanicUndergradSchool2019_2.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_NMHispanicPopulation2019_3.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', });
lyr_NMHispanicIncome2019_4.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', });
lyr_HispanicGradSchool2014_5.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_HispanicUndergradSchool2014_6.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_NMHispanicPopulation2014_7.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', });
lyr_NMHispanicIncome2014_8.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', });
lyr_HispanicGradSchool2019_1.set('fieldImages', {'rand_point': '', 'GEOID': '', 'NAME': '', 'TotalE': '', 'TotalM': '', 'EnrolledE': '', 'EnrolledM': '', 'College_un': '', 'College__1': '', 'GradE': '', 'GradM': '', 'Not_enroll': '', 'Not_enro_1': '', });
lyr_HispanicUndergradSchool2019_2.set('fieldImages', {'rand_point': '', 'GEOID': '', 'NAME': '', 'TotalE': '', 'TotalM': '', 'EnrolledE': '', 'EnrolledM': '', 'College_un': '', 'College__1': '', 'GradE': '', 'GradM': '', 'Not_enroll': '', 'Not_enro_1': '', });
lyr_NMHispanicPopulation2019_3.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', });
lyr_NMHispanicIncome2019_4.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', });
lyr_HispanicGradSchool2014_5.set('fieldImages', {'rand_point': '', 'GEOID': '', 'NAME': '', 'TotalE': '', 'TotalM': '', 'EnrolledE': '', 'EnrolledM': '', 'College_un': '', 'College__1': '', 'GradE': '', 'GradM': '', 'Not_enroll': '', 'Not_enro_1': '', });
lyr_HispanicUndergradSchool2014_6.set('fieldImages', {'rand_point': '', 'GEOID': '', 'NAME': '', 'TotalE': '', 'TotalM': '', 'EnrolledE': '', 'EnrolledM': '', 'College_un': '', 'College__1': '', 'GradE': '', 'GradM': '', 'Not_enroll': '', 'Not_enro_1': '', });
lyr_NMHispanicPopulation2014_7.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', });
lyr_NMHispanicIncome2014_8.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', });
lyr_HispanicGradSchool2019_1.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_HispanicUndergradSchool2019_2.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_NMHispanicPopulation2019_3.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', });
lyr_NMHispanicIncome2019_4.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', });
lyr_HispanicGradSchool2014_5.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_HispanicUndergradSchool2014_6.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_NMHispanicPopulation2014_7.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', });
lyr_NMHispanicIncome2014_8.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', });
lyr_NMHispanicIncome2014_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});