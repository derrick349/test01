$(document).bind("pageinit", function()
{
	$.getJSON("http://m.claytonparks.com/scripts/webservice.php?method=get_events&jsoncallback=?", function (data)
	{
		if (data)
        {
            var add;
            $("#main-content").html("");
            
            for (events in data)
            {
                var event = data[events];
                var url = event.url;
                if (!url)
                {
                    url = ""
                }
                add = "<div data-role=\"collapsible\" class=\"event_set\" data-collapsed=\"false\" data-theme=\"a\" data-content-theme=\"d\" data-collapsed-icon=\"arrow-r\" data-expanded-icon=\"arrow-d\">";
                add = add + "<h4>" + event.title + "</h4>";
                add = add + "<a href=\"" + url + "\" class=\"ui-link\" style=\"display:block;\"><span>"; 
                add = add + "<strong>From:</strong>" + event.start_date + ", " + event.start_time + "<br />";
                add = add + "<strong>To:  </strong>" + event.end_date + ", " + event.end_time + "<br /><br />";
                add = add + "<strong>" + event.location + "</strong><br />" + event.address1 + "<br />";
                if (event.address2)
                {
                    add = add + event.address2 + "<br />";
                }
                add = add + event.city + ", " + event.state + " " + event.zipcode;
                add = add + "<hr />";
                add = add + "<p>" + event.details + "</p>";
                add = add + "</span></a>";
                add = add + "</div><br />";
                $("#main-content").append(add);
            }
            
            $("#main-content").collapsibleset().trigger('create');
        }
    });
});