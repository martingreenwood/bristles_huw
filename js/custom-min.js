!function($){$(".light-switch").on("click",function(o){o.preventDefault(),$(".lightson").toggleClass("show")})}(jQuery),function($){$(".dimmer").on("click",function(o){o.preventDefault(),$(".lightbulbon").toggleClass("show"),setTimeout(function(){$(".lightbulbglow").toggleClass("show")},60)})}(jQuery),function($){$(".touchme").on("touchstart",function(o){o.preventDefault(),$(".lightbulbon").addClass("show"),setTimeout(function(){$(".lightbulbglow").addClass("show")},60)})}(jQuery),function($){$(".touchme").on("touchend",function(o){o.preventDefault(),$(".lightbulbon").removeClass("show"),setTimeout(function(){$(".lightbulbglow").removeClass("show")},60)})}(jQuery),function($){$(".touchme").on("mouseover",function(o){o.preventDefault(),$(".lightbulbon").addClass("show"),setTimeout(function(){$(".lightbulbglow").addClass("show")},60)})}(jQuery),function($){$(".touchme").on("mouseout",function(o){o.preventDefault(),$(".lightbulbon").removeClass("show"),setTimeout(function(){$(".lightbulbglow").removeClass("show")},60)})}(jQuery);