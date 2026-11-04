SELTRONA - LANDING PAGE (PREPARACION PARA PUBLICACION)

ARCHIVOS
- index.html: estructura, SEO, metadatos para compartir y datos estructurados.
- styles.css: estilos y diseño responsive.
- script.js: menú móvil, contacto, carrusel y ampliación de capturas.
- contact-config.js: correo, WhatsApp y Facebook.
- robots.txt: instrucciones básicas para buscadores.
- sitemap.xml: mapa inicial del sitio.
- assets/: logotipo, capturas optimizadas y vista previa para compartir.

PRUEBA LOCAL
1. Descomprime la carpeta completa.
2. Conserva index.html, CSS, JS, robots.txt, sitemap.xml y assets en la misma estructura.
3. Abre index.html en Chrome.
4. Comprueba menú, carrusel, ampliación de imágenes y enlaces de contacto.

SEO / COMPARTIR
- Título y descripción orientados a SELTRONA y sus servicios.
- URL canónica prevista: https://seltrona.com/
- Metadatos Open Graph y Twitter Card.
- Imagen de vista previa: assets/seltrona-social-preview.jpg
- Datos estructurados Organization.
- robots.txt y sitemap.xml.

CONTACTO
contact-config.js tiene soporte@seltrona.com y Facebook configurados. WhatsApp permanece vacío intencionalmente; antes de publicarlo, añade el número comercial internacional solo con dígitos (código de país incluido), si SELTRONA ya dispone de uno destinado a clientes.

PUBLICACION RECOMENDADA
La landing es HTML/CSS/JS estático. Se recomienda crear un PROYECTO NUEVO e independiente en Vercel, importando un repositorio separado o desplegando esta carpeta como proyecto estático (Framework Preset: Other; sin comando de build; directorio de salida: raíz). No reutilizar ni modificar el proyecto Vercel del SaaS citas.seltrona.com.

DOMINIO Y DNS - PRECAUCION
El dominio previsto es seltrona.com. Antes de asignarlo al nuevo proyecto, revisar en Vercel y en Cloudflare los registros actuales. No reemplazar nameservers ni borrar/modificar registros MX, TXT, SPF, DKIM, DMARC, api.citas, citas ni otros subdominios. Los registros A/CNAME definitivos deben copiarse de la pantalla Settings > Domains del nuevo proyecto Vercel; no asumir valores genéricos. Primero desplegar y probar con la URL .vercel.app. Solo después asociar seltrona.com y www.seltrona.com, conservando intactos los registros de correo y SaaS.

LISTA ANTES DE PUBLICAR
[ ] Confirmar número comercial de WhatsApp o mantener el botón oculto.
[ ] Probar correo y Facebook.
[ ] Crear proyecto Vercel independiente y probar su URL .vercel.app.
[ ] Añadir seltrona.com y www.seltrona.com al proyecto nuevo.
[ ] Revisar los registros DNS existentes en Cloudflare antes de tocar nada.
[ ] Aplicar únicamente los registros exactos solicitados por Vercel, sin tocar correo ni subdominios del SaaS.
[ ] Confirmar HTTPS, redirección entre www y raíz y carga de imágenes.
[ ] Probar el sitio desde móvil y computadora después de publicar.
