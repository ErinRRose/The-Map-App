

function start() {
    $("#username").text(currentUser.name);

    // fetch country list to match id with iso code for storage in preferences
     fetch('/countries')
     .then(res => res.json())
     .then(data => countryList = data);

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
            

            let regionEle = $(`#jqvmap1_${code}`);

                        
                if (regionEle.hasClass('perf-none')) {
                    regionEle.removeClass('perf-none');
                  
                    let pref = {
                        status: "goto",
                        user_id: currentUser.id,
                        country_id: countryList.find(p => p.iso_code == code.toUpperCase()).id
                    };

                    fetch('/preferences', {
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pref)
                    }).then(resp => resp.json())
                    .then(p => {
                        regionEle.addClass('perf-goto');
                        $('#vmap').vectorMap('set', 'colors', {[code]: '#008a8a'});
                        preferenceList.push(p);
                    })
                }
    
                else if (regionEle.hasClass('perf-goto')) {
                    // regionEle.removeClass('perf-goto');
                    // regionEle.addClass('perf-beento');
                    // $('#vmap').vectorMap('set', 'colors', {[code]: '#00008b'})
                    regionEle.removeClass('perf-goto');
                  let countryId = countryList.find(p => p.iso_code == code.toUpperCase()).id;
                    let pref =  preferenceList.find(p => p.country_id == countryId);
                    let patch = {
                        status: "beento"
                    };
                    fetch(`/preferences/${pref.id}`, {
                        method:'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(patch)
                    }).then(resp => resp.json())
                    .then(p => {
                        regionEle.addClass('perf-beento');
                        $('#vmap').vectorMap('set', 'colors', {[code]: '#00008b'});
                        pref.status = "beento";
                    })
                }
    
                else if (regionEle.hasClass('perf-beento')) {
                    // regionEle.removeClass('perf-beento');
                    // regionEle.addClass('perf-none');
                    // $('#vmap').vectorMap('set', 'colors', {[code]: '#ffffff'})
                    regionEle.removeClass('perf-beento');
                  let countryId = countryList.find(p => p.iso_code == code.toUpperCase()).id;
                    let pref =  preferenceList.find(p => p.country_id == countryId);
                    fetch(`/preferences/${pref.id}`, {
                        method:'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                    }
                    })
                    .then(p => {
                        regionEle.addClass('perf-none');
                        $('#vmap').vectorMap('set', 'colors', {[code]: '#ffffff'});
                        preferenceList = preferenceList.filter(d => d.id != pref.id);
                    })
                }
            return false; // stops default event handling 

        },
        // onResize: function(event, width, height)
        // {

        // }
        });
        
       
}
