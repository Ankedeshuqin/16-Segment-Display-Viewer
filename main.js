/*
    Something like a 16 segment display styled text viewer on HTML.
    Order of each segments used:
         -0- -1-
        |\  |  /|
        6 C A D 2
        |  \|/  |
         -8- -9-
        |  /|\  |
        7 F B E 3
        |/  |  \|
         -4- -5-
    Each glyph is represented by joining every segment bits into a number.
    Part of Latin, Greek, Cyrillic letters and symbols are supported.
    Also able to adjust the typeface and color.
    Made by Ankedeshuqin.
    First finished in 2022.9.12.
*/

charData={" ":0,"!":1040,"\"":1028,"#":3900,"$":3963,"%":44905,"&":24465,"'":1024,"(":24576,")":36864,"*":64512,"+":3840,",":32768,"-":768,".":16,"/":40960,"0":41215,"1":12,"2":951,"3":831,"4":844,"5":891,"6":1019,"7":15,"8":1023,"9":895,":":272,";":32769,"<":24832,"=":816,">":37376,"?":535,"@":1783,"A":975,"B":3647,"C":243,"D":3135,"E":1011,"F":963,"G":763,"H":972,"I":3072,"J":188,"K":25024,"L":240,"M":12492,"N":20684,"O":255,"P":967,"Q":16639,"R":17351,"S":891,"T":3075,"U":252,"V":41152,"W":49356,"X":61440,"Y":14336,"Z":41011,"[":3106,"\\":20480,"]":3089,"^":8196,"_":48,"`":4096,"a":2480,"b":1016,"c":944,"d":956,"e":33200,"f":3842,"g":895,"h":968,"i":2082,"j":58,"k":17344,"l":3104,"m":2952,"n":904,"o":952,"p":967,"q":847,"r":896,"s":16944,"t":3872,"u":184,"v":32896,"w":49288,"x":49920,"y":892,"z":33072,"{":3362,"|":3072,"}":3601,"~":1605,"¡":2050,"¢":1968,"£":34610,"¤":61695,"¥":15104,"¦":3072,"§":21371,"¨":3,"©":835,"ª":1857,"«":24785,"¬":776,"®":67,"¯":3,"°":1345,"±":3888,"²":8706,"³":8746,"´":8192,"µ":964,"¶":3407,"·":256,"¸":16416,"¹":4,"º":839,"»":36910,"¼":42700,"½":43750,"¾":44829,"¿":434,"À":975,"Á":975,"Â":975,"Ã":975,"Ä":975,"Å":975,"Æ":4067,"Ç":243,"È":1011,"É":1011,"Ê":1011,"Ë":1011,"Ì":3072,"Í":3072,"Î":3072,"Ï":3072,"Ð":3391,"Ñ":20686,"Ò":255,"Ó":255,"Ô":255,"Õ":255,"Ö":255,"×":61440,"Ø":41215,"Ù":252,"Ú":252,"Û":252,"Ü":252,"Ý":14336,"Þ":8643,"ß":8939,"à":2481,"á":2482,"â":2483,"ã":2483,"ä":2483,"å":2482,"æ":35632,"ç":944,"è":33201,"é":33202,"ê":33203,"ë":33203,"ì":2081,"í":2082,"î":2083,"ï":2083,"ð":958,"ñ":907,"ò":953,"ó":954,"ô":955,"õ":955,"ö":955,"÷":786,"ø":33720,"ù":185,"ú":186,"û":187,"ü":187,"ý":892,"þ":8643,"ÿ":892,"Ă":975,"ă":2483,"Ą":975,"ą":2480,"Ć":243,"ć":946,"Ĉ":243,"ĉ":947,"Č":243,"č":947,"Ď":3135,"ď":956,"Đ":3391,"đ":958,"Ę":1011,"ę":33200,"Ě":1011,"ě":33203,"Ĝ":763,"ĝ":895,"Ğ":763,"ğ":895,"Ĥ":972,"ĥ":968,"İ":3072,"ı":2080,"Ĵ":188,"ĵ":59,"Ĺ":240,"ĺ":3104,"Ł":496,"ł":3616,"Ń":20684,"ń":906,"Ň":20684,"ň":907,"Ő":255,"ő":955,"Œ":3827,"œ":2992,"Ŕ":17351,"ŕ":898,"Ř":17351,"ř":899,"Ś":891,"ś":16946,"Ŝ":891,"ŝ":16947,"Ş":891,"ş":16944,"Š":891,"š":16947,"Ţ":3075,"ţ":3872,"Ť":3075,"ť":3872,"Ŭ":252,"ŭ":187,"Ů":252,"ů":186,"Ű":252,"ű":187,"Ÿ":14336,"Ź":41011,"ź":33074,"Ż":41011,"ż":33074,"Ž":41011,"ž":33075,"ſ":3074,"Ș":891,"ș":16944,"Ț":3075,"ț":3872,";":32769,"Ά":975,"Έ":1011,"Ή":972,"Ί":3072,"Ό":255,"Ύ":14336,"Ώ":2935,"ΐ":2083,"Α":975,"Β":3647,"Γ":195,"Δ":41020,"Ε":1011,"Ζ":41011,"Η":972,"Θ":511,"Ι":3072,"Κ":25024,"Λ":40972,"Μ":12492,"Ν":20684,"Ξ":819,"Ο":255,"Π":207,"Ρ":967,"Σ":36915,"Τ":3075,"Υ":14336,"Φ":3911,"Χ":61440,"Ψ":3908,"Ω":2935,"Ϊ":3072,"Ϋ":14336,"ά":2994,"έ":33714,"ή":79,"ί":2082,"ΰ":187,"α":2992,"β":8955,"γ":47120,"δ":5051,"ε":33712,"ζ":41011,"η":79,"θ":1023,"ι":2080,"κ":17280,"λ":53248,"μ":964,"ν":32896,"ξ":41779,"ο":952,"π":904,"ρ":967,"ς":875,"σ":2960,"τ":2848,"υ":184,"φ":3911,"χ":61440,"ψ":3908,"ω":2232,"ϊ":2083,"ϋ":187,"ό":954,"ύ":186,"ώ":2234,"Ё":1011,"Є":499,"І":3072,"Ї":3072,"Ў":894,"А":975,"Б":3643,"В":3647,"Г":195,"Д":1934,"Е":1011,"Ж":64512,"З":8763,"И":41164,"Й":41166,"К":25024,"Л":33806,"М":12492,"Н":972,"О":255,"П":207,"Р":967,"С":243,"Т":3075,"У":892,"Ф":3911,"Х":61440,"Ц":1864,"Ч":844,"Ш":3324,"Щ":1868,"Ъ":3625,"Ы":2524,"Ь":1016,"Э":575,"Ю":3566,"Я":33615,"а":2480,"б":1017,"в":2041,"г":896,"д":1934,"е":33200,"ж":51968,"з":8763,"и":184,"й":187,"к":17280,"л":33288,"м":51200,"н":33416,"о":952,"п":904,"р":967,"с":944,"т":2816,"у":892,"ф":3911,"х":49920,"ц":1864,"ч":776,"ш":2232,"щ":1868,"ъ":18720,"ы":34968,"ь":34960,"э":17208,"ю":35496,"я":33672,"ё":33203,"є":33712,"і":2082,"ї":2083,"ў":894,"ẞ":8939,"–":768,"—":768,"‘":4,"’":64,"‚":8,"‛":4,"“":1028,"”":1088,"„":2056,"…":2184,"‰":61289,"′":64,"″":1088,"‹":24576,"›":36864,"€":3874,"™":1027,"一":768,"二":51,"三":819,"四":50431,"五":3899,"六":49922,"七":3872,"八":33804,"九":34568,"十":3840,"零":255,"〇":255,"百":25531,"千":3843,"万":34347,"只":49991,"大":50944,"王":3891,"飞":11809,"上":3632,"了":10259,"天":50947,"人":50176,"个":3139,"下":3587,"日":1023,"月":42542,"火":62464,"水":60672,"木":52992,"金":52083,"土":3888};

