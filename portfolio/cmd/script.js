
$(document).ready(function() {
		"use strict";
var updateClock;
function updateClock() {
		var currentTime = new Date();
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
		var currentSeconds = currentTime.getSeconds();
		var shortDays = [
				'Sun', 
				'Mon',
				'Tue',
				'Wed',
				'Thu',
				'Fri',
				'Sat'
		];
		var longDays = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
		];
		var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		var d = new Date(); 
		var m = d.getMonth();
		var month = (months[m]);
		var date = d.getDate();
		var year = d.getFullYear();
		var x = d.getDay(); 

		var day = (shortDays[x]);
		var longDay = (longDays[x]);

		currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
		currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

		var timeOfDay = (currentHours < 12) ? "AM" : "PM";

		currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

		currentHours = (currentHours === 0) ? 12 : currentHours;

		var currentTimeString = day + " " + currentHours + ":" + currentMinutes + " " + timeOfDay;
		var longTimeString = longDay + ", " + month + " " + date + ", " + year;
		$("#clock").html(currentTimeString);
		$("#date").html(longTimeString);

}

$(document).ready(function() {
		updateClock();
});

$("#Desktop span").click(function(e) {
		e.stopPropagation();
		if (e.shiftKey) {
				$(this).addClass("focus");
		} else {
				$(".focus").removeClass("focus");
				$(this).addClass("focus");
		}
});
$("body:not(#Desktop span)").click(function() {
		$("#Desktop span").removeClass("focus");

});
$("#close").click(function() {
		$(".window").removeClass("open");
});

$("header ul li").click(function(e) {
		e.stopPropagation();
		$(".visible").removeClass("visible");
		$(this).children(" div.submenu").addClass("visible").fadeIn();
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
});
$("body:not(header ul.left li), body:not(header li input#search)").click(function() {
		$(".selected").removeClass("selected");
		$(".visible").removeClass("visible");
});


$("footer img").click(function() {
		$(this).removeClass("jump");
		$(this).addClass("jump");
});

$("#volume").on("change mousemove", function() {
		if ($(this).val() < 10) {
				$("#volume-icon").removeClass();
				$("#volume-icon").addClass("fa fa-volume-off");
		}
});
$("#volume").on("change mousemove", function() {
		if ($(this).val() > 10 && $(this).val() < 66) {
				$("#volume-icon").removeClass();
				$("#volume-icon").addClass("fa fa-volume-down");
		}
});
$("#volume").on("change mousemove", function() {
		if ($(this).val() > 66) {
				$("#volume-icon").removeClass();
				$("#volume-icon").addClass("fa fa-volume-up");
		}
});

jackHarnerSig();

//$.getJSON("https://ipfind.co/me?auth=6249ebcf-f9b0-4847-a710-cb11f949fdd9", function(result){
//	console.log('res', result.ip_address);
	var divElement = document.getElementById('scroll');
//	var ip = result.ip_address;
function soundClick() {
  var audio = new Audio();
  audio.src = 'https://vsevolodhtml.ru/assets/msc.mp3';
  audio.autoplay = true;
}
		function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
		}
		function clear() {
				terminal.text("");
				divElement.scrollTop = 9999;
		}
		function help() {
				terminal.append("List of commands:\n[help] (list command)\n[clear] (clear terminal)\n[url 'web url'] (will redirect you to the url)\n[download] (download redactor)\n[fortune] (built-in fortune)\n[loc] (write you location)\n[ip] (write you IP adress)\n[pass] (random generator password)\n[echo 'text'] (outputs the text after this command)\n");
				divElement.scrollTop = 9999;
		}
		function download() {
				terminal.append("Starting...\nComplete\n");
				window.location = "https://vsevolodhtml.ru/public/redactor/file.zip";
				divElement.scrollTop = 9999;
		}
		function hi() {
				terminal.append("Hi, my creator Vsevolod html\nPlease subscribe to the Creator's <a href='https://zen.yandex.ru/id/5e7c78ee99d560276a9df6e4' class='aaa'>channel</a>\n");
				divElement.scrollTop = 9999;
				soundClick();
				PopUpShow();
		}
		function pwd() {
    			var pass = "";
    			var strong = 10;
    			var dic = "abcdefghijklmnopqrstuvwxyz1234567890";
    			for (var i = 0; i < strong; i++) 
    			{
    				pass += dic.charAt(Math.floor(Math.random() * dic.length));
    			}
				terminal.append("You random password: " + pass + "\n");
				divElement.scrollTop = 9999;
		}
		function html() {
				terminal.append("HTML - HyperText Markup Language\n");
				divElement.scrollTop = 9999;
		}
		function loc() {
				var local = ymaps.geolocation.city;
				terminal.append("You geolocation " + local + "!\n");
				divElement.scrollTop = 9999;
		}
		function ip1() {
				terminal.append("You ip " + ip + "!\n");
				divElement.scrollTop = 9999;
		}
		function redactor() {
				terminal.append("Starting...\nComplete\n");
				window.location = "https://vsevolodhtml.ru/public/redactor/";
				divElement.scrollTop = 9999;
		}
		function url(urll) {
			var str1 = urll.join(" ");
			var str2 = str1.slice(0, 4);
			if (str1 == "") {
				console.log("url ''");
				terminal.append("Sorry, url '', a must have an address\nExample 1: 'url vsevolodhtml.ru',\nExample 2: 'url https://zen.yandex.ru/id/5e7c78ee99d560276a9df6e4'.\n");
			} else {
				if (str2 == "http") {
					window.location = str1;
				} else {
					window.location = "https://" + str1;
				}
			}
			divElement.scrollTop = 9999;
		}
