var canvas;

	var gkhead = new Image;
	var ctx;
	var xhr;
	
	function cargarPagina(){
		loadPDFAntiguo();
		$(".panzoom").panzoom({});
	}	
	
	function cargarPaginaIE(){
		$(".panzoom").panzoom({});
	}	
	
	function reset(){
		$('.panzoom').panzoom('pan', 0, 0);
		$('.panzoom').panzoom('zoom', 1);
	}
	
	function hacerZoom2(x, y, z){
		reset();
		$('.panzoom').panzoom('pan', x, y);
		$('.panzoom').panzoom('zoom', false, {
              increment: z,
              animate: false
            });
		}
	
	function loadPDF(){		
	
		var files = $("#input"), fileReader;
		
		for(var i = 0; i < files.length; i++) {
			fileReader = new FileReader();
			fileReader.onload = handler;
			fileReader.readAsArrayBuffer(new File("[]", "C:\Users\dzapata\Documents\Imágenes ejemplo Némesis\form3.tif"));            // convert selected file
		}
	}
  
  function handler() {                                 // file is now ArrayBuffer:
    var tiff = new Tiff({buffer: this.result});        // parse and convert
    var canva2s = tiff.toCanvas();                      // convert to canvas
	document.getElementById("lipsum").append(canvas2);
	}
	
	function loadTiff(){
		document.querySelector("input").onchange = function() {

  var files = this.files, fileReader;

  for(var i = 0; i < files.length; i++) {
    fileReader = new FileReader();
    fileReader.onload = handler;
    fileReader.readAsArrayBuffer(files[i]);            // convert selected file
  }
  
  function handler() {                                 // file is now ArrayBuffer:
    var tiff = new Tiff({buffer: this.result});        // parse and convert
    var canvas = tiff.toCanvas();                      // convert to canvas
    document.querySelector("div").appendChild(canvas); // show canvas with content
  };
};
}

function loadPDFAntiguo(){
	xhr = new XMLHttpRequest();
		xhr.open('GET', "/form3.tif");
		xhr.responseType = 'arraybuffer';
		xhr.onload = function (e) {
			var tiff = new Tiff({buffer: xhr.response});
			for (var i = 0, len = tiff.countDirectory(); i < len; ++i) {
				tiff.setDirectory(i);
				$("#lipsum").append(tiff.toCanvas());
			}
		};
		xhr.send();
}

function loadPDFAntiguoIE(){
	xhr = new XMLHttpRequest();
		xhr.open('GET', "C:\\Users\\dzapata\\Documents\\Imágenes ejemplo Némesis\\form3.1.tiff");
		xhr.responseType = "blob";
		xhr.onload = function (e) {
		var tiff = new Tiff({buffer: xhr.response});
		var canvas2 = tiff.toCanvas();
		document.getElementById("lipsum").append(canvas2);
    fileReader.readAsArrayBuffer(e); 
		};
		xhr.send();
}