const {app, BrowserWindow} = require('electron');
const url = require('url');

function boot() {
  let win = new BrowserWindow({width: 1012, height:600, minWidth: 1012, minHeight: 600, frame: true})
  win.loadURL('file://' + __dirname + '/index.html');﻿
}

app.on('ready', boot)
