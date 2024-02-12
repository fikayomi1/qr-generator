
This is a QR Code generating application.

This QR code generating app is built on Vue. It has 2 main components, one for generating the qr codes and the 
other for generating the history of th QR codes generated. It's a simple application that makes use of Vuex for 
store and state management. It also makes use of VueRouter to switch between two pages.

The QR Code is generated using an api from QRtag.net which lets you generate QR codes without any
kind of backend process. We simply append the URL you want to generate a QR code for to their API URL and it
generates the link for the QR code. We use the code link as the source of the Image.