function hak() {
	terminal.append("Haker mode on\n1000111101001001011000111101/n00100101100011110100100101\nip hak " + ip + "\n[y/n]");
	divElement.scrollTop = 9999;
}
function y () {
	terminal.append("100000100101000100000110/n000110101100001100101000011111010000111011100/n00111110100001101001000001101000111010011011011101100\n");
	terminal.append("You haked, and you IP sale =)\n");
	divElement.scrollTop = 9999;
	setTimeout("window.location = 'https://vsevolodhtml.ru/game/hak/';", 2000);
	//while (true) {
	//	terminal.append("100011110100100101100011110100100101100011110100100101\n");
	//}
}
		function echo(args) {
				var str = args.join(" ");
				terminal.append(str + "\n");
				divElement.scrollTop = 9999;
		}
		function fortune() {
			var fltn = Math.floor(Math.random() * 101);
			terminal.append("Higher random percentage: "  + fltn + "%\n");
			divElement.scrollTop = 9999;
		}
		var title = $(".title");
		var terminal = $(".terminal");
		var prompt = "➜";
		var path = "~";

		var commandHistory = [];
		var historyIndex = 0;

		var command = "";
		var commands = [{
						"name": "clear",
						"function": clear
				},{
						"name": "y",
						"function": y
				},{
						"name": "hack",
						"function": hak
				},{
						"name": "pass",
						"function": pwd
				},{
						"name": "html",
						"function": html
				},{
						"name": "ip",
						"function": ip1
				},{
						"name": "loc",
						"function": loc
				}, {
						"name": "help",
						"function": help
				}, {
						"name": "hi",
						"function": hi
				}, {
						"name": "☺",
						"function": hi
				}, {
						"name": "fortune",
						"function": fortune
				},{
						"name": "clear",
						"function": clear
				}, {
						"name": "echo",
						"function": echo
				}, {
						"name": "redactor",
						"function": redactor
				}, {
						"name": "url",
						"function": url
				}, {
						"name": "download",
						"function": download
				}];
		let keys = document.querySelectorAll('.key');
		let enter1 = document.querySelectorAll('.enter');
		let display = document.querySelector('.terminal');
		for (let key of keys) {
		  key.onclick = function () {
			appendCommand(key.textContent);
		  }
		};
		for (let key of enter1) {
			key.onclick = function () {
				terminal.append("\n");
				processCommand();
				displayPrompt();
		  }
		};
