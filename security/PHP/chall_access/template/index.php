<!DOCTYPE html>
<html>
<?php

class App 
{
    public $log = 'log.txt';
    public $data = 'no data';

    public function checkServices() 
    {
        echo '<script>console.log("[+] Checking Services.")</script>';
        $this->data = 'Success';
    }

    public function __destruct()
    {
        file_put_contents(__DIR__. '/' . $this->log, $this->data);
        echo '<script>console.log("[+] Logs written to log file.")</script>';
    }
}
$userInput = $_GET['data'] ?? '';
$someData = unserialize($userInput);

$app = new App;
$app->checkServices();
?>
<style>
    body {
  background-color: #9C9A51;
  background-size:30px 50px;
}
.frame {
  height: 340px; width: 340px;
  background: 
  radial-gradient(circle at 100% 50%, transparent 20%,     rgba(255,255,255,.05) 21%, rgba(255,255,255,.05) 34%, transparent 35%, transparent),
  radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.05) 21%, rgba(255,255,255,.05) 34%, transparent 35%, transparent) 0 -50px;
  background-color: #575532;
  background-size:15px 20px;
  position: relative;
  margin: 4% auto 0 auto;
  -webkit-box-shadow: inset -1px -2px 20px 4px #35362A;
  -moz-box-shadow: inset -1px -2px 20px 4px #35362A;
  -o-box-shadow: inset -1px -2px 20px 4px #35362A;
  box-shadow: inset -1px -2px 20px 4px #35362A;
  border: 1px solid #393A31;

}
.kodama {
  height: 330px; width: 155px;
  position: relative;
  margin: 0 auto;
  opacity: 1;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
}
.kodama:hover {
  opacity: 0.3; 
  -webkit-transition: opacity 2s ease-in;
  -moz-transition: opacity 2s ease-in;
  -o-transition: opacity 2s ease-in;
  transition: opacity 2s ease-in;
}
.head {
  height: 155px; width: 155px; 
  position: absolute;
  z-index: 100;
  -webkit-animation: kodama-click 3s linear infinite;
  -moz-animation: kodama-click 3s linear infinite;
  -o-animation: kodama-click 3s linear infinite;
  animation: kodama-click 3s linear infinite;
}
.head, .body, .frontleaves {
  margin-top: 60px;
}
.kodama:hover .head {
  -webkit-animation: kodama-hidden 5s linear infinite;
  -moz-animation: kodama-hidden 5s linear infinite;
  -o-animation: kodama-hidden 5s linear infinite;
  animation: kodama-hidden 5s linear infinite;
}
.headback, .bodyback {
  background-color: #FAFAFA; 
  position: absolute;
}
/* ---------- Kodama Head ---------- */
.face {
  background-color: #242424; 
  position: absolute;
  -webkit-box-shadow: inset -2px 1px 10px 1px #000000;
  -moz-box-shadow: inset -2px 1px 10px 1px #000000;
  -o-box-shadow: inset -2px 1px 10px 1px #000000;
  box-shadow: inset -2px 1px 10px 1px #000000;
}
.circle {border-radius: 50%;}
.top {
  left: 11px;
  width: 137px; height: 152px;
  z-index: 101;
}
.bottom {
  left: 1px; top: 35px;
  width: 151px; height: 117px;
  z-index: 102;
  -webkit-box-shadow: inset -15px -20px 10px 0 #E0E0E0;
  -moz-box-shadow: inset -15px -20px 10px 0 #E0E0E0;
  -o-box-shadow: inset -15px -20px 10px 0 #E0E0E0;
  box-shadow: inset -15px -20px 10px 0 #E0E0E0;
}
.left {
  left: 11px; top: 50px;
  width: 5px; height: 22px;
  z-index: 103;
  -webkit-transform:rotate(22deg);
  -moz-transform:rotate(22deg);
  -o-transform:rotate(22deg);
  transform:rotate(22deg);
}
.right {
  left: 130px; top: 44px;
  width: 21px; height: 58px;
  z-index: 104;
  -webkit-transform:rotate(-11deg);
  -moz-transform:rotate(-11deg);
  -o-transform:rotate(-11deg);
  transform:rotate(-11deg);
  -webkit-box-shadow: inset -5px -20px 5px 0 #E0E0E0;
  -moz-box-shadow: inset -5px -20px 5px 0 #E0E0E0;
  -o-box-shadow: inset -5px -20px 5px 0 #E0E0E0;
  box-shadow: inset -5px -20px 5px 0 #E0E0E0;
}
.lefteye {
  left: 40px; top: 18px;
  width: 25px; height: 29px;
  z-index: 105;
  -webkit-transform:rotate(30deg);
  -moz-transform:rotate(30deg);
  -o-transform:rotate(30deg);
  transform:rotate(30deg);
}
.righteye {
  left: 105px; top: 75px;
  width: 30px; height: 33px;
  z-index: 106;
}
.mouth {
  left: 25px; top: 100px;
  width: 16px; height: 16px;
  z-index: 107;
  -webkit-transform:rotate(30deg);
  -moz-transform:rotate(30deg);
  -o-transform:rotate(30deg);
  transform:rotate(30deg);
}

