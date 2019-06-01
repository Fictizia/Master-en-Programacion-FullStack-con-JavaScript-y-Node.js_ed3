![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 55

### [101 Bash Commands and Tips for Beginners to Experts](https://dev.to/awwsmm/101-bash-commands-and-tips-for-beginners-to-experts-30je)


### Ejercicios

**1 -** Crea un script para saber si el usuario es root o no
```bash
#!/bin/bash
# Make sure only root can run our script
if [ "$(id -u)" != "0" ]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi
```


**2 -** Sacar la lista de procesos funcionando en la maquina
```bash
#!/bin/bash
ps aux --width 30 --sort -rss --no-headers | head  | awk ' {print $11}'
```

```
#resultado esperado
vfs-worker
bash
bash
sudo
/mnt/shared/sbin/tmux
bash
/bin/bash
/mnt/shared/sbin/tmux
ps
/mnt/shared/sbin/tmux
```

**3 -** ¿Cuanto tiempo lleva la máquina funcionando?
```bash
#!/bin/bash
uptime --pretty
```

```
up 5 weeks, 3 days, 9 hours, 14 minutes
```

**4 -** Saca una lista de todas las variables de entorno y guardala en un fichero llamado `env_data.log`
```bash
# Tu solución
```

```
SHELL=/bin/bash
TERM=xterm-256color
LC_ALL=C.UTF-8
USER=root
SUDO_USER=ubuntu
...
```

**5 -** Tiempo de Katas con [HackerRank](https://www.hackerrank.com/domains/shell?filters%5Bsubdomains%5D%5B%5D=bash&filters%5Bsubdomains%5D%5B%5D=grep-sed-awk&filters%5Bdifficulty%5D%5B%5D=easy)