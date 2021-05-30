const http=require('http');
const fs=require('fs');
const express=require('express');
const router=require('./prac/route');

const server=http.createServer(handler);

server.listen(8000);