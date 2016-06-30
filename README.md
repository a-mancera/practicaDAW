# D-LEASY
<h1>FASE 1</h1>
<b>Nombre de la aplicación web:</b> D-leasy.<br><br>
<b>Descripción de la temática de la web:</b> D-leasy es una web en la que se puede consultar información acerca de eventos que se van a producir. Los eventos son organizados por una persona que busca patrocinador para poder realizar el evento.
En la web vamos a distinguir tres tipos de usuarios:
<ul>
<li>Anónimos: son personas que acceden a la web para consultar los eventos que se van a producir o que se han producido. Usuario que accede a la web sin loguearse.</li>
<li>Organizador: usuario que propone eventos para ser patrocinados. Para ser organizador hay que registrarse en la web y loguearse para poder realizar propuestas. Al crear una propuesta de evento, este usuario podrá consultar las propuestas de eventos y en el caso de ser un evento propuesto por dicho usuario podrá ver el identificador de la propuesta. Este identificador se utilizará para generar el evento definitivo, una vez haya acordado un patrocinio con el patrocinador. </li>
<li>Patrocinador: usuario que puede consultar las propuestas de eventos y contactar con el organizador de la propuesta para negociar el patrocinio. Para ser patrocinador es necesario registrarse en la web y loguearse. Los patrocinadores cuando consultan los detalles de la propuesta les aparecerá la opción de contactar con el organizador y crear evento. Estas opciones no estarán disponibles para los organizadores.</li>
</ul>

<b>Explicación del funcionamiento para crear eventos:</b>
<ul>
<li>El organizador propone un evento.</li>
<li>El patrocinador consulta las propuestas y contacta con el organizador mediante mensajes.</li>
<li>Se produce la negociación de patrocinio. Cuando lleguen a un acuerdo, el organizador debe mandar un mensaje al patrocinador con el código de la propuesta del evento.</li>
<li>Cuando el patrocinador tenga el código de la propuesta, debe acceder al detalle de la propuesta y pinchar en el botón “Crear evento”. Al pinchar aparecerá un formulario en el cual tiene que indicar el código y en el que podrá cargar un cartel para el evento. En el caso de no cargar ningún cartel, se usará uno por defecto.</li>
</ul>

<b>Entidades:</b>
<ul>
<li>Usuario: entidad para gestionar los usuarios que se loguearan en la aplicación. Almacenará los datos de inicio de sesión, así como, información acerca del usuario.
  <ul>
  <li>Nombre de usuario.</li>
  <li>Contraseña.</li>
  <li>Nombre.</li>
  <li>Web.</li>
  <li>Tipos de eventos que patrocina.</li>
  <li>Twitter.  </li>
  <li>Facebook.</li>
  <li>Instagram.</li>
  <li>Youtube.</li>
  <li>Tipo: organizador o patrocinador.</li>
  </ul>
  </li>
<li>Propuesta de evento: entidad utilizada para generar las propuestas de los eventos. Almacenará la información acerca de la propuesta: 
<ul>
  <li>Nombre del proyecto.</li>
  <li>Resumen de la descripción del evento. Es la información que se mostrará cuando se listen las propuestas de manera menos detallada.</li>
  <li>Descripción del evento.</li>
  <li>Dirección.</li>
  <li>Ciudad.</li>
  <li>Organizador.</li>
  <li>Tipo de evento.</li>
  <li>Fecha y hora.</li>
  <li>Estimación del coste del patrocinio.</li>
  </ul>
  </li>
<li>Evento: entidad que almacenará la información de un evento que va a ser producido. Será prácticamente igual que la entidad Propuesta de evento, pero con la información del patrocinador y del cartel del evento.</li>
<ul>
<li>Nombre.</li>
<li>Resumen.</li>
<li>Descripción.</li>
<li>Ciudad.</li>
<li>Tipo.</li>
<li>Fecha y hora. </li>
<li>Patrocinador.</li>
<li>Organizador.</li>
<li>Nombre de la foto del cartel del evento.</li>
</ul>
</li>
<li>Mensaje: entidad utilizada para que los usuarios puedan comunicarse entre ellos. Es la forma en la que los usuarios negocian el patrocinio de los eventos.</li>
<li>Comentarios: entidad para que se puedan realizar comentarios sobre los eventos. Con esta entidad, se podrá realizar una valoración de los eventos por parte de los asistentes a ellos. </li>
</ul>

<h1>FASE 2</h1>
<h4><b>Diagrama de navegación entre páginas.</b></h4>
Ilustración 1. Página inicial<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/1.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/1.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 2. Página Búsqueda de eventos con filtros<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/2.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/2.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 3. Evento detallado<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/3.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/3.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 4.Búsqueda de organizadores.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/4.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/4.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 5. Organizadores detallado<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/5.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/5.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 6. Búsqueda de patrocinadores.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/6.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/6.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 7.Patrocinadores detalles.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/7.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/7.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 8. Mensajes<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/8.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/8.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 9.Mensaje detallado.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/9.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/8.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 10. Propuestas como organizador que no es propietario de la propuesta.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/10.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/10.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 11. Propuestas como organizador propietario.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/11.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/11.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 12. Propuestas como patrocinador.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/12.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/12.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 13. Detalle propuesta<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/13.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/13.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 14. Propuesta detallada pinchando en contactar.<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/14.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/14.png?raw=true" style="max-width:100%;"></a>
<br>Ilustración 15. Propuesta detallada pinchando en crear<br>
<a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/15.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/15.png?raw=true" style="max-width:100%;"></a>
<br>

<h1>FASE 3</h1>
<b>Diagrama de clases de Typescript</b>
<br><a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/16.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/16.png?raw=true" style="max-width:100%;"></a>
<br><a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/17.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/17.png?raw=true" style="max-width:100%;"></a>
<br>
<h1>FASE 4</h1>
<b>Diagrama de clases Java.</b>
<br><a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/18.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/18.png?raw=true" style="max-width:100%;"></a>
<br><b>Configuración del archivo applicattion.propierties:</b>
<br><a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/19.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/19.png?raw=true" style="max-width:100%;"></a>
<br><b>Diagrama Entidad Relación</b>
<br><a href="https://github.com/a-mancera/practicaDAW/blob/master/capturas/20.png?raw=true" target="_blank"><img src="https://github.com/a-mancera/practicaDAW/blob/master/capturas/20.png?raw=true" style="max-width:100%;"></a>
<br>

<video><source src="videoo.mp4" type="video/mp4" /></video>
