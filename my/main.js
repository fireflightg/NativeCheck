var pause = 0;
window.onload = function nad(){
  var div = document.getElementById("lie")
	const headObject = document.getElementById('okey');
      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var cc = 0;
      
      var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

tracking.ColorTracker.registerColor('brown', function(r, g, b) {
        var dx = r - 153;
        var dy = g - 126;
        var dz = b - 14;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfishbrown', function(r, g, b) {
        var dx = r - 150;
        var dy = g - 43;
        var dz = b - 0;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfishaccurate', function(r, g, b) {
        var dx = r - 182;
        var dy = g - 83;
        var dz = b - 0;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('green', function(r, g, b) {
        var dx = r - 44;
        var dy = g - 44;
        var dz = b - 32;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfish', function(r, g, b) {
        var dx = r - 209;
        var dy = g - 83;
        var dz = b - 0;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('Scanning', function(r, g, b) {
        var dx = r - 67;
        var dy = g - 63;
        var dz = b - 25;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfishcool', function(r, g, b) {
        var dx = r - 214;
        var dy = g - 90;
        var dz = b - 0;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfishwhite', function(r, g, b) {
        var dx = r - 152;
        var dy = g - 59;
        var dz = b - 0;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfishday', function(r, g, b) {
        var dx = r - 219;
        var dy = g - 159;
        var dz = b - 67;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfishdayz', function(r, g, b) {
        var dx = r - 219;
        var dy = g - 159;
        var dz = b - 67;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('goldfishdayz', function(r, g, b) {
        var dx = r - 59;
        var dy = g - 37;
        var dz = b - 66;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });
tracking.ColorTracker.registerColor('led', function(r, g, b) {
        var dx = r - 64;
        var dy = g - 219;
        var dz = b - 199;

        if ((b - g) >= 100 && (r - g) >= 60) {
          return true;
        }
        return dx * dx + dy * dy + dz * dz < 3500;
      });


  var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow','brown','green', 'Scanning','goldfish','goldfishbrown','goldfishaccurate','goldfishcool','goldfishwhite','goldfishday','led']);
  
  tracking.track('#video', colors, { camera: true });


  colors.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (event.data.length === 0) {
      // No colors were detected in this frame.
      
    } else {
      event.data.forEach(function(rect) {
        console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
        headObject.innerText = rect.color
        if (rect.color ==  'yellow'){
          headObject.innerText = "Plant or Sand or Gravel " + "X: "+ rect.x + ", " +"Y: "+ rect.y;
          
          context.strokeStyle = rect.color;
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11 + rect.color);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22 + rect.color);
          
        }
       if(rect.color == 'Scanning') {
          headObject.innerText = "Plant" + rect.x + ", " + rect.y;
          while(cc < 27){
          var Li = document.createElement("li");
          var time  = new Date().toLocaleTimeString();
          today = yyyy + '-' + mm + '-' + dd + time;
          Li.innerText =  today + ": " + rect.color + ", Plant";
          div.appendChild(Li); 
          cc = cc + 1;
        }
          context.strokeStyle = rect.color;
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = ' 11px, Arial';
          context.fillStyle = "#0000";
          context.fillText('x: ' + rect.x + 'px', rect.x +  rect.width + 5 , rect.y + 11);
          context.fillText('y: ' + rect.y + 'px', rect.x +  rect.width  + 5, rect.y + 22 );
        }
          
        if(rect.color ==  'goldfish'  || rect.color == 'goldfishaccurate' || rect.color == "goldfishcool"|| rect.color == "goldfishwhite"|| rect.color == "goldfishbrown"|| rect.color == "goldfishday") {
          if(rect.color == 'goldfishbrown'){
            headObject.innerText = "goldfish or Gravel" + rect.x + ", " + rect.y;
          while(cc < 27){
          var Li = document.createElement("li");
         var time  = new Date().toLocaleTimeString();
          today = yyyy + '-' + mm + '-' + dd + time;
          Li.innerText =  today + ": " + rect.color + ", goldfish";
          div.appendChild(Li); 
          cc = cc + 1;
        }
          context.strokeStyle = 'red'
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = ' 11px Arial';
          context.fillStyle = "#fff";
          context.fillText("goldfish", rect.x +  rect.width + 5 , rect.y + 11);
        }
        else{
           headObject.innerText = "goldfish" + rect.x + ", " + rect.y;
          while(cc < 25){
          var Li = document.createElement("li");
         var time  = new Date().toLocaleTimeString();
          today = yyyy + '-' + mm + '-' + dd + time;
          Li.innerText =  today + ": " + rect.color + ", goldfish";
          div.appendChild(Li); 
          cc = cc + 1;
        }
          context.strokeStyle = 'red'
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Arial';
          context.fillStyle = "#fff";
          context.fillText("goldfish", rect.x +  rect.width + 5 , rect.y + 11);
          
        }
      }
      if(rect.color == 'led'){
         context.strokeStyle = rect.color;
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          
         
          
      }
        else{
          headObject.innerText = "Now " + rect.color;
          if(rect.color ==  'goldfish'  || rect.color == 'goldfishaccurate' || rect.color == "goldfishcool"|| rect.color == "goldfishwhite"|| rect.color == "goldfishbrown"|| rect.color == "goldfishday") {
          
            headObject.innerText = "goldfish " + rect.x + ", " + rect.y;
          while(cc < 26){
          var Li = document.createElement("li");
         var time  = new Date().toLocaleTimeString();
          today = yyyy + '-' + mm + '-' + dd + time;
          Li.innerText =  today + ": " + rect.color + ", goldfish";
          div.appendChild(Li); 
        }
          context.strokeStyle = 'red'
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = ' 11px Arial';
          context.fillStyle = "#fff";
          context.fillText("goldfish", rect.x +  rect.width + 5 , rect.y + 11);
       
      }
        }
      });
    }
  });

  tracking.track('#video', colors);
}
function printElem(lie) {
    var content = document.getElementById('lie').innerHTML;
    var mywindow = window.open('', 'Print', 'height=600,width=800');

    mywindow.document.write('<html><head><title>video data Collector beta 1.0.2</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
}
function fullscreen(){
  var elem = document.getElementById("video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
var elemt = document.getElementById("canvas");
if (elemt.requestFullscreen) {
  elemt.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elemt.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elemt.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elemt.msRequestFullscreen();
}
}

  var video = document.getElementById('video');
var canvass = document.getElementById('cool');
var contexts = canvass.getContext('2d');
var w, h, ratio;
video.addEventListener('loadedmetadata', function() {
    ratio = video.videoWidth / video.videoHeight;
    w = video.videoWidth - 100;
    h = parseInt(w / ratio, 10);
    canvass.width = w;
    canvass.height = h;
}, false);
function snap() {
    contexts.fillRect(0, 0, w, h);
    contexts.drawImage(video, 0, 0, w, h);
}
function puas(){
  pause = pause + 1;
}