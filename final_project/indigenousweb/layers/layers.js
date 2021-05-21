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
var format_IndigenousUndergradSchool2019_1 = new ol.format.GeoJSON();
var features_IndigenousUndergradSchool2019_1 = format_IndigenousUndergradSchool2019_1.readFeatures(json_IndigenousUndergradSchool2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndigenousUndergradSchool2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndigenousUndergradSchool2019_1.addFeatures(features_IndigenousUndergradSchool2019_1);
var lyr_IndigenousUndergradSchool2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndigenousUndergradSchool2019_1, 
                style: style_IndigenousUndergradSchool2019_1,
                interactive: true,
                title: '<img src="styles/legend/IndigenousUndergradSchool2019_1.png" /> Indigenous Undergrad School 2019'
            });
var format_IndigenousGradSchool2019_2 = new ol.format.GeoJSON();
var features_IndigenousGradSchool2019_2 = format_IndigenousGradSchool2019_2.readFeatures(json_IndigenousGradSchool2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndigenousGradSchool2019_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndigenousGradSchool2019_2.addFeatures(features_IndigenousGradSchool2019_2);
var lyr_IndigenousGradSchool2019_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndigenousGradSchool2019_2, 
                style: style_IndigenousGradSchool2019_2,
                interactive: true,
                title: '<img src="styles/legend/IndigenousGradSchool2019_2.png" /> Indigenous Grad School 2019'
            });
var format_NMIndigenousPopulation2019_3 = new ol.format.GeoJSON();
var features_NMIndigenousPopulation2019_3 = format_NMIndigenousPopulation2019_3.readFeatures(json_NMIndigenousPopulation2019_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMIndigenousPopulation2019_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMIndigenousPopulation2019_3.addFeatures(features_NMIndigenousPopulation2019_3);
var lyr_NMIndigenousPopulation2019_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMIndigenousPopulation2019_3, 
                style: style_NMIndigenousPopulation2019_3,
                interactive: true,
    title: 'NM Indigenous Population 2019<br />\
    <img src="styles/legend/NMIndigenousPopulation2019_3_0.png" /> 0 - 1426<br />\
    <img src="styles/legend/NMIndigenousPopulation2019_3_1.png" /> 1426 - 2852<br />\
    <img src="styles/legend/NMIndigenousPopulation2019_3_2.png" /> 2852 - 4277<br />\
    <img src="styles/legend/NMIndigenousPopulation2019_3_3.png" /> 4277 - 5703<br />\
    <img src="styles/legend/NMIndigenousPopulation2019_3_4.png" /> 5703 - 7129<br />'
        });
var format_NMIndigenousIncome2019_4 = new ol.format.GeoJSON();
var features_NMIndigenousIncome2019_4 = format_NMIndigenousIncome2019_4.readFeatures(json_NMIndigenousIncome2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMIndigenousIncome2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMIndigenousIncome2019_4.addFeatures(features_NMIndigenousIncome2019_4);
var lyr_NMIndigenousIncome2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMIndigenousIncome2019_4, 
                style: style_NMIndigenousIncome2019_4,
                interactive: true,
    title: 'NM Indigenous Income 2019<br />\
    <img src="styles/legend/NMIndigenousIncome2019_4_0.png" /> 15396 - 44413<br />\
    <img src="styles/legend/NMIndigenousIncome2019_4_1.png" /> 44413 - 73430<br />\
    <img src="styles/legend/NMIndigenousIncome2019_4_2.png" /> 73430 - 102447<br />\
    <img src="styles/legend/NMIndigenousIncome2019_4_3.png" /> 102447 - 131464<br />\
    <img src="styles/legend/NMIndigenousIncome2019_4_4.png" /> 131464 - 160481<br />'
        });
var format_IndigenousUndergradSchool2014_5 = new ol.format.GeoJSON();
var features_IndigenousUndergradSchool2014_5 = format_IndigenousUndergradSchool2014_5.readFeatures(json_IndigenousUndergradSchool2014_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndigenousUndergradSchool2014_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndigenousUndergradSchool2014_5.addFeatures(features_IndigenousUndergradSchool2014_5);
var lyr_IndigenousUndergradSchool2014_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndigenousUndergradSchool2014_5, 
                style: style_IndigenousUndergradSchool2014_5,
                interactive: true,
                title: '<img src="styles/legend/IndigenousUndergradSchool2014_5.png" /> Indigenous Undergrad School 2014'
            });
