

function getPref(user_id) {
    let p = {
        user_id: user_id
    };
        fetch('/preferences?user_id='+ user_id)
     .then(res => res.json())
     .then(data => { 
         
        data.map(p => {
         let code = Country.all.find(c => c.id == p.country_id).iso_code.toLowerCase();
        let regionEle = $(`#jqvmap1_${code}`);
// if status is go to remove class, then add class go to and change color
if (p.status == "goto")
{
    regionEle.removeClass('perf-none');
    regionEle.addClass('perf-goto');
    $('#vmap').vectorMap('set', 'colors', {[code]: '#008a8a'});
}
// else if status is been remove class and add beento class and change color
else if (p.status == "beento")
{
    regionEle.removeClass('perf-none');
    regionEle.addClass('perf-beento');
    $('#vmap').vectorMap('set', 'colors', {[code]: '#00008b'})
}
// else if status is none leave 

     } );
         preferenceList = data;
        });
}