inputTxt=document.getElementById("inputtxt");
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
txt="";

/* Input controls */
inputCharW=document.getElementById("inputcharw");
inputCharH=document.getElementById("inputcharh");
inputSegW=document.getElementById("inputsegw");
inputSegSp=document.getElementById("inputsegsp");
inputCharSp=document.getElementById("inputcharsp");
inputLnSp=document.getElementById("inputlnsp");
inputCharCol=document.getElementById("inputcharcol");
inputBkCol=document.getElementById("inputbkcol");
inputSegOffOpa=document.getElementById("inputsegoffopa");

/* Range controls */
rangeCharW=document.getElementById("rangecharw");
rangeCharH=document.getElementById("rangecharh");
rangeSegW=document.getElementById("rangesegw");
rangeSegSp=document.getElementById("rangesegsp");
rangeCharSp=document.getElementById("rangecharsp");
rangeLnSp=document.getElementById("rangelnsp");
rangeSegOffOpa=document.getElementById("rangesegoffopa");

/* Input-range control pairs */
inputRangePairs=[[inputCharW,rangeCharW],[inputCharH,rangeCharH],[inputSegW,rangeSegW],[inputSegSp,rangeSegSp],[inputCharSp,rangeCharSp],[inputLnSp,rangeLnSp],[inputSegOffOpa,rangeSegOffOpa]];

