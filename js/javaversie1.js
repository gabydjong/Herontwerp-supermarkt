window.onload = function(){
	var toggle = document.getElementById('toggle');
	
	toggle.onclick = function(){
		if(this.className == ''){
		   this.className = 'show';
		   }
		else{
			this.className = '';
		}
	};
};