/* ---------- Kodama Body ---------- */
.body {
  top: 125px;
  width: 165px; height: 160px;
  position: absolute;
  z-index: 10;
}
.shoulders {
  left: 10px; top: 0;
  width: 120px; height: 155px;
  z-index: 10;
  -webkit-transform:rotate(5deg);
  -moz-transform:rotate(5deg);
  -o-transform:rotate(5deg);
  transform:rotate(5deg);
  -webkit-box-shadow: inset -10px 20px 40px 5px #E0E0E0;
  -moz-box-shadow: inset -10px 20px 40px 5px #E0E0E0;
  -o-box-shadow: inset -10px 20px 40px 5px #E0E0E0;
  box-shadow: inset -10px 20px 40px 5px #E0E0E0;
}
.lefthand {
  left: 8px; top: 15px;
  width: 30px; height:100px;
  z-index: 9;
  -webkit-transform:rotate(20deg);
  -moz-transform:rotate(20deg);
  -o-transform:rotate(20deg);
  transform:rotate(20deg);
  -webkit-box-shadow: inset -10px 20px 40px 5px #CACACA;
  -moz-box-shadow: inset -10px 20px 40px 5px #CACACA;
  -o-box-shadow: inset -10px 20px 40px 5px #CACACA;
  box-shadow: inset -10px 20px 40px 5px #CACACA;
}
.righthand {
  left: 105px; top: 15px;
  width: 32px; height:110px;
  z-index: 11;
  -webkit-transform:rotate(-18deg);
  -moz-transform:rotate(-18deg);
  -o-transform:rotate(-18deg);
  transform:rotate(-18deg); 
  -webkit-box-shadow: inset 0 25px 20px 3px #E6E6E6;
  -moz-box-shadow: inset 0 25px 20px 3px #E6E6E6;
  -o-box-shadow: inset 0 25px 20px 3px #E6E6E6;
  box-shadow: inset 0 25px 20px 3px #E6E6E6;
}

