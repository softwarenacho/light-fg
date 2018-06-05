// Basic navigation adjustments
$(function() {
  $('#myCarousel').carousel({interval: 3000});
  $(".trigger").click(function() {
    $(".menu").toggleClass("active");
  });
  var speed = 500;
  $('a[href^=\\#]').unbind('click.smoothScroll').bind('click.smoothScroll', function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, speed);
  });
});

let app = angular.module('futureGame', [])

app.controller('landingCtrl', ['$scope', function($scope) {
  console.log('landingCtrl');
  $scope.carousel = Array.from( {length: 11}, (v, k) => k + 1);
  $scope.releases = [
    { id: 'FG01', album: '', name: 'sanabria-grandfather-ep', img: 'https://i.imgur.com/YRtOTeN.jpg', title: 'Grandfather', author: 'Sanabria' },
    { id: 'FG02', album: '', name: '', img: 'https://i.imgur.com/ZBTxTpl.jpg', title: 'Dark Sensations', author: 'Karlos Resendiz' },
    { id: 'FG03', album: '', name: '', img: 'https://i.imgur.com/CLTnBm7.jpg', title: 'Festin', author: 'Sanabria' },
    { id: 'FG04', album: '', name: '', img: 'https://i.imgur.com/fa4H5b8.jpg', title: 'New Genotype', author: 'Sanabria' },
    { id: 'FG05', album: '', name: '', img: 'https://i.imgur.com/lZRu2JX.jpg', title: 'All Day', author: 'Sanabria' },
    { id: 'FG06', album: '', name: '', img: 'https://i.imgur.com/RvayBIf.jpg', title: 'Mandala', author: 'Hombre Bala' },
    { id: 'FG07', album: '', name: '', img: 'https://i.imgur.com/mSuWQCv.jpg', title: 'Resistencia', author: 'Alain Hellion' },
    { id: 'FG08', album: '', name: '', img: 'https://i.imgur.com/STu7rBF.jpg', title: 'Shadows', author: 'Hanzel Goyri' },
    { id: 'FG09', album: '', name: '', img: 'https://i.imgur.com/TZhDk2S.jpg', title: 'Pervert Song', author: 'Attaris' },
    { id: 'FG10', album: '', name: '', img: 'https://i.imgur.com/UwBSVlf.jpg', title: '4th Anniversary', author: 'VA' },
    { id: 'FG11', album: '', name: '', img: 'https://i.imgur.com/TFSa0AR.jpg', title: 'Subterraneo', author: 'John Key Om' },
    { id: 'FG12', album: '', name: '', img: 'https://i.imgur.com/Vj7avsy.jpg', title: 'Gallo Diablo', author: 'Attaris' },
    { id: 'FG13', album: '', name: '', img: 'https://i.imgur.com/8UIJmko.jpg', title: 'Salsipuedes', author: 'Dubus' },
    { id: 'FG14', album: '', name: '', img: 'https://i.imgur.com/AiJjmJL.jpg', title: 'Alma', author: 'Sanabria' },
    { id: 'FG15', album: '', name: '', img: 'https://i.imgur.com/E735mR1.jpg', title: 'Lies', author: 'Mode & Light' },
    { id: 'FG16', album: '', name: '', img: 'https://i.imgur.com/HzhIICv.jpg', title: 'We Can Together', author: 'Sanabria' },
    { id: 'FG17', album: '', name: '', img: 'https://i.imgur.com/RdJJdIM.jpg', title: 'Los Hijos Salvajes', author: 'Sanabria & Ecozone' },
    { id: 'FG18', album: '', name: '', img: 'https://i.imgur.com/K5VZ2ys.jpg', title: 'Analog System', author: 'Karlos Resendiz' },
    { id: 'FG19', album: '', name: '', img: 'https://i.imgur.com/yxG3PNB.jpg', title: 'Hot as Ice', author: 'Mad Volt' }
  ];
}]);
