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

lyr_EsriLightGray_0.setVisible(true);
var layersList = [lyr_EsriLightGray_0];
