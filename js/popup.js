 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35929016-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

$(function(){
        $('#get_btn').click(function(){
                var url = $('#url_input').attr('value');
                $.get('http://openlink.crabcloud.com/openlink?format=html&url=' + url, function(data){
                        $('#output').html(data);
                });
        });
        
        $('#url_input').click(function(){
                $(this).select();
        });
});
