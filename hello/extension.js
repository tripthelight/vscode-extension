const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "hello" is now active!');

	const disposable = vscode.commands.registerCommand('hello.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from hello!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