/* ---------- Front leaves ---------- */
.frontleaves {
  height: 70px; width: 200px;
  z-index: 200;
  position: absolute;
  left: 50%;
  margin-left: -98px;
  top: 230px;
  opacity: 1;  

}
.leaf {
  position: absolute;
  z-index: 201;
  height: 40px; width: 20px;
  border-radius: 50%;
  background: #4EA24E;
  -webkit-box-shadow: inset -5px 0 20px 3px #348B34;
  -moz-box-shadow: inset -5px 0 20px 3px #348B34;
  -o-box-shadow: inset -5px 0 20px 3px #348B34;
  box-shadow: inset -5px 0 20px 3px #348B34;
}
.leaf:after {
  content: "";
  position: absolute;
  height: 30px;
  width: 2px;
  background-color:#348B34;
  left: 50%;
  margin-left: -1px;
  top: 5px;  
}
.one   { top: 5px; left: 5px; }
.two   { top: 15px; left: 15px; 
  -webkit-transform:rotate(10deg);
  -moz-transform:rotate(10deg); 
  -o-transform:rotate(10deg); 
  transform:rotate(10deg); 
}
.three { top: 22px; left:0px;  
  -webkit-transform:rotate(-45deg);
  -moz-transform:rotate(-45deg); 
  -o-transform:rotate(-45deg); 
  transform:rotate(-45deg); 
  z-index: 202; 
}
.four  { top: 22px; left:0px; 
  -webkit-transform:rotate(-45deg); 
  -moz-transform:rotate(-45deg); 
  -o-transform:rotate(-45deg); 
  transform:rotate(-45deg);
  z-index: 202; 
}
.leafgrouptwo { position: absolute; left: 100px; 
  -webkit-transform:rotate(10deg);
  -moz-transform:rotate(10deg); 
  -o-transform:rotate(10deg); 
  transform:rotate(10deg);
}
.leafgroupthree { position: absolute; left: 60px; 
  -webkit-transform:rotate(-10deg);
  -moz-transform:rotate(-10deg); 
  -o-transform:rotate(-10deg); 
  transform:rotate(-10deg);
}
.leafgroupfour  { position: absolute; left: 40px; 
  -webkit-transform:rotate(30deg); 
  -moz-transform:rotate(30deg); 
  -o-transform:rotate(30deg); 
  transform:rotate(30deg);
}
.leafgroupfive  { position: absolute; left: 80px; 
  -webkit-transform:rotate(40deg); 
  -moz-transform:rotate(40deg); 
  -o-transform:rotate(40deg); 
  transform:rotate(40deg);
}
.leafgroupsix   { position: absolute; left: 180px; 
  -webkit-transform:rotate(40deg); 
  -moz-transform:rotate(40deg); 
  -o-transform:rotate(40deg); 
  transform:rotate(40deg);
}
.leafgroupseven { position: absolute; left: 152px; top:-5px; 
  -webkit-transform:rotate(40deg); 
  -moz-transform:rotate(40deg); 
  -o-transform:rotate(40deg); 
  transform:rotate(40deg);
}
.leafgroupeight { position: absolute; left: 110px; top: 5px; 
  -webkit-transform:rotate(-10deg);
  -moz-transform:rotate(-10deg); 
  -o-transform:rotate(-10deg); 
  transform:rotate(-10deg);
}
.leafgrouplowmid { position: absolute; left: 110px; top: 28px; 
  -webkit-transform:rotate(34deg);
  -moz-transform:rotate(34deg); 
  -o-transform:rotate(34deg); 
  transform:rotate(34deg);
}
.leafgrouplowright { position: absolute; left: 145px; top: 22px; 
  -webkit-transform:rotate(34deg);
  -moz-transform:rotate(34deg); 
  -o-transform:rotate(34deg); 
  transform:rotate(34deg);
}
.leafgrouplowleft { position: absolute; left: 50px; top: 35px; 
  -webkit-transform:rotate(-10deg);
  -moz-transform:rotate(-10deg); 
  -o-transform:rotate(-10deg); 
  transform:rotate(-10deg);
}
.leafgrouplowlefttwo { position: absolute; left: 35px; top: 20px; 
  -webkit-transform:rotate(10deg);
  -moz-transform:rotate(10deg); 
  -o-transform:rotate(10deg); 
  transform:rotate(10deg);
}