checkScale=document.getElementById("checkscale");

OrigScaleValues=[100,200,15,1.5,20,40];

for(let i=0;i<7;i++){
    inputRangePairs[i][0].oninput=function(){
        if(!isNaN(Number(inputRangePairs[i][0].value))){
            inputRangePairs[i][1].value=Number(inputRangePairs[i][0].value);
            
            /* For scaling proportionally */
            if(i<6){
                if(checkScale.checked){
                    if(Number(inputRangePairs[i][0].value)!=0){
                        proportion=Number(inputRangePairs[i][0].value)/OrigScaleValues[i];
                        for(let j=0;j<6;j++){
                            if(j!=i){
                                inputRangePairs[j][0].value=inputRangePairs[j][1].value=OrigScaleValues[j]*proportion;
                            }
                            OrigScaleValues[j]=OrigScaleValues[j]*proportion;
                        }
                    }
                }else{
                    OrigScaleValues[i]=Number(inputRangePairs[i][0].value);
                }
            }
            
            redraw();
        }
    }
    
    inputRangePairs[i][1].oninput=function(){
        inputRangePairs[i][0].value=inputRangePairs[i][1].value;
        
        /* For scaling proportionally */
        if(i<6){
            if(checkScale.checked){
                if(Number(inputRangePairs[i][1].value)!=0){
                    proportion=Number(inputRangePairs[i][1].value)/OrigScaleValues[i];
                    for(let j=0;j<6;j++){
                        if(j!=i){
                            inputRangePairs[j][0].value=inputRangePairs[j][1].value=OrigScaleValues[j]*proportion;
                        }
                        OrigScaleValues[j]=OrigScaleValues[j]*proportion;
                    }
                }
            }else{
                OrigScaleValues[i]=Number(inputRangePairs[i][1].value);
            }
        }
        
        redraw();
    }
}
inputCharCol.oninput=function(){
    redraw();
}
inputBkCol.oninput=function(){
    redraw();
}

inputTxt.oninput=function(){
    txt=inputTxt.value;
    row=1;
    col=0;
    curCol=0;
    for(i=0;i<txt.length;i++){
        if(txt[i]!="\n"){
            curCol++;
            if(curCol>col) col=curCol;
        }else{
            curCol=0;
            row++;
        }
    }
    
    redraw();
}

function redraw(){
    charW=Number(inputCharW.value);
    charH=Number(inputCharH.value);
    segW=Number(inputSegW.value);
    segSp=Number(inputSegSp.value);
    charSp=Number(inputCharSp.value);
    lnSp=Number(inputLnSp.value);
    charCol=inputCharCol.value;
    bkCol=inputBkCol.value;
    segOffOpa=Number(inputSegOffOpa.value);
    
    segDX=(charW-segW)/2;
    segDY=(charH-segW)/2;
    horzSegLen=segDX-segSp*2;
    vertSegLen=segDY-segSp*2;
    diagSegDY=charH/charW;
    
    canvas.width=(charW+charSp)*col;
    canvas.height=(charH+lnSp)*row;
    ctx.fillStyle=bkCol;
    ctx.globalAlpha=1;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    curCol=0;
    curRow=0;
    for(let i=0;i<txt.length;i++){
        if(txt[i]!="\n"){
            offsetX=(charW+charSp)*curCol;
            offsetY=(charH+lnSp)*curRow;
            drawChar(offsetX,offsetY,txt[i]);
            curCol++;
        }else{
            //Fill empty width of current row with space characters
            for(let j=curCol;j<col;j++){
                drawChar((charW+charSp)*j,(charH+lnSp)*curRow," ");
            }
            curCol=0;
            curRow++;
        }
    }
    //Fill empty width of the last row with space characters
    for(let j=curCol;j<col;j++){
        drawChar((charW+charSp)*j,(charH+lnSp)*curRow," ");
    }
}

function drawChar(offsetX,offsetY,ch){
    value=(charData[ch]!=undefined ? charData[ch] : 65535);
    for(let i=0;i<16;i++){
        drawSeg(offsetX,offsetY,i,(value>>i)&1);
    }
}