var format_IndigenousGradSchool2014_6 = new ol.format.GeoJSON();
var features_IndigenousGradSchool2014_6 = format_IndigenousGradSchool2014_6.readFeatures(json_IndigenousGradSchool2014_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndigenousGradSchool2014_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndigenousGradSchool2014_6.addFeatures(features_IndigenousGradSchool2014_6);
var lyr_IndigenousGradSchool2014_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndigenousGradSchool2014_6, 
                style: style_IndigenousGradSchool2014_6,
                interactive: true,
                title: '<img src="styles/legend/IndigenousGradSchool2014_6.png" /> Indigenous Grad School 2014'
            });
var format_NMIndigenousPopulation2014_7 = new ol.format.GeoJSON();
var features_NMIndigenousPopulation2014_7 = format_NMIndigenousPopulation2014_7.readFeatures(json_NMIndigenousPopulation2014_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMIndigenousPopulation2014_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMIndigenousPopulation2014_7.addFeatures(features_NMIndigenousPopulation2014_7);
var lyr_NMIndigenousPopulation2014_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMIndigenousPopulation2014_7, 
                style: style_NMIndigenousPopulation2014_7,
                interactive: true,
    title: 'NM Indigenous Population 2014<br />\
    <img src="styles/legend/NMIndigenousPopulation2014_7_0.png" /> 0 - 1844<br />\
    <img src="styles/legend/NMIndigenousPopulation2014_7_1.png" /> 1844 - 3688<br />\
    <img src="styles/legend/NMIndigenousPopulation2014_7_2.png" /> 3688 - 5531<br />\
    <img src="styles/legend/NMIndigenousPopulation2014_7_3.png" /> 5531 - 7375<br />\
    <img src="styles/legend/NMIndigenousPopulation2014_7_4.png" /> 7375 - 9219<br />'
        });
var format_NMIndigenousIncome2014_8 = new ol.format.GeoJSON();
var features_NMIndigenousIncome2014_8 = format_NMIndigenousIncome2014_8.readFeatures(json_NMIndigenousIncome2014_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMIndigenousIncome2014_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMIndigenousIncome2014_8.addFeatures(features_NMIndigenousIncome2014_8);
var lyr_NMIndigenousIncome2014_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NMIndigenousIncome2014_8, 
                style: style_NMIndigenousIncome2014_8,
                interactive: true,
    title: 'NM Indigenous Income 2014<br />\
    <img src="styles/legend/NMIndigenousIncome2014_8_0.png" /> 11903 - 38554<br />\
    <img src="styles/legend/NMIndigenousIncome2014_8_1.png" /> 38554 - 65204<br />\
    <img src="styles/legend/NMIndigenousIncome2014_8_2.png" /> 65204 - 91855<br />\
    <img src="styles/legend/NMIndigenousIncome2014_8_3.png" /> 91855 - 118505<br />\
    <img src="styles/legend/NMIndigenousIncome2014_8_4.png" /> 118505 - 145156<br />'
        });

