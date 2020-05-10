/**
 * $Id: ethiopic-xtt.js 643 2009-07-09 15:19:14Z wingedfox $
 *
 * Ethiopian Xenotype XXT layout
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev: 643 $
 * @lastchange $Author: wingedfox $ $Date: 2009-07-09 19:19:14 +0400 (Thu, 09 Jul 2009) $
 */
function (chr, buf) {
    var vow
       ,str = ''
       ,len = 0
       ,vowelsXXT = {a:1,i:2,A:3,e:4,u:5,o:6,W:7,Y:8};

    if (chr=='\u0008') { // backspace
        if (buf.length) {
            str = buf.slice(0,-1);
            len = buf.length-1;
        }
    } else {
        chr = VirtualKeyboard.Langs.ET.conv[chr]||chr;
        if (chr==' ') {
            str = '፡';
        } else {
            vow = vowelsXXT[chr] || vowelsXXT[chr.toLowerCase()];
            if(isNumber(vow)){
                 if (buf) {
                     str = VirtualKeyboard.Langs.ET.cons[buf].charAt(vow);
                     if (!str || str==' ') {
                         str = buf;
                         len = buf.length;
                     }
                 } else {
                     str = VirtualKeyboard.Langs.ET.cons['እ'].charAt(vow) || buf+chr;
                 }
             } else {
                 str = buf+chr;
                 len = VirtualKeyboard.Langs.ET.cons[chr]?1:0;
             }
        }
    }
    return [str, len];
}