function processCommand() {
		var isValid = false;


		var args = command.split(" ");
		var cmd = args[0];
		args.shift();

		for (var i = 0; i < commands.length; i++) {
				if (cmd === commands[i].name) {
						commands[i].function(args);
						isValid = true;
						break;
				}
		}

		if (!isValid) {
				terminal.append("Sorry command not found: " + command + "\n");
		}

		commandHistory.push(command);
		historyIndex = commandHistory.length;
		command = "";
}

function displayPrompt() {
		terminal.append("<span class=\"prompt\">" + prompt + "</span> ");
		terminal.append("<span class=\"path\">" + path + "</span> ");
}

function erase(n) {
		command = command.slice(0, -n);
		terminal.html(terminal.html().slice(0, -n));
}

function clearCommand() {
		if (command.length > 0) {
				erase(command.length);
		}
}

function appendCommand(str) {
		terminal.append(str);
		command += str;
}

//function helping () {
//	appendCommand("help");
//}

$(document).keydown(function(e) {
		e = e || window.event;
		var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

		if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
				e.preventDefault();
				if (command !== "") {
						erase(1);
				}
		}

		if (keyCode === 38 || keyCode === 40) {
				if (keyCode === 38) {
						historyIndex--;
						if (historyIndex < 0) {
								historyIndex++;
						}
				} else if (keyCode === 40) {
						historyIndex++;
						if (historyIndex > commandHistory.length - 1) {
								historyIndex--;
						}
				}

				var cmd = commandHistory[historyIndex];
				if (cmd !== undefined) {
						clearCommand();
						appendCommand(cmd);
				}
		}
});

$(document).keypress(function(e) {
		e = e || window.event;
		var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

		switch (keyCode) {
				case 13:
						{
								terminal.append("\n");

								processCommand();
								displayPrompt();
								break;
						}
				default:
						{
								appendCommand(String.fromCharCode(keyCode));
						}
		}
});

title.text("Mac OS terminal");

var date = new Date().toString(); date = date.substr(0, date.indexOf("GMT") - 1);

terminal.append("Last login: " + date + " on vsevolodhtml\n"); displayPrompt();

//});
});
//fon
!function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":-10}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"fixed"}),this.l(this.canvas,{"z-index":"-5",position:"fixed"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#888',
  background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
  interactive: true,
  speed: 'medium',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
//draggable
$(function() {
	$( ".window" ).draggable();
});
$(function() {
	$( ".ava" ).draggable();
});
$(function() {
	$( "#popup1" ).draggable();
});
		//title
		var divElement = document.getElementById('scroll');
		function titlet0 () {
			document.title = 'Mac OS';
		}
		function titlet () {
			document.title = 'Mac OS terminal_';
			setTimeout("titlet1()", 500);
			divElement.scrollTop = 9999;
		}
		function titlet1 () {
			document.title = 'Mac OS terminal';
			setTimeout("titlet()", 500);
			divElement.scrollTop = 9999;
		}
		function titlet2 () {
			document.title = 'Mac OS_';
			setTimeout("titlet3()", 500);
		}
		function titlet3 () {
			document.title = 'Mac OS t_';
			setTimeout("titlet4()", 500);
		}
		function titlet4 () {
			document.title = 'Mac OS ter_';
			setTimeout("titlet5()", 500);
		}
		function titlet5 () {
			document.title = 'Mac OS termi_';
			setTimeout("titlet6()", 500);
		}
		function titlet6 () {
			document.title = 'Mac OS termina_';
			setTimeout("titlet7()", 500);
		}
		function titlet7 () {
			document.title = 'Mac OS terminal_';
			setTimeout("titlet()", 500);
		}
		setTimeout("titlet2()", 1000);
		setTimeout("titlet0()", 100);
      $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }
