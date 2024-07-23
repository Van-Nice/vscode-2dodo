import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.showTodo', () => {
      const panel = vscode.window.createWebviewPanel(
        'todo',
        'Todo List',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      const reactAppPath = path.join(context.extensionPath, 'out', 'bundle.js');
      const reactAppUri = panel.webview.asWebviewUri(vscode.Uri.file(reactAppPath));

      panel.webview.html = getWebviewContent(reactAppUri);
    })
  );
}

function getWebviewContent(scriptUri: vscode.Uri) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Todo List</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="${scriptUri}"></script>
    </body>
    </html>`;
}

export function deactivate() {}
