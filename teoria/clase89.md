![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 89

### Heroku

![Heroku_logo](../assets/clase89/c0471061-3180-4a32-9853-9e6ca3c444b7.png)

- [Lenguajes soportados](https://devcenter.heroku.com/categories/language-support)
- [Soporte](https://help.heroku.com/)
- [Precio](https://www.heroku.com/pricing)
- [Marketplace](https://elements.heroku.com/)
- **[Documentacion](https://devcenter.heroku.com/categories/reference)**
  - [Heroku Architecture](https://devcenter.heroku.com/categories/heroku-architecture)
  - [Command Line](https://devcenter.heroku.com/categories/command-line)
  - [Deployment](https://devcenter.heroku.com/categories/deployment)
  - [Continuous Delivery](https://devcenter.heroku.com/categories/continuous-delivery)
  - [Language Support](https://devcenter.heroku.com/categories/language-support)
  - [Databases & Data Management](https://devcenter.heroku.com/categories/data-management)
  - [Monitoring & Metrics](https://devcenter.heroku.com/categories/monitoring-metrics)
  - [App Performance](https://devcenter.heroku.com/categories/app-performance)
  - [Add-ons](https://devcenter.heroku.com/categories/add-ons)
  - [Collaboration](https://devcenter.heroku.com/categories/collaboration)
  - [Security](https://devcenter.heroku.com/categories/security)
  - [Heroku Enterprise](https://devcenter.heroku.com/categories/heroku-enterprise)
  - [Extending Heroku](https://devcenter.heroku.com/categories/extending-heroku)
  - [Accounts & Billing](https://devcenter.heroku.com/categories/billing)
  - [Troubleshooting & Support](https://devcenter.heroku.com/categories/troubleshooting)

### [Heroku: Uso](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

**Instalación del Toolbelt**
- En Linux
```
  wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```
- Versiones ejecutables para Windows y OSX
- Es necesario tener instalado previamente Ruby en la máquina


**Login en Heroku**
```
  heroku login
```

**Preparando la Aplicación**
- Ejemplo de Heroku 
```
  git clone https://github.com/heroku/node-js-getting-started.git && cd node-js-getting-started
```

**Crear un proyecto**
- Con un nombre al azar
```
  heroku create
```
- Con nombre propio
```
  heroku create miproyecto
```

**Desplegando nuestro proyecto**
- Nota: Previamente tienes que tener el proyecto gestionado con Git.
```
  git push heroku master
```

**Escalando nuestro proyecto**
- Verificando el número de Dynos
```
  heroku ps
```
- Definiendo el número de Dynos
```
  heroku ps:scale web=1
```

**Abriendo nuestro proyecto**
```
  heroku open
```

**Logs del proyecto**
```
heroku logs --tail
```

**Lanzar el proyecto en local**
```
heroku local web
```

### [Google Cloud (GCloud)](https://cloud.google.com/?hl=es)


![Google Cloud Logo](../assets/clase89/5770d459-ef14-49c0-8342-06297e56e840.jpg)


**Recursos**
- [Why Google Cloud](https://cloud.google.com/why-google-cloud/?hl=es)
- [Productos](https://cloud.google.com/products/?hl=es)
- [Precios](https://cloud.google.com/pricing/?hl=es)
- [Clientes](https://cloud.google.com/customers/?hl=es)
- [Empezar](https://cloud.google.com/start/?hl=es)
- [Documentación](https://cloud.google.com/docs/?hl=es)



### [Amazon Web Services (AWS)](https://aws.amazon.com/es/?nc2=h_lg)


![AWS Logo](../assets/clase89/26f08cf4-d360-43ac-8575-9b344170f2b7.png)


**Recursos**
- [Precios](https://aws.amazon.com/es/pricing/?nc2=h_ql_pr)
- [Formación](https://aws.amazon.com/es/training/?nc2=h_ql_le)
- [Documentación](https://docs.aws.amazon.com/index.html?nc2=h_ql_doc)
- [Productos](https://aws.amazon.com/es/products/?nc2=h_m1)


### [Azure](https://azure.microsoft.com/)

![Azure Logo](../assets/clase89/c4a094b2-3382-4d05-97cb-8dda0bdbba41.png)


**Recursos**
- [Productos](https://azure.microsoft.com/es-es/services/)
- [Documentacion](https://docs.microsoft.com/es-es/azure/)
- [Pricing](https://azure.microsoft.com/es-es/pricing/)
- [Formación](https://docs.microsoft.com/es-es/learn/azure/)


### [BlueMix](https://www.ibm.com/cloud/)

![BlueMix Logo](../assets/clase89/7bedea9b-75e6-46d5-93d0-16523d0324c5.png)


**Recursos**
- [Productos](https://www.ibm.com/cloud/products/)
- [Pricing](https://www.ibm.com/cloud/pricing)
- [Pricing Calculator](https://console.bluemix.net/pricing/?cm_mc_uid=34962018113315235231205&cm_mc_sid_50200000=76818951523523120581&cm_mc_sid_52640000=23655911523523120587)


### [Digital Ocean](https://www.digitalocean.com/)

![Digital Ocean Logo](../assets/clase89/91a3f40d-2b4f-4ea1-89df-b3088f0cc799.png)

**Recursos**
- [Pricing](https://www.digitalocean.com/pricing/)
- [Documentation](https://developers.digitalocean.com/documentation/)
- [One-click install and deploy Node.js](https://www.digitalocean.com/products/one-click-apps/node-js/)


### [OVH](https://www.ovh.es/)

![OVH Logo](../assets/clase89/c55f379a-f903-475a-9114-c34e6bf37d5f.png)

**Recursos**
- [Lab](https://labs.ovh.com/)
- [Bounty Factory](https://bountyfactory.io/ovh/ovh)


### Servicios Cloud Típicos
- [Dialogflow](https://dialogflow.com/)
- [Twilio](https://www.twilio.com/)
- [Stripe](https://stripe.com/es)
- [Sendgrid](https://sendgrid.com/)
- [Sentry](https://sentry.io/welcome/)
- [Intercom](https://www.intercom.com/)