(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-28183338-6', 'auto', {'allowLinker': true});ga('require', 'linker');ga('linker:autoLink', ['imobie.com']);ga('send', 'pageview');
 	function setCookie(c_name, value, expiredays) {
			var exdate = new Date()
			exdate.setDate(exdate.getDate() + expiredays)
			document.cookie = c_name + "=" + escape(value) +
				((expiredays == null) ? "" : ";expires=" + exdate.toGMTString() + ";path=/");
		}
		function getCookie(c_name) {
			if (document.cookie.length > 0) {
				c_start = document.cookie.indexOf(c_name + "=")
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1
					c_end = document.cookie.indexOf(";", c_start)
					if (c_end == -1) c_end = document.cookie.length
					return unescape(document.cookie.substring(c_start, c_end))
				}
			}
			return "";
		}