

function start() {
    $("#username").text(currentUser.name);

        $('#vmap').vectorMap({
            map: 'world_en',
            //backgroundColor: '#fff',
            color: '#ffffff',
            hoverOpacity: 0.7,
            //selectedColor: '#666666',
            enableZoom: false,
            showTooltip: true,
            //values: sample_data,
            //scaleColors: ['#C8EEFF', '#006491'],
            normalizeFunction: 'polynomial',
            onLoad: function(event, map)
         {
            $('.jqvmap-region').addClass('perf-none');
        },
        // onLabelShow: function(event, label, code)
        // {

        // },
        // onRegionOver: function(event, code, region)
        // {

        // },
        // onRegionOut: function(event, code, region)
        // {

        // },
        onRegionClick: function(event, code, region)
        {
            console.log(event);

            let regionEle = $(`#jqvmap1_${code}`);

            

           
                
                if (regionEle.hasClass('perf-none')) {
                    regionEle.removeClass('perf-none');
                    regionEle.addClass('perf-goto');
                    // regionEle.attr('fill', 'rgb(0, 139, 139)');
                    $('#vmap').vectorMap('set', 'colors', {[code]: '#008a8a'})
                }
    
                else if (regionEle.hasClass('perf-goto')) {
                    regionEle.removeClass('perf-goto');
                    regionEle.addClass('perf-beento');
                    // regionEle.attr('fill', '#00ff00');
                    $('#vmap').vectorMap('set', 'colors', {[code]: '#00008b'})
                }
    
                else if (regionEle.hasClass('perf-beento')) {
                    regionEle.removeClass('perf-beento');
                    regionEle.addClass('perf-none');
                    // regionEle.attr('fill', '#ffffff');
                    $('#vmap').vectorMap('set', 'colors', {[code]: '#ffffff'})
                }
            return false;
        },
        // onResize: function(event, width, height)
        // {

        // }
        });
        
       
}