function drawSeg(offsetX,offsetY,segNo,segOn){
    ctx.beginPath();
    ctx.fillStyle=charCol;
    ctx.globalAlpha=(segOn ? 1 : segOffOpa);
    
    segOffsetX=offsetX+charSp/2;
    segOffsetY=offsetY+lnSp/2;
    
    if(segNo==1 || segNo==10 || segNo==9 || segNo==11 || segNo==5){
        segOffsetX+=segDX;
    }
    if(segNo==2 || segNo==3){
        segOffsetX+=segDX*2;
    }
    if(segNo==7 || segNo==8 || segNo==11 || segNo==9 || segNo==3){
        segOffsetY+=segDY;
    }
    if(segNo==4 || segNo==5){
        segOffsetY+=segDY*2;
    }
    
    if(segNo==0 || segNo==1 || segNo==8 || segNo==9 || segNo==4 || segNo==5){
        ctx.moveTo(segOffsetX+segSp+segW/2,           segOffsetY+segW/2);
        ctx.lineTo(segOffsetX+segSp+segW,             segOffsetY);
        ctx.lineTo(segOffsetX+segSp+horzSegLen,       segOffsetY);
        ctx.lineTo(segOffsetX+segSp+segW/2+horzSegLen,segOffsetY+segW/2);
        ctx.lineTo(segOffsetX+segSp+horzSegLen,       segOffsetY+segW);
        ctx.lineTo(segOffsetX+segSp+segW,             segOffsetY+segW);
    }
    if(segNo==6 || segNo==7 || segNo==10 || segNo==11 || segNo==2 || segNo==3){
        ctx.moveTo(segOffsetX+segW/2,segOffsetY+segSp+segW/2);
        ctx.lineTo(segOffsetX,       segOffsetY+segSp+segW);
        ctx.lineTo(segOffsetX,       segOffsetY+segSp+vertSegLen);
        ctx.lineTo(segOffsetX+segW/2,segOffsetY+segSp+segW/2+vertSegLen);
        ctx.lineTo(segOffsetX+segW,  segOffsetY+segSp+vertSegLen);
        ctx.lineTo(segOffsetX+segW,  segOffsetY+segSp+segW);
    }
    if(segNo==12){
        ctx.moveTo(segOffsetX+segW+segSp*2, segOffsetY+segW+segSp*2);
        ctx.lineTo(segOffsetX+segW+segSp*2, segOffsetY+segW+segW*diagSegDY+segSp*2);
        ctx.lineTo(segOffsetX+segDX-segSp*2,segOffsetY+segDY-segSp*2);
        ctx.lineTo(segOffsetX+segDX-segSp*2,segOffsetY+segDY-segW*diagSegDY-segSp*2);
    }
    if(segNo==13){
        ctx.moveTo(segOffsetX+segDX*2-segSp*2,   segOffsetY+segW+segSp*2);
        ctx.lineTo(segOffsetX+segDX*2-segSp*2,   segOffsetY+segW+segW*diagSegDY+segSp*2);
        ctx.lineTo(segOffsetX+segDX+segW+segSp*2,segOffsetY+segDY-segSp*2);
        ctx.lineTo(segOffsetX+segDX+segW+segSp*2,segOffsetY+segDY-segW*diagSegDY-segSp*2);
    }
    if(segNo==14){
        ctx.moveTo(segOffsetX+segDX*2-segSp*2,   segOffsetY+segDY*2-segSp*2);
        ctx.lineTo(segOffsetX+segDX*2-segSp*2,   segOffsetY+segDY*2-segW*diagSegDY-segSp*2);
        ctx.lineTo(segOffsetX+segDX+segW+segSp*2,segOffsetY+segDY+segW+segSp*2);
        ctx.lineTo(segOffsetX+segDX+segW+segSp*2,segOffsetY+segDY+segW+segW*diagSegDY+segSp*2);
    }
    if(segNo==15){
        ctx.moveTo(segOffsetX+segW+segSp*2, segOffsetY+segDY*2-segSp*2);
        ctx.lineTo(segOffsetX+segW+segSp*2, segOffsetY+segDY*2-segW*diagSegDY-segSp*2);
        ctx.lineTo(segOffsetX+segDX-segSp*2,segOffsetY+segDY+segW+segSp*2);
        ctx.lineTo(segOffsetX+segDX-segSp*2,segOffsetY+segDY+segW+segW*diagSegDY+segSp*2);
    }
    ctx.fill();
}

inputTxt.oninput();