/* ---------- Lights ---------- */
.light, .lighttwo, .lightthree, .lightfour, .lightfive, .lightsix, .lightseven, .lighteight, .lightnine, .lightten {
  width: 10px; height: 10px;
  z-index: 106;
  border-radius: 50%;
  background-color: #DEEBD7;
  opacity: 0.5;
  position: absolute;
  z-index: 1;
}
.light {
  left: 50px; top: 70px;
  -webkit-animation: glow 20s ease-out infinite;
  -moz-animation: glow 20s ease-out infinite;
  -o-animation: glow 20s ease-out infinite;
  animation: glow 20s ease-out infinite;
}
.lighttwo {
  left: 260px; top: 200px;
  -webkit-animation: glowtwo 6s ease-out infinite;
  -moz-animation: glowtwo 6s ease-out infinite;  
  -o-animation: glowtwo 6s ease-out infinite;  
  animation: glowtwo 6s ease-out infinite;  
}
.lightthree {
  left: 40px; top: 200px; 
  width: 5px; height: 5px;
  -webkit-animation: glowthree 14s ease-out infinite;
  -moz-animation: glowthree 14s ease-out infinite;  
  -o-animation: glowthree 14s ease-out infinite;  
  animation: glowthree 14s ease-out infinite;  
}
.lightfour {
  left: 160px; top: 25px; 
  width: 7px; height: 7px;
  -webkit-animation: glowfour 10s ease-out infinite;
  -moz-animation: glowfour 10s ease-out infinite;
  -o-animation: glowfour 10s ease-out infinite;
  animation: glowfour 10s ease-out infinite;
}
.lightfive {
  left: 90px; top: 180px; 
  width: 9px; height: 9px;
  -webkit-animation: glowfive 10s ease-out infinite;
  -moz-animation: glowfive 10s ease-out infinite;
  -o-animation: glowfive 10s ease-out infinite;
  animation: glowfive 10s ease-out infinite;  
}
.lightsix {
  left: 270px; top: 125px; 
  width: 5px; height: 5px;
  -webkit-animation: glowsix 9s ease-out infinite;
  -moz-animation: glowsix 9s ease-out infinite;
  -o-animation: glowsix 9s ease-out infinite;
  animation: glowsix 9s ease-out infinite;
}
.lightseven {
  left: 240px; top: 50px; 
  width: 3px; height: 3px;
  -webkit-animation: glow-grow 3s ease-out infinite;
  -moz-animation: glow-grow 3s ease-out infinite;
  -o-animation: glow-grow 3s ease-out infinite;
  animation: glow-grow 3s ease-out infinite;
}
.lighteight {
  left: 70px; top: 195px; 
  width: 8px; height: 8px;
  -webkit-animation: glow-grow 2s ease-out infinite;
  -moz-animation: glow-grow 2s ease-out infinite;
  -o-animation: glow-grow 2s ease-out infinite;
  animation: glow-grow 2s ease-out infinite;
}
.lightnine {
  left: 255px; top: 275px; 
  width: 8px; height: 8px;
  -webkit-animation: glow-grow-reverse 5s ease-out infinite;
  -moz-animation: glow-grow-reverse 5s ease-out infinite;
  -o-animation: glow-grow-reverse 5s ease-out infinite;
  animation: glow-grow-reverse 5s ease-out infinite;
}
.lightten {
  left: 60px; top: 95px; 
  width: 1px; height: 1px;
  -webkit-animation: glow-grow-reverse 3s ease-out infinite;
  -moz-animation: glow-grow-reverse 3s ease-out infinite;
  -o-animation: glow-grow-reverse 3s ease-out infinite;
  animation: glow-grow-reverse 3s ease-out infinite;
}


