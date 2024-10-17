<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Employee List</title>
                <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>
            <body>
                <h1>Employee List</h1>
                <table border="1">
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    <xsl:for-each select="employees/employee">
                        <tr>
                            <td><xsl:value-of select="empid"/></td>
                            <td><xsl:value-of select="empname"/></td>
                            <td><xsl:value-of select="empdesignation"/></td>
                            <td><xsl:value-of select="empcontact"/></td>
                            <td><xsl:value-of select="empmail"/></td>
                            <td>
                                <xsl:value-of select="address/houseno"/>, 
                                <xsl:value-of select="address/street"/>, 
                                <xsl:value-of select="address/locality"/>, 
                                <xsl:value-of select="address/city"/>, 
                                <xsl:value-of select="address/state"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
