
var cloudColor = '#fff';
var cloudShadowColor = 'rgba(0, 0, 0, 0.7)';
var cloudWidth = 420;
var cloudHeigth = 270;
var cloudX = 100;
var cloudY = 10;
var barWidth = 40;
var barHeigth = 150;
var barGap = 50;
var barColor = 'rgba(255, 0, 0, 1)';
var gap = 10;
var fontGap = 16;
var textWidth = 50;
var names = ['Фродо', 'Гендальф', 'Бильбо', 'Беггинс'];
var times = [];

var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle  = color;
    ctx.fillRect(x, y, cloudWidth, cloudHeigth); 
};

var randomNumber = function (a,b) {
    return Math.random(a - b)
};


var getElementMax = function (arr) {
  var maxElement = arr[0];
  for (var j = 0; j < arr.length - 1; j++) {
    if (arr[j] > maxElement) { 
        maxElement = arr[j];
    };
  };
  return maxElement;
};

var barColor = [];


window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, cloudX + gap, cloudY + gap, cloudShadowColor);
  renderCloud(ctx, cloudX, cloudY, cloudColor);
  
  ctx.fillStyle = '#000';

  var maxTime = getElementMax(times);
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура Вы победили!', cloudX + gap, 50);
  ctx.fillText('Список результатов:', cloudX + gap, 80);
  
  var arrColor = ['rgba(10, 0, 228, 1)', 'rgba(10, 0, 228, 0.9)', 'rgba(10, 0, 228, 0.7)', 'rgba(10, 0, 228, 0.3)', 'rgba(10, 0, 228, 0.4)', 'rgba(10, 0, 228, 0.6)',];
  
  for (var i = 0; i <= names.length - 1; i++) {
    var colorRandomElement = function (arrColor) {
        var rand = Math.floor(Math.random() * arrColor.length);
         return arrColor[rand];
      };

    var otherColor = colorRandomElement(arrColor);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], cloudX + gap + (gap + barWidth + textWidth) * i, cloudY + cloudHeigth - gap);
    ctx.fillText(Math.round(times[i]), cloudX + gap + (gap + barWidth + textWidth) * i, cloudY + 100);
    if (names[i] == "Вы") {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
        ctx.fillStyle = otherColor;
    };
    ctx.fillRect(cloudX + gap + (gap + barWidth + textWidth) * i, cloudHeigth - ((barHeigth * times[i] / maxTime) - 30) - gap - fontGap, barWidth, (barHeigth * times[i] / maxTime) - 30);    
};         
};


