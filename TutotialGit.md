# Tutorial Git

_Para tener un buen flujo en **GIT** es necesario seguir los siguientes pasos:_

### Repositorio en GIT

_Paso 1_

 - Crear un Repositorio en **GitHub**

 ![Repositorio](/img/captura8.png)

 > NOTA: Nos dara una URL que utilizaremos mas abajo.

_Paso 2_

  - Entrar a la Terminal desde la carpeta deseada (esto con clic derecho dentro de la carpeta)
  Una vez en la terminal usar el siguiente comando:

  ~~~

  git init

  ~~~

  - Despues usa el comando:

  ~~~

  git add .  Para agregar todo dentro de la carpeta

  ~~~

   - Seguido del comando:

   ~~~

   git commit -m "Comentario"  Esto para cometar lo realizado

   ~~~

   - Y se agregara a git de forma remota con el comando:

   ~~~

   git remote add origin y la url que obtuvimos antes.

   ~~~

   - Por ultimo el comando que subira la carpeta y/o archivos es:

   ~~~
   git push -u origin master

   ~~~

### Como subir un archivo


_Paso 1_

   - Entrar a la terminal desde la carpeta a usar

   ![Carpeta](/img/captura1.png)

    ![Terminal](/img/captura2.png)

_Paso 2_

  - Una vez en la terminal usar el comando:

  ~~~

  git status

  ~~~

  ![Terminal](/img/Captura3.png)

_Paso 3_

- Lo siguiente es agregar los archivos que se crearon o modificaron
  con el comando siguiente:

  ~~~

  git add Nombre del archivo

  ~~~

  ![Terminal](/img/Captura4.png)

_Paso 4_

- Despues se realiza el ***Commit*** que sirve para comentar lo que se creo o modifico

~~~

git commit -m "Comentario"

~~~

![Terminal](/img/captura5.png)

_Paso 5_

Por ultimo el comando a usar es:

~~~

git push origin master

~~~

![Terminal](/img/Captura7.png)

_Solo resta verificarlo en_ ![GitHub](https://github.com)
para verificar que los cambios este ahi.
