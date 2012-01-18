// Created by iWeb 3.0.2 local-build-20101006

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.50}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,400),url:'FanRadio_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'FanRadio_files/stroke_1.png'},{rect:new IWRect(1,-1,342,2),url:'FanRadio_files/stroke_2.png'},{rect:new IWRect(343,-1,2,2),url:'FanRadio_files/stroke_3.png'},{rect:new IWRect(343,1,2,400),url:'FanRadio_files/stroke_4.png'},{rect:new IWRect(343,401,2,2),url:'FanRadio_files/stroke_5.png'},{rect:new IWRect(1,401,342,2),url:'FanRadio_files/stroke_6.png'},{rect:new IWRect(-1,401,2,2),url:'FanRadio_files/stroke_7.png'}],new IWSize(344,402))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('FanRadio_files/FanRadioMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
