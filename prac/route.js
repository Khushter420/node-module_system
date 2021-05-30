    const fs= require('fs');
    const http=require('http');
    const handler=(req,res)=>{
    const url=req.url;
	const method=req.method;
	if(url=='/'){
		res.write('<html>');
		res.write('<head><title>enter value</title><head>');
		res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">submit</button>')
		res.write('<ul> <li>hello</li></ul>');
        res.write('</body>');
    };
		res.write('</html>');
		return res.end();
	}
	if(url ==='/message' && method==='POST'){
		const body=[];
		res.on('data',(chunk)=>{
			console.log(chunk);
			body.push(chunk);
		});
	return	req.on('end',()=>{
			const parsedBody=Buffer.concat(body).toString();
			const message=parsedBody.split('=')[1];
			fs.writeFileSync('message.text',message);
			res.statusCode=302;
			res.setHeader('Location','/');
			return res.end();
	});
    };
    module.export=handler;