/* ---------- keyframes for different browsers ---------- */
@keyframes kodama-click {
  0%   { transform: rotate(0deg); }
  40%  { transform: rotate(90deg); }
  50%  { transform: rotate(-90deg); }
  60%  { transform: rotate(90deg); }
  70%  { transform: rotate(-90deg); }
  80%  { transform: rotate(90deg); }
  90%  { transform: rotate(-90deg); }
  100% { transform: rotate(0deg); }
}
@keyframes kodama-hidden  {
  0%   { transform: rotate(0deg); }
  33%  { transform: rotate(-5deg); }
  66%  { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}
@keyframes glow {
    0% {opacity: 0.5; left: 50px; }
    5% {opacity: 0.1; }
    10% {opacity: 0.5; }
    15% {opacity:0.1; }
    20% {opacity:  0.5; }
    25% {opacity: 0.1; }
    30% {opacity:  0.5; left: 275px; top: 100px; }
    35% {opacity: 0.1; }
    40% {opacity:  0.5; }
    45% {opacity: 0.1; }
    50% {opacity:  0.5; left: 290px; top: 100px; }
    55% {opacity: 0.1; }
    60% {opacity:  0.5; }
    65% {opacity: 0.1; }
    70% {opacity:  0.5; }
    75% {opacity: 0.1; }
    80% {opacity:  0.5; }
    85% {opacity: 0.1; }
    90% {opacity:  0.5; }
    95% {opacity: 0.1; }
    100% {opacity:  0.5; left: 50px;
    }
}
@keyframes glowtwo {
    0% {opacity: 0.5; left: 260px; top: 200px; }
    25% {opacity:0.1; left: 270px; top: 210px; }
    50% {opacity:0.5; left: 280px; top: 222px; }
    75% {opacity:0.1; left: 265px; top: 232px; }
    100% {opacity:  0.5; left: 260px; top: 200px; }
}
@keyframes glowthree {
    0% {opacity: 0.1; left: 40px; top: 200px; }
    33% {opacity:0.5; left: 50px; top: 270px; }
    66% {opacity:0.1; left: 65px; top: 270px; }
    100% {opacity:  0.1; left: 40px; top: 200px; }
}
@keyframes glowfour {
    0% {opacity: 0.1; left: 160px; top: 25px; }
    33% {opacity:0.5; left: 130px; top: 30px; }
    66% {opacity:0.1; left: 100px; top: 55px; }
    100% {opacity:  0.1; left: 160px; top: 25px; }
}
@keyframes glowfive {
    0% {opacity: 0.1; left: 90px; top: 180px; }
    20% {opacity:0.5; left: 55px; top: 160px; }
    55% {opacity:0.1; left: 25px; top: 130px; }
    100% {opacity:  0.1; left: 90px; top: 180px; }
}
@keyframes glowsix {
    0% {opacity: 0.1; left: 270px; top: 125px; }
    50% {opacity:0.1; left: 290px; top: 160px; }
    100% {opacity:  0.1; left: 270px; top: 125px; }
}
@keyframes glow-grow {
    0% {opacity: 0.3; width: 4px; height: 4px;}
    50% {opacity: 0.1; width: 7px; height: 7px;}
    100% {opacity:  0.3; width: 4px; height: 4px;}
}
@keyframes glow-grow-reverse {
    0% {opacity: 0.3; width: 5px; height: 5px;}
    60% {opacity: 0.1; width: 1px; height: 1px;}
    100% {opacity:  0.3; width: 5px; height: 5px;}
}


@-webkit-keyframes kodama-click {
  0%   { -webkit-transform: rotate(0deg); }
  40%  { -webkit-transform: rotate(90deg); }
  50%  { -webkit-transform: rotate(-90deg); }
  60%  { -webkit-transform: rotate(90deg); }
  70%  { -webkit-transform: rotate(-90deg); }
  80%  { -webkit-transform: rotate(90deg); }
  90%  { -webkit-transform: rotate(-90deg); }
  100% { -webkit-transform: rotate(0deg); }
}
@-webkit-keyframes kodama-hidden  {
  0%   { -webkit-transform: rotate(0deg); }
  33%  { -webkit-transform: rotate(-5deg); }
  66%  { -webkit-transform: rotate(10deg); }
  100% { -webkit-transform: rotate(0deg); }
}
@-webkit-keyframes glow {
    0% {opacity: 0.5; left: 50px; }
    5% {opacity: 0.1; }
    10% {opacity: 0.5; }
    15% {opacity:0.1; }
    20% {opacity:  0.5; }
    25% {opacity: 0.1; }
    30% {opacity:  0.5; left: 275px; top: 100px; }
    35% {opacity: 0.1; }
    40% {opacity:  0.5; }
    45% {opacity: 0.1; }
    50% {opacity:  0.5; left: 290px; top: 100px; }
    55% {opacity: 0.1; }
    60% {opacity:  0.5; }
    65% {opacity: 0.1; }
    70% {opacity:  0.5; }
    75% {opacity: 0.1; }
    80% {opacity:  0.5; }
    85% {opacity: 0.1; }
    90% {opacity:  0.5; }
    95% {opacity: 0.1; }
    100% {opacity:  0.5; left: 50px;
    }
}
@-webkit-keyframes glowtwo {
    0% {opacity: 0.5; left: 260px; top: 200px; }
    25% {opacity:0.1; left: 270px; top: 210px; }
    50% {opacity:0.5; left: 280px; top: 222px; }
    75% {opacity:0.1; left: 265px; top: 232px; }
    100% {opacity:  0.5; left: 260px; top: 200px; }
}
@-webkit-keyframes glowthree {
    0% {opacity: 0.1; left: 40px; top: 200px; }
    33% {opacity:0.5; left: 50px; top: 270px; }
    66% {opacity:0.1; left: 65px; top: 270px; }
    100% {opacity:  0.1; left: 40px; top: 200px; }
}
@-webkit-keyframes glowfour {
    0% {opacity: 0.1; left: 160px; top: 25px; }
    33% {opacity:0.5; left: 130px; top: 30px; }
    66% {opacity:0.1; left: 100px; top: 55px; }
    100% {opacity:  0.1; left: 160px; top: 25px; }
}
@-webkit-keyframes glowfive {
    0% {opacity: 0.1; left: 90px; top: 180px; }
    20% {opacity:0.5; left: 55px; top: 160px; }
    55% {opacity:0.1; left: 25px; top: 130px; }
    100% {opacity:  0.1; left: 90px; top: 180px; }
}
@-webkit-keyframes glowsix {
    0% {opacity: 0.1; left: 270px; top: 125px; }
    50% {opacity:0.1; left: 290px; top: 160px; }
    100% {opacity:  0.1; left: 270px; top: 125px; }
}
@-webkit-keyframes glow-grow {
    0% {opacity: 0.3; width: 4px; height: 4px;}
    50% {opacity: 0.1; width: 7px; height: 7px;}
    100% {opacity:  0.3; width: 4px; height: 4px;}
}
@-webkit-keyframes glow-grow-reverse {
    0% {opacity: 0.3; width: 5px; height: 5px;}
    60% {opacity: 0.1; width: 1px; height: 1px;}
    100% {opacity:  0.3; width: 5px; height: 5px;}
}


@-moz-keyframes kodama-click {
  0%   { -moz-transform: rotate(0deg); }
  40%  { -moz-transform: rotate(90deg); }
  50%  { -moz-transform: rotate(-90deg); }
  60%  { -moz-transform: rotate(90deg); }
  70%  { -moz-transform: rotate(-90deg); }
  80%  { -moz-transform: rotate(90deg); }
  90%  { -moz-transform: rotate(-90deg); }
  100% { -moz-transform: rotate(0deg); }
}
@-moz-keyframes kodama-hidden  {
  0%   { -moz-transform: rotate(0deg); }
  33%  { -moz-transform: rotate(-5deg); }
  66%  { -moz-transform: rotate(10deg); }
  100% { -moz-transform: rotate(0deg); }
}
@-moz-keyframes glow {
    0% {opacity: 0.5; left: 50px; }
    5% {opacity: 0.1; }
    10% {opacity: 0.5; }
    15% {opacity:0.1; }
    20% {opacity:  0.5; }
    25% {opacity: 0.1; }
    30% {opacity:  0.5; left: 275px; top: 100px; }
    35% {opacity: 0.1; }
    40% {opacity:  0.5; }
    45% {opacity: 0.1; }
    50% {opacity:  0.5; left: 290px; top: 100px; }
    55% {opacity: 0.1; }
    60% {opacity:  0.5; }
    65% {opacity: 0.1; }
    70% {opacity:  0.5; }
    75% {opacity: 0.1; }
    80% {opacity:  0.5; }
    85% {opacity: 0.1; }
    90% {opacity:  0.5; }
    95% {opacity: 0.1; }
    100% {opacity:  0.5; left: 50px;
    }
}
@-moz-keyframes glowtwo {
    0% {opacity: 0.5; left: 260px; top: 200px; }
    25% {opacity:0.1; left: 270px; top: 210px; }
    50% {opacity:0.5; left: 280px; top: 222px; }
    75% {opacity:0.1; left: 265px; top: 232px; }
    100% {opacity:  0.5; left: 260px; top: 200px; }
}
@-moz-keyframes glowthree {
    0% {opacity: 0.1; left: 40px; top: 200px; }
    33% {opacity:0.5; left: 50px; top: 270px; }
    66% {opacity:0.1; left: 65px; top: 270px; }
    100% {opacity:  0.1; left: 40px; top: 200px; }
}
@-moz-keyframes glowfour {
    0% {opacity: 0.1; left: 160px; top: 25px; }
    33% {opacity:0.5; left: 130px; top: 30px; }
    66% {opacity:0.1; left: 100px; top: 55px; }
    100% {opacity:  0.1; left: 160px; top: 25px; }
}
@-moz-keyframes glowfive {
    0% {opacity: 0.1; left: 90px; top: 180px; }
    20% {opacity:0.5; left: 55px; top: 160px; }
    55% {opacity:0.1; left: 25px; top: 130px; }
    100% {opacity:  0.1; left: 90px; top: 180px; }
}
@-moz-keyframes glowsix {
    0% {opacity: 0.1; left: 270px; top: 125px; }
    50% {opacity:0.1; left: 290px; top: 160px; }
    100% {opacity:  0.1; left: 270px; top: 125px; }
}
@-moz-keyframes glow-grow {
    0% {opacity: 0.3; width: 4px; height: 4px;}
    50% {opacity: 0.1; width: 7px; height: 7px;}
    100% {opacity:  0.3; width: 4px; height: 4px;}
}
@-moz-keyframes glow-grow-reverse {
    0% {opacity: 0.3; width: 5px; height: 5px;}
    60% {opacity: 0.1; width: 1px; height: 1px;}
    100% {opacity:  0.3; width: 5px; height: 5px;}
}



/* ----- Line of text ------ */
p, a:link, a:visited {
	font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
	font-weight: 300;
	color: #B6B473;
	text-align: center;
	text-decoration: none;
	font-size:13px;
  margin-top: 80px;
}
a:hover {	color: #348B34; }

</style>
<div class="frame circle">
  <div class="light"></div>
  <div class="lighttwo"></div>
  <div class="lightthree"></div>
  <div class="lightfour"></div>
  <div class="lightfive"></div>
  <div class="lightsix"></div>
  <div class="lightseven"></div>
  <div class="lighteight"></div>
  <div class="lightnine"></div>
  <div class="lightten"></div>
  <div class="kodama">
    <div class="head">
      <span class="headback circle top"></span>
      <span class="headback circle bottom"></span>
      <span class="headback circle right"></span>
      <span class="headback left"></span>
      <span class="face circle lefteye"></span>
      <span class="face circle righteye"></span>
      <span class="face circle mouth"></span>
    </div>
    <div class="body">
      <span class="bodyback circle shoulders"></span>
      <span class="bodyback circle lefthand"></span>
      <span class="bodyback circle righthand"></span>    
    </div>
  </div>
  <div class="frontleaves">
    <div class="leafgroup">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
     <div class="leafgrouptwo">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgroupthree">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgroupfour">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgroupfive">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
      <div class="leafgroupsix">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgroupseven">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgroupeight">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
     <div class="leafgrouplowmid">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgrouplowleft">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgrouplowlefttwo">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
    <div class="leafgrouplowright">
      <span class="leaf one"></span> <span class="leaf two"></span>
      <span class="leaf three"></span> <span class="leaf four"></span>
    </div>
  </div>  
</div>
<p>Pure CSS Kodama by Jack Parsons</p>
