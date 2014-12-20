function buildboard()
{
//create the table 1 row at a time. 
document.write("<table border = '1' align = 'center' id = 'toe'>");
	for(var k = 0; k < 3; k++)
	{
		document.write("<tr>");
			document.write("<td>");
				document.write("<img width = '70' height = '50' border = '0' alt='javascriptbtn'>");
			document.write("</td>");
			
			document.write("<td>");
				document.write("<img width = '70' height = '50' border = '0' alt='javascriptbtn'>");
			document.write("</td>");
			
			document.write("<td>");
				document.write("<img width = '70' height = '50' border = '0' alt='javascriptbtn'>");
			document.write("</td>");
		document.write("</tr>");
		
	}
document.write("</table>");
}