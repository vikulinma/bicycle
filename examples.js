	function OpenExample(example, open, close) {
    document.getElementById(example).style.display = 'block';
	document.getElementById(open).style.display = 'none';
	document.getElementById(close).style.display = 'inline';
   }
   function CloseExample(example, open, close) {
    document.getElementById(example).style.display = 'none';
	document.getElementById(close).style.display = 'none';
	document.getElementById(open).style.display = 'inline';
   }