lyr_EsriLightGray_0.setVisible(true);lyr_IndigenousUndergradSchool2019_1.setVisible(true);lyr_IndigenousGradSchool2019_2.setVisible(true);lyr_NMIndigenousPopulation2019_3.setVisible(true);lyr_NMIndigenousIncome2019_4.setVisible(true);lyr_IndigenousUndergradSchool2014_5.setVisible(true);lyr_IndigenousGradSchool2014_6.setVisible(true);lyr_NMIndigenousPopulation2014_7.setVisible(true);lyr_NMIndigenousIncome2014_8.setVisible(true);
var layersList = [lyr_EsriLightGray_0,lyr_IndigenousUndergradSchool2019_1,lyr_IndigenousGradSchool2019_2,lyr_NMIndigenousPopulation2019_3,lyr_NMIndigenousIncome2019_4,lyr_IndigenousUndergradSchool2014_5,lyr_IndigenousGradSchool2014_6,lyr_NMIndigenousPopulation2014_7,lyr_NMIndigenousIncome2014_8];
lyr_IndigenousUndergradSchool2019_1.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_IndigenousGradSchool2019_2.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_NMIndigenousPopulation2019_3.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', });
lyr_NMIndigenousIncome2019_4.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', 'NM_indigenous_income2014_bi_class': 'NM_indigenous_income2014_bi_class', });
lyr_IndigenousUndergradSchool2014_5.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_IndigenousGradSchool2014_6.set('fieldAliases', {'rand_point': 'rand_point', 'GEOID': 'GEOID', 'NAME': 'NAME', 'TotalE': 'TotalE', 'TotalM': 'TotalM', 'EnrolledE': 'EnrolledE', 'EnrolledM': 'EnrolledM', 'College_un': 'College_un', 'College__1': 'College__1', 'GradE': 'GradE', 'GradM': 'GradM', 'Not_enroll': 'Not_enroll', 'Not_enro_1': 'Not_enro_1', });
lyr_NMIndigenousPopulation2014_7.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', });
lyr_NMIndigenousIncome2014_8.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'pop_nhamindE': 'pop_nhamindE', 'pop_nhamindM': 'pop_nhamindM', 'pop_hispltxE': 'pop_hispltxE', 'pop_hispltxM': 'pop_hispltxM', 'X_household_incomE': 'X_household_incomE', 'bi_class': 'bi_class', });
lyr_IndigenousUndergradSchool2019_1.set('fieldImages', {'rand_point': '', 'GEOID': '', 'NAME': '', 'TotalE': '', 'TotalM': '', 'EnrolledE': '', 'EnrolledM': '', 'College_un': '', 'College__1': '', 'GradE': '', 'GradM': '', 'Not_enroll': '', 'Not_enro_1': '', });
lyr_IndigenousGradSchool2019_2.set('fieldImages', {'rand_point': '', 'GEOID': '', 'NAME': '', 'TotalE': '', 'TotalM': '', 'EnrolledE': '', 'EnrolledM': '', 'College_un': '', 'College__1': '', 'GradE': '', 'GradM': '', 'Not_enroll': '', 'Not_enro_1': '', });
lyr_NMIndigenousPopulation2019_3.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', });
lyr_NMIndigenousIncome2019_4.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', 'NM_indigenous_income2014_bi_class': 'TextEdit', });
lyr_IndigenousUndergradSchool2014_5.set('fieldImages', {'rand_point': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'TotalE': 'TextEdit', 'TotalM': 'TextEdit', 'EnrolledE': 'TextEdit', 'EnrolledM': 'TextEdit', 'College_un': 'TextEdit', 'College__1': 'TextEdit', 'GradE': 'TextEdit', 'GradM': 'TextEdit', 'Not_enroll': 'TextEdit', 'Not_enro_1': 'TextEdit', });
lyr_IndigenousGradSchool2014_6.set('fieldImages', {'rand_point': '', 'GEOID': '', 'NAME': '', 'TotalE': '', 'TotalM': '', 'EnrolledE': '', 'EnrolledM': '', 'College_un': '', 'College__1': '', 'GradE': '', 'GradM': '', 'Not_enroll': '', 'Not_enro_1': '', });
lyr_NMIndigenousPopulation2014_7.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', });
lyr_NMIndigenousIncome2014_8.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'pop_nhamindE': 'TextEdit', 'pop_nhamindM': 'TextEdit', 'pop_hispltxE': 'TextEdit', 'pop_hispltxM': 'TextEdit', 'X_household_incomE': 'TextEdit', 'bi_class': 'TextEdit', });
lyr_IndigenousUndergradSchool2019_1.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_IndigenousGradSchool2019_2.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_NMIndigenousPopulation2019_3.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', });
lyr_NMIndigenousIncome2019_4.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', 'NM_indigenous_income2014_bi_class': 'no label', });
lyr_IndigenousUndergradSchool2014_5.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_IndigenousGradSchool2014_6.set('fieldLabels', {'rand_point': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'TotalE': 'no label', 'TotalM': 'no label', 'EnrolledE': 'no label', 'EnrolledM': 'no label', 'College_un': 'no label', 'College__1': 'no label', 'GradE': 'no label', 'GradM': 'no label', 'Not_enroll': 'no label', 'Not_enro_1': 'no label', });
lyr_NMIndigenousPopulation2014_7.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', });
lyr_NMIndigenousIncome2014_8.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'pop_nhamindE': 'no label', 'pop_nhamindM': 'no label', 'pop_hispltxE': 'no label', 'pop_hispltxM': 'no label', 'X_household_incomE': 'no label', 'bi_class': 'no label', });
lyr_NMIndigenousIncome2014